"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var buttonModule = require("ui/button");
var model_1 = require("../../model/model");
var frameModule = require("ui/frame");
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
            var topmost, e_1;
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
                        topmost = frameModule.topmost();
                        topmost.navigate("component/main/main");
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZmlsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInByb2ZpbGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSx3Q0FBMkM7QUFDM0MsMkNBQXNDO0FBQ3RDLHNDQUF5QztBQUV6QztJQUtJLGlCQUFZLElBQUk7UUFBaEIsaUJBTUM7UUFMRyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDN0MsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQzNDLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFO1lBQzFDLEtBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNoQixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFWSxzQkFBSSxHQUFqQjs7Ozs7Ozt3QkFFUSxxQkFBTSxlQUFLLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQztnQ0FDNUIsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSTs2QkFDL0IsQ0FBQyxFQUFBOzt3QkFGRixTQUVFLENBQUM7d0JBQ0gsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDO3dCQUNYLE9BQU8sR0FBRyxXQUFXLENBQUMsT0FBTyxFQUFFLENBQUM7d0JBQ3RDLE9BQU8sQ0FBQyxRQUFRLENBQUMscUJBQXFCLENBQUMsQ0FBQzs7Ozs7Ozs7O0tBRy9DO0lBQ0wsY0FBQztBQUFELENBQUMsQUF4QkQsSUF3QkM7QUFFRCxPQUFPLENBQUMsU0FBUyxHQUFHLFVBQVUsSUFBSTtJQUM5QixJQUFJLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDN0IsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGJ1dHRvbk1vZHVsZSA9IHJlcXVpcmUoXCJ1aS9idXR0b25cIik7XG5pbXBvcnQgbW9kZWwgZnJvbSAnLi4vLi4vbW9kZWwvbW9kZWwnO1xuaW1wb3J0IGZyYW1lTW9kdWxlID0gcmVxdWlyZShcInVpL2ZyYW1lXCIpO1xuXG5jbGFzcyBQcm9maWxlIHtcblxuICAgIHByaXZhdGUgbmlja25hbWU7XG4gICAgcHJpdmF0ZSBidG5TYXZlO1xuXG4gICAgY29uc3RydWN0b3IocGFnZSkge1xuICAgICAgICB0aGlzLm5pY2tuYW1lID0gcGFnZS5nZXRWaWV3QnlJZCgnbmlja25hbWUnKTtcbiAgICAgICAgdGhpcy5idG5TYXZlID0gcGFnZS5nZXRWaWV3QnlJZCgnYnRuU2F2ZScpO1xuICAgICAgICB0aGlzLmJ0blNhdmUub24oYnV0dG9uTW9kdWxlLkJ1dHRvbi50YXBFdmVudCwgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5zYXZlKCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHB1YmxpYyBhc3luYyBzYXZlKCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgYXdhaXQgbW9kZWwudXNlckluZm8uc2V0UHJvZmlsZSh7XG4gICAgICAgICAgICAgICAgbmlja05hbWU6IHRoaXMubmlja25hbWUudGV4dFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBhbGVydCgn65Ox66Gd65CY7JeI7Iq164uI64ukJyk7XG4gICAgICAgICAgICBjb25zdCB0b3Btb3N0ID0gZnJhbWVNb2R1bGUudG9wbW9zdCgpO1xuICAgICAgICAgICAgdG9wbW9zdC5uYXZpZ2F0ZShcImNvbXBvbmVudC9tYWluL21haW5cIik7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0cy5uYXZpZ2F0ZWQgPSBmdW5jdGlvbiAoYXJncykge1xuICAgIG5ldyBQcm9maWxlKGFyZ3Mub2JqZWN0KTtcbn07Il19