"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var firebase = require("nativescript-plugin-firebase");
var buttonModule = require("ui/button");
var frameModule = require("ui/frame");
var Login = (function () {
    function Login(page) {
        var _this = this;
        this.email = page.getViewById('email');
        this.password = page.getViewById('password');
        this.btnLogin = page.getViewById('btnLogin');
        this.btnLogin.on(buttonModule.Button.tapEvent, function () {
            _this.goLogin();
        });
        this.goLogin();
    }
    Login.prototype.goLogin = function () {
        return __awaiter(this, void 0, void 0, function () {
            var topmost, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, firebase.login({
                                type: firebase.LoginType.ANONYMOUS,
                            })];
                    case 1:
                        _a.sent();
                        alert('로그인 성공');
                        topmost = frameModule.topmost();
                        topmost.navigate("component/result/result");
                        return [3 /*break*/, 3];
                    case 2:
                        e_1 = _a.sent();
                        alert(e_1);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    return Login;
}());
exports.navigated = function (args) {
    new Login(args.object);
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJsb2dpbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLElBQU0sUUFBUSxHQUFHLE9BQU8sQ0FBQyw4QkFBOEIsQ0FBQyxDQUFDO0FBQ3pELHdDQUEyQztBQUMzQyxzQ0FBeUM7QUFFekM7SUFNSSxlQUFZLElBQUk7UUFBaEIsaUJBUUM7UUFQRyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDdkMsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQzdDLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUM3QyxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRTtZQUMzQyxLQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDbkIsQ0FBQyxDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDbkIsQ0FBQztJQUVZLHVCQUFPLEdBQXBCOzs7Ozs7O3dCQUVRLHFCQUFNLFFBQVEsQ0FBQyxLQUFLLENBQ2hCO2dDQUNJLElBQUksRUFBRSxRQUFRLENBQUMsU0FBUyxDQUFDLFNBQVM7NkJBS3JDLENBQUMsRUFBQTs7d0JBUE4sU0FPTSxDQUFDO3dCQUNQLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQzt3QkFDVixPQUFPLEdBQUcsV0FBVyxDQUFDLE9BQU8sRUFBRSxDQUFDO3dCQUN0QyxPQUFPLENBQUMsUUFBUSxDQUFDLHlCQUF5QixDQUFDLENBQUM7Ozs7d0JBRTVDLEtBQUssQ0FBQyxHQUFDLENBQUMsQ0FBQzs7Ozs7O0tBRWhCO0lBQ0wsWUFBQztBQUFELENBQUMsQUFqQ0QsSUFpQ0M7QUFFRCxPQUFPLENBQUMsU0FBUyxHQUFHLFVBQVUsSUFBSTtJQUM5QixJQUFJLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDM0IsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgZmlyZWJhc2UgPSByZXF1aXJlKFwibmF0aXZlc2NyaXB0LXBsdWdpbi1maXJlYmFzZVwiKTtcbmltcG9ydCBidXR0b25Nb2R1bGUgPSByZXF1aXJlKFwidWkvYnV0dG9uXCIpO1xuaW1wb3J0IGZyYW1lTW9kdWxlID0gcmVxdWlyZShcInVpL2ZyYW1lXCIpO1xuXG5jbGFzcyBMb2dpbiB7XG5cbiAgICBwcml2YXRlIGVtYWlsO1xuICAgIHByaXZhdGUgcGFzc3dvcmQ7XG4gICAgcHJpdmF0ZSBidG5Mb2dpbjtcblxuICAgIGNvbnN0cnVjdG9yKHBhZ2UpIHtcbiAgICAgICAgdGhpcy5lbWFpbCA9IHBhZ2UuZ2V0Vmlld0J5SWQoJ2VtYWlsJyk7XG4gICAgICAgIHRoaXMucGFzc3dvcmQgPSBwYWdlLmdldFZpZXdCeUlkKCdwYXNzd29yZCcpO1xuICAgICAgICB0aGlzLmJ0bkxvZ2luID0gcGFnZS5nZXRWaWV3QnlJZCgnYnRuTG9naW4nKTtcbiAgICAgICAgdGhpcy5idG5Mb2dpbi5vbihidXR0b25Nb2R1bGUuQnV0dG9uLnRhcEV2ZW50LCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmdvTG9naW4oKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuZ29Mb2dpbigpO1xuICAgIH1cblxuICAgIHB1YmxpYyBhc3luYyBnb0xvZ2luKCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgYXdhaXQgZmlyZWJhc2UubG9naW4oXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiBmaXJlYmFzZS5Mb2dpblR5cGUuQU5PTllNT1VTLFxuICAgICAgICAgICAgICAgICAgICAvKiBwYXNzd29yZE9wdGlvbnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVtYWlsOiB0aGlzLmVtYWlsLnRleHQsXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXNzd29yZDogdGhpcy5wYXNzd29yZC50ZXh0LFxuICAgICAgICAgICAgICAgICAgICB9ICovXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBhbGVydCgn66Gc6re47J24IOyEseqztScpO1xuICAgICAgICAgICAgY29uc3QgdG9wbW9zdCA9IGZyYW1lTW9kdWxlLnRvcG1vc3QoKTtcbiAgICAgICAgICAgIHRvcG1vc3QubmF2aWdhdGUoXCJjb21wb25lbnQvcmVzdWx0L3Jlc3VsdFwiKTtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgYWxlcnQoZSk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmV4cG9ydHMubmF2aWdhdGVkID0gZnVuY3Rpb24gKGFyZ3MpIHtcbiAgICBuZXcgTG9naW4oYXJncy5vYmplY3QpO1xufTsiXX0=