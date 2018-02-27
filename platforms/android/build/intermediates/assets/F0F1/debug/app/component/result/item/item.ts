class ResultItem {
    constructor(page){
    }
}

exports.onLoad = function (args) {
    console.log('ResultItem');
    return new ResultItem(args.object);
};
