import {Observable} from 'data/observable';
const firebase = require("nativescript-plugin-firebase");
import frameModule = require("ui/frame");
import model from './model/model';
import buttonModule = require("ui/button");

export class HelloWorldModel extends Observable {

    private btn1;
    private btn2;
    private btn3;
    private btn4;
    private topmost = frameModule.topmost();

    constructor(page) {
        super();
        this.checkLogin();
        this.btn1 = page.getViewById('btn1');
        this.btn2 = page.getViewById('btn2');
        this.btn3 = page.getViewById('btn3');
        this.btn4 = page.getViewById('btn4');
        this.eventSetting();
    }

    private eventSetting() {
        this.btn1.on(buttonModule.Button.tapEvent, () => {
            this.navigate("component/create/create");
        });

        this.btn2.on(buttonModule.Button.tapEvent, () => {
            this.navigate("component/dailyCheck/dailyCheck");
        });

        this.btn3.on(buttonModule.Button.tapEvent, () => {
            this.navigate("component/result/result");
        });

        this.btn4.on(buttonModule.Button.tapEvent, () => {
            this.navigate("component/profile/profile");
        });
    }

    private navigate(url) {
        this.topmost.navigate(url);
    }

    private checkLogin() {
        firebase.init({
            onAuthStateChanged: async function (data) { // optional but useful to immediately re-logon the user when he re-visits your app
                console.log(data.loggedIn ? "Logged in to firebase" : "Logged out from firebase");

                if (data.loggedIn) {
                    model.userInfo.uid = data.user.uid;
                    const myHabits = await model.userInfo.getMyHabits();
                    /*if (myHabits) {
                        topmost.navigate("component/dailyCheck/dailyCheck");
                    } else {
                        topmost.navigate("component/create/create");
                    }*/
                } else {
                    this.topmost.navigate("component/login/login");
                }
            }
        }).then(
            instance => {
                console.log('instance', instance);
                console.log("firebase.init done");
            },
            error => {
                console.log(`firebase.init error: ${error}`);
            }
        );
    };
}