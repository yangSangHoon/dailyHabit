"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var buttonModule = require("ui/button");
var model_1 = require("../../model/model");
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
            var e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, model_1.default.userInfo.setProfile({
                                nickName: this.nickname.text
                            })];
                    case 1:
                        _a.sent();
                        alert('등록되었습니다');
                        return [3 /*break*/, 3];
                    case 2:
                        e_1 = _a.sent();
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    return Profile;
}());
exports.navigated = function (args) {
    new Profile(args.object);
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZmlsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInByb2ZpbGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSx3Q0FBMkM7QUFDM0MsMkNBQXNDO0FBRXRDO0lBS0ksaUJBQVksSUFBSTtRQUFoQixpQkFNQztRQUxHLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUM3QyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDM0MsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUU7WUFDMUMsS0FBSSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ2hCLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVZLHNCQUFJLEdBQWpCOzs7Ozs7O3dCQUVRLHFCQUFNLGVBQUssQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDO2dDQUM1QixRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJOzZCQUMvQixDQUFDLEVBQUE7O3dCQUZGLFNBRUUsQ0FBQzt3QkFDSCxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUM7Ozs7Ozs7OztLQUd4QjtJQUNMLGNBQUM7QUFBRCxDQUFDLEFBdEJELElBc0JDO0FBRUQsT0FBTyxDQUFDLFNBQVMsR0FBRyxVQUFVLElBQUk7SUFDOUIsSUFBSSxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQzdCLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBidXR0b25Nb2R1bGUgPSByZXF1aXJlKFwidWkvYnV0dG9uXCIpO1xuaW1wb3J0IG1vZGVsIGZyb20gJy4uLy4uL21vZGVsL21vZGVsJztcblxuY2xhc3MgUHJvZmlsZSB7XG5cbiAgICBwcml2YXRlIG5pY2tuYW1lO1xuICAgIHByaXZhdGUgYnRuU2F2ZTtcblxuICAgIGNvbnN0cnVjdG9yKHBhZ2UpIHtcbiAgICAgICAgdGhpcy5uaWNrbmFtZSA9IHBhZ2UuZ2V0Vmlld0J5SWQoJ25pY2tuYW1lJyk7XG4gICAgICAgIHRoaXMuYnRuU2F2ZSA9IHBhZ2UuZ2V0Vmlld0J5SWQoJ2J0blNhdmUnKTtcbiAgICAgICAgdGhpcy5idG5TYXZlLm9uKGJ1dHRvbk1vZHVsZS5CdXR0b24udGFwRXZlbnQsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuc2F2ZSgpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgYXN5bmMgc2F2ZSgpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGF3YWl0IG1vZGVsLnVzZXJJbmZvLnNldFByb2ZpbGUoe1xuICAgICAgICAgICAgICAgIG5pY2tOYW1lOiB0aGlzLm5pY2tuYW1lLnRleHRcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgYWxlcnQoJ+uTseuhneuQmOyXiOyKteuLiOuLpCcpO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmV4cG9ydHMubmF2aWdhdGVkID0gZnVuY3Rpb24gKGFyZ3MpIHtcbiAgICBuZXcgUHJvZmlsZShhcmdzLm9iamVjdCk7XG59OyJdfQ==