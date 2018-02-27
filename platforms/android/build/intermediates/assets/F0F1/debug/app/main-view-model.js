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
        _this.btn5 = page.getViewById('btn5');
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
        this.btn5.on(buttonModule.Button.tapEvent, function () {
            _this.navigate("component/groupResult/groupResult");
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi12aWV3LW1vZGVsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibWFpbi12aWV3LW1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsOENBQTJDO0FBQzNDLElBQU0sUUFBUSxHQUFHLE9BQU8sQ0FBQyw4QkFBOEIsQ0FBQyxDQUFDO0FBQ3pELHNDQUF5QztBQUN6Qyx1Q0FBa0M7QUFDbEMsd0NBQTJDO0FBRTNDO0lBQXFDLG1DQUFVO0lBUzNDLHlCQUFZLElBQUk7UUFBaEIsWUFDSSxpQkFBTyxTQVFWO1FBWE8sYUFBTyxHQUFHLFdBQVcsQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUlwQyxLQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDbEIsS0FBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3JDLEtBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNyQyxLQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDckMsS0FBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3JDLEtBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNyQyxLQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7O0lBQ3hCLENBQUM7SUFFTyxzQ0FBWSxHQUFwQjtRQUFBLGlCQW9CQztRQW5CRyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRTtZQUN2QyxLQUFJLENBQUMsUUFBUSxDQUFDLHlCQUF5QixDQUFDLENBQUM7UUFDN0MsQ0FBQyxDQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRTtZQUN2QyxLQUFJLENBQUMsUUFBUSxDQUFDLGlDQUFpQyxDQUFDLENBQUM7UUFDckQsQ0FBQyxDQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRTtZQUN2QyxLQUFJLENBQUMsUUFBUSxDQUFDLHlCQUF5QixDQUFDLENBQUM7UUFDN0MsQ0FBQyxDQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRTtZQUN2QyxLQUFJLENBQUMsUUFBUSxDQUFDLDJCQUEyQixDQUFDLENBQUM7UUFDL0MsQ0FBQyxDQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRTtZQUN2QyxLQUFJLENBQUMsUUFBUSxDQUFDLG1DQUFtQyxDQUFDLENBQUM7UUFDdkQsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRU8sa0NBQVEsR0FBaEIsVUFBaUIsR0FBRztRQUNoQixJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUMvQixDQUFDO0lBRU8sb0NBQVUsR0FBbEI7UUFDSSxRQUFRLENBQUMsSUFBSSxDQUFDO1lBQ1Ysa0JBQWtCLEVBQUUsVUFBZ0IsSUFBSTs7Ozs7O2dDQUNwQyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLEdBQUcsdUJBQXVCLEdBQUcsMEJBQTBCLENBQUMsQ0FBQztxQ0FFOUUsSUFBSSxDQUFDLFFBQVEsRUFBYix3QkFBYTtnQ0FDYixlQUFLLENBQUMsUUFBUSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQztnQ0FDbEIscUJBQU0sZUFBSyxDQUFDLFFBQVEsQ0FBQyxXQUFXLEVBQUUsRUFBQTs7Z0NBQTdDLFFBQVEsR0FBRyxTQUFrQzs7O2dDQU9uRCxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDOzs7Ozs7YUFFdEQ7U0FDSixDQUFDLENBQUMsSUFBSSxDQUNILFVBQUEsUUFBUTtZQUNKLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxFQUFFLFFBQVEsQ0FBQyxDQUFDO1lBQ2xDLE9BQU8sQ0FBQyxHQUFHLENBQUMsb0JBQW9CLENBQUMsQ0FBQztRQUN0QyxDQUFDLEVBQ0QsVUFBQSxLQUFLO1lBQ0QsT0FBTyxDQUFDLEdBQUcsQ0FBQywwQkFBd0IsS0FBTyxDQUFDLENBQUM7UUFDakQsQ0FBQyxDQUNKLENBQUM7SUFDTixDQUFDO0lBQUEsQ0FBQztJQUNOLHNCQUFDO0FBQUQsQ0FBQyxBQXpFRCxDQUFxQyx1QkFBVSxHQXlFOUM7QUF6RVksMENBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge09ic2VydmFibGV9IGZyb20gJ2RhdGEvb2JzZXJ2YWJsZSc7XG5jb25zdCBmaXJlYmFzZSA9IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtcGx1Z2luLWZpcmViYXNlXCIpO1xuaW1wb3J0IGZyYW1lTW9kdWxlID0gcmVxdWlyZShcInVpL2ZyYW1lXCIpO1xuaW1wb3J0IG1vZGVsIGZyb20gJy4vbW9kZWwvbW9kZWwnO1xuaW1wb3J0IGJ1dHRvbk1vZHVsZSA9IHJlcXVpcmUoXCJ1aS9idXR0b25cIik7XG5cbmV4cG9ydCBjbGFzcyBIZWxsb1dvcmxkTW9kZWwgZXh0ZW5kcyBPYnNlcnZhYmxlIHtcblxuICAgIHByaXZhdGUgYnRuMTtcbiAgICBwcml2YXRlIGJ0bjI7XG4gICAgcHJpdmF0ZSBidG4zO1xuICAgIHByaXZhdGUgYnRuNDtcbiAgICBwcml2YXRlIGJ0bjU7XG4gICAgcHJpdmF0ZSB0b3Btb3N0ID0gZnJhbWVNb2R1bGUudG9wbW9zdCgpO1xuXG4gICAgY29uc3RydWN0b3IocGFnZSkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLmNoZWNrTG9naW4oKTtcbiAgICAgICAgdGhpcy5idG4xID0gcGFnZS5nZXRWaWV3QnlJZCgnYnRuMScpO1xuICAgICAgICB0aGlzLmJ0bjIgPSBwYWdlLmdldFZpZXdCeUlkKCdidG4yJyk7XG4gICAgICAgIHRoaXMuYnRuMyA9IHBhZ2UuZ2V0Vmlld0J5SWQoJ2J0bjMnKTtcbiAgICAgICAgdGhpcy5idG40ID0gcGFnZS5nZXRWaWV3QnlJZCgnYnRuNCcpO1xuICAgICAgICB0aGlzLmJ0bjUgPSBwYWdlLmdldFZpZXdCeUlkKCdidG41Jyk7XG4gICAgICAgIHRoaXMuZXZlbnRTZXR0aW5nKCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBldmVudFNldHRpbmcoKSB7XG4gICAgICAgIHRoaXMuYnRuMS5vbihidXR0b25Nb2R1bGUuQnV0dG9uLnRhcEV2ZW50LCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLm5hdmlnYXRlKFwiY29tcG9uZW50L2NyZWF0ZS9jcmVhdGVcIik7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuYnRuMi5vbihidXR0b25Nb2R1bGUuQnV0dG9uLnRhcEV2ZW50LCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLm5hdmlnYXRlKFwiY29tcG9uZW50L2RhaWx5Q2hlY2svZGFpbHlDaGVja1wiKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5idG4zLm9uKGJ1dHRvbk1vZHVsZS5CdXR0b24udGFwRXZlbnQsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMubmF2aWdhdGUoXCJjb21wb25lbnQvcmVzdWx0L3Jlc3VsdFwiKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5idG40Lm9uKGJ1dHRvbk1vZHVsZS5CdXR0b24udGFwRXZlbnQsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMubmF2aWdhdGUoXCJjb21wb25lbnQvcHJvZmlsZS9wcm9maWxlXCIpO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLmJ0bjUub24oYnV0dG9uTW9kdWxlLkJ1dHRvbi50YXBFdmVudCwgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5uYXZpZ2F0ZShcImNvbXBvbmVudC9ncm91cFJlc3VsdC9ncm91cFJlc3VsdFwiKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBuYXZpZ2F0ZSh1cmwpIHtcbiAgICAgICAgdGhpcy50b3Btb3N0Lm5hdmlnYXRlKHVybCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBjaGVja0xvZ2luKCkge1xuICAgICAgICBmaXJlYmFzZS5pbml0KHtcbiAgICAgICAgICAgIG9uQXV0aFN0YXRlQ2hhbmdlZDogYXN5bmMgZnVuY3Rpb24gKGRhdGEpIHsgLy8gb3B0aW9uYWwgYnV0IHVzZWZ1bCB0byBpbW1lZGlhdGVseSByZS1sb2dvbiB0aGUgdXNlciB3aGVuIGhlIHJlLXZpc2l0cyB5b3VyIGFwcFxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEubG9nZ2VkSW4gPyBcIkxvZ2dlZCBpbiB0byBmaXJlYmFzZVwiIDogXCJMb2dnZWQgb3V0IGZyb20gZmlyZWJhc2VcIik7XG5cbiAgICAgICAgICAgICAgICBpZiAoZGF0YS5sb2dnZWRJbikge1xuICAgICAgICAgICAgICAgICAgICBtb2RlbC51c2VySW5mby51aWQgPSBkYXRhLnVzZXIudWlkO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBteUhhYml0cyA9IGF3YWl0IG1vZGVsLnVzZXJJbmZvLmdldE15SGFiaXRzKCk7XG4gICAgICAgICAgICAgICAgICAgIC8qaWYgKG15SGFiaXRzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0b3Btb3N0Lm5hdmlnYXRlKFwiY29tcG9uZW50L2RhaWx5Q2hlY2svZGFpbHlDaGVja1wiKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcG1vc3QubmF2aWdhdGUoXCJjb21wb25lbnQvY3JlYXRlL2NyZWF0ZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgfSovXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50b3Btb3N0Lm5hdmlnYXRlKFwiY29tcG9uZW50L2xvZ2luL2xvZ2luXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSkudGhlbihcbiAgICAgICAgICAgIGluc3RhbmNlID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnaW5zdGFuY2UnLCBpbnN0YW5jZSk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJmaXJlYmFzZS5pbml0IGRvbmVcIik7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZXJyb3IgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBmaXJlYmFzZS5pbml0IGVycm9yOiAke2Vycm9yfWApO1xuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgIH07XG59Il19