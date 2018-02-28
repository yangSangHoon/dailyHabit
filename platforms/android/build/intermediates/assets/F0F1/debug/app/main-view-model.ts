import {Observable} from 'data/observable';
const firebase = require("nativescript-plugin-firebase");
import frameModule = require("ui/frame");
import model from './model/model';
import buttonModule = require("ui/button");
import {layout} from "utils/utils";
import {AbsoluteLayout} from 'ui/layouts/absolute-layout';

export class HelloWorldModel extends Observable {

    private btn1;
    private btn2;
    private btn3;
    private btn4;
    private btn5;
    private stage;
    private topmost = frameModule.topmost();

    private stageWidth: number;
    private stageHeight: number;

    constructor(page) {
        super();
        this.checkLogin();
        this.btn1 = page.getViewById('btn1');
        this.btn2 = page.getViewById('btn2');
        this.btn3 = page.getViewById('btn3');
        this.btn4 = page.getViewById('btn4');
        this.btn5 = page.getViewById('btn5');
        this.stage = page.getViewById('stage');
        this.stageWidth = this.getWidth(this.stage);
        this.stageHeight = this.getHeight(this.stage);
        this.eventSetting();
        this.layoutSetting();
    }

    layoutSetting() {
        console.log('this.stageWidth', this.stageWidth);
        AbsoluteLayout.setLeft(this.btn2, this.stageWidth/2);
        AbsoluteLayout.setLeft(this.btn4, this.stageWidth/2);
        AbsoluteLayout.setTop(this.btn1, this.stageHeight/9);
        AbsoluteLayout.setTop(this.btn2, this.stageHeight/9);
        AbsoluteLayout.setTop(this.btn3, this.stageHeight/3);
        AbsoluteLayout.setTop(this.btn4, this.stageHeight/3);
        AbsoluteLayout.setTop(this.btn5, this.stageHeight/1.7);
    }

    private getWidth(view){
        return layout.toDeviceIndependentPixels(view.getMeasuredWidth());
    }

    private getHeight(view){
        return layout.toDeviceIndependentPixels(view.getMeasuredHeight());
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

        this.btn5.on(buttonModule.Button.tapEvent, () => {
            this.navigate("component/groupResult/groupResult");
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