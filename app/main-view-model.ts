import {Observable} from 'data/observable';
const firebase = require("nativescript-plugin-firebase");
import frameModule = require("ui/frame");
import {userInfo} from './model/user';

export class HelloWorldModel extends Observable {
    constructor() {
        super();
        this.checkLogin();
    }

    private checkLogin(){
        firebase.init({
            onAuthStateChanged: function(data) { // optional but useful to immediately re-logon the user when he re-visits your app
                console.log(data.loggedIn ? "Logged in to firebase" : "Logged out from firebase");
                userInfo.uid = data.user.uid;
                const topmost = frameModule.topmost();
                if(data.loggedIn){
                  topmost.navigate("component/dailyCheck/dailyCheck");
                }else{
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