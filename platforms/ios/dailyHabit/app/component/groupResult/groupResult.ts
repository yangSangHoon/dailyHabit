import buttonModule = require("ui/button");
import model from '../../model/model';
const builder = require('ui/builder');

class GroupResult {
    private habitContainer;

    constructor(page) {
        this.habitContainer = page.getViewById('habitContainer');
        this.showGroupHabitsResult();
    }

    async showGroupHabitsResult() {
        const dailyHabits = await model.userInfo.getMyDailyHabits();
        for (let date in dailyHabits) {
            this.addItem(date, dailyHabits[date].habits);
        }
    }

    addItem(date, habits) {
        const resultItem = builder.load({
            path: '/component/result/item',
            name: 'item'
        });
        resultItem.getViewById('date').text = date;
        let habitsTxt = '';
        habits.forEach(habit => {
            habitsTxt += `${habit.title}/${habit.value}\n`
        });
        resultItem.getViewById('habits').text = habitsTxt;
        this.habitContainer.addChild(resultItem);
    }
}


exports.navigated = function (args) {
    new GroupResult(args.object);
};