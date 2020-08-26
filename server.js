const express = require('express')
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express()
const { ROLE, users } = require('./data')
const { authUser, authRole } = require('./basicAuth')
const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.json())
app.use(setUser)

//Swagger Documentation
//Swagger infoObject
const swaggerOptions = {
  swaggerDefinition: {
    info: {
      version: "1.0.0",
      title: "Login API",
      description: "Login API Documentation for simple_login_rest application",
      contact: {
        name: "Ronaldo Esa Anwar",
        email: "ronaldoesaanwar@gmail.com"
      },
      servers: ["http://localhost:3000"]
    }
  },
  // ['.routes/*.js']
  apis: ["server.js"]
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

//Basic login endpoint
/**
 * @swagger
 * /main:
 *  get:
 *    description: Login to main page, where all user can login.
 *    parameters: [
          {
            name: 'userId',
            in: 'body',
            required: true,
            description: 'id of the user. Provide req.body like {userId: 1} for example'
          }
        ]
 *    responses:
 *      '200':
 *        description: successful response equals "Bulletin Board"
 *      '403':
 *        description: Failed response equals "You need to sign in"
 */
app.get('/main', authUser, (req, res) => {
  res.send('Bulletin Board')
})
/**
 * @swagger
 * /parents:
 *  get:
 *    description: Login to Parents page, where all only user with PARENT role can login.
 *    parameters: [
          {
            name: 'userId',
            in: 'body',
            required: true,
            description: 'id of the user. Provide req.body like {userId: 2} for example'
          }
        ]
 *    responses:
 *      '200':
 *        description: successful response equals "Parents Dashboard"
 *      '403':
 *        description: Failed response equals "You need to sign in"
 *      '401':
 *        description: Failed response equals "Not allowed"
 */
app.get('/parents', authUser, authRole(ROLE.PARENT), (req, res) => {
  res.send('Parents Dashboard')
})
/**
 * @swagger
 * /teacher:
 *  get:
 *    description: Login to Teacher page, where all only user with TEACHER role can login.
 *    parameters: [
          {
            name: 'userId',
            in: 'body',
            required: true,
            description: 'id of the user. Provide req.body like {userId: 3} for example'
          }
        ]
 *    responses:
 *      '200':
 *        description: successful response equals "Teachers Dashboard"
 *      '403':
 *        description: Failed response equals "You need to sign in"
 *      '401':
 *        description: Failed response equals "Not allowed"
 */
app.get('/teachers', authUser, authRole(ROLE.TEACHER), (req, res) => {
  res.send('Teachers Dashboard')
})

function setUser(req, res, next) {
  const userId = req.body.userId
  if (userId) {
    req.user = users.find(user => user.id === userId)
  }
  next()
}

app.listen(3000)
module.exports = app;

