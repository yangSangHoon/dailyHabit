"use strict";
/*
In NativeScript, a file with the same name as an XML file is known as
a code-behind file. The code-behind is a great place to place your view
logic, and to set up your page’s data binding.
*/
Object.defineProperty(exports, "__esModule", { value: true });
var model_1 = require("./model/model");
var frameModule = require("ui/frame");
var firebase = require("nativescript-plugin-firebase");
var checkLogin = function () {
    firebase.init({
        onAuthStateChanged: function (data) {
            return __awaiter(this, void 0, void 0, function () {
                var topmost;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            console.log(data.loggedIn ? "Logged in to firebase" : "Logged out from firebase");
                            topmost = frameModule.topmost();
                            if (!data.loggedIn) return [3 /*break*/, 2];
                            console.log('data.user.uid', data.user.uid);
                            model_1.default.userInfo.uid = data.user.uid;
                            return [4 /*yield*/, model_1.default.userInfo.getUserInfo()];
                        case 1:
                            _a.sent();
                            if (model_1.default.userInfo.userInfo.profile) {
                                topmost.navigate("component/main/main");
                            }
                            else {
                                topmost.navigate("component/profile/profile");
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
checkLogin();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi1wYWdlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibWFpbi1wYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7OztFQUlFOztBQUlGLHVDQUFrQztBQUNsQyxzQ0FBeUM7QUFFekMsSUFBTSxRQUFRLEdBQUcsT0FBTyxDQUFDLDhCQUE4QixDQUFDLENBQUM7QUFHekQsSUFBTSxVQUFVLEdBQUc7SUFDZixRQUFRLENBQUMsSUFBSSxDQUFDO1FBQ1Ysa0JBQWtCLEVBQUUsVUFBZ0IsSUFBSTs7Ozs7OzRCQUNwQyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLEdBQUcsdUJBQXVCLEdBQUcsMEJBQTBCLENBQUMsQ0FBQzs0QkFDNUUsT0FBTyxHQUFHLFdBQVcsQ0FBQyxPQUFPLEVBQUUsQ0FBQztpQ0FDbEMsSUFBSSxDQUFDLFFBQVEsRUFBYix3QkFBYTs0QkFDYixPQUFPLENBQUMsR0FBRyxDQUFDLGVBQWUsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDOzRCQUM1QyxlQUFLLENBQUMsUUFBUSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQzs0QkFDbkMscUJBQU0sZUFBSyxDQUFDLFFBQVEsQ0FBQyxXQUFXLEVBQUUsRUFBQTs7NEJBQWxDLFNBQWtDLENBQUM7NEJBRW5DLEVBQUUsQ0FBQyxDQUFDLGVBQUssQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7Z0NBQ2xDLE9BQU8sQ0FBQyxRQUFRLENBQUMscUJBQXFCLENBQUMsQ0FBQzs0QkFDNUMsQ0FBQzs0QkFBQSxJQUFJLENBQUEsQ0FBQztnQ0FDRixPQUFPLENBQUMsUUFBUSxDQUFDLDJCQUEyQixDQUFDLENBQUM7NEJBQ2xELENBQUM7Ozs0QkFRRCxPQUFPLENBQUMsUUFBUSxDQUFDLHVCQUF1QixDQUFDLENBQUM7Ozs7OztTQUVqRDtLQUNKLENBQUMsQ0FBQyxJQUFJLENBQ0gsVUFBQSxRQUFRO1FBQ0osT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFDbEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO0lBQ3RDLENBQUMsRUFDRCxVQUFBLEtBQUs7UUFDRCxPQUFPLENBQUMsR0FBRyxDQUFDLDBCQUF3QixLQUFPLENBQUMsQ0FBQztJQUNqRCxDQUFDLENBQ0osQ0FBQztBQUNOLENBQUMsQ0FBQztBQUNGLFVBQVUsRUFBRSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLypcbkluIE5hdGl2ZVNjcmlwdCwgYSBmaWxlIHdpdGggdGhlIHNhbWUgbmFtZSBhcyBhbiBYTUwgZmlsZSBpcyBrbm93biBhc1xuYSBjb2RlLWJlaGluZCBmaWxlLiBUaGUgY29kZS1iZWhpbmQgaXMgYSBncmVhdCBwbGFjZSB0byBwbGFjZSB5b3VyIHZpZXdcbmxvZ2ljLCBhbmQgdG8gc2V0IHVwIHlvdXIgcGFnZeKAmXMgZGF0YSBiaW5kaW5nLlxuKi9cblxuaW1wb3J0IHsgRXZlbnREYXRhIH0gZnJvbSAnZGF0YS9vYnNlcnZhYmxlJztcbmltcG9ydCB7IFBhZ2UgfSBmcm9tICd1aS9wYWdlJztcbmltcG9ydCBtb2RlbCBmcm9tICcuL21vZGVsL21vZGVsJztcbmltcG9ydCBmcmFtZU1vZHVsZSA9IHJlcXVpcmUoXCJ1aS9mcmFtZVwiKTtcblxuY29uc3QgZmlyZWJhc2UgPSByZXF1aXJlKFwibmF0aXZlc2NyaXB0LXBsdWdpbi1maXJlYmFzZVwiKTtcblxuXG5jb25zdCBjaGVja0xvZ2luID0gKCkgPT4ge1xuICAgIGZpcmViYXNlLmluaXQoe1xuICAgICAgICBvbkF1dGhTdGF0ZUNoYW5nZWQ6IGFzeW5jIGZ1bmN0aW9uIChkYXRhKSB7IC8vIG9wdGlvbmFsIGJ1dCB1c2VmdWwgdG8gaW1tZWRpYXRlbHkgcmUtbG9nb24gdGhlIHVzZXIgd2hlbiBoZSByZS12aXNpdHMgeW91ciBhcHBcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEubG9nZ2VkSW4gPyBcIkxvZ2dlZCBpbiB0byBmaXJlYmFzZVwiIDogXCJMb2dnZWQgb3V0IGZyb20gZmlyZWJhc2VcIik7XG4gICAgICAgICAgICBjb25zdCB0b3Btb3N0ID0gZnJhbWVNb2R1bGUudG9wbW9zdCgpO1xuICAgICAgICAgICAgaWYgKGRhdGEubG9nZ2VkSW4pIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnZGF0YS51c2VyLnVpZCcsIGRhdGEudXNlci51aWQpO1xuICAgICAgICAgICAgICAgIG1vZGVsLnVzZXJJbmZvLnVpZCA9IGRhdGEudXNlci51aWQ7XG4gICAgICAgICAgICAgICAgYXdhaXQgbW9kZWwudXNlckluZm8uZ2V0VXNlckluZm8oKTtcblxuICAgICAgICAgICAgICAgIGlmIChtb2RlbC51c2VySW5mby51c2VySW5mby5wcm9maWxlKSB7XG4gICAgICAgICAgICAgICAgICAgIHRvcG1vc3QubmF2aWdhdGUoXCJjb21wb25lbnQvbWFpbi9tYWluXCIpO1xuICAgICAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgICAgICB0b3Btb3N0Lm5hdmlnYXRlKFwiY29tcG9uZW50L3Byb2ZpbGUvcHJvZmlsZVwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgLyppZiAobXlIYWJpdHMpIHtcbiAgICAgICAgICAgICAgICAgICAgdG9wbW9zdC5uYXZpZ2F0ZShcImNvbXBvbmVudC9kYWlseUNoZWNrL2RhaWx5Q2hlY2tcIik7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdG9wbW9zdC5uYXZpZ2F0ZShcImNvbXBvbmVudC9jcmVhdGUvY3JlYXRlXCIpO1xuICAgICAgICAgICAgICAgIH0qL1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0b3Btb3N0Lm5hdmlnYXRlKFwiY29tcG9uZW50L2xvZ2luL2xvZ2luXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSkudGhlbihcbiAgICAgICAgaW5zdGFuY2UgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ2luc3RhbmNlJywgaW5zdGFuY2UpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJmaXJlYmFzZS5pbml0IGRvbmVcIik7XG4gICAgICAgIH0sXG4gICAgICAgIGVycm9yID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGBmaXJlYmFzZS5pbml0IGVycm9yOiAke2Vycm9yfWApO1xuICAgICAgICB9XG4gICAgKTtcbn07XG5jaGVja0xvZ2luKCk7Il19