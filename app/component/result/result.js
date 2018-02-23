"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var model_1 = require("../../model/model");
var builder = require('ui/builder');
var Result = (function () {
    function Result(page) {
        this.habitContainer = page.getViewById('habitContainer');
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzdWx0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicmVzdWx0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsMkNBQXNDO0FBRXRDLElBQU0sT0FBTyxHQUFHLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQztBQUV0QztJQUdJLGdCQUFZLElBQUk7UUFDWixJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztRQUN6RCxJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztJQUM5QixDQUFDO0lBRUssbUNBQWtCLEdBQXhCOzs7Ozs0QkFDd0IscUJBQU0sZUFBSyxDQUFDLFFBQVEsQ0FBQyxnQkFBZ0IsRUFBRSxFQUFBOzt3QkFBckQsV0FBVyxHQUFHLFNBQXVDO3dCQUMzRCxPQUFPLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7d0JBQ3hELEdBQUcsQ0FBQyxDQUFLLElBQUksSUFBSSxXQUFXLENBQUMsQ0FBQyxDQUFDOzRCQUMzQixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUM7d0JBQ2pELENBQUM7Ozs7O0tBQ0o7SUFFRCx3QkFBTyxHQUFQLFVBQVEsSUFBSSxFQUFFLE1BQU07UUFDaEIsSUFBTSxVQUFVLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQztZQUM1QixJQUFJLEVBQUUsd0JBQXdCO1lBQzlCLElBQUksRUFBRSxNQUFNO1NBQ2YsQ0FBQyxDQUFDO1FBQ0gsVUFBVSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQzNDLElBQUksU0FBUyxHQUFHLEVBQUUsQ0FBQztRQUNuQixNQUFNLENBQUMsT0FBTyxDQUFDLFVBQUEsS0FBSztZQUNoQixTQUFTLElBQU8sS0FBSyxDQUFDLEtBQUssU0FBSSxLQUFLLENBQUMsS0FBSyxPQUFJLENBQUE7UUFDbEQsQ0FBQyxDQUFDLENBQUM7UUFDSCxVQUFVLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDLElBQUksR0FBRyxTQUFTLENBQUM7UUFDbEQsSUFBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDN0MsQ0FBQztJQUNMLGFBQUM7QUFBRCxDQUFDLEFBN0JELElBNkJDO0FBRUQsT0FBTyxDQUFDLFNBQVMsR0FBRyxVQUFVLElBQUk7SUFDOUIsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQzVCLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb2RlbCBmcm9tICcuLi8uLi9tb2RlbC9tb2RlbCc7XG5pbXBvcnQgYnV0dG9uTW9kdWxlID0gcmVxdWlyZShcInVpL2J1dHRvblwiKTtcbmNvbnN0IGJ1aWxkZXIgPSByZXF1aXJlKCd1aS9idWlsZGVyJyk7XG5cbmNsYXNzIFJlc3VsdCB7XG4gICAgcHJpdmF0ZSBoYWJpdENvbnRhaW5lcjtcblxuICAgIGNvbnN0cnVjdG9yKHBhZ2UpIHtcbiAgICAgICAgdGhpcy5oYWJpdENvbnRhaW5lciA9IHBhZ2UuZ2V0Vmlld0J5SWQoJ2hhYml0Q29udGFpbmVyJyk7XG4gICAgICAgIHRoaXMuc2hvd015SGFiaXRzUmVzdWx0KCk7XG4gICAgfVxuXG4gICAgYXN5bmMgc2hvd015SGFiaXRzUmVzdWx0KCkge1xuICAgICAgICBjb25zdCBkYWlseUhhYml0cyA9IGF3YWl0IG1vZGVsLnVzZXJJbmZvLmdldE15RGFpbHlIYWJpdHMoKTtcbiAgICAgICAgY29uc29sZS5sb2coJ2RhaWx5SGFiaXRzJywgSlNPTi5zdHJpbmdpZnkoZGFpbHlIYWJpdHMpKTtcbiAgICAgICAgZm9yIChsZXQgZGF0ZSBpbiBkYWlseUhhYml0cykge1xuICAgICAgICAgICAgdGhpcy5hZGRJdGVtKGRhdGUsIGRhaWx5SGFiaXRzW2RhdGVdLmhhYml0cyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhZGRJdGVtKGRhdGUsIGhhYml0cykge1xuICAgICAgICBjb25zdCByZXN1bHRJdGVtID0gYnVpbGRlci5sb2FkKHtcbiAgICAgICAgICAgIHBhdGg6ICcvY29tcG9uZW50L3Jlc3VsdC9pdGVtJyxcbiAgICAgICAgICAgIG5hbWU6ICdpdGVtJ1xuICAgICAgICB9KTtcbiAgICAgICAgcmVzdWx0SXRlbS5nZXRWaWV3QnlJZCgnZGF0ZScpLnRleHQgPSBkYXRlO1xuICAgICAgICBsZXQgaGFiaXRzVHh0ID0gJyc7XG4gICAgICAgIGhhYml0cy5mb3JFYWNoKGhhYml0ID0+IHtcbiAgICAgICAgICAgIGhhYml0c1R4dCArPSBgJHtoYWJpdC50aXRsZX0vJHtoYWJpdC52YWx1ZX1cXG5gXG4gICAgICAgIH0pO1xuICAgICAgICByZXN1bHRJdGVtLmdldFZpZXdCeUlkKCdoYWJpdHMnKS50ZXh0ID0gaGFiaXRzVHh0O1xuICAgICAgICB0aGlzLmhhYml0Q29udGFpbmVyLmFkZENoaWxkKHJlc3VsdEl0ZW0pO1xuICAgIH1cbn1cblxuZXhwb3J0cy5uYXZpZ2F0ZWQgPSBmdW5jdGlvbiAoYXJncykge1xuICAgIG5ldyBSZXN1bHQoYXJncy5vYmplY3QpO1xufTsiXX0=