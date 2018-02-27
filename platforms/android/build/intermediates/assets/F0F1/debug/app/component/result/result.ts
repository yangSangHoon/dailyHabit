import model from '../../model/model';
import buttonModule = require("ui/button");
const builder = require('ui/builder');

class Result {
    private habitContainer;
    private title;

    constructor(page) {
        this.habitContainer = page.getViewById('habitContainer');
        this.title = page.getViewById('title');
        this.title.text = `${model.userInfo.profile.nickName}의 결과보기`;
        this.showMyHabitsResult();
    }

    async showMyHabitsResult() {
        const dailyHabits = await model.userInfo.getMyDailyHabits();
        console.log('dailyHabits', JSON.stringify(dailyHabits));
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
    new Result(args.object);
};