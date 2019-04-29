require("dotenv").config();
const axios = require("axios");

describe("Check API", () => {

    let apiResponse: any;

    beforeEach((done) => {
        const url = process.env.API_DOMAIN;
        axios.get(url).then((response: any) => {
            apiResponse = response;
        }).catch((error: any) => {
            /* tslint:disable */
            console.error(error);
        }).then(() => {
            done();
        });
    });

    it("should check that response status is 200", () => {
        expect(apiResponse.status).toBe(200);
    });
});


