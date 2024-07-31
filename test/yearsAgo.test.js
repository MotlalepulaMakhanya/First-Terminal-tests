import assert from "assert";
import yearsAgo from "../yearsAgo.js";
describe('yearsAgo Function test', function () {
    it('calculate how many years ago the given year was', function () {
        const result = yearsAgo(2000);
        assert.equal(result, 24);
    });

    it('handle the current year', function () {
        const currentYear = new Date().getFullYear();
        const result = yearsAgo(currentYear);
        assert.equal(result, 0);
    });

    it('handle a future year', function () {
        const futureYear = new Date().getFullYear() + 10;
        const result = yearsAgo(futureYear);
        assert.equal(result, -10);
    });
});