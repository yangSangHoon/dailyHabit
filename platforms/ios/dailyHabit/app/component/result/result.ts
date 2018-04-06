import model from '../../model/model';
import buttonModule = require("ui/button");
const builder = require('ui/builder');

class Result {
    private habitContainer;
    private title;
    private penaltyMoneyLabel;
    private penaltyMoney = 0;;

    constructor(page) {
        this.habitContainer = page.getViewById('habitContainer');
        this.title = page.getViewById('title');
        this.penaltyMoneyLabel = page.getViewById('penaltyMoney');
        this.title.text = `${model.userInfo.profile.nickName}의 결과보기`;
        this.showMyHabitsResult();
    }

    getPenaltyMoney() {
        return '1,000'
    }

    plusPenaltyMoney() {
        this.penaltyMoney += 1000;
        this.penaltyMoneyLabel.text = `${this.penaltyMoney}원`;
    }

    async showMyHabitsResult() {
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

        resultItem.getViewById('date').text = this.getDate(date);
        const isSuccess = this.getResult(habits);
        resultItem.getViewById('result').text = isSuccess ? '성공' : '실패';
        if(!isSuccess){
            this.plusPenaltyMoney();
        }
        //resultItem.addClass('success');
        let habitsTxt = '';
        habits.forEach(habit => {
            habitsTxt += `${habit.title} / ${habit.value} | `
        });
        resultItem.getViewById('habits').text = habitsTxt;
        this.habitContainer.addChild(resultItem);
    }

    getResult(habitsResult){
        const myHabits = model.userInfo.myHabits;
        let checker = true;
        myHabits.forEach(myHabit => {
            const resultHabit = habitsResult.find(result => result.title === myHabit.title);
            if(resultHabit.value < myHabit.value){
                checker = false;
                return;
            }
        })
        return checker;
    }

    getDate(date) {
        const year = date.substring(0, 4);
        const month = date.substring(4, 6);
        const day = date.substring(6, 8);
        return `${year}/${month}/${day}`
    }
}


exports.navigated = function (args) {
    new Result(args.object);
};