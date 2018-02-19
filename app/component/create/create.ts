import {userInfo} from '../../model/user';
import buttonModule = require("ui/button");
import { ViewBase } from 'tns-core-modules/ui/page/page';
const firebase = require("nativescript-plugin-firebase");
const builder = require('ui/builder');

class Create {

    private btnSubmit;
    private btnLogout;
    private habitContainer;
    private btnAdd;
    private habits = [];

    constructor(page){
        this.btnSubmit = page.getViewById('btnSubmit');
        this.btnAdd = page.getViewById('btnAdd');
        this.habitContainer = page.getViewById('habitContainer');
        this.btnLogout = page.getViewById('btnLogout');
        
        this.eventSetting();
    }

    private addHabit(habitDbData = null) {
        const habit = builder.load({
            path: '/component/create/habit',
            name: 'habit'
        });

        habit.getViewById('habitName').text = habitDbData.title;
        habit.getViewById('habitCount').text = habitDbData.value;
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
            '/users',
            [
                {
                    id: userInfo.uid,
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
    new Create(args.object);
};