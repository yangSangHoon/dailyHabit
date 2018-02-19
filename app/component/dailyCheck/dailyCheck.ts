import {userInfo} from '../../model/user';
import buttonModule = require("ui/button");
import { ViewBase } from 'tns-core-modules/ui/page/page';
const firebase = require("nativescript-plugin-firebase");
const builder = require('ui/builder');

class DailyCheck {

    private btnSubmit;
    private habitContainer;
    private btnTomorrow;
    private btnYesterday;
    private date;
    private habits = [];
    private todayDate;

    constructor(page){
        this.btnSubmit = page.getViewById('btnSubmit');
        this.habitContainer = page.getViewById('habitContainer');
        this.btnTomorrow = page.getViewById('btnTomorrow');
        this.btnYesterday = page.getViewById('btnYesterday');
        this.date = page.getViewById('date');
        
        this.defaultSetting();
        this.eventSetting();
    }

    private defaultSetting() {
        this.todayDate = new Date();
        this.setDate(this.todayDate);
    }

    private setDate(date){
        this.date.text = `${date.getFullYear()}.${date.getMonth()+1}.${date.getDate()}`;
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

        const onChildEvent = (result) => {
            console.log("Event type: " + result.type);
            console.log("Key: " + result.key);
            console.log("Value: " + JSON.stringify(result.value));
            const users = result.value;
            //const myHabits = users.find(user => user.id == userInfo.uid);
            this.makeMyHabits(users.habits);
        };
        
        // listen to changes in the /users path
        firebase.addChildEventListener(onChildEvent, "/users").then(
            listenerWrapper => {
                const path = listenerWrapper.path;
                const listeners = listenerWrapper.listeners; // an Array of listeners added
                // you can store the wrapper somewhere to later call 'removeEventListeners'
            }
        );
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
        
        firebase.setValue( 
            '/dailyHabit',
            [
                {
                    id: userInfo.uid,
                    date: this.date.text,
                    habits: habits
                }
            ]
        );
    }

    public logout() {
        firebase.logout();
    }


}

exports.navigated = function (args) {
    new DailyCheck(args.object);
};