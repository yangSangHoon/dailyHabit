import model from '../../model/model';
import buttonModule = require("ui/button");
const firebase = require("nativescript-plugin-firebase");
const builder = require('ui/builder');

class Create {

    private btnSubmit;
    private btnLogout;
    private habitContainer;
    private btnAdd;

    constructor(page) {
        this.btnSubmit = page.getViewById('btnSubmit');
        this.btnAdd = page.getViewById('btnAdd');
        this.habitContainer = page.getViewById('habitContainer');
        this.btnLogout = page.getViewById('btnLogout');

        this.makeMyHabits(model.userInfo.myHabits);
        this.eventSetting();
    }

    private addHabit(habitDbData = null) {
        const habit = builder.load({
            path: '/component/create/habit',
            name: 'habit'
        });

        if (habitDbData) {
            habit.getViewById('habitName').text = habitDbData.title;
            habit.getViewById('habitCount').text = habitDbData.value;
        }

        this.habitContainer.addChild(habit);
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

    private makeMyHabits(myHabits) {
        if (!myHabits || myHabits.length == 0) {
            this.addHabit();
        } else {
            myHabits.forEach(habit => {
                this.addHabit(habit);
            });
        }
    }

    public goSubmit() {

        let habits: Array<Object> = [];
        this.habitContainer.eachChildView(child => {
            habits.push({
                title: child.getViewById('habitName').text,
                value: Number(child.getViewById('habitCount').text)
            });
        });

        model.userInfo.createHabits({habits});
    }

    public logout() {
        firebase.logout();
    }


}

let create = null;

exports.navigated = function (args) {
    if(!create){
        create = new Create(args.object);
    }
};