"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var model_1 = require("../../model/model");
var builder = require('ui/builder');
var GroupResult = (function () {
    function GroupResult(page) {
        this.habitContainer = page.getViewById('habitContainer');
        this.showGroupHabitsResult();
    }
    GroupResult.prototype.showGroupHabitsResult = function () {
        return __awaiter(this, void 0, void 0, function () {
            var dailyHabits, date;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, model_1.default.userInfo.getMyDailyHabits()];
                    case 1:
                        dailyHabits = _a.sent();
                        for (date in dailyHabits) {
                            this.addItem(date, dailyHabits[date].habits);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    GroupResult.prototype.addItem = function (date, habits) {
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
    return GroupResult;
}());
var groupResult = null;
exports.navigated = function (args) {
    if (!groupResult) {
        groupResult = new GroupResult(args.object);
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JvdXBSZXN1bHQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJncm91cFJlc3VsdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLDJDQUFzQztBQUN0QyxJQUFNLE9BQU8sR0FBRyxPQUFPLENBQUMsWUFBWSxDQUFDLENBQUM7QUFFdEM7SUFHSSxxQkFBWSxJQUFJO1FBQ1osSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLGdCQUFnQixDQUFDLENBQUM7UUFDekQsSUFBSSxDQUFDLHFCQUFxQixFQUFFLENBQUM7SUFDakMsQ0FBQztJQUVLLDJDQUFxQixHQUEzQjs7Ozs7NEJBQ3dCLHFCQUFNLGVBQUssQ0FBQyxRQUFRLENBQUMsZ0JBQWdCLEVBQUUsRUFBQTs7d0JBQXJELFdBQVcsR0FBRyxTQUF1Qzt3QkFDM0QsR0FBRyxDQUFDLENBQUssSUFBSSxJQUFJLFdBQVcsQ0FBQyxDQUFDLENBQUM7NEJBQzNCLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQzt3QkFDakQsQ0FBQzs7Ozs7S0FDSjtJQUVELDZCQUFPLEdBQVAsVUFBUSxJQUFJLEVBQUUsTUFBTTtRQUNoQixJQUFNLFVBQVUsR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDO1lBQzVCLElBQUksRUFBRSx3QkFBd0I7WUFDOUIsSUFBSSxFQUFFLE1BQU07U0FDZixDQUFDLENBQUM7UUFDSCxVQUFVLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDM0MsSUFBSSxTQUFTLEdBQUcsRUFBRSxDQUFDO1FBQ25CLE1BQU0sQ0FBQyxPQUFPLENBQUMsVUFBQSxLQUFLO1lBQ2hCLFNBQVMsSUFBTyxLQUFLLENBQUMsS0FBSyxTQUFJLEtBQUssQ0FBQyxLQUFLLE9BQUksQ0FBQTtRQUNsRCxDQUFDLENBQUMsQ0FBQztRQUNILFVBQVUsQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLENBQUMsSUFBSSxHQUFHLFNBQVMsQ0FBQztRQUNsRCxJQUFJLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUM3QyxDQUFDO0lBQ0wsa0JBQUM7QUFBRCxDQUFDLEFBNUJELElBNEJDO0FBRUQsSUFBSSxXQUFXLEdBQUcsSUFBSSxDQUFDO0FBQ3ZCLE9BQU8sQ0FBQyxTQUFTLEdBQUcsVUFBVSxJQUFJO0lBQzlCLEVBQUUsQ0FBQSxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUEsQ0FBQztRQUNiLFdBQVcsR0FBRyxJQUFJLFdBQVcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDL0MsQ0FBQztBQUVMLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBidXR0b25Nb2R1bGUgPSByZXF1aXJlKFwidWkvYnV0dG9uXCIpO1xuaW1wb3J0IG1vZGVsIGZyb20gJy4uLy4uL21vZGVsL21vZGVsJztcbmNvbnN0IGJ1aWxkZXIgPSByZXF1aXJlKCd1aS9idWlsZGVyJyk7XG5cbmNsYXNzIEdyb3VwUmVzdWx0IHtcbiAgICBwcml2YXRlIGhhYml0Q29udGFpbmVyO1xuXG4gICAgY29uc3RydWN0b3IocGFnZSkge1xuICAgICAgICB0aGlzLmhhYml0Q29udGFpbmVyID0gcGFnZS5nZXRWaWV3QnlJZCgnaGFiaXRDb250YWluZXInKTtcbiAgICAgICAgdGhpcy5zaG93R3JvdXBIYWJpdHNSZXN1bHQoKTtcbiAgICB9XG5cbiAgICBhc3luYyBzaG93R3JvdXBIYWJpdHNSZXN1bHQoKSB7XG4gICAgICAgIGNvbnN0IGRhaWx5SGFiaXRzID0gYXdhaXQgbW9kZWwudXNlckluZm8uZ2V0TXlEYWlseUhhYml0cygpO1xuICAgICAgICBmb3IgKGxldCBkYXRlIGluIGRhaWx5SGFiaXRzKSB7XG4gICAgICAgICAgICB0aGlzLmFkZEl0ZW0oZGF0ZSwgZGFpbHlIYWJpdHNbZGF0ZV0uaGFiaXRzKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGFkZEl0ZW0oZGF0ZSwgaGFiaXRzKSB7XG4gICAgICAgIGNvbnN0IHJlc3VsdEl0ZW0gPSBidWlsZGVyLmxvYWQoe1xuICAgICAgICAgICAgcGF0aDogJy9jb21wb25lbnQvcmVzdWx0L2l0ZW0nLFxuICAgICAgICAgICAgbmFtZTogJ2l0ZW0nXG4gICAgICAgIH0pO1xuICAgICAgICByZXN1bHRJdGVtLmdldFZpZXdCeUlkKCdkYXRlJykudGV4dCA9IGRhdGU7XG4gICAgICAgIGxldCBoYWJpdHNUeHQgPSAnJztcbiAgICAgICAgaGFiaXRzLmZvckVhY2goaGFiaXQgPT4ge1xuICAgICAgICAgICAgaGFiaXRzVHh0ICs9IGAke2hhYml0LnRpdGxlfS8ke2hhYml0LnZhbHVlfVxcbmBcbiAgICAgICAgfSk7XG4gICAgICAgIHJlc3VsdEl0ZW0uZ2V0Vmlld0J5SWQoJ2hhYml0cycpLnRleHQgPSBoYWJpdHNUeHQ7XG4gICAgICAgIHRoaXMuaGFiaXRDb250YWluZXIuYWRkQ2hpbGQocmVzdWx0SXRlbSk7XG4gICAgfVxufVxuXG5sZXQgZ3JvdXBSZXN1bHQgPSBudWxsO1xuZXhwb3J0cy5uYXZpZ2F0ZWQgPSBmdW5jdGlvbiAoYXJncykge1xuICAgIGlmKCFncm91cFJlc3VsdCl7XG4gICAgICAgIGdyb3VwUmVzdWx0ID0gbmV3IEdyb3VwUmVzdWx0KGFyZ3Mub2JqZWN0KTtcbiAgICB9XG5cbn07Il19