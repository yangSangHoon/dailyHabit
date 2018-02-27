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
    Object.defineProperty(UserInfo.prototype, "userInfo", {
        get: function () {
            return this._userInfo;
        },
        set: function (value) {
            this._userInfo = value;
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
                        this.userInfo.habits = habits;
                        return [4 /*yield*/, firebase.setValue("/users/" + this.uid, this.userInfo)];
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
                        this.userInfo.profile = { nickName: nickName };
                        return [4 /*yield*/, firebase.setValue("/users/" + this.uid, this.userInfo)];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlckluZm8uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ1c2VySW5mby50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLElBQU0sUUFBUSxHQUFHLE9BQU8sQ0FBQyw4QkFBOEIsQ0FBQyxDQUFDO0FBRXpEO0lBQUE7UUFDWSxTQUFJLEdBQVcsRUFBRSxDQUFDO1FBQ2xCLGNBQVMsR0FBRyxFQUFFLENBQUM7SUFrRjNCLENBQUM7SUEvRUcsc0JBQUksNkJBQU87YUFBWDtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQztRQUNsQyxDQUFDOzs7T0FBQTtJQUVELHNCQUFJLHlCQUFHO2FBQVA7WUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztRQUNyQixDQUFDO2FBVUQsVUFBUSxLQUFLO1lBQ1QsSUFBSSxDQUFDLElBQUksR0FBRyxLQUFLLENBQUM7UUFDdEIsQ0FBQzs7O09BWkE7SUFFRCxzQkFBSSw4QkFBUTthQUFaO1lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUM7UUFDMUIsQ0FBQzthQUVELFVBQWEsS0FBSztZQUNkLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1FBQzNCLENBQUM7OztPQUpBO0lBVUQsc0JBQUksOEJBQVE7YUFBWjtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDO1FBQzFCLENBQUM7YUFFRCxVQUFhLEtBQUs7WUFDZCxJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztRQUMzQixDQUFDOzs7T0FKQTtJQU1ZLDhCQUFXLEdBQXhCOzs7Ozs7O3dCQUV5QixxQkFBTSxRQUFRLENBQUMsUUFBUSxDQUFDLFlBQVUsSUFBSSxDQUFDLEdBQUssQ0FBQyxFQUFBOzt3QkFBeEQsUUFBUSxHQUFHLFNBQTZDO3dCQUM5RCxJQUFJLENBQUMsU0FBUyxHQUFHLFFBQVEsQ0FBQyxLQUFLLENBQUM7d0JBQ2hDLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUM7d0JBQ3RDLHNCQUFPLElBQUksQ0FBQyxRQUFRLEVBQUM7Ozt3QkFFckIsc0JBQU8sSUFBSSxFQUFDOzs7OztLQUVuQjtJQUVLLGlDQUFjLEdBQXBCLFVBQXFCLEVBQWM7WUFBYixjQUFJLEVBQUUsa0JBQU07Ozs7Ozs7d0JBRTFCLHFCQUFNLFFBQVEsQ0FBQyxRQUFRLENBQUMsaUJBQWUsSUFBSSxDQUFDLEdBQUcsU0FBSSxJQUFNLEVBQUUsRUFBQyxNQUFNLEVBQUUsTUFBTSxFQUFDLENBQUMsRUFBQTs7d0JBQTVFLFNBQTRFLENBQUM7d0JBQzdFLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQzs7Ozt3QkFFakIsS0FBSyxDQUFDLFdBQVcsR0FBRyxHQUFDLENBQUMsQ0FBQzs7Ozs7O0tBRTlCO0lBRVksbUNBQWdCLEdBQTdCOzs7Ozs0QkFDcUIscUJBQU0sSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUE7O3dCQUE5QyxRQUFRLEdBQUcsU0FBbUM7d0JBQ3BELHNCQUFPLFFBQVEsQ0FBQyxLQUFLLEVBQUM7Ozs7S0FDekI7SUFFWSxpQ0FBYyxHQUEzQixVQUE0QixFQUFFOzs7Ozs7O3dCQUVmLHFCQUFNLFFBQVEsQ0FBQyxRQUFRLENBQUMsaUJBQWUsRUFBSSxDQUFDLEVBQUE7NEJBQW5ELHNCQUFPLFNBQTRDLEVBQUM7Ozt3QkFFcEQsc0JBQU8sSUFBSSxFQUFDOzs7OztLQUVuQjtJQUVLLCtCQUFZLEdBQWxCLFVBQW1CLEVBQVE7WUFBUCxrQkFBTTs7Ozs7Ozt3QkFFbEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO3dCQUM5QixxQkFBTSxRQUFRLENBQUMsUUFBUSxDQUFDLFlBQVUsSUFBSSxDQUFDLEdBQUssRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUE7O3dCQUE1RCxTQUE0RCxDQUFDO3dCQUM3RCxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUM7Ozs7d0JBRWpCLEtBQUssQ0FBQyxXQUFXLEdBQUcsR0FBQyxDQUFDLENBQUM7Ozs7OztLQUU5QjtJQUVLLDZCQUFVLEdBQWhCLFVBQWlCLEVBQVU7WUFBVCxzQkFBUTs7Ozs7d0JBQ3RCLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxHQUFHLEVBQUMsUUFBUSxFQUFFLFFBQVEsRUFBQyxDQUFDO3dCQUM3QyxxQkFBTSxRQUFRLENBQUMsUUFBUSxDQUFDLFlBQVUsSUFBSSxDQUFDLEdBQUssRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUE7O3dCQUE1RCxTQUE0RCxDQUFDOzs7OztLQUNoRTtJQUVNLHlCQUFNLEdBQWI7UUFDSSxRQUFRLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDdEIsQ0FBQztJQUNMLGVBQUM7QUFBRCxDQUFDLEFBcEZELElBb0ZDO0FBRUQsa0JBQWUsUUFBUSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgZmlyZWJhc2UgPSByZXF1aXJlKFwibmF0aXZlc2NyaXB0LXBsdWdpbi1maXJlYmFzZVwiKTtcblxuY2xhc3MgVXNlckluZm8ge1xuICAgIHByaXZhdGUgX3VpZDogc3RyaW5nID0gJyc7XG4gICAgcHJpdmF0ZSBfbXlIYWJpdHMgPSBbXTtcbiAgICBwcml2YXRlIF91c2VySW5mbztcblxuICAgIGdldCBwcm9maWxlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fdXNlckluZm8ucHJvZmlsZTtcbiAgICB9XG5cbiAgICBnZXQgdWlkKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fdWlkO1xuICAgIH1cblxuICAgIGdldCB1c2VySW5mbygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3VzZXJJbmZvO1xuICAgIH1cblxuICAgIHNldCB1c2VySW5mbyh2YWx1ZSkge1xuICAgICAgICB0aGlzLl91c2VySW5mbyA9IHZhbHVlO1xuICAgIH1cblxuICAgIHNldCB1aWQodmFsdWUpIHtcbiAgICAgICAgdGhpcy5fdWlkID0gdmFsdWU7XG4gICAgfVxuXG4gICAgZ2V0IG15SGFiaXRzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fbXlIYWJpdHM7XG4gICAgfVxuXG4gICAgc2V0IG15SGFiaXRzKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuX215SGFiaXRzID0gdmFsdWU7XG4gICAgfVxuXG4gICAgcHVibGljIGFzeW5jIGdldE15SGFiaXRzKCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmaXJlYmFzZS5nZXRWYWx1ZShgL3VzZXJzLyR7dGhpcy51aWR9YCk7XG4gICAgICAgICAgICB0aGlzLl91c2VySW5mbyA9IHJlc3BvbnNlLnZhbHVlO1xuICAgICAgICAgICAgdGhpcy5teUhhYml0cyA9IHRoaXMuX3VzZXJJbmZvLmhhYml0cztcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm15SGFiaXRzO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGFzeW5jIHNldERhaWx5SGFiaXRzKHtkYXRlLCBoYWJpdHN9KSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBhd2FpdCBmaXJlYmFzZS5zZXRWYWx1ZShgL2RhaWx5SGFiaXQvJHt0aGlzLnVpZH0vJHtkYXRlfWAsIHtoYWJpdHM6IGhhYml0c30pO1xuICAgICAgICAgICAgYWxlcnQoJ+uTseuhneuQmOyXiOyKteuLiOuLpCcpO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICBhbGVydCgn65Ox66Gd7Iuk7Yyo7ZWY7JiA7Iq164uI64ukJyArIGUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIGFzeW5jIGdldE15RGFpbHlIYWJpdHMoKSB7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgdGhpcy5nZXREYWlseUhhYml0cyh0aGlzLnVpZCk7XG4gICAgICAgIHJldHVybiByZXNwb25zZS52YWx1ZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgYXN5bmMgZ2V0RGFpbHlIYWJpdHMoaWQpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHJldHVybiBhd2FpdCBmaXJlYmFzZS5nZXRWYWx1ZShgL2RhaWx5SGFiaXQvJHtpZH1gKTtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhc3luYyBjcmVhdGVIYWJpdHMoe2hhYml0c30pIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHRoaXMudXNlckluZm8uaGFiaXRzID0gaGFiaXRzO1xuICAgICAgICAgICAgYXdhaXQgZmlyZWJhc2Uuc2V0VmFsdWUoYC91c2Vycy8ke3RoaXMudWlkfWAsIHRoaXMudXNlckluZm8pO1xuICAgICAgICAgICAgYWxlcnQoJ+uTseuhneuQmOyXiOyKteuLiOuLpCcpO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICBhbGVydCgn65Ox66Gd7Iuk7Yyo7ZWY7JiA7Iq164uI64ukJyArIGUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgYXN5bmMgc2V0UHJvZmlsZSh7bmlja05hbWV9KSB7XG4gICAgICAgIHRoaXMudXNlckluZm8ucHJvZmlsZSA9IHtuaWNrTmFtZTogbmlja05hbWV9O1xuICAgICAgICBhd2FpdCBmaXJlYmFzZS5zZXRWYWx1ZShgL3VzZXJzLyR7dGhpcy51aWR9YCwgdGhpcy51c2VySW5mbyk7XG4gICAgfVxuXG4gICAgcHVibGljIGxvZ291dCgpIHtcbiAgICAgICAgZmlyZWJhc2UubG9nb3V0KCk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBVc2VySW5mbzsiXX0=