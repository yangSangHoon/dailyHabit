import model from '../../model/model';
import buttonModule = require("ui/button");
const firebase = require("nativescript-plugin-firebase");
const builder = require('ui/builder');
import frameModule = require("ui/frame");

class Create {

    private btnSubmit;
    private btnLogout;
    private habitContainer;
    private btnAdd;
    private topmost = frameModule.topmost();
    constructor(page) {
        this.btnSubmit = page.getViewById('btnSubmit');
        this.btnAdd = page.getViewById('btnAdd');
        this.habitContainer = page.getViewById('habitContainer');
        this.btnLogout = page.getViewById('btnLogout');

        this.makeMyHabits();
        this.eventSetting();
    }

    private makeMyHabits() {
        this.habitContainer.removeChildren();
        const myHabits = model.userInfo.myHabits;
        if (!myHabits || myHabits.length == 0) {
            this.addHabit();
        } else {
            myHabits.forEach(habit => {
                this.addHabit(habit);
            });
        }
    }

    private addHabit(habitDbData = null) {
        const habit = builder.load({
            path: '/component/create/habit',
            name: 'habit'
        });

        this.habitContainer.addChild(habit);

        if (habitDbData) {
            habit.getViewById('habitName').text = habitDbData.title;
            habit.getViewById('habitCount').text = habitDbData.value;
        }
    }

    private eventSetting() {
        this.btnSubmit.on(buttonModule.Button.tapEvent, () => {
            this.goSubmit();
        });
        this.btnLogout.on(buttonModule.Button.tapEvent, () => {
            this.logout();
        });
        this.btnAdd.on(buttonModule.Button.tapEvent, () => {
            this.addHabit();
        });
    }

    private async goSubmit() {

        let habits: Array<Object> = [];
        this.habitContainer.eachChildView(child => {
            habits.push({
                title: child.getViewById('habitName').text,
                value: Number(child.getViewById('habitCount').text)
            });
        });

        await model.userInfo.createHabits({habits});
        this.topmost.navigate("component/main/main");
    }

    public logout() {
        firebase.logout();
    }


}

exports.navigated = function (args) {
    new Create(args.object);
};