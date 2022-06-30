'use strict';

const app = require('../app.js');
const chai = require('chai');
const expect = chai.expect;
var event, context;

describe('Tests app', function () {
    it('verifies successful response', async () => {
        const result = await app.lambdaHandler(event, context)
        expect(result).to.be.an('object');
        expect(result.statusCode).to.equal(200);

        let response = JSON.parse(result.body);
        expect(response).to.be.an('object');
        expect(response.message).to.be.equal("hello world");
    });
});
