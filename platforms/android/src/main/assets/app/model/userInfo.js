"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var firebase = require("nativescript-plugin-firebase");
var UserInfo = (function () {
    function UserInfo() {
        this._uid = '';
        this._myHabits = [];
    }
    Object.defineProperty(UserInfo.prototype, "profile", {
        get: function () {
            return this._userInfo.profile;
        },
        enumerable: true,
        configurable: true
    });
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
            var response, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, firebase.getValue("/users/" + this.uid)];
                    case 1:
                        response = _a.sent();
                        this._userInfo = response.value;
                        this.myHabits = this._userInfo.habits;
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
    UserInfo.prototype.setProfile = function (_a) {
        var nickName = _a.nickName;
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this._userInfo.profile = { nickName: nickName };
                        return [4 /*yield*/, firebase.setValue("/users/" + this.uid, this._userInfo)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlckluZm8uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ1c2VySW5mby50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLElBQU0sUUFBUSxHQUFHLE9BQU8sQ0FBQyw4QkFBOEIsQ0FBQyxDQUFDO0FBRXpEO0lBQUE7UUFDWSxTQUFJLEdBQVcsRUFBRSxDQUFDO1FBQ2xCLGNBQVMsR0FBRyxFQUFFLENBQUM7SUF5RTNCLENBQUM7SUF0RUcsc0JBQUksNkJBQU87YUFBWDtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQztRQUNsQyxDQUFDOzs7T0FBQTtJQUVELHNCQUFJLHlCQUFHO2FBQVA7WUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztRQUNyQixDQUFDO2FBRUQsVUFBUSxLQUFLO1lBQ1QsSUFBSSxDQUFDLElBQUksR0FBRyxLQUFLLENBQUM7UUFDdEIsQ0FBQzs7O09BSkE7SUFNRCxzQkFBSSw4QkFBUTthQUFaO1lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUM7UUFDMUIsQ0FBQzthQUVELFVBQWEsS0FBSztZQUNkLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1FBQzNCLENBQUM7OztPQUpBO0lBTVksOEJBQVcsR0FBeEI7Ozs7Ozs7d0JBRXlCLHFCQUFNLFFBQVEsQ0FBQyxRQUFRLENBQUMsWUFBVSxJQUFJLENBQUMsR0FBSyxDQUFDLEVBQUE7O3dCQUF4RCxRQUFRLEdBQUcsU0FBNkM7d0JBQzlELElBQUksQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFDLEtBQUssQ0FBQzt3QkFDaEMsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQzt3QkFDdEMsc0JBQU8sSUFBSSxDQUFDLFFBQVEsRUFBQzs7O3dCQUVyQixzQkFBTyxJQUFJLEVBQUM7Ozs7O0tBRW5CO0lBRUssaUNBQWMsR0FBcEIsVUFBcUIsRUFBYztZQUFiLGNBQUksRUFBRSxrQkFBTTs7Ozs7Ozt3QkFFMUIscUJBQU0sUUFBUSxDQUFDLFFBQVEsQ0FBQyxpQkFBZSxJQUFJLENBQUMsR0FBRyxTQUFJLElBQU0sRUFBRSxFQUFDLE1BQU0sRUFBRSxNQUFNLEVBQUMsQ0FBQyxFQUFBOzt3QkFBNUUsU0FBNEUsQ0FBQzt3QkFDN0UsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDOzs7O3dCQUVqQixLQUFLLENBQUMsV0FBVyxHQUFHLEdBQUMsQ0FBQyxDQUFDOzs7Ozs7S0FFOUI7SUFFWSxtQ0FBZ0IsR0FBN0I7Ozs7OzRCQUNxQixxQkFBTSxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBQTs7d0JBQTlDLFFBQVEsR0FBRyxTQUFtQzt3QkFDcEQsc0JBQU8sUUFBUSxDQUFDLEtBQUssRUFBQzs7OztLQUN6QjtJQUVZLGlDQUFjLEdBQTNCLFVBQTRCLEVBQUU7Ozs7Ozs7d0JBRWYscUJBQU0sUUFBUSxDQUFDLFFBQVEsQ0FBQyxpQkFBZSxFQUFJLENBQUMsRUFBQTs0QkFBbkQsc0JBQU8sU0FBNEMsRUFBQzs7O3dCQUVwRCxzQkFBTyxJQUFJLEVBQUM7Ozs7O0tBRW5CO0lBRUssK0JBQVksR0FBbEIsVUFBbUIsRUFBUTtZQUFQLGtCQUFNOzs7Ozs7O3dCQUVsQixxQkFBTSxRQUFRLENBQUMsUUFBUSxDQUFDLFlBQVUsSUFBSSxDQUFDLEdBQUssRUFBRSxFQUFDLE1BQU0sRUFBRSxNQUFNLEVBQUMsQ0FBQyxFQUFBOzt3QkFBL0QsU0FBK0QsQ0FBQzt3QkFDaEUsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDOzs7O3dCQUVqQixLQUFLLENBQUMsV0FBVyxHQUFHLEdBQUMsQ0FBQyxDQUFDOzs7Ozs7S0FFOUI7SUFFSyw2QkFBVSxHQUFoQixVQUFpQixFQUFVO1lBQVQsc0JBQVE7Ozs7O3dCQUN0QixJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sR0FBRyxFQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUMsQ0FBQzt3QkFDOUMscUJBQU0sUUFBUSxDQUFDLFFBQVEsQ0FBQyxZQUFVLElBQUksQ0FBQyxHQUFLLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFBOzt3QkFBN0QsU0FBNkQsQ0FBQzs7Ozs7S0FDakU7SUFFTSx5QkFBTSxHQUFiO1FBQ0ksUUFBUSxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQ3RCLENBQUM7SUFDTCxlQUFDO0FBQUQsQ0FBQyxBQTNFRCxJQTJFQztBQUVELGtCQUFlLFFBQVEsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGZpcmViYXNlID0gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1wbHVnaW4tZmlyZWJhc2VcIik7XG5cbmNsYXNzIFVzZXJJbmZvIHtcbiAgICBwcml2YXRlIF91aWQ6IHN0cmluZyA9ICcnO1xuICAgIHByaXZhdGUgX215SGFiaXRzID0gW107XG4gICAgcHJpdmF0ZSBfdXNlckluZm87XG5cbiAgICBnZXQgcHJvZmlsZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3VzZXJJbmZvLnByb2ZpbGU7XG4gICAgfVxuXG4gICAgZ2V0IHVpZCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3VpZDtcbiAgICB9XG5cbiAgICBzZXQgdWlkKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuX3VpZCA9IHZhbHVlO1xuICAgIH1cblxuICAgIGdldCBteUhhYml0cygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX215SGFiaXRzO1xuICAgIH1cblxuICAgIHNldCBteUhhYml0cyh2YWx1ZSkge1xuICAgICAgICB0aGlzLl9teUhhYml0cyA9IHZhbHVlO1xuICAgIH1cblxuICAgIHB1YmxpYyBhc3luYyBnZXRNeUhhYml0cygpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmlyZWJhc2UuZ2V0VmFsdWUoYC91c2Vycy8ke3RoaXMudWlkfWApO1xuICAgICAgICAgICAgdGhpcy5fdXNlckluZm8gPSByZXNwb25zZS52YWx1ZTtcbiAgICAgICAgICAgIHRoaXMubXlIYWJpdHMgPSB0aGlzLl91c2VySW5mby5oYWJpdHM7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5teUhhYml0cztcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhc3luYyBzZXREYWlseUhhYml0cyh7ZGF0ZSwgaGFiaXRzfSkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgYXdhaXQgZmlyZWJhc2Uuc2V0VmFsdWUoYC9kYWlseUhhYml0LyR7dGhpcy51aWR9LyR7ZGF0ZX1gLCB7aGFiaXRzOiBoYWJpdHN9KTtcbiAgICAgICAgICAgIGFsZXJ0KCfrk7HroZ3rkJjsl4jsirXri4jri6QnKTtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgYWxlcnQoJ+uTseuhneyLpO2MqO2VmOyYgOyKteuLiOuLpCcgKyBlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBhc3luYyBnZXRNeURhaWx5SGFiaXRzKCkge1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHRoaXMuZ2V0RGFpbHlIYWJpdHModGhpcy51aWQpO1xuICAgICAgICByZXR1cm4gcmVzcG9uc2UudmFsdWU7XG4gICAgfVxuXG4gICAgcHVibGljIGFzeW5jIGdldERhaWx5SGFiaXRzKGlkKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICByZXR1cm4gYXdhaXQgZmlyZWJhc2UuZ2V0VmFsdWUoYC9kYWlseUhhYml0LyR7aWR9YCk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgYXN5bmMgY3JlYXRlSGFiaXRzKHtoYWJpdHN9KSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBhd2FpdCBmaXJlYmFzZS5zZXRWYWx1ZShgL3VzZXJzLyR7dGhpcy51aWR9YCwge2hhYml0czogaGFiaXRzfSk7XG4gICAgICAgICAgICBhbGVydCgn65Ox66Gd65CY7JeI7Iq164uI64ukJyk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIGFsZXJ0KCfrk7HroZ3si6TtjKjtlZjsmIDsirXri4jri6QnICsgZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhc3luYyBzZXRQcm9maWxlKHtuaWNrTmFtZX0pIHtcbiAgICAgICAgdGhpcy5fdXNlckluZm8ucHJvZmlsZSA9IHtuaWNrTmFtZTogbmlja05hbWV9O1xuICAgICAgICBhd2FpdCBmaXJlYmFzZS5zZXRWYWx1ZShgL3VzZXJzLyR7dGhpcy51aWR9YCwgdGhpcy5fdXNlckluZm8pO1xuICAgIH1cblxuICAgIHB1YmxpYyBsb2dvdXQoKSB7XG4gICAgICAgIGZpcmViYXNlLmxvZ291dCgpO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVXNlckluZm87Il19