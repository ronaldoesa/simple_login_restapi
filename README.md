### SIMPLE LOGIN REST API

This sample project is created to fulfill the technical test from Klik Digital Sinergi. [DO NOT COPY AND PASTE THIS PROJECT!!!]
For simplicity, I don't use any ORM or Database for this project. This project is so simple but very rigorous with its authentication of each role, and on top of that, it is very scalable.
The mock database is on data.js where I define 6 users with 3 roles(Parent,Teacher,Student) distributed among them. There are 3 endpoint login for each role with these rules : 

* Students cannot login into parents and teachers pages, When the students login, they are redirected to main page.
* Parents cannot login into teachers pages, but they can access main page and their own page
* Teachers cannot login into parents pages, but they can access main page and their own page

### Tech Stack

uses a number of open source libraries:

* [node.js]      - evented I/O for the backend
* [express.js]   - An open source framework for node.js
* [chai]         - great library for TDD and BDD
* [swagger]      - for generated api documentation

### Installation
This project requires [Node.js](https://nodejs.org/) v4+ to run.

```sh
$ cd simple_login_restapi
$ npm install
```
### TestCase and Running the server

To run the test cases and to run the server, simply use:

```shell
$ cd simple_login_restapi
$ npm test tests/run.testcases.js
$ node server.js
```

Notes:
* http://localhost:3000/api-docs is the API Documentation
* The file test.rest can be used to instantly create request to the api without using postman by installing REST Client plugin on Visual Studio Code