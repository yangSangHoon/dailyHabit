"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var observable_1 = require("data/observable");
var firebase = require("nativescript-plugin-firebase");
var frameModule = require("ui/frame");
var model_1 = require("./model/model");
var buttonModule = require("ui/button");
var HelloWorldModel = (function (_super) {
    __extends(HelloWorldModel, _super);
    function HelloWorldModel(page) {
        var _this = _super.call(this) || this;
        _this.topmost = frameModule.topmost();
        _this.checkLogin();
        _this.btn1 = page.getViewById('btn1');
        _this.btn2 = page.getViewById('btn2');
        _this.btn3 = page.getViewById('btn3');
        _this.btn4 = page.getViewById('btn4');
        _this.eventSetting();
        return _this;
    }
    HelloWorldModel.prototype.eventSetting = function () {
        var _this = this;
        this.btn1.on(buttonModule.Button.tapEvent, function () {
            _this.navigate("component/create/create");
        });
        this.btn2.on(buttonModule.Button.tapEvent, function () {
            _this.navigate("component/dailyCheck/dailyCheck");
        });
        this.btn3.on(buttonModule.Button.tapEvent, function () {
            _this.navigate("component/result/result");
        });
        this.btn4.on(buttonModule.Button.tapEvent, function () {
            _this.navigate("component/profile/profile");
        });
    };
    HelloWorldModel.prototype.navigate = function (url) {
        this.topmost.navigate(url);
    };
    HelloWorldModel.prototype.checkLogin = function () {
        firebase.init({
            onAuthStateChanged: function (data) {
                return __awaiter(this, void 0, void 0, function () {
                    var myHabits;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                console.log(data.loggedIn ? "Logged in to firebase" : "Logged out from firebase");
                                if (!data.loggedIn) return [3 /*break*/, 2];
                                model_1.default.userInfo.uid = data.user.uid;
                                return [4 /*yield*/, model_1.default.userInfo.getMyHabits()];
                            case 1:
                                myHabits = _a.sent();
                                return [3 /*break*/, 3];
                            case 2:
                                this.topmost.navigate("component/login/login");
                                _a.label = 3;
                            case 3: return [2 /*return*/];
                        }
                    });
                });
            }
        }).then(function (instance) {
            console.log('instance', instance);
            console.log("firebase.init done");
        }, function (error) {
            console.log("firebase.init error: " + error);
        });
    };
    ;
    return HelloWorldModel;
}(observable_1.Observable));
exports.HelloWorldModel = HelloWorldModel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi12aWV3LW1vZGVsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibWFpbi12aWV3LW1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsOENBQTJDO0FBQzNDLElBQU0sUUFBUSxHQUFHLE9BQU8sQ0FBQyw4QkFBOEIsQ0FBQyxDQUFDO0FBQ3pELHNDQUF5QztBQUN6Qyx1Q0FBa0M7QUFDbEMsd0NBQTJDO0FBRTNDO0lBQXFDLG1DQUFVO0lBUTNDLHlCQUFZLElBQUk7UUFBaEIsWUFDSSxpQkFBTyxTQU9WO1FBVk8sYUFBTyxHQUFHLFdBQVcsQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUlwQyxLQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDbEIsS0FBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3JDLEtBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNyQyxLQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDckMsS0FBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3JDLEtBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQzs7SUFDeEIsQ0FBQztJQUVPLHNDQUFZLEdBQXBCO1FBQUEsaUJBZ0JDO1FBZkcsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUU7WUFDdkMsS0FBSSxDQUFDLFFBQVEsQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO1FBQzdDLENBQUMsQ0FBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUU7WUFDdkMsS0FBSSxDQUFDLFFBQVEsQ0FBQyxpQ0FBaUMsQ0FBQyxDQUFDO1FBQ3JELENBQUMsQ0FBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUU7WUFDdkMsS0FBSSxDQUFDLFFBQVEsQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO1FBQzdDLENBQUMsQ0FBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUU7WUFDdkMsS0FBSSxDQUFDLFFBQVEsQ0FBQywyQkFBMkIsQ0FBQyxDQUFDO1FBQy9DLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVPLGtDQUFRLEdBQWhCLFVBQWlCLEdBQUc7UUFDaEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDL0IsQ0FBQztJQUVPLG9DQUFVLEdBQWxCO1FBQ0ksUUFBUSxDQUFDLElBQUksQ0FBQztZQUNWLGtCQUFrQixFQUFFLFVBQWdCLElBQUk7Ozs7OztnQ0FDcEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxHQUFHLHVCQUF1QixHQUFHLDBCQUEwQixDQUFDLENBQUM7cUNBRTlFLElBQUksQ0FBQyxRQUFRLEVBQWIsd0JBQWE7Z0NBQ2IsZUFBSyxDQUFDLFFBQVEsQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUM7Z0NBQ2xCLHFCQUFNLGVBQUssQ0FBQyxRQUFRLENBQUMsV0FBVyxFQUFFLEVBQUE7O2dDQUE3QyxRQUFRLEdBQUcsU0FBa0M7OztnQ0FPbkQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsdUJBQXVCLENBQUMsQ0FBQzs7Ozs7O2FBRXREO1NBQ0osQ0FBQyxDQUFDLElBQUksQ0FDSCxVQUFBLFFBQVE7WUFDSixPQUFPLENBQUMsR0FBRyxDQUFDLFVBQVUsRUFBRSxRQUFRLENBQUMsQ0FBQztZQUNsQyxPQUFPLENBQUMsR0FBRyxDQUFDLG9CQUFvQixDQUFDLENBQUM7UUFDdEMsQ0FBQyxFQUNELFVBQUEsS0FBSztZQUNELE9BQU8sQ0FBQyxHQUFHLENBQUMsMEJBQXdCLEtBQU8sQ0FBQyxDQUFDO1FBQ2pELENBQUMsQ0FDSixDQUFDO0lBQ04sQ0FBQztJQUFBLENBQUM7SUFDTixzQkFBQztBQUFELENBQUMsQUFuRUQsQ0FBcUMsdUJBQVUsR0FtRTlDO0FBbkVZLDBDQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtPYnNlcnZhYmxlfSBmcm9tICdkYXRhL29ic2VydmFibGUnO1xuY29uc3QgZmlyZWJhc2UgPSByZXF1aXJlKFwibmF0aXZlc2NyaXB0LXBsdWdpbi1maXJlYmFzZVwiKTtcbmltcG9ydCBmcmFtZU1vZHVsZSA9IHJlcXVpcmUoXCJ1aS9mcmFtZVwiKTtcbmltcG9ydCBtb2RlbCBmcm9tICcuL21vZGVsL21vZGVsJztcbmltcG9ydCBidXR0b25Nb2R1bGUgPSByZXF1aXJlKFwidWkvYnV0dG9uXCIpO1xuXG5leHBvcnQgY2xhc3MgSGVsbG9Xb3JsZE1vZGVsIGV4dGVuZHMgT2JzZXJ2YWJsZSB7XG5cbiAgICBwcml2YXRlIGJ0bjE7XG4gICAgcHJpdmF0ZSBidG4yO1xuICAgIHByaXZhdGUgYnRuMztcbiAgICBwcml2YXRlIGJ0bjQ7XG4gICAgcHJpdmF0ZSB0b3Btb3N0ID0gZnJhbWVNb2R1bGUudG9wbW9zdCgpO1xuXG4gICAgY29uc3RydWN0b3IocGFnZSkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLmNoZWNrTG9naW4oKTtcbiAgICAgICAgdGhpcy5idG4xID0gcGFnZS5nZXRWaWV3QnlJZCgnYnRuMScpO1xuICAgICAgICB0aGlzLmJ0bjIgPSBwYWdlLmdldFZpZXdCeUlkKCdidG4yJyk7XG4gICAgICAgIHRoaXMuYnRuMyA9IHBhZ2UuZ2V0Vmlld0J5SWQoJ2J0bjMnKTtcbiAgICAgICAgdGhpcy5idG40ID0gcGFnZS5nZXRWaWV3QnlJZCgnYnRuNCcpO1xuICAgICAgICB0aGlzLmV2ZW50U2V0dGluZygpO1xuICAgIH1cblxuICAgIHByaXZhdGUgZXZlbnRTZXR0aW5nKCkge1xuICAgICAgICB0aGlzLmJ0bjEub24oYnV0dG9uTW9kdWxlLkJ1dHRvbi50YXBFdmVudCwgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5uYXZpZ2F0ZShcImNvbXBvbmVudC9jcmVhdGUvY3JlYXRlXCIpO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLmJ0bjIub24oYnV0dG9uTW9kdWxlLkJ1dHRvbi50YXBFdmVudCwgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5uYXZpZ2F0ZShcImNvbXBvbmVudC9kYWlseUNoZWNrL2RhaWx5Q2hlY2tcIik7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuYnRuMy5vbihidXR0b25Nb2R1bGUuQnV0dG9uLnRhcEV2ZW50LCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLm5hdmlnYXRlKFwiY29tcG9uZW50L3Jlc3VsdC9yZXN1bHRcIik7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuYnRuNC5vbihidXR0b25Nb2R1bGUuQnV0dG9uLnRhcEV2ZW50LCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLm5hdmlnYXRlKFwiY29tcG9uZW50L3Byb2ZpbGUvcHJvZmlsZVwiKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBuYXZpZ2F0ZSh1cmwpIHtcbiAgICAgICAgdGhpcy50b3Btb3N0Lm5hdmlnYXRlKHVybCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBjaGVja0xvZ2luKCkge1xuICAgICAgICBmaXJlYmFzZS5pbml0KHtcbiAgICAgICAgICAgIG9uQXV0aFN0YXRlQ2hhbmdlZDogYXN5bmMgZnVuY3Rpb24gKGRhdGEpIHsgLy8gb3B0aW9uYWwgYnV0IHVzZWZ1bCB0byBpbW1lZGlhdGVseSByZS1sb2dvbiB0aGUgdXNlciB3aGVuIGhlIHJlLXZpc2l0cyB5b3VyIGFwcFxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEubG9nZ2VkSW4gPyBcIkxvZ2dlZCBpbiB0byBmaXJlYmFzZVwiIDogXCJMb2dnZWQgb3V0IGZyb20gZmlyZWJhc2VcIik7XG5cbiAgICAgICAgICAgICAgICBpZiAoZGF0YS5sb2dnZWRJbikge1xuICAgICAgICAgICAgICAgICAgICBtb2RlbC51c2VySW5mby51aWQgPSBkYXRhLnVzZXIudWlkO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBteUhhYml0cyA9IGF3YWl0IG1vZGVsLnVzZXJJbmZvLmdldE15SGFiaXRzKCk7XG4gICAgICAgICAgICAgICAgICAgIC8qaWYgKG15SGFiaXRzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0b3Btb3N0Lm5hdmlnYXRlKFwiY29tcG9uZW50L2RhaWx5Q2hlY2svZGFpbHlDaGVja1wiKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcG1vc3QubmF2aWdhdGUoXCJjb21wb25lbnQvY3JlYXRlL2NyZWF0ZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgfSovXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50b3Btb3N0Lm5hdmlnYXRlKFwiY29tcG9uZW50L2xvZ2luL2xvZ2luXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSkudGhlbihcbiAgICAgICAgICAgIGluc3RhbmNlID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnaW5zdGFuY2UnLCBpbnN0YW5jZSk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJmaXJlYmFzZS5pbml0IGRvbmVcIik7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZXJyb3IgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBmaXJlYmFzZS5pbml0IGVycm9yOiAke2Vycm9yfWApO1xuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgIH07XG59Il19