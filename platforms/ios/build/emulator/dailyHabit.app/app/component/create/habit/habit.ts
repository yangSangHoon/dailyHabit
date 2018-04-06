class Habit {

    private habitName;
    private habitCount;

    constructor(page){
        console.log('constructor')
        this.habitName = page.getViewById('habitName');
        this.habitCount = page.getViewById('habitCount');
    }
    
    public getHabit(){
        return {
            title: this.habitName.text,
            value: this.habitCount.text
        }
    }
}

exports.onLoad = function (args) {
    return new Habit(args.object);
};

exports.aaa =function(){
    return {};
}