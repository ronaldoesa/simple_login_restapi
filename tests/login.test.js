let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../server');
let should = chai.should();
chai.use(chaiHttp);


describe('login TEACHER role', function(){
    it('It should respond "Teachers Dashboard"', (done) => {
    let user = { userId : 1 }
    chai.request(server)
        .get('/teachers')
        .send(user)
        .end((err, res) => {
                res.should.have.status(200);
                res.text.should.equal('Teachers Dashboard')
            done();
        });
    });
});

describe('login TEACHER role but with PARENT ROLE', function(){
    it('It should respond "Not allowed"', (done) => {
    let user = { userId : 2 }
    chai.request(server)
        .get('/teachers')
        .send(user)
        .end((err, res) => {
                res.should.have.status(401);
                res.text.should.equal('Not allowed')
            done();
        });
    });
});

describe('login TEACHER role but with STUDENT ROLE', function(){
    it('It should respond "Not allowed"', (done) => {
    let user = { userId : 3 }
    chai.request(server)
        .get('/teachers')
        .send(user)
        .end((err, res) => {
                res.should.have.status(401);
                res.text.should.equal('Not allowed')
            done();
        });
    });
});

describe('login PARENT role', function(){
    it('It should respond "Parents Dashboard"', (done) => {
    let user = { userId : 2 }
    chai.request(server)
        .get('/parents')
        .send(user)
        .end((err, res) => {
                res.should.have.status(200);
                res.text.should.equal('Parents Dashboard')
            done();
        });
    });
});

describe('login PARENT role using with TEACHERS ROLE', function(){
    it('It should respond "Not allowed"', (done) => {
    let user = { userId : 1 }
    chai.request(server)
        .get('/parents')
        .send(user)
        .end((err, res) => {
                res.should.have.status(401);
                res.text.should.equal('Not allowed')
            done();
        });
    });
});

describe('login PARENT role using with STUDENT ROLE', function(){
    it('It should respond "Not allowed"', (done) => {
    let user = { userId : 3 }
    chai.request(server)
        .get('/parents')
        .send(user)
        .end((err, res) => {
                res.should.have.status(401);
                res.text.should.equal('Not allowed')
            done();
        });
    });
});

describe('login to Bulletin Board(main page) with TEACHER ROLE', function(){
    it('It should respond "Bulletin Board"', (done) => {
    let user = { userId : 1 }
    chai.request(server)
        .get('/main')
        .send(user)
        .end((err, res) => {
                res.should.have.status(200);
                res.text.should.equal('Bulletin Board')
            done();
        });
    });
});

describe('login to Bulletin Board(main page) with PARENT ROLE', function(){
    it('It should respond "Bulletin Board"', (done) => {
    let user = { userId : 2 }
    chai.request(server)
        .get('/main')
        .send(user)
        .end((err, res) => {
                res.should.have.status(200);
                res.text.should.equal('Bulletin Board')
            done();
        });
    });
});

describe('login to Bulletin Board(main page) with STUDENT ROLE', function(){
    it('It should respond "Bulletin Board"', (done) => {
    let user = { userId : 3 }
    chai.request(server)
        .get('/main')
        .send(user)
        .end((err, res) => {
                res.should.have.status(200);
                res.text.should.equal('Bulletin Board')
            done();
        });
    });
});

describe('Access main page without login', function(){
    it('It should respond "You need to sign in"', (done) => {
    let user = {}
    chai.request(server)
        .get('/main')
        .send(user)
        .end((err, res) => {
                res.should.have.status(403);
                res.text.should.equal('You need to sign in')
            done();
        });
    });
});

describe('Access parent page without login', function(){
    it('It should respond "You need to sign in"', (done) => {
    let user = {}
    chai.request(server)
        .get('/parents')
        .send(user)
        .end((err, res) => {
                res.should.have.status(403);
                res.text.should.equal('You need to sign in')
            done();
        });
    });
});

describe('Access teacher page without login', function(){
    it('It should respond "You need to sign in"', (done) => {
    let user = {}
    chai.request(server)
        .get('/teachers')
        .send(user)
        .end((err, res) => {
                res.should.have.status(403);
                res.text.should.equal('You need to sign in')
            done();
        });
    });
});