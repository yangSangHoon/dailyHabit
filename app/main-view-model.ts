import {Observable} from 'data/observable';
const firebase = require("nativescript-plugin-firebase");
import frameModule = require("ui/frame");
import model from './model/model';

export class HelloWorldModel extends Observable {
    constructor() {
        super();
        this.checkLogin();
    }

    private checkLogin() {
        firebase.init({
            onAuthStateChanged: async function (data) { // optional but useful to immediately re-logon the user when he re-visits your app
                console.log(data.loggedIn ? "Logged in to firebase" : "Logged out from firebase");
                const topmost = frameModule.topmost();
                if (data.loggedIn) {
                    model.userInfo.uid = data.user.uid;
                    const myHabits = await model.userInfo.getMyHabits();
                    if (myHabits) {
                        topmost.navigate("component/dailyCheck/dailyCheck");
                    } else {
                        topmost.navigate("component/create/create");
                    }
                } else {
                    topmost.navigate("component/login/login");
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