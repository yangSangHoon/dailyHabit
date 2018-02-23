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
    UserInfo.prototype.getMyDailyHabits = function () {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getDailyHabits(this.uid)];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, response.value];
                }
            });
        });
    };
    UserInfo.prototype.getDailyHabits = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var e_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, firebase.getValue("/dailyHabit/" + id)];
                    case 1: return [2 /*return*/, _a.sent()];
                    case 2:
                        e_3 = _a.sent();
                        return [2 /*return*/, null];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    UserInfo.prototype.createHabits = function (_a) {
        var habits = _a.habits;
        return __awaiter(this, void 0, void 0, function () {
            var e_4;
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
                        e_4 = _a.sent();
                        alert('등록실패하였습니다' + e_4);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlckluZm8uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ1c2VySW5mby50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLElBQU0sUUFBUSxHQUFHLE9BQU8sQ0FBQyw4QkFBOEIsQ0FBQyxDQUFDO0FBRXpEO0lBQUE7UUFDWSxTQUFJLEdBQVcsRUFBRSxDQUFDO1FBQ2xCLGNBQVMsR0FBRyxFQUFFLENBQUM7SUE4RDNCLENBQUM7SUE1REcsc0JBQUkseUJBQUc7YUFBUDtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQ3JCLENBQUM7YUFFRCxVQUFRLEtBQUs7WUFDVCxJQUFJLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQztRQUN0QixDQUFDOzs7T0FKQTtJQU1ELHNCQUFJLDhCQUFRO2FBQVo7WUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUMxQixDQUFDO2FBRUQsVUFBYSxLQUFLO1lBQ2QsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7UUFDM0IsQ0FBQzs7O09BSkE7SUFNWSw4QkFBVyxHQUF4Qjs7Ozs7Ozt3QkFFd0IscUJBQU0sUUFBUSxDQUFDLFFBQVEsQ0FBQyxZQUFVLElBQUksQ0FBQyxHQUFLLENBQUMsRUFBQTs7d0JBQXZELE9BQU8sR0FBRyxTQUE2Qzt3QkFDN0QsSUFBSSxDQUFDLFFBQVEsR0FBRyxPQUFPLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQzt3QkFDckMsc0JBQU8sSUFBSSxDQUFDLFFBQVEsRUFBQzs7O3dCQUVyQixzQkFBTyxJQUFJLEVBQUM7Ozs7O0tBRW5CO0lBRUssaUNBQWMsR0FBcEIsVUFBcUIsRUFBYztZQUFiLGNBQUksRUFBRSxrQkFBTTs7Ozs7Ozt3QkFFMUIscUJBQU0sUUFBUSxDQUFDLFFBQVEsQ0FBQyxpQkFBZSxJQUFJLENBQUMsR0FBRyxTQUFJLElBQU0sRUFBRSxFQUFDLE1BQU0sRUFBRSxNQUFNLEVBQUMsQ0FBQyxFQUFBOzt3QkFBNUUsU0FBNEUsQ0FBQzt3QkFDN0UsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDOzs7O3dCQUVqQixLQUFLLENBQUMsV0FBVyxHQUFHLEdBQUMsQ0FBQyxDQUFDOzs7Ozs7S0FFOUI7SUFFWSxtQ0FBZ0IsR0FBN0I7Ozs7OzRCQUNxQixxQkFBTSxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBQTs7d0JBQTlDLFFBQVEsR0FBRyxTQUFtQzt3QkFDcEQsc0JBQU8sUUFBUSxDQUFDLEtBQUssRUFBQzs7OztLQUN6QjtJQUVZLGlDQUFjLEdBQTNCLFVBQTRCLEVBQUU7Ozs7Ozs7d0JBRWYscUJBQU0sUUFBUSxDQUFDLFFBQVEsQ0FBQyxpQkFBZSxFQUFJLENBQUMsRUFBQTs0QkFBbkQsc0JBQU8sU0FBNEMsRUFBQzs7O3dCQUVwRCxzQkFBTyxJQUFJLEVBQUM7Ozs7O0tBRW5CO0lBRUssK0JBQVksR0FBbEIsVUFBbUIsRUFBUTtZQUFQLGtCQUFNOzs7Ozs7O3dCQUVsQixxQkFBTSxRQUFRLENBQUMsUUFBUSxDQUFDLFlBQVUsSUFBSSxDQUFDLEdBQUssRUFBRSxFQUFDLE1BQU0sRUFBRSxNQUFNLEVBQUMsQ0FBQyxFQUFBOzt3QkFBL0QsU0FBK0QsQ0FBQzt3QkFDaEUsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDOzs7O3dCQUVqQixLQUFLLENBQUMsV0FBVyxHQUFHLEdBQUMsQ0FBQyxDQUFDOzs7Ozs7S0FFOUI7SUFFTSx5QkFBTSxHQUFiO1FBQ0ksUUFBUSxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQ3RCLENBQUM7SUFDTCxlQUFDO0FBQUQsQ0FBQyxBQWhFRCxJQWdFQztBQUVELGtCQUFlLFFBQVEsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGZpcmViYXNlID0gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1wbHVnaW4tZmlyZWJhc2VcIik7XG5cbmNsYXNzIFVzZXJJbmZvIHtcbiAgICBwcml2YXRlIF91aWQ6IHN0cmluZyA9ICcnO1xuICAgIHByaXZhdGUgX215SGFiaXRzID0gW107XG5cbiAgICBnZXQgdWlkKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fdWlkO1xuICAgIH1cblxuICAgIHNldCB1aWQodmFsdWUpIHtcbiAgICAgICAgdGhpcy5fdWlkID0gdmFsdWU7XG4gICAgfVxuXG4gICAgZ2V0IG15SGFiaXRzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fbXlIYWJpdHM7XG4gICAgfVxuXG4gICAgc2V0IG15SGFiaXRzKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuX215SGFiaXRzID0gdmFsdWU7XG4gICAgfVxuXG4gICAgcHVibGljIGFzeW5jIGdldE15SGFiaXRzKCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgcmVzcG9uZSA9IGF3YWl0IGZpcmViYXNlLmdldFZhbHVlKGAvdXNlcnMvJHt0aGlzLnVpZH1gKTtcbiAgICAgICAgICAgIHRoaXMubXlIYWJpdHMgPSByZXNwb25lLnZhbHVlLmhhYml0cztcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm15SGFiaXRzO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGFzeW5jIHNldERhaWx5SGFiaXRzKHtkYXRlLCBoYWJpdHN9KSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBhd2FpdCBmaXJlYmFzZS5zZXRWYWx1ZShgL2RhaWx5SGFiaXQvJHt0aGlzLnVpZH0vJHtkYXRlfWAsIHtoYWJpdHM6IGhhYml0c30pO1xuICAgICAgICAgICAgYWxlcnQoJ+uTseuhneuQmOyXiOyKteuLiOuLpCcpO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICBhbGVydCgn65Ox66Gd7Iuk7Yyo7ZWY7JiA7Iq164uI64ukJyArIGUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIGFzeW5jIGdldE15RGFpbHlIYWJpdHMoKXtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCB0aGlzLmdldERhaWx5SGFiaXRzKHRoaXMudWlkKTtcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlLnZhbHVlO1xuICAgIH1cblxuICAgIHB1YmxpYyBhc3luYyBnZXREYWlseUhhYml0cyhpZCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgcmV0dXJuIGF3YWl0IGZpcmViYXNlLmdldFZhbHVlKGAvZGFpbHlIYWJpdC8ke2lkfWApO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGFzeW5jIGNyZWF0ZUhhYml0cyh7aGFiaXRzfSkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgYXdhaXQgZmlyZWJhc2Uuc2V0VmFsdWUoYC91c2Vycy8ke3RoaXMudWlkfWAsIHtoYWJpdHM6IGhhYml0c30pO1xuICAgICAgICAgICAgYWxlcnQoJ+uTseuhneuQmOyXiOyKteuLiOuLpCcpO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICBhbGVydCgn65Ox66Gd7Iuk7Yyo7ZWY7JiA7Iq164uI64ukJyArIGUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIGxvZ291dCgpIHtcbiAgICAgICAgZmlyZWJhc2UubG9nb3V0KCk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBVc2VySW5mbzsiXX0=