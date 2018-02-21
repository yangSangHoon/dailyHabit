"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var firebase = require("nativescript-plugin-firebase");
var UserInfo = (function () {
    function UserInfo() {
        this._uid = '';
        this._myHabits = [];
    }
    Object.defineProperty(UserInfo.prototype, "uid", {
        get: function () {
            return this._uid;
        },
        set: function (value) {
            this._uid = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserInfo.prototype, "myHabits", {
        get: function () {
            return this._myHabits;
        },
        set: function (value) {
            this._myHabits = value;
        },
        enumerable: true,
        configurable: true
    });
    UserInfo.prototype.getMyHabits = function () {
        return __awaiter(this, void 0, void 0, function () {
            var respone, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, firebase.getValue("/users/" + this.uid)];
                    case 1:
                        respone = _a.sent();
                        this.myHabits = respone.value.habits;
                        return [2 /*return*/, this.myHabits];
                    case 2:
                        e_1 = _a.sent();
                        return [2 /*return*/, null];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    UserInfo.prototype.setDailyHabits = function (_a) {
        var date = _a.date, habits = _a.habits;
        return __awaiter(this, void 0, void 0, function () {
            var e_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, firebase.setValue("/dailyHabit/" + this.uid + "/" + date, { habits: habits })];
                    case 1:
                        _a.sent();
                        alert('등록되었습니다');
                        return [3 /*break*/, 3];
                    case 2:
                        e_2 = _a.sent();
                        alert('등록실패하였습니다' + e_2);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    UserInfo.prototype.createHabits = function (_a) {
        var habits = _a.habits;
        return __awaiter(this, void 0, void 0, function () {
            var e_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, firebase.setValue("/users/" + this.uid, { habits: habits })];
                    case 1:
                        _a.sent();
                        alert('등록되었습니다');
                        return [3 /*break*/, 3];
                    case 2:
                        e_3 = _a.sent();
                        alert('등록실패하였습니다' + e_3);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    UserInfo.prototype.logout = function () {
        firebase.logout();
    };
    return UserInfo;
}());
exports.default = UserInfo;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlckluZm8uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ1c2VySW5mby50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLElBQU0sUUFBUSxHQUFHLE9BQU8sQ0FBQyw4QkFBOEIsQ0FBQyxDQUFDO0FBRXpEO0lBQUE7UUFDWSxTQUFJLEdBQVcsRUFBRSxDQUFDO1FBQ2xCLGNBQVMsR0FBRyxFQUFFLENBQUM7SUFrRDNCLENBQUM7SUFoREcsc0JBQUkseUJBQUc7YUFBUDtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQ3JCLENBQUM7YUFFRCxVQUFRLEtBQUs7WUFDVCxJQUFJLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQztRQUN0QixDQUFDOzs7T0FKQTtJQU1ELHNCQUFJLDhCQUFRO2FBQVo7WUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUMxQixDQUFDO2FBRUQsVUFBYSxLQUFLO1lBQ2QsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7UUFDM0IsQ0FBQzs7O09BSkE7SUFNWSw4QkFBVyxHQUF4Qjs7Ozs7Ozt3QkFFd0IscUJBQU0sUUFBUSxDQUFDLFFBQVEsQ0FBQyxZQUFVLElBQUksQ0FBQyxHQUFLLENBQUMsRUFBQTs7d0JBQXZELE9BQU8sR0FBRyxTQUE2Qzt3QkFDN0QsSUFBSSxDQUFDLFFBQVEsR0FBRyxPQUFPLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQzt3QkFDckMsc0JBQU8sSUFBSSxDQUFDLFFBQVEsRUFBQzs7O3dCQUVyQixzQkFBTyxJQUFJLEVBQUM7Ozs7O0tBRW5CO0lBRUssaUNBQWMsR0FBcEIsVUFBcUIsRUFBYztZQUFiLGNBQUksRUFBRSxrQkFBTTs7Ozs7Ozt3QkFFMUIscUJBQU0sUUFBUSxDQUFDLFFBQVEsQ0FBQyxpQkFBZSxJQUFJLENBQUMsR0FBRyxTQUFJLElBQU0sRUFBRSxFQUFDLE1BQU0sRUFBRSxNQUFNLEVBQUMsQ0FBQyxFQUFBOzt3QkFBNUUsU0FBNEUsQ0FBQzt3QkFDN0UsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDOzs7O3dCQUVqQixLQUFLLENBQUMsV0FBVyxHQUFHLEdBQUMsQ0FBQyxDQUFDOzs7Ozs7S0FHOUI7SUFFSywrQkFBWSxHQUFsQixVQUFtQixFQUFRO1lBQVAsa0JBQU07Ozs7Ozs7d0JBRWxCLHFCQUFNLFFBQVEsQ0FBQyxRQUFRLENBQUMsWUFBVSxJQUFJLENBQUMsR0FBSyxFQUFFLEVBQUMsTUFBTSxFQUFFLE1BQU0sRUFBQyxDQUFDLEVBQUE7O3dCQUEvRCxTQUErRCxDQUFDO3dCQUNoRSxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUM7Ozs7d0JBRWpCLEtBQUssQ0FBQyxXQUFXLEdBQUcsR0FBQyxDQUFDLENBQUM7Ozs7OztLQUU5QjtJQUVNLHlCQUFNLEdBQWI7UUFDSSxRQUFRLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDdEIsQ0FBQztJQUNMLGVBQUM7QUFBRCxDQUFDLEFBcERELElBb0RDO0FBRUQsa0JBQWUsUUFBUSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgZmlyZWJhc2UgPSByZXF1aXJlKFwibmF0aXZlc2NyaXB0LXBsdWdpbi1maXJlYmFzZVwiKTtcblxuY2xhc3MgVXNlckluZm8ge1xuICAgIHByaXZhdGUgX3VpZDogc3RyaW5nID0gJyc7XG4gICAgcHJpdmF0ZSBfbXlIYWJpdHMgPSBbXTtcblxuICAgIGdldCB1aWQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl91aWQ7XG4gICAgfVxuXG4gICAgc2V0IHVpZCh2YWx1ZSkge1xuICAgICAgICB0aGlzLl91aWQgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBnZXQgbXlIYWJpdHMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9teUhhYml0cztcbiAgICB9XG5cbiAgICBzZXQgbXlIYWJpdHModmFsdWUpIHtcbiAgICAgICAgdGhpcy5fbXlIYWJpdHMgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgYXN5bmMgZ2V0TXlIYWJpdHMoKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCByZXNwb25lID0gYXdhaXQgZmlyZWJhc2UuZ2V0VmFsdWUoYC91c2Vycy8ke3RoaXMudWlkfWApO1xuICAgICAgICAgICAgdGhpcy5teUhhYml0cyA9IHJlc3BvbmUudmFsdWUuaGFiaXRzO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMubXlIYWJpdHM7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgYXN5bmMgc2V0RGFpbHlIYWJpdHMoe2RhdGUsIGhhYml0c30pIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGF3YWl0IGZpcmViYXNlLnNldFZhbHVlKGAvZGFpbHlIYWJpdC8ke3RoaXMudWlkfS8ke2RhdGV9YCwge2hhYml0czogaGFiaXRzfSk7XG4gICAgICAgICAgICBhbGVydCgn65Ox66Gd65CY7JeI7Iq164uI64ukJyk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIGFsZXJ0KCfrk7HroZ3si6TtjKjtlZjsmIDsirXri4jri6QnICsgZSk7XG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIGFzeW5jIGNyZWF0ZUhhYml0cyh7aGFiaXRzfSkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgYXdhaXQgZmlyZWJhc2Uuc2V0VmFsdWUoYC91c2Vycy8ke3RoaXMudWlkfWAsIHtoYWJpdHM6IGhhYml0c30pO1xuICAgICAgICAgICAgYWxlcnQoJ+uTseuhneuQmOyXiOyKteuLiOuLpCcpO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICBhbGVydCgn65Ox66Gd7Iuk7Yyo7ZWY7JiA7Iq164uI64ukJyArIGUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIGxvZ291dCgpIHtcbiAgICAgICAgZmlyZWJhc2UubG9nb3V0KCk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBVc2VySW5mbzsiXX0=