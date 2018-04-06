/*
In NativeScript, a file with the same name as an XML file is known as
a code-behind file. The code-behind is a great place to place your view
logic, and to set up your page’s data binding.
*/

import { EventData } from 'data/observable';
import { Page } from 'ui/page';
import model from './model/model';
import frameModule = require("ui/frame");

const firebase = require("nativescript-plugin-firebase");


const checkLogin = () => {
    firebase.init({
        onAuthStateChanged: async function (data) { // optional but useful to immediately re-logon the user when he re-visits your app
            console.log(data.loggedIn ? "Logged in to firebase" : "Logged out from firebase");
            const topmost = frameModule.topmost();
            if (data.loggedIn) {
                console.log('data.user.uid', data.user.uid);
                model.userInfo.uid = data.user.uid;
                await model.userInfo.getUserInfo();

                if (model.userInfo.userInfo.profile) {
                    topmost.navigate("component/main/main");
                }else{
                    topmost.navigate("component/profile/profile");
                }
                
                /*if (myHabits) {
                    topmost.navigate("component/dailyCheck/dailyCheck");
                } else {
                    topmost.navigate("component/create/create");
                }*/
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
checkLogin();