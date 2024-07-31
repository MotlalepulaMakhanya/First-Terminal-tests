import assert from "assert";
import transportFee from "../transportFee.js";
describe('transportFee Function test', function () {
    it('return R20 for the morning shift', function () {
        assert.equal(transportFee('morning'), 'R20');
    });

    it('return R10 for the afternoon shift', function () {
        assert.equal(transportFee('afternoon'), 'R10');
    });

});