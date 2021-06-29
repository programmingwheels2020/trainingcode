let chai = require("chai");
let chaiHttp = require("chai-http");
let server = require("../index");
let should = chai.should();
chai.use(chaiHttp);

describe("Books", () => {

    before((done) => {
        console.log("this will be executed once");
        done();
    })
    beforeEach((done) => {
        console.log("This will be executed in all test")
        done();
    })

    describe("/GET Books", () => {
        it("It should GET all the books", (done) => {
            chai.request(server)
                .get('/books')
                .end((err, res) => {
                    console.log(res.body);
                    res.should.have.status(200);
                    res.body.data.should.be.a('array');
                    res.body.data.length.should.not.be.eql(0)
                    done();
                })
        })
    })

    describe("/POST Books", () => {
        it("It should Create Books", (done) => {
            let book = {
                name: "This is Test Book2",
                author: "Test Author",
                language: "Test language"
            }
            chai.request(server)
                .post('/books')
                .send(book)
                .end((err, res) => {
                    console.log(res.body);
                    res.should.have.status(200);
                    res.body.data.should.be.a('object');
                    res.body.data.should.have.property('_id');
                    res.body.data.should.have.property('name').eql(book.name);
                    done();
                })
        })
    })


})