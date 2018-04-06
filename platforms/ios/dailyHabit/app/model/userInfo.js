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
    UserInfo.prototype.getUserInfo = function () {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, firebase.getValue("/users/" + this.uid)];
                    case 1:
                        response = _a.sent();
                        this._userInfo = response.value || {};
                        this.myHabits = this._userInfo.habits;
                        return [2 /*return*/];
                }
            });
        });
    };
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
                        this._userInfo = response.value || {};
                        console.log('this._userInfo', JSON.stringify(this._userInfo));
                        this.checkDefaultProfile(this._userInfo);
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
    UserInfo.prototype.checkDefaultProfile = function (userInfo) {
        if (!userInfo.profile) {
            userInfo.profile = {
                nickname: "nickname" + Math.ceil(Math.random() * 100)
            };
        }
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
                        console.log('this.uid', this.uid);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlckluZm8uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ1c2VySW5mby50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLElBQU0sUUFBUSxHQUFHLE9BQU8sQ0FBQyw4QkFBOEIsQ0FBQyxDQUFDO0FBRXpEO0lBQUE7UUFDWSxTQUFJLEdBQVcsRUFBRSxDQUFDO1FBQ2xCLGNBQVMsR0FBRyxFQUFFLENBQUM7SUFtRzNCLENBQUM7SUFoR0csc0JBQUksNkJBQU87YUFBWDtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQztRQUNsQyxDQUFDOzs7T0FBQTtJQUVELHNCQUFJLHlCQUFHO2FBQVA7WUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztRQUNyQixDQUFDO2FBVUQsVUFBUSxLQUFLO1lBQ1QsSUFBSSxDQUFDLElBQUksR0FBRyxLQUFLLENBQUM7UUFDdEIsQ0FBQzs7O09BWkE7SUFFRCxzQkFBSSw4QkFBUTthQUFaO1lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUM7UUFDMUIsQ0FBQzthQUVELFVBQWEsS0FBSztZQUNkLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1FBQzNCLENBQUM7OztPQUpBO0lBVUQsc0JBQUksOEJBQVE7YUFBWjtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDO1FBQzFCLENBQUM7YUFFRCxVQUFhLEtBQUs7WUFDZCxJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztRQUMzQixDQUFDOzs7T0FKQTtJQU1ZLDhCQUFXLEdBQXhCOzs7Ozs0QkFDcUIscUJBQU0sUUFBUSxDQUFDLFFBQVEsQ0FBQyxZQUFVLElBQUksQ0FBQyxHQUFLLENBQUMsRUFBQTs7d0JBQXhELFFBQVEsR0FBRyxTQUE2Qzt3QkFDOUQsSUFBSSxDQUFDLFNBQVMsR0FBRyxRQUFRLENBQUMsS0FBSyxJQUFJLEVBQUUsQ0FBQzt3QkFDdEMsSUFBSSxDQUFDLFFB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QTVELFNBQTRELENBQUM7Ozs7O0tBQ2hFO0lBRU0seUJBQU0sR0FBYjtRQUNJLFFBQVEsQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUN0QixDQUFDO0lBQ0wsZUFBQztBQUFELENBQUMsQUFyR0QsSUFxR0M7QUFFRCxrQkFBZSxRQUFRLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBmaXJlYmFzZSA9IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtcGx1Z2luLWZpcmViYXNlXCIpO1xuXG5jbGFzcyBVc2VySW5mbyB7XG4gICAgcHJpdmF0ZSBfdWlkOiBzdHJpbmcgPSAnJztcbiAgICBwcml2YXRlIF9teUhhYml0cyA9IFtdO1xuICAgIHByaXZhdGUgX3VzZXJJbmZvO1xuXG4gICAgZ2V0IHByb2ZpbGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl91c2VySW5mby5wcm9maWxlO1xuICAgIH1cblxuICAgIGdldCB1aWQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl91aWQ7XG4gICAgfVxuXG4gICAgZ2V0IHVzZXJJbmZvKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fdXNlckluZm87XG4gICAgfVxuXG4gICAgc2V0IHVzZXJJbmZvKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuX3VzZXJJbmZvID0gdmFsdWU7XG4gICAgfVxuXG4gICAgc2V0IHVpZCh2YWx1ZSkge1xuICAgICAgICB0aGlzLl91aWQgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBnZXQgbXlIYWJpdHMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9teUhhYml0cztcbiAgICB9XG5cbiAgICBzZXQgbXlIYWJpdHModmFsdWUpIHtcbiAgICAgICAgdGhpcy5fbXlIYWJpdHMgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgYXN5bmMgZ2V0VXNlckluZm8oKSB7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmlyZWJhc2UuZ2V0VmFsdWUoYC91c2Vycy8ke3RoaXMudWlkfWApO1xuICAgICAgICB0aGlzLl91c2VySW5mbyA9IHJlc3BvbnNlLnZhbHVlIHx8IHt9O1xuICAgICAgICB0aGlzLm15SGFiaXRzID0gdGhpcy5fdXNlckluZm8uaGFiaXRzO1xuICAgIH1cblxuICAgIHB1YmxpYyBhc3luYyBnZXRNeUhhYml0cygpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmlyZWJhc2UuZ2V0VmFsdWUoYC91c2Vycy8ke3RoaXMudWlkfWApO1xuICAgICAgICAgICAgdGhpcy5fdXNlckluZm8gPSByZXNwb25zZS52YWx1ZSB8fCB7fTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCd0aGlzLl91c2VySW5mbycsIEpTT04uc3RyaW5naWZ5KHRoaXMuX3VzZXJJbmZvKSk7XG4gICAgICAgICAgICB0aGlzLmNoZWNrRGVmYXVsdFByb2ZpbGUodGhpcy5fdXNlckluZm8pO1xuICAgICAgICAgICAgdGhpcy5teUhhYml0cyA9IHRoaXMuX3VzZXJJbmZvLmhhYml0cztcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm15SGFiaXRzO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgY2hlY2tEZWZhdWx0UHJvZmlsZSh1c2VySW5mbykge1xuICAgICAgICBpZighdXNlckluZm8ucHJvZmlsZSkge1xuICAgICAgICAgICAgdXNlckluZm8ucHJvZmlsZSA9IHtcbiAgICAgICAgICAgICAgICBuaWNrbmFtZTogYG5pY2tuYW1lJHtNYXRoLmNlaWwoTWF0aC5yYW5kb20oKSAqIDEwMCl9YFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgYXN5bmMgc2V0RGFpbHlIYWJpdHMoe2RhdGUsIGhhYml0c30pIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGF3YWl0IGZpcmViYXNlLnNldFZhbHVlKGAvZGFpbHlIYWJpdC8ke3RoaXMudWlkfS8ke2RhdGV9YCwge2hhYml0czogaGFiaXRzfSk7XG4gICAgICAgICAgICBhbGVydCgn65Ox66Gd65CY7JeI7Iq164uI64ukJyk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIGFsZXJ0KCfrk7HroZ3si6TtjKjtlZjsmIDsirXri4jri6QnICsgZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgYXN5bmMgZ2V0TXlEYWlseUhhYml0cygpIHtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCB0aGlzLmdldERhaWx5SGFiaXRzKHRoaXMudWlkKTtcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlLnZhbHVlO1xuICAgIH1cblxuICAgIHB1YmxpYyBhc3luYyBnZXREYWlseUhhYml0cyhpZCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgcmV0dXJuIGF3YWl0IGZpcmViYXNlLmdldFZhbHVlKGAvZGFpbHlIYWJpdC8ke2lkfWApO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGFzeW5jIGNyZWF0ZUhhYml0cyh7aGFiaXRzfSkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ3RoaXMudWlkJywgdGhpcy51aWQpO1xuICAgICAgICAgICAgdGhpcy51c2VySW5mby5oYWJpdHMgPSBoYWJpdHM7XG4gICAgICAgICAgICBhd2FpdCBmaXJlYmFzZS5zZXRWYWx1ZShgL3VzZXJzLyR7dGhpcy51aWR9YCwgdGhpcy51c2VySW5mbyk7XG4gICAgICAgICAgICBhbGVydCgn65Ox66Gd65CY7JeI7Iq164uI64ukJyk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIGFsZXJ0KCfrk7HroZ3si6TtjKjtlZjsmIDsirXri4jri6QnICsgZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhc3luYyBzZXRQcm9maWxlKHtuaWNrTmFtZX0pIHtcbiAgICAgICAgdGhpcy51c2VySW5mby5wcm9maWxlID0ge25pY2tOYW1lOiBuaWNrTmFtZX07XG4gICAgICAgIGF3YWl0IGZpcmViYXNlLnNldFZhbHVlKGAvdXNlcnMvJHt0aGlzLnVpZH1gLCB0aGlzLnVzZXJJbmZvKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgbG9nb3V0KCkge1xuICAgICAgICBmaXJlYmFzZS5sb2dvdXQoKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFVzZXJJbmZvOyJdfQ==