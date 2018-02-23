"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var firebase = require("nativescript-plugin-firebase");
var buttonModule = require("ui/button");
var Profile = (function () {
    function Profile(page) {
        var _this = this;
        this.nickname = page.getViewById('nickname');
        this.btnSave = page.getViewById('btnSave');
        this.btnSave.on(buttonModule.Button.tapEvent, function () {
            _this.save();
        });
    }
    Profile.prototype.save = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                try {
                }
                catch (e) {
                }
                return [2 /*return*/];
            });
        });
    };
    return Profile;
}());
exports.navigated = function (args) {
    new Profile(args.object);
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZmlsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInByb2ZpbGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFNLFFBQVEsR0FBRyxPQUFPLENBQUMsOEJBQThCLENBQUMsQ0FBQztBQUN6RCx3Q0FBMkM7QUFFM0M7SUFLSSxpQkFBWSxJQUFJO1FBQWhCLGlCQU1DO1FBTEcsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQzdDLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUMzQyxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRTtZQUMxQyxLQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDaEIsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRVksc0JBQUksR0FBakI7OztnQkFDSSxJQUFJLENBQUM7Z0JBQ0wsQ0FBQztnQkFBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNiLENBQUM7Ozs7S0FDSjtJQUNMLGNBQUM7QUFBRCxDQUFDLEFBbEJELElBa0JDO0FBRUQsT0FBTyxDQUFDLFNBQVMsR0FBRyxVQUFVLElBQUk7SUFDOUIsSUFBSSxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQzdCLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGZpcmViYXNlID0gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1wbHVnaW4tZmlyZWJhc2VcIik7XG5pbXBvcnQgYnV0dG9uTW9kdWxlID0gcmVxdWlyZShcInVpL2J1dHRvblwiKTtcblxuY2xhc3MgUHJvZmlsZSB7XG5cbiAgICBwcml2YXRlIG5pY2tuYW1lO1xuICAgIHByaXZhdGUgYnRuU2F2ZTtcblxuICAgIGNvbnN0cnVjdG9yKHBhZ2UpIHtcbiAgICAgICAgdGhpcy5uaWNrbmFtZSA9IHBhZ2UuZ2V0Vmlld0J5SWQoJ25pY2tuYW1lJyk7XG4gICAgICAgIHRoaXMuYnRuU2F2ZSA9IHBhZ2UuZ2V0Vmlld0J5SWQoJ2J0blNhdmUnKTtcbiAgICAgICAgdGhpcy5idG5TYXZlLm9uKGJ1dHRvbk1vZHVsZS5CdXR0b24udGFwRXZlbnQsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuc2F2ZSgpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgYXN5bmMgc2F2ZSgpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICB9XG4gICAgfVxufVxuXG5leHBvcnRzLm5hdmlnYXRlZCA9IGZ1bmN0aW9uIChhcmdzKSB7XG4gICAgbmV3IFByb2ZpbGUoYXJncy5vYmplY3QpO1xufTsiXX0=