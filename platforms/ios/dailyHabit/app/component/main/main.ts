import {Observable} from 'data/observable';
import frameModule = require("ui/frame");
import model from '../../model/model';
import buttonModule = require("ui/button");
import {layout} from "utils/utils";
import {AbsoluteLayout} from 'ui/layouts/absolute-layout';

export class Main extends Observable {

    private btn1;
    private btn2;
    private btn3;
    private btn4;
    private btn5;
    private topmost = frameModule.topmost();

    private stageWidth: number;
    private stageHeight: number;

    constructor(page) {
        super();
        this.btn1 = page.getViewById('btn1');
        this.btn2 = page.getViewById('btn2');
        this.btn3 = page.getViewById('btn3');
        this.btn4 = page.getViewById('btn4');
        this.btn5 = page.getViewById('btn5');
        this.eventSetting();
    }

    private getWidth(view){
        return layout.toDeviceIndependentPixels(view.getMeasuredWidth());
    }

    private getHeight(view){
        return layout.toDeviceIndependentPixels(view.getMeasuredHeight());
    }

    private removeEvent() {
        this.btn1.off(buttonModule.Button.tapEvent);
        this.btn2.off(buttonModule.Button.tapEvent);
        this.btn3.off(buttonModule.Button.tapEvent);
        this.btn4.off(buttonModule.Button.tapEvent);
        this.btn5.off(buttonModule.Button.tapEvent);
    }

    private eventSetting() {
        this.removeEvent();
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
}

exports.navigated = function (args) {
    console.log('main');
    new Main(args.object);

};