"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var model_1 = require("../../model/model");
var builder = require('ui/builder');
var Result = (function () {
    function Result(page) {
        this.habitContainer = page.getViewById('habitContainer');
        this.title = page.getViewById('title');
        this.title.text = model_1.default.userInfo.profile.nickName + "\uC758 \uACB0\uACFC\uBCF4\uAE30";
        this.showMyHabitsResult();
    }
    Result.prototype.showMyHabitsResult = function () {
        return __awaiter(this, void 0, void 0, function () {
            var dailyHabits, date;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, model_1.default.userInfo.getMyDailyHabits()];
                    case 1:
                        dailyHabits = _a.sent();
                        console.log('dailyHabits', JSON.stringify(dailyHabits));
                        for (date in dailyHabits) {
                            this.addItem(date, dailyHabits[date].habits);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    Result.prototype.addItem = function (date, habits) {
        var resultItem = builder.load({
            path: '/component/result/item',
            name: 'item'
        });
        resultItem.getViewById('date').text = date;
        var habitsTxt = '';
        habits.forEach(function (habit) {
            habitsTxt += habit.title + "/" + habit.value + "\n";
        });
        resultItem.getViewById('habits').text = habitsTxt;
        this.habitContainer.addChild(resultItem);
    };
    return Result;
}());
exports.navigated = function (args) {
    new Result(args.object);
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzdWx0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicmVzdWx0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsMkNBQXNDO0FBRXRDLElBQU0sT0FBTyxHQUFHLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQztBQUV0QztJQUlJLGdCQUFZLElBQUk7UUFDWixJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztRQUN6RCxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDdkMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEdBQU0sZUFBSyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsUUFBUSxvQ0FBUSxDQUFDO1FBQzdELElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO0lBQzlCLENBQUM7SUFFSyxtQ0FBa0IsR0FBeEI7Ozs7OzRCQUN3QixxQkFBTSxlQUFLLENBQUMsUUFBUSxDQUFDLGdCQUFnQixFQUFFLEVBQUE7O3dCQUFyRCxXQUFXLEdBQUcsU0FBdUM7d0JBQzNELE9BQU8sQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQzt3QkFDeEQsR0FBRyxDQUFDLENBQUssSUFBSSxJQUFJLFdBQVcsQ0FBQyxDQUFDLENBQUM7NEJBQzNCLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQzt3QkFDakQsQ0FBQzs7Ozs7S0FDSjtJQUVELHdCQUFPLEdBQVAsVUFBUSxJQUFJLEVBQUUsTUFBTTtRQUNoQixJQUFNLFVBQVUsR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDO1lBQzVCLElBQUksRUFBRSx3QkFBd0I7WUFDOUIsSUFBSSxFQUFFLE1BQU07U0FDZixDQUFDLENBQUM7UUFDSCxVQUFVLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDM0MsSUFBSSxTQUFTLEdBQUcsRUFBRSxDQUFDO1FBQ25CLE1BQU0sQ0FBQyxPQUFPLENBQUMsVUFBQSxLQUFLO1lBQ2hCLFNBQVMsSUFBTyxLQUFLLENBQUMsS0FBSyxTQUFJLEtBQUssQ0FBQyxLQUFLLE9BQUksQ0FBQTtRQUNsRCxDQUFDLENBQUMsQ0FBQztRQUNILFVBQVUsQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLENBQUMsSUFBSSxHQUFHLFNBQVMsQ0FBQztRQUNsRCxJQUFJLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUM3QyxDQUFDO0lBQ0wsYUFBQztBQUFELENBQUMsQUFoQ0QsSUFnQ0M7QUFHRCxPQUFPLENBQUMsU0FBUyxHQUFHLFVBQVUsSUFBSTtJQUM5QixJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDNUIsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vZGVsIGZyb20gJy4uLy4uL21vZGVsL21vZGVsJztcbmltcG9ydCBidXR0b25Nb2R1bGUgPSByZXF1aXJlKFwidWkvYnV0dG9uXCIpO1xuY29uc3QgYnVpbGRlciA9IHJlcXVpcmUoJ3VpL2J1aWxkZXInKTtcblxuY2xhc3MgUmVzdWx0IHtcbiAgICBwcml2YXRlIGhhYml0Q29udGFpbmVyO1xuICAgIHByaXZhdGUgdGl0bGU7XG5cbiAgICBjb25zdHJ1Y3RvcihwYWdlKSB7XG4gICAgICAgIHRoaXMuaGFiaXRDb250YWluZXIgPSBwYWdlLmdldFZpZXdCeUlkKCdoYWJpdENvbnRhaW5lcicpO1xuICAgICAgICB0aGlzLnRpdGxlID0gcGFnZS5nZXRWaWV3QnlJZCgndGl0bGUnKTtcbiAgICAgICAgdGhpcy50aXRsZS50ZXh0ID0gYCR7bW9kZWwudXNlckluZm8ucHJvZmlsZS5uaWNrTmFtZX3snZgg6rKw6rO867O06riwYDtcbiAgICAgICAgdGhpcy5zaG93TXlIYWJpdHNSZXN1bHQoKTtcbiAgICB9XG5cbiAgICBhc3luYyBzaG93TXlIYWJpdHNSZXN1bHQoKSB7XG4gICAgICAgIGNvbnN0IGRhaWx5SGFiaXRzID0gYXdhaXQgbW9kZWwudXNlckluZm8uZ2V0TXlEYWlseUhhYml0cygpO1xuICAgICAgICBjb25zb2xlLmxvZygnZGFpbHlIYWJpdHMnLCBKU09OLnN0cmluZ2lmeShkYWlseUhhYml0cykpO1xuICAgICAgICBmb3IgKGxldCBkYXRlIGluIGRhaWx5SGFiaXRzKSB7XG4gICAgICAgICAgICB0aGlzLmFkZEl0ZW0oZGF0ZSwgZGFpbHlIYWJpdHNbZGF0ZV0uaGFiaXRzKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGFkZEl0ZW0oZGF0ZSwgaGFiaXRzKSB7XG4gICAgICAgIGNvbnN0IHJlc3VsdEl0ZW0gPSBidWlsZGVyLmxvYWQoe1xuICAgICAgICAgICAgcGF0aDogJy9jb21wb25lbnQvcmVzdWx0L2l0ZW0nLFxuICAgICAgICAgICAgbmFtZTogJ2l0ZW0nXG4gICAgICAgIH0pO1xuICAgICAgICByZXN1bHRJdGVtLmdldFZpZXdCeUlkKCdkYXRlJykudGV4dCA9IGRhdGU7XG4gICAgICAgIGxldCBoYWJpdHNUeHQgPSAnJztcbiAgICAgICAgaGFiaXRzLmZvckVhY2goaGFiaXQgPT4ge1xuICAgICAgICAgICAgaGFiaXRzVHh0ICs9IGAke2hhYml0LnRpdGxlfS8ke2hhYml0LnZhbHVlfVxcbmBcbiAgICAgICAgfSk7XG4gICAgICAgIHJlc3VsdEl0ZW0uZ2V0Vmlld0J5SWQoJ2hhYml0cycpLnRleHQgPSBoYWJpdHNUeHQ7XG4gICAgICAgIHRoaXMuaGFiaXRDb250YWluZXIuYWRkQ2hpbGQocmVzdWx0SXRlbSk7XG4gICAgfVxufVxuXG5cbmV4cG9ydHMubmF2aWdhdGVkID0gZnVuY3Rpb24gKGFyZ3MpIHtcbiAgICBuZXcgUmVzdWx0KGFyZ3Mub2JqZWN0KTtcbn07Il19