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
        resultItem.getViewById('date').text = this.getDate(date);
        var isSuccess = this.getResult(habits);
        resultItem.getViewById('result').text = isSuccess ? '성공' : '실패';
        //resultItem.addClass('success');
        var habitsTxt = '';
        habits.forEach(function (habit) {
            habitsTxt += habit.title + " / " + habit.value + " | ";
        });
        resultItem.getViewById('habits').text = habitsTxt;
        this.habitContainer.addChild(resultItem);
    };
    Result.prototype.getResult = function (habitsResult) {
        var myHabits = model_1.default.userInfo.myHabits;
        var checker = true;
        myHabits.forEach(function (myHabit) {
            var resultHabit = habitsResult.find(function (result) { return result.title === myHabit.title; });
            if (resultHabit.value < myHabit.value) {
                checker = false;
                return;
            }
        });
        return checker;
    };
    Result.prototype.getDate = function (date) {
        var year = date.substring(0, 4);
        var month = date.substring(4, 6);
        var day = date.substring(6, 8);
        return year + "/" + month + "/" + day;
    };
    return Result;
}());
exports.navigated = function (args) {
    new Result(args.object);
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzdWx0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicmVzdWx0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsMkNBQXNDO0FBRXRDLElBQU0sT0FBTyxHQUFHLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQztBQUV0QztJQUlJLGdCQUFZLElBQUk7UUFDWixJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztRQUN6RCxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDdkMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEdBQU0sZUFBSyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsUUFBUSxvQ0FBUSxDQUFDO1FBQzdELElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO0lBQzlCLENBQUM7SUFFSyxtQ0FBa0IsR0FBeEI7Ozs7OzRCQUN3QixxQkFBTSxlQUFLLENBQUMsUUFBUSxDQUFDLGdCQUFnQixFQUFFLEVBQUE7O3dCQUFyRCxXQUFXLEdBQUcsU0FBdUM7d0JBQzNELEdBQUcsQ0FBQyxDQUFLLElBQUksSUFBSSxXQUFXLENBQUMsQ0FBQyxDQUFDOzRCQUMzQixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUM7d0JBQ2pELENBQUM7Ozs7O0tBQ0o7SUFFRCx3QkFBTyxHQUFQLFVBQVEsSUFBSSxFQUFFLE1BQU07UUFDaEIsSUFBTSxVQUFVLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQztZQUM1QixJQUFJLEVBQUUsd0JBQXdCO1lBQzlCLElBQUksRUFBRSxNQUFNO1NBQ2YsQ0FBQyxDQUFDO1FBRUgsVUFBVSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN6RCxJQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3pDLFVBQVUsQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLENBQUMsSUFBSSxHQUFHLFNBQVMsR0FBRyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2hFLGlDQUFpQztRQUNqQyxJQUFJLFNBQVMsR0FBRyxFQUFFLENBQUM7UUFDbkIsTUFBTSxDQUFDLE9BQU8sQ0FBQyxVQUFBLEtBQUs7WUFDaEIsU0FBUyxJQUFPLEtBQUssQ0FBQyxLQUFLLFdBQU0sS0FBSyxDQUFDLEtBQUssUUFBSyxDQUFBO1FBQ3JELENBQUMsQ0FBQyxDQUFDO1FBQ0gsVUFBVSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsQ0FBQyxJQUFJLEdBQUcsU0FBUyxDQUFDO1FBQ2xELElBQUksQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQzdDLENBQUM7SUFFRCwwQkFBUyxHQUFULFVBQVUsWUFBWTtRQUNsQixJQUFNLFFBQVEsR0FBRyxlQUFLLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQztRQUN6QyxJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUM7UUFDbkIsUUFBUSxDQUFDLE9BQU8sQ0FBQyxVQUFBLE9BQU87WUFDcEIsSUFBTSxXQUFXLEdBQUcsWUFBWSxDQUFDLElBQUksQ0FBQyxVQUFBLE1BQU0sSUFBSSxPQUFBLE1BQU0sQ0FBQyxLQUFLLEtBQUssT0FBTyxDQUFDLEtBQUssRUFBOUIsQ0FBOEIsQ0FBQyxDQUFDO1lBQ2hGLEVBQUUsQ0FBQSxDQUFDLFdBQVcsQ0FBQyxLQUFLLEdBQUcsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFBLENBQUM7Z0JBQ2xDLE9BQU8sR0FBRyxLQUFLLENBQUM7Z0JBQ2hCLE1BQU0sQ0FBQztZQUNYLENBQUM7UUFDTCxDQUFDLENBQUMsQ0FBQTtRQUNGLE1BQU0sQ0FBQyxPQUFPLENBQUM7SUFDbkIsQ0FBQztJQUVELHdCQUFPLEdBQVAsVUFBUSxJQUFJO1FBQ1IsSUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDbEMsSUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDbkMsSUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDakMsTUFBTSxDQUFJLElBQUksU0FBSSxLQUFLLFNBQUksR0FBSyxDQUFBO0lBQ3BDLENBQUM7SUFDTCxhQUFDO0FBQUQsQ0FBQyxBQXZERCxJQXVEQztBQUdELE9BQU8sQ0FBQyxTQUFTLEdBQUcsVUFBVSxJQUFJO0lBQzlCLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUM1QixDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9kZWwgZnJvbSAnLi4vLi4vbW9kZWwvbW9kZWwnO1xuaW1wb3J0IGJ1dHRvbk1vZHVsZSA9IHJlcXVpcmUoXCJ1aS9idXR0b25cIik7XG5jb25zdCBidWlsZGVyID0gcmVxdWlyZSgndWkvYnVpbGRlcicpO1xuXG5jbGFzcyBSZXN1bHQge1xuICAgIHByaXZhdGUgaGFiaXRDb250YWluZXI7XG4gICAgcHJpdmF0ZSB0aXRsZTtcblxuICAgIGNvbnN0cnVjdG9yKHBhZ2UpIHtcbiAgICAgICAgdGhpcy5oYWJpdENvbnRhaW5lciA9IHBhZ2UuZ2V0Vmlld0J5SWQoJ2hhYml0Q29udGFpbmVyJyk7XG4gICAgICAgIHRoaXMudGl0bGUgPSBwYWdlLmdldFZpZXdCeUlkKCd0aXRsZScpO1xuICAgICAgICB0aGlzLnRpdGxlLnRleHQgPSBgJHttb2RlbC51c2VySW5mby5wcm9maWxlLm5pY2tOYW1lfeydmCDqsrDqs7zrs7TquLBgO1xuICAgICAgICB0aGlzLnNob3dNeUhhYml0c1Jlc3VsdCgpO1xuICAgIH1cblxuICAgIGFzeW5jIHNob3dNeUhhYml0c1Jlc3VsdCgpIHtcbiAgICAgICAgY29uc3QgZGFpbHlIYWJpdHMgPSBhd2FpdCBtb2RlbC51c2VySW5mby5nZXRNeURhaWx5SGFiaXRzKCk7XG4gICAgICAgIGZvciAobGV0IGRhdGUgaW4gZGFpbHlIYWJpdHMpIHtcbiAgICAgICAgICAgIHRoaXMuYWRkSXRlbShkYXRlLCBkYWlseUhhYml0c1tkYXRlXS5oYWJpdHMpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgYWRkSXRlbShkYXRlLCBoYWJpdHMpIHtcbiAgICAgICAgY29uc3QgcmVzdWx0SXRlbSA9IGJ1aWxkZXIubG9hZCh7XG4gICAgICAgICAgICBwYXRoOiAnL2NvbXBvbmVudC9yZXN1bHQvaXRlbScsXG4gICAgICAgICAgICBuYW1lOiAnaXRlbSdcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmVzdWx0SXRlbS5nZXRWaWV3QnlJZCgnZGF0ZScpLnRleHQgPSB0aGlzLmdldERhdGUoZGF0ZSk7XG4gICAgICAgIGNvbnN0IGlzU3VjY2VzcyA9IHRoaXMuZ2V0UmVzdWx0KGhhYml0cyk7XG4gICAgICAgIHJlc3VsdEl0ZW0uZ2V0Vmlld0J5SWQoJ3Jlc3VsdCcpLnRleHQgPSBpc1N1Y2Nlc3MgPyAn7ISx6rO1JyA6ICfsi6TtjKgnO1xuICAgICAgICAvL3Jlc3VsdEl0ZW0uYWRkQ2xhc3MoJ3N1Y2Nlc3MnKTtcbiAgICAgICAgbGV0IGhhYml0c1R4dCA9ICcnO1xuICAgICAgICBoYWJpdHMuZm9yRWFjaChoYWJpdCA9PiB7XG4gICAgICAgICAgICBoYWJpdHNUeHQgKz0gYCR7aGFiaXQudGl0bGV9IC8gJHtoYWJpdC52YWx1ZX0gfCBgXG4gICAgICAgIH0pO1xuICAgICAgICByZXN1bHRJdGVtLmdldFZpZXdCeUlkKCdoYWJpdHMnKS50ZXh0ID0gaGFiaXRzVHh0O1xuICAgICAgICB0aGlzLmhhYml0Q29udGFpbmVyLmFkZENoaWxkKHJlc3VsdEl0ZW0pO1xuICAgIH1cblxuICAgIGdldFJlc3VsdChoYWJpdHNSZXN1bHQpe1xuICAgICAgICBjb25zdCBteUhhYml0cyA9IG1vZGVsLnVzZXJJbmZvLm15SGFiaXRzO1xuICAgICAgICBsZXQgY2hlY2tlciA9IHRydWU7XG4gICAgICAgIG15SGFiaXRzLmZvckVhY2gobXlIYWJpdCA9PiB7XG4gICAgICAgICAgICBjb25zdCByZXN1bHRIYWJpdCA9IGhhYml0c1Jlc3VsdC5maW5kKHJlc3VsdCA9PiByZXN1bHQudGl0bGUgPT09IG15SGFiaXQudGl0bGUpO1xuICAgICAgICAgICAgaWYocmVzdWx0SGFiaXQudmFsdWUgPCBteUhhYml0LnZhbHVlKXtcbiAgICAgICAgICAgICAgICBjaGVja2VyID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICByZXR1cm4gY2hlY2tlcjtcbiAgICB9XG5cbiAgICBnZXREYXRlKGRhdGUpIHtcbiAgICAgICAgY29uc3QgeWVhciA9IGRhdGUuc3Vic3RyaW5nKDAsIDQpO1xuICAgICAgICBjb25zdCBtb250aCA9IGRhdGUuc3Vic3RyaW5nKDQsIDYpO1xuICAgICAgICBjb25zdCBkYXkgPSBkYXRlLnN1YnN0cmluZyg2LCA4KTtcbiAgICAgICAgcmV0dXJuIGAke3llYXJ9LyR7bW9udGh9LyR7ZGF5fWBcbiAgICB9XG59XG5cblxuZXhwb3J0cy5uYXZpZ2F0ZWQgPSBmdW5jdGlvbiAoYXJncykge1xuICAgIG5ldyBSZXN1bHQoYXJncy5vYmplY3QpO1xufTsiXX0=