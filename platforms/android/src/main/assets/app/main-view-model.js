"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var observable_1 = require("data/observable");
var firebase = require("nativescript-plugin-firebase");
var frameModule = require("ui/frame");
var model_1 = require("./model/model");
var HelloWorldModel = (function (_super) {
    __extends(HelloWorldModel, _super);
    function HelloWorldModel() {
        var _this = _super.call(this) || this;
        _this.checkLogin();
        return _this;
    }
    HelloWorldModel.prototype.checkLogin = function () {
        firebase.init({
            onAuthStateChanged: function (data) {
                return __awaiter(this, void 0, void 0, function () {
                    var topmost, myHabits;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                console.log(data.loggedIn ? "Logged in to firebase" : "Logged out from firebase");
                                topmost = frameModule.topmost();
                                if (!data.loggedIn) return [3 /*break*/, 2];
                                model_1.default.userInfo.uid = data.user.uid;
                                return [4 /*yield*/, model_1.default.userInfo.getMyHabits()];
                            case 1:
                                myHabits = _a.sent();
                                if (myHabits) {
                                    topmost.navigate("component/dailyCheck/dailyCheck");
                                }
                                else {
                                    topmost.navigate("component/create/create");
                                }
                                return [3 /*break*/, 3];
                            case 2:
                                topmost.navigate("component/login/login");
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi12aWV3LW1vZGVsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibWFpbi12aWV3LW1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsOENBQTJDO0FBQzNDLElBQU0sUUFBUSxHQUFHLE9BQU8sQ0FBQyw4QkFBOEIsQ0FBQyxDQUFDO0FBQ3pELHNDQUF5QztBQUN6Qyx1Q0FBa0M7QUFFbEM7SUFBcUMsbUNBQVU7SUFDM0M7UUFBQSxZQUNJLGlCQUFPLFNBRVY7UUFERyxLQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7O0lBQ3RCLENBQUM7SUFFTyxvQ0FBVSxHQUFsQjtRQUNJLFFBQVEsQ0FBQyxJQUFJLENBQUM7WUFDVixrQkFBa0IsRUFBRSxVQUFnQixJQUFJOzs7Ozs7Z0NBQ3BDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsR0FBRyx1QkFBdUIsR0FBRywwQkFBMEIsQ0FBQyxDQUFDO2dDQUM1RSxPQUFPLEdBQUcsV0FBVyxDQUFDLE9BQU8sRUFBRSxDQUFDO3FDQUNsQyxJQUFJLENBQUMsUUFBUSxFQUFiLHdCQUFhO2dDQUNiLGVBQUssQ0FBQyxRQUFRLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDO2dDQUNsQixxQkFBTSxlQUFLLENBQUMsUUFBUSxDQUFDLFdBQVcsRUFBRSxFQUFBOztnQ0FBN0MsUUFBUSxHQUFHLFNBQWtDO2dDQUNuRCxFQUFFLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO29DQUNYLE9BQU8sQ0FBQyxRQUFRLENBQUMsaUNBQWlDLENBQUMsQ0FBQztnQ0FDeEQsQ0FBQztnQ0FBQyxJQUFJLENBQUMsQ0FBQztvQ0FDSixPQUFPLENBQUMsUUFBUSxDQUFDLHlCQUF5QixDQUFDLENBQUM7Z0NBQ2hELENBQUM7OztnQ0FFRCxPQUFPLENBQUMsUUFBUSxDQUFDLHVCQUF1QixDQUFDLENBQUM7Ozs7OzthQUVqRDtTQUNKLENBQUMsQ0FBQyxJQUFJLENBQ0gsVUFBQSxRQUFRO1lBQ0osT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLEVBQUUsUUFBUSxDQUFDLENBQUM7WUFDbEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO1FBQ3RDLENBQUMsRUFDRCxVQUFBLEtBQUs7WUFDRCxPQUFPLENBQUMsR0FBRyxDQUFDLDBCQUF3QixLQUFPLENBQUMsQ0FBQztRQUNqRCxDQUFDLENBQ0osQ0FBQztJQUNOLENBQUM7SUFBQSxDQUFDO0lBQ04sc0JBQUM7QUFBRCxDQUFDLEFBakNELENBQXFDLHVCQUFVLEdBaUM5QztBQWpDWSwwQ0FBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSAnZGF0YS9vYnNlcnZhYmxlJztcbmNvbnN0IGZpcmViYXNlID0gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1wbHVnaW4tZmlyZWJhc2VcIik7XG5pbXBvcnQgZnJhbWVNb2R1bGUgPSByZXF1aXJlKFwidWkvZnJhbWVcIik7XG5pbXBvcnQgbW9kZWwgZnJvbSAnLi9tb2RlbC9tb2RlbCc7XG5cbmV4cG9ydCBjbGFzcyBIZWxsb1dvcmxkTW9kZWwgZXh0ZW5kcyBPYnNlcnZhYmxlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5jaGVja0xvZ2luKCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBjaGVja0xvZ2luKCkge1xuICAgICAgICBmaXJlYmFzZS5pbml0KHtcbiAgICAgICAgICAgIG9uQXV0aFN0YXRlQ2hhbmdlZDogYXN5bmMgZnVuY3Rpb24gKGRhdGEpIHsgLy8gb3B0aW9uYWwgYnV0IHVzZWZ1bCB0byBpbW1lZGlhdGVseSByZS1sb2dvbiB0aGUgdXNlciB3aGVuIGhlIHJlLXZpc2l0cyB5b3VyIGFwcFxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEubG9nZ2VkSW4gPyBcIkxvZ2dlZCBpbiB0byBmaXJlYmFzZVwiIDogXCJMb2dnZWQgb3V0IGZyb20gZmlyZWJhc2VcIik7XG4gICAgICAgICAgICAgICAgY29uc3QgdG9wbW9zdCA9IGZyYW1lTW9kdWxlLnRvcG1vc3QoKTtcbiAgICAgICAgICAgICAgICBpZiAoZGF0YS5sb2dnZWRJbikge1xuICAgICAgICAgICAgICAgICAgICBtb2RlbC51c2VySW5mby51aWQgPSBkYXRhLnVzZXIudWlkO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBteUhhYml0cyA9IGF3YWl0IG1vZGVsLnVzZXJJbmZvLmdldE15SGFiaXRzKCk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChteUhhYml0cykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdG9wbW9zdC5uYXZpZ2F0ZShcImNvbXBvbmVudC9kYWlseUNoZWNrL2RhaWx5Q2hlY2tcIik7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0b3Btb3N0Lm5hdmlnYXRlKFwiY29tcG9uZW50L2NyZWF0ZS9jcmVhdGVcIik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0b3Btb3N0Lm5hdmlnYXRlKFwiY29tcG9uZW50L2xvZ2luL2xvZ2luXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSkudGhlbihcbiAgICAgICAgICAgIGluc3RhbmNlID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnaW5zdGFuY2UnLCBpbnN0YW5jZSk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJmaXJlYmFzZS5pbml0IGRvbmVcIik7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZXJyb3IgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBmaXJlYmFzZS5pbml0IGVycm9yOiAke2Vycm9yfWApO1xuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgIH07XG59Il19