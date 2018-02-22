import model from '../../model/model';
import buttonModule = require("ui/button");
const builder = require('ui/builder');

class Result {
    private habitContainer;

    constructor(page) {
        this.habitContainer = page.getViewById('habitContainer');
        this.showMyHabitsResult();
    }

    showMyHabitsResult() {
        model.userInfo.myHabits.forEach(habit => {
            this.addItem(habit);
        });
    }

    addItem(habit){
        const result = builder.load({
            path: '/component/create/habit',
            name: 'habit'
        });

        habit.getViewById('habitName').text = habitDbData.title;
        this.habitContainer.addChild(habit);
    }


}

exports.navigated = function (args) {
    new Result(args.object);
};