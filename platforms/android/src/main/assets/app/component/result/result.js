"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var model_1 = require("../../model/model");
var builder = require('ui/builder');
var Result = (function () {
    function Result(page) {
        this.penaltyMoney = 0;
        this.habitContainer = page.getViewById('habitContainer');
        this.title = page.getViewById('title');
        this.penaltyMoneyLabel = page.getViewById('penaltyMoney');
        this.title.text = model_1.default.userInfo.profile.nickName + "\uC758 \uACB0\uACFC\uBCF4\uAE30";
        this.showMyHabitsResult();
    }
    ;
    Result.prototype.getPenaltyMoney = function () {
        return '1,000';
    };
    Result.prototype.plusPenaltyMoney = function () {
        this.penaltyMoney += 1000;
        this.penaltyMoneyLabel.text = this.penaltyMoney + "\uC6D0";
    };
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
        if (!isSuccess) {
            this.plusPenaltyMoney();
        }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzdWx0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicmVzdWx0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsMkNBQXNDO0FBRXRDLElBQU0sT0FBTyxHQUFHLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQztBQUV0QztJQU1JLGdCQUFZLElBQUk7UUFGUixpQkFBWSxHQUFHLENBQUMsQ0FBQztRQUdyQixJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztRQUN6RCxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDdkMsSUFBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsY0FBYyxDQUFDLENBQUM7UUFDMUQsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEdBQU0sZUFBSyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsUUFBUSxvQ0FBUSxDQUFDO1FBQzdELElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO0lBQzlCLENBQUM7SUFSd0IsQ0FBQztJQVUxQixnQ0FBZSxHQUFmO1FBQ0ksTUFBTSxDQUFDLE9BQU8sQ0FBQTtJQUNsQixDQUFDO0lBRUQsaUNBQWdCLEdBQWhCO1FBQ0ksSUFBSSxDQUFDLFlBQVksSUFBSSxJQUFJLENBQUM7UUFDMUIsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksR0FBTSxJQUFJLENBQUMsWUFBWSxXQUFHLENBQUM7SUFDMUQsQ0FBQztJQUVLLG1DQUFrQixHQUF4Qjs7Ozs7NEJBQ3dCLHFCQUFNLGVBQUssQ0FBQyxRQUFRLENBQUMsZ0JBQWdCLEVBQUUsRUFBQTs7d0JBQXJELFdBQVcsR0FBRyxTQUF1Qzt3QkFDM0QsR0FBRyxDQUFDLENBQUssSUFBSSxJQUFJLFdBQVcsQ0FBQyxDQUFDLENBQUM7NEJBQzNCLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQzt3QkFDakQsQ0FBQzs7Ozs7S0FDSjtJQUVELHdCQUFPLEdBQVAsVUFBUSxJQUFJLEVBQUUsTUFBTTtRQUNoQixJQUFNLFVBQVUsR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDO1lBQzVCLElBQUksRUFBRSx3QkFBd0I7WUFDOUIsSUFBSSxFQUFFLE1BQU07U0FDZixDQUFDLENBQUM7UUFFSCxVQUFVLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3pELElBQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDekMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsQ0FBQyxJQUFJLEdBQUcsU0FBUyxHQUFHLElBQUksR0FBRyxJQUFJLENBQUM7UUFDaEUsRUFBRSxDQUFBLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQSxDQUFDO1lBQ1gsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7UUFDNUIsQ0FBQztRQUNELGlDQUFpQztRQUNqQyxJQUFJLFNBQVMsR0FBRyxFQUFFLENBQUM7UUFDbkIsTUFBTSxDQUFDLE9BQU8sQ0FBQyxVQUFBLEtBQUs7WUFDaEIsU0FBUyxJQUFPLEtBQUssQ0FBQyxLQUFLLFdBQU0sS0FBSyxDQUFDLEtBQUssUUFBSyxDQUFBO1FBQ3JELENBQUMsQ0FBQyxDQUFDO1FBQ0gsVUFBVSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsQ0FBQyxJQUFJLEdBQUcsU0FBUyxDQUFDO1FBQ2xELElBQUksQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQzdDLENBQUM7SUFFRCwwQkFBUyxHQUFULFVBQVUsWUFBWTtRQUNsQixJQUFNLFFBQVEsR0FBRyxlQUFLLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQztRQUN6QyxJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUM7UUFDbkIsUUFBUSxDQUFDLE9BQU8sQ0FBQyxVQUFBLE9BQU87WUFDcEIsSUFBTSxXQUFXLEdBQUcsWUFBWSxDQUFDLElBQUksQ0FBQyxVQUFBLE1BQU0sSUFBSSxPQUFBLE1BQU0sQ0FBQyxLQUFLLEtBQUssT0FBTyxDQUFDLEtBQUssRUFBOUIsQ0FBOEIsQ0FBQyxDQUFDO1lBQ2hGLEVBQUUsQ0FBQSxDQUFDLFdBQVcsQ0FBQyxLQUFLLEdBQUcsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFBLENBQUM7Z0JBQ2xDLE9BQU8sR0FBRyxLQUFLLENBQUM7Z0JBQ2hCLE1BQU0sQ0FBQztZQUNYLENBQUM7UUFDTCxDQUFDLENBQUMsQ0FBQTtRQUNGLE1BQU0sQ0FBQyxPQUFPLENBQUM7SUFDbkIsQ0FBQztJQUVELHdCQUFPLEdBQVAsVUFBUSxJQUFJO1FBQ1IsSUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDbEMsSUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDbkMsSUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDakMsTUFBTSxDQUFJLElBQUksU0FBSSxLQUFLLFNBQUksR0FBSyxDQUFBO0lBQ3BDLENBQUM7SUFDTCxhQUFDO0FBQUQsQ0FBQyxBQXRFRCxJQXNFQztBQUdELE9BQU8sQ0FBQyxTQUFTLEdBQUcsVUFBVSxJQUFJO0lBQzlCLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUM1QixDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9kZWwgZnJvbSAnLi4vLi4vbW9kZWwvbW9kZWwnO1xuaW1wb3J0IGJ1dHRvbk1vZHVsZSA9IHJlcXVpcmUoXCJ1aS9idXR0b25cIik7XG5jb25zdCBidWlsZGVyID0gcmVxdWlyZSgndWkvYnVpbGRlcicpO1xuXG5jbGFzcyBSZXN1bHQge1xuICAgIHByaXZhdGUgaGFiaXRDb250YWluZXI7XG4gICAgcHJpdmF0ZSB0aXRsZTtcbiAgICBwcml2YXRlIHBlbmFsdHlNb25leUxhYmVsO1xuICAgIHByaXZhdGUgcGVuYWx0eU1vbmV5ID0gMDs7XG5cbiAgICBjb25zdHJ1Y3RvcihwYWdlKSB7XG4gICAgICAgIHRoaXMuaGFiaXRDb250YWluZXIgPSBwYWdlLmdldFZpZXdCeUlkKCdoYWJpdENvbnRhaW5lcicpO1xuICAgICAgICB0aGlzLnRpdGxlID0gcGFnZS5nZXRWaWV3QnlJZCgndGl0bGUnKTtcbiAgICAgICAgdGhpcy5wZW5hbHR5TW9uZXlMYWJlbCA9IHBhZ2UuZ2V0Vmlld0J5SWQoJ3BlbmFsdHlNb25leScpO1xuICAgICAgICB0aGlzLnRpdGxlLnRleHQgPSBgJHttb2RlbC51c2VySW5mby5wcm9maWxlLm5pY2tOYW1lfeydmCDqsrDqs7zrs7TquLBgO1xuICAgICAgICB0aGlzLnNob3dNeUhhYml0c1Jlc3VsdCgpO1xuICAgIH1cblxuICAgIGdldFBlbmFsdHlNb25leSgpIHtcbiAgICAgICAgcmV0dXJuICcxLDAwMCdcbiAgICB9XG5cbiAgICBwbHVzUGVuYWx0eU1vbmV5KCkge1xuICAgICAgICB0aGlzLnBlbmFsdHlNb25leSArPSAxMDAwO1xuICAgICAgICB0aGlzLnBlbmFsdHlNb25leUxhYmVsLnRleHQgPSBgJHt0aGlzLnBlbmFsdHlNb25leX3sm5BgO1xuICAgIH1cblxuICAgIGFzeW5jIHNob3dNeUhhYml0c1Jlc3VsdCgpIHtcbiAgICAgICAgY29uc3QgZGFpbHlIYWJpdHMgPSBhd2FpdCBtb2RlbC51c2VySW5mby5nZXRNeURhaWx5SGFiaXRzKCk7XG4gICAgICAgIGZvciAobGV0IGRhdGUgaW4gZGFpbHlIYWJpdHMpIHtcbiAgICAgICAgICAgIHRoaXMuYWRkSXRlbShkYXRlLCBkYWlseUhhYml0c1tkYXRlXS5oYWJpdHMpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgYWRkSXRlbShkYXRlLCBoYWJpdHMpIHtcbiAgICAgICAgY29uc3QgcmVzdWx0SXRlbSA9IGJ1aWxkZXIubG9hZCh7XG4gICAgICAgICAgICBwYXRoOiAnL2NvbXBvbmVudC9yZXN1bHQvaXRlbScsXG4gICAgICAgICAgICBuYW1lOiAnaXRlbSdcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmVzdWx0SXRlbS5nZXRWaWV3QnlJZCgnZGF0ZScpLnRleHQgPSB0aGlzLmdldERhdGUoZGF0ZSk7XG4gICAgICAgIGNvbnN0IGlzU3VjY2VzcyA9IHRoaXMuZ2V0UmVzdWx0KGhhYml0cyk7XG4gICAgICAgIHJlc3VsdEl0ZW0uZ2V0Vmlld0J5SWQoJ3Jlc3VsdCcpLnRleHQgPSBpc1N1Y2Nlc3MgPyAn7ISx6rO1JyA6ICfsi6TtjKgnO1xuICAgICAgICBpZighaXNTdWNjZXNzKXtcbiAgICAgICAgICAgIHRoaXMucGx1c1BlbmFsdHlNb25leSgpO1xuICAgICAgICB9XG4gICAgICAgIC8vcmVzdWx0SXRlbS5hZGRDbGFzcygnc3VjY2VzcycpO1xuICAgICAgICBsZXQgaGFiaXRzVHh0ID0gJyc7XG4gICAgICAgIGhhYml0cy5mb3JFYWNoKGhhYml0ID0+IHtcbiAgICAgICAgICAgIGhhYml0c1R4dCArPSBgJHtoYWJpdC50aXRsZX0gLyAke2hhYml0LnZhbHVlfSB8IGBcbiAgICAgICAgfSk7XG4gICAgICAgIHJlc3VsdEl0ZW0uZ2V0Vmlld0J5SWQoJ2hhYml0cycpLnRleHQgPSBoYWJpdHNUeHQ7XG4gICAgICAgIHRoaXMuaGFiaXRDb250YWluZXIuYWRkQ2hpbGQocmVzdWx0SXRlbSk7XG4gICAgfVxuXG4gICAgZ2V0UmVzdWx0KGhhYml0c1Jlc3VsdCl7XG4gICAgICAgIGNvbnN0IG15SGFiaXRzID0gbW9kZWwudXNlckluZm8ubXlIYWJpdHM7XG4gICAgICAgIGxldCBjaGVja2VyID0gdHJ1ZTtcbiAgICAgICAgbXlIYWJpdHMuZm9yRWFjaChteUhhYml0ID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdEhhYml0ID0gaGFiaXRzUmVzdWx0LmZpbmQocmVzdWx0ID0+IHJlc3VsdC50aXRsZSA9PT0gbXlIYWJpdC50aXRsZSk7XG4gICAgICAgICAgICBpZihyZXN1bHRIYWJpdC52YWx1ZSA8IG15SGFiaXQudmFsdWUpe1xuICAgICAgICAgICAgICAgIGNoZWNrZXIgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIHJldHVybiBjaGVja2VyO1xuICAgIH1cblxuICAgIGdldERhdGUoZGF0ZSkge1xuICAgICAgICBjb25zdCB5ZWFyID0gZGF0ZS5zdWJzdHJpbmcoMCwgNCk7XG4gICAgICAgIGNvbnN0IG1vbnRoID0gZGF0ZS5zdWJzdHJpbmcoNCwgNik7XG4gICAgICAgIGNvbnN0IGRheSA9IGRhdGUuc3Vic3RyaW5nKDYsIDgpO1xuICAgICAgICByZXR1cm4gYCR7eWVhcn0vJHttb250aH0vJHtkYXl9YFxuICAgIH1cbn1cblxuXG5leHBvcnRzLm5hdmlnYXRlZCA9IGZ1bmN0aW9uIChhcmdzKSB7XG4gICAgbmV3IFJlc3VsdChhcmdzLm9iamVjdCk7XG59OyJdfQ==