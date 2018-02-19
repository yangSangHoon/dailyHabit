"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var observable_1 = require("data/observable");
var firebase = require("nativescript-plugin-firebase");
var frameModule = require("ui/frame");
var user_1 = require("./model/user");
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
                console.log(data.loggedIn ? "Logged in to firebase" : "Logged out from firebase");
                user_1.userInfo.uid = data.user.uid;
                var topmost = frameModule.topmost();
                if (data.loggedIn) {
                    topmost.navigate("component/dailyCheck/dailyCheck");
                }
                else {
                    topmost.navigate("component/login/login");
                }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi12aWV3LW1vZGVsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibWFpbi12aWV3LW1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsOENBQTJDO0FBQzNDLElBQU0sUUFBUSxHQUFHLE9BQU8sQ0FBQyw4QkFBOEIsQ0FBQyxDQUFDO0FBQ3pELHNDQUF5QztBQUN6QyxxQ0FBc0M7QUFFdEM7SUFBcUMsbUNBQVU7SUFDM0M7UUFBQSxZQUNJLGlCQUFPLFNBRVY7UUFERyxLQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7O0lBQ3RCLENBQUM7SUFFTyxvQ0FBVSxHQUFsQjtRQUNJLFFBQVEsQ0FBQyxJQUFJLENBQUM7WUFDVixrQkFBa0IsRUFBRSxVQUFTLElBQUk7Z0JBQzdCLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsR0FBRyx1QkFBdUIsR0FBRywwQkFBMEIsQ0FBQyxDQUFDO2dCQUNsRixlQUFRLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDO2dCQUM3QixJQUFNLE9BQU8sR0FBRyxXQUFXLENBQUMsT0FBTyxFQUFFLENBQUM7Z0JBQ3RDLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQSxDQUFDO29CQUNoQixPQUFPLENBQUMsUUFBUSxDQUFDLGlDQUFpQyxDQUFDLENBQUM7Z0JBQ3RELENBQUM7Z0JBQUEsSUFBSSxDQUFBLENBQUM7b0JBQ0osT0FBTyxDQUFDLFFBQVEsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO2dCQUM1QyxDQUFDO1lBQ0wsQ0FBQztTQUNGLENBQUMsQ0FBQyxJQUFJLENBQ0wsVUFBQSxRQUFRO1lBQ0osT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLEVBQUUsUUFBUSxDQUFDLENBQUM7WUFDcEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO1FBQ3BDLENBQUMsRUFDRCxVQUFBLEtBQUs7WUFDSCxPQUFPLENBQUMsR0FBRyxDQUFDLDBCQUF3QixLQUFPLENBQUMsQ0FBQztRQUMvQyxDQUFDLENBQ0YsQ0FBQztJQUNSLENBQUM7SUFBQSxDQUFDO0lBQ04sc0JBQUM7QUFBRCxDQUFDLEFBNUJELENBQXFDLHVCQUFVLEdBNEI5QztBQTVCWSwwQ0FBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSAnZGF0YS9vYnNlcnZhYmxlJztcbmNvbnN0IGZpcmViYXNlID0gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1wbHVnaW4tZmlyZWJhc2VcIik7XG5pbXBvcnQgZnJhbWVNb2R1bGUgPSByZXF1aXJlKFwidWkvZnJhbWVcIik7XG5pbXBvcnQge3VzZXJJbmZvfSBmcm9tICcuL21vZGVsL3VzZXInO1xuXG5leHBvcnQgY2xhc3MgSGVsbG9Xb3JsZE1vZGVsIGV4dGVuZHMgT2JzZXJ2YWJsZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuY2hlY2tMb2dpbigpO1xuICAgIH1cblxuICAgIHByaXZhdGUgY2hlY2tMb2dpbigpe1xuICAgICAgICBmaXJlYmFzZS5pbml0KHtcbiAgICAgICAgICAgIG9uQXV0aFN0YXRlQ2hhbmdlZDogZnVuY3Rpb24oZGF0YSkgeyAvLyBvcHRpb25hbCBidXQgdXNlZnVsIHRvIGltbWVkaWF0ZWx5IHJlLWxvZ29uIHRoZSB1c2VyIHdoZW4gaGUgcmUtdmlzaXRzIHlvdXIgYXBwXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YS5sb2dnZWRJbiA/IFwiTG9nZ2VkIGluIHRvIGZpcmViYXNlXCIgOiBcIkxvZ2dlZCBvdXQgZnJvbSBmaXJlYmFzZVwiKTtcbiAgICAgICAgICAgICAgICB1c2VySW5mby51aWQgPSBkYXRhLnVzZXIudWlkO1xuICAgICAgICAgICAgICAgIGNvbnN0IHRvcG1vc3QgPSBmcmFtZU1vZHVsZS50b3Btb3N0KCk7XG4gICAgICAgICAgICAgICAgaWYoZGF0YS5sb2dnZWRJbil7XG4gICAgICAgICAgICAgICAgICB0b3Btb3N0Lm5hdmlnYXRlKFwiY29tcG9uZW50L2RhaWx5Q2hlY2svZGFpbHlDaGVja1wiKTtcbiAgICAgICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICAgIHRvcG1vc3QubmF2aWdhdGUoXCJjb21wb25lbnQvbG9naW4vbG9naW5cIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pLnRoZW4oXG4gICAgICAgICAgICBpbnN0YW5jZSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2luc3RhbmNlJywgaW5zdGFuY2UpO1xuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImZpcmViYXNlLmluaXQgZG9uZVwiKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlcnJvciA9PiB7XG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBmaXJlYmFzZS5pbml0IGVycm9yOiAke2Vycm9yfWApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICk7XG4gICAgfTtcbn0iXX0=