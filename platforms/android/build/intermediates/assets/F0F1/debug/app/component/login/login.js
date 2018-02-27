"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var firebase = require("nativescript-plugin-firebase");
var buttonModule = require("ui/button");
var Login = (function () {
    function Login(page) {
        var _this = this;
        this.email = page.getViewById('email');
        this.password = page.getViewById('password');
        this.btnLogin = page.getViewById('btnLogin');
        this.btnLogin.on(buttonModule.Button.tapEvent, function () {
            _this.goLogin();
        });
    }
    Login.prototype.goLogin = function () {
        return __awaiter(this, void 0, void 0, function () {
            var e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, firebase.login({
                                type: firebase.LoginType.PASSWORD,
                                passwordOptions: {
                                    email: this.email.text,
                                    password: this.password.text,
                                }
                            })];
                    case 1:
                        _a.sent();
                        alert('로그인 성공');
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJsb2dpbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLElBQU0sUUFBUSxHQUFHLE9BQU8sQ0FBQyw4QkFBOEIsQ0FBQyxDQUFDO0FBQ3pELHdDQUEyQztBQUUzQztJQU1JLGVBQVksSUFBSTtRQUFoQixpQkFPQztRQU5HLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUN2QyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDN0MsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQzdDLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFO1lBQzNDLEtBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUNuQixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFWSx1QkFBTyxHQUFwQjs7Ozs7Ozt3QkFFUSxxQkFBTSxRQUFRLENBQUMsS0FBSyxDQUNoQjtnQ0FDSSxJQUFJLEVBQUUsUUFBUSxDQUFDLFNBQVMsQ0FBQyxRQUFRO2dDQUNqQyxlQUFlLEVBQUU7b0NBQ2IsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSTtvQ0FDdEIsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSTtpQ0FDL0I7NkJBQ0osQ0FBQyxFQUFBOzt3QkFQTixTQU9NLENBQUM7d0JBQ1AsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDOzs7O3dCQUVoQixLQUFLLENBQUMsR0FBQyxDQUFDLENBQUM7Ozs7OztLQUVoQjtJQUNMLFlBQUM7QUFBRCxDQUFDLEFBOUJELElBOEJDO0FBRUQsT0FBTyxDQUFDLFNBQVMsR0FBRyxVQUFVLElBQUk7SUFDOUIsSUFBSSxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQzNCLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGZpcmViYXNlID0gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1wbHVnaW4tZmlyZWJhc2VcIik7XG5pbXBvcnQgYnV0dG9uTW9kdWxlID0gcmVxdWlyZShcInVpL2J1dHRvblwiKTtcblxuY2xhc3MgTG9naW4ge1xuXG4gICAgcHJpdmF0ZSBlbWFpbDtcbiAgICBwcml2YXRlIHBhc3N3b3JkO1xuICAgIHByaXZhdGUgYnRuTG9naW47XG5cbiAgICBjb25zdHJ1Y3RvcihwYWdlKSB7XG4gICAgICAgIHRoaXMuZW1haWwgPSBwYWdlLmdldFZpZXdCeUlkKCdlbWFpbCcpO1xuICAgICAgICB0aGlzLnBhc3N3b3JkID0gcGFnZS5nZXRWaWV3QnlJZCgncGFzc3dvcmQnKTtcbiAgICAgICAgdGhpcy5idG5Mb2dpbiA9IHBhZ2UuZ2V0Vmlld0J5SWQoJ2J0bkxvZ2luJyk7XG4gICAgICAgIHRoaXMuYnRuTG9naW4ub24oYnV0dG9uTW9kdWxlLkJ1dHRvbi50YXBFdmVudCwgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5nb0xvZ2luKCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHB1YmxpYyBhc3luYyBnb0xvZ2luKCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgYXdhaXQgZmlyZWJhc2UubG9naW4oXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiBmaXJlYmFzZS5Mb2dpblR5cGUuUEFTU1dPUkQsXG4gICAgICAgICAgICAgICAgICAgIHBhc3N3b3JkT3B0aW9uczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgZW1haWw6IHRoaXMuZW1haWwudGV4dCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhc3N3b3JkOiB0aGlzLnBhc3N3b3JkLnRleHQsXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGFsZXJ0KCfroZzqt7jsnbgg7ISx6rO1Jyk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIGFsZXJ0KGUpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5leHBvcnRzLm5hdmlnYXRlZCA9IGZ1bmN0aW9uIChhcmdzKSB7XG4gICAgbmV3IExvZ2luKGFyZ3Mub2JqZWN0KTtcbn07Il19