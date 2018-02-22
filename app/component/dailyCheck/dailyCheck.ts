import model from '../../model/model';
import buttonModule = require("ui/button");
const builder = require('ui/builder');
import {addZeroDigit} from '../../util/util';
import frameModule = require("ui/frame");

class DailyCheck {

    private btnSubmit;
    private habitContainer;
    private btnTomorrow;
    private btnYesterday;
    private date;
    private todayDate;
    private btnResult;

    constructor(page){
        this.btnSubmit = page.getViewById('btnSubmit');
        this.habitContainer = page.getViewById('habitContainer');
        this.btnTomorrow = page.getViewById('btnTomorrow');
        this.btnYesterday = page.getViewById('btnYesterday');
        this.date = page.getViewById('date');
        this.btnResult = page.getViewById('btnResult');

        this.defaultSetting();
        this.eventSetting();
        this.makeMyHabits(model.userInfo.myHabits);
    }

    private defaultSetting() {
        this.todayDate = new Date();
        this.setDate(this.todayDate);
    }

    private setDate(date){
        this.date.text = `${date.getFullYear()}.${addZeroDigit(date.getMonth()+1)}.${date.getDate()}`;
    }

    private addHabit(habitDbData = null) {
        const habit = builder.load({
            path: '/component/create/habit',
            name: 'habit'
        });

        habit.getViewById('habitName').text = habitDbData.title;
        this.habitContainer.addChild(habit);
    }

    private eventSetting() {
        this.btnSubmit.on(buttonModule.Button.tapEvent, () => {
            this.goSubmit();
        });
        this.btnTomorrow.on(buttonModule.Button.tapEvent, () => {
            this.goTommorrow();
        });
        this.btnYesterday.on(buttonModule.Button.tapEvent, () => {
            this.goYesterday();
        });

        this.btnResult.on(buttonModule.Button.tapEvent, () => {
            this.goResult();
        });

    }

    private goTommorrow() {
        this.todayDate.setDate(this.todayDate.getDate() + 1);
        this.setDate(this.todayDate);
    }

    private goYesterday() {
        this.todayDate.setDate(this.todayDate.getDate() - 1);
        this.setDate(this.todayDate);
    }

    private makeMyHabits(myHabits) {
        console.log('myHabitsmyHabits', JSON.stringify(myHabits));
        if(!myHabits || myHabits.length == 0){
            this.addHabit();    
        }else{
            myHabits.forEach(habit => {
                this.addHabit(habit);
            });
        }
    }

    public goSubmit(){
        let habits: Array<Object> = [];
        this.habitContainer.eachChildView(child => {
            habits.push({
                title: child.getViewById('habitName').text,
                value: Number(child.getViewById('habitCount').text)
            });
        });
        const date = this.date.text.split('.').join('');
        model.userInfo.setDailyHabits({date, habits});
    }

    public logout() {
        model.userInfo.logout();
    }

    private goResult() {
        const topmost = frameModule.topmost();
        topmost.navigate("component/result/result");
    }

}

exports.navigated = function (args) {
    new DailyCheck(args.object);
};