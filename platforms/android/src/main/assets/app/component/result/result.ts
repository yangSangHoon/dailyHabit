import model from '../../model/model';
import buttonModule = require("ui/button");
const builder = require('ui/builder');

class Result {

    constructor(page) {

    }


}

exports.navigated = function (args) {
    new Result(args.object);
};