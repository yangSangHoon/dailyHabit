"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var model_1 = require("../../model/model");
var buttonModule = require("ui/button");
var builder = require('ui/builder');
var util_1 = require("../../util/util");
var frameModule = require("ui/frame");
var DailyCheck = (function () {
    function DailyCheck(page) {
        this.btnSubmit = page.getViewById('btnSubmit');
        this.habitContainer = page.getViewById('habitContainer');
        this.btnTomorrow = page.getViewById('btnTomorrow');
        this.btnYesterday = page.getViewById('btnYesterday');
        this.date = page.getViewById('date');
        this.btnResult = page.getViewById('btnResult');
        this.defaultSetting();
        this.goYesterday();
        this.eventSetting();
        this.makeMyHabits(model_1.default.userInfo.myHabits);
    }
    DailyCheck.prototype.defaultSetting = function () {
        this.todayDate = new Date();
        this.setDate(this.todayDate);
    };
    DailyCheck.prototype.setDate = function (date) {
        this.date.text = date.getFullYear() + "." + util_1.addZeroDigit(date.getMonth() + 1) + "." + date.getDate();
    };
    DailyCheck.prototype.addHabit = function (habitDbData) {
        if (habitDbData === void 0) { habitDbData = null; }
        var habit = builder.load({
            path: '/component/create/habit',
            name: 'habit'
        });
        habit.getViewById('habitName').text = habitDbData.title;
        this.habitContainer.addChild(habit);
    };
    DailyCheck.prototype.eventSetting = function () {
        var _this = this;
        this.btnSubmit.on(buttonModule.Button.tapEvent, function () {
            _this.goSubmit();
        });
        this.btnTomorrow.on(buttonModule.Button.tapEvent, function () {
            _this.goTommorrow();
        });
        this.btnYesterday.on(buttonModule.Button.tapEvent, function () {
            _this.goYesterday();
        });
        this.btnResult.on(buttonModule.Button.tapEvent, function () {
            _this.goResult();
        });
    };
    DailyCheck.prototype.goTommorrow = function () {
        this.todayDate.setDate(this.todayDate.getDate() + 1);
        this.setDate(this.todayDate);
    };
    DailyCheck.prototype.goYesterday = function () {
        this.todayDate.setDate(this.todayDate.getDate() - 1);
        this.setDate(this.todayDate);
    };
    DailyCheck.prototype.makeMyHabits = function (myHabits) {
        var _this = this;
        console.log('myHabitsmyHabits', JSON.stringify(myHabits));
        if (!myHabits || myHabits.length == 0) {
            this.addHabit();
        }
        else {
            myHabits.forEach(function (habit) {
                _this.addHabit(habit);
            });
        }
    };
    DailyCheck.prototype.goSubmit = function () {
        var habits = [];
        this.habitContainer.eachChildView(function (child) {
            habits.push({
                title: child.getViewById('habitName').text,
                value: Number(child.getViewById('habitCount').text)
            });
        });
        var date = this.date.text.split('.').join('');
        model_1.default.userInfo.setDailyHabits({ date: date, habits: habits });
        this.goResult();
    };
    DailyCheck.prototype.logout = function () {
        model_1.default.userInfo.logout();
    };
    DailyCheck.prototype.goResult = function () {
        var topmost = frameModule.topmost();
        topmost.navigate("component/result/result");
    };
    return DailyCheck;
}());
exports.navigated = function (args) {
    new DailyCheck(args.object);
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGFpbHlDaGVjay5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRhaWx5Q2hlY2sudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwyQ0FBc0M7QUFDdEMsd0NBQTJDO0FBQzNDLElBQU0sT0FBTyxHQUFHLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQztBQUN0Qyx3Q0FBNkM7QUFDN0Msc0NBQXlDO0FBRXpDO0lBVUksb0JBQVksSUFBSTtRQUNaLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUMvQyxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztRQUN6RCxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDbkQsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBQ3JELElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNyQyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLENBQUM7UUFFL0MsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNuQixJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDcEIsSUFBSSxDQUFDLFlBQVksQ0FBQyxlQUFLLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQy9DLENBQUM7SUFFTyxtQ0FBYyxHQUF0QjtRQUNJLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQztRQUM1QixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUNqQyxDQUFDO0lBRU8sNEJBQU8sR0FBZixVQUFn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QUMsV0FBVyxDQUFDLENBQUMsSUFBSTtnQkFDMUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLFlBQVksQ0FBQyxDQUFDLElBQUksQ0FBQzthQUN0RCxDQUFDLENBQUM7UUFDUCxDQUFDLENBQUMsQ0FBQztRQUNILElBQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDaEQsZUFBSyxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsRUFBQyxJQUFJLE1BQUEsRUFBRSxNQUFNLFFBQUEsRUFBQyxDQUFDLENBQUM7UUFDOUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ3BCLENBQUM7SUFFTSwyQkFBTSxHQUFiO1FBQ0ksZUFBSyxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUM1QixDQUFDO0lBRU8sNkJBQVEsR0FBaEI7UUFDSSxJQUFNLE9BQU8sR0FBRyxXQUFXLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDdEMsT0FBTyxDQUFDLFFBQVEsQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO0lBQ2hELENBQUM7SUFDTCxpQkFBQztBQUFELENBQUMsQUFyR0QsSUFxR0M7QUFFRCxPQUFPLENBQUMsU0FBUyxHQUFHLFVBQVUsSUFBSTtJQUM5QixJQUFJLFVBQVUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDaEMsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vZGVsIGZyb20gJy4uLy4uL21vZGVsL21vZGVsJztcbmltcG9ydCBidXR0b25Nb2R1bGUgPSByZXF1aXJlKFwidWkvYnV0dG9uXCIpO1xuY29uc3QgYnVpbGRlciA9IHJlcXVpcmUoJ3VpL2J1aWxkZXInKTtcbmltcG9ydCB7YWRkWmVyb0RpZ2l0fSBmcm9tICcuLi8uLi91dGlsL3V0aWwnO1xuaW1wb3J0IGZyYW1lTW9kdWxlID0gcmVxdWlyZShcInVpL2ZyYW1lXCIpO1xuXG5jbGFzcyBEYWlseUNoZWNrIHtcblxuICAgIHByaXZhdGUgYnRuU3VibWl0O1xuICAgIHByaXZhdGUgaGFiaXRDb250YWluZXI7XG4gICAgcHJpdmF0ZSBidG5Ub21vcnJvdztcbiAgICBwcml2YXRlIGJ0blllc3RlcmRheTtcbiAgICBwcml2YXRlIGRhdGU7XG4gICAgcHJpdmF0ZSB0b2RheURhdGU7XG4gICAgcHJpdmF0ZSBidG5SZXN1bHQ7XG5cbiAgICBjb25zdHJ1Y3RvcihwYWdlKXtcbiAgICAgICAgdGhpcy5idG5TdWJtaXQgPSBwYWdlLmdldFZpZXdCeUlkKCdidG5TdWJtaXQnKTtcbiAgICAgICAgdGhpcy5oYWJpdENvbnRhaW5lciA9IHBhZ2UuZ2V0Vmlld0J5SWQoJ2hhYml0Q29udGFpbmVyJyk7XG4gICAgICAgIHRoaXMuYnRuVG9tb3Jyb3cgPSBwYWdlLmdldFZpZXdCeUlkKCdidG5Ub21vcnJvdycpO1xuICAgICAgICB0aGlzLmJ0blllc3RlcmRheSA9IHBhZ2UuZ2V0Vmlld0J5SWQoJ2J0blllc3RlcmRheScpO1xuICAgICAgICB0aGlzLmRhdGUgPSBwYWdlLmdldFZpZXdCeUlkKCdkYXRlJyk7XG4gICAgICAgIHRoaXMuYnRuUmVzdWx0ID0gcGFnZS5nZXRWaWV3QnlJZCgnYnRuUmVzdWx0Jyk7XG5cbiAgICAgICAgdGhpcy5kZWZhdWx0U2V0dGluZygpO1xuICAgICAgICB0aGlzLmdvWWVzdGVyZGF5KCk7XG4gICAgICAgIHRoaXMuZXZlbnRTZXR0aW5nKCk7XG4gICAgICAgIHRoaXMubWFrZU15SGFiaXRzKG1vZGVsLnVzZXJJbmZvLm15SGFiaXRzKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGRlZmF1bHRTZXR0aW5nKCkge1xuICAgICAgICB0aGlzLnRvZGF5RGF0ZSA9IG5ldyBEYXRlKCk7XG4gICAgICAgIHRoaXMuc2V0RGF0ZSh0aGlzLnRvZGF5RGF0ZSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzZXREYXRlKGRhdGUpe1xuICAgICAgICB0aGlzLmRhdGUudGV4dCA9IGAke2RhdGUuZ2V0RnVsbFllYXIoKX0uJHthZGRaZXJvRGlnaXQoZGF0ZS5nZXRNb250aCgpKzEpfS4ke2RhdGUuZ2V0RGF0ZSgpfWA7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBhZGRIYWJpdChoYWJpdERiRGF0YSA9IG51bGwpIHtcbiAgICAgICAgY29uc3QgaGFiaXQgPSBidWlsZGVyLmxvYWQoe1xuICAgICAgICAgICAgcGF0aDogJy9jb21wb25lbnQvY3JlYXRlL2hhYml0JyxcbiAgICAgICAgICAgIG5hbWU6ICdoYWJpdCdcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaGFiaXQuZ2V0Vmlld0J5SWQoJ2hhYml0TmFtZScpLnRleHQgPSBoYWJpdERiRGF0YS50aXRsZTtcbiAgICAgICAgdGhpcy5oYWJpdENvbnRhaW5lci5hZGRDaGlsZChoYWJpdCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBldmVudFNldHRpbmcoKSB7XG4gICAgICAgIHRoaXMuYnRuU3VibWl0Lm9uKGJ1dHRvbk1vZHVsZS5CdXR0b24udGFwRXZlbnQsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuZ29TdWJtaXQoKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuYnRuVG9tb3Jyb3cub24oYnV0dG9uTW9kdWxlLkJ1dHRvbi50YXBFdmVudCwgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5nb1RvbW1vcnJvdygpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5idG5ZZXN0ZXJkYXkub24oYnV0dG9uTW9kdWxlLkJ1dHRvbi50YXBFdmVudCwgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5nb1llc3RlcmRheSgpO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLmJ0blJlc3VsdC5vbihidXR0b25Nb2R1bGUuQnV0dG9uLnRhcEV2ZW50LCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmdvUmVzdWx0KCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHByaXZhdGUgZ29Ub21tb3Jyb3coKSB7XG4gICAgICAgIHRoaXMudG9kYXlEYXRlLnNldERhdGUodGhpcy50b2RheURhdGUuZ2V0RGF0ZSgpICsgMSk7XG4gICAgICAgIHRoaXMuc2V0RGF0ZSh0aGlzLnRvZGF5RGF0ZSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBnb1llc3RlcmRheSgpIHtcbiAgICAgICAgdGhpcy50b2RheURhdGUuc2V0RGF0ZSh0aGlzLnRvZGF5RGF0ZS5nZXREYXRlKCkgLSAxKTtcbiAgICAgICAgdGhpcy5zZXREYXRlKHRoaXMudG9kYXlEYXRlKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIG1ha2VNeUhhYml0cyhteUhhYml0cykge1xuICAgICAgICBjb25zb2xlLmxvZygnbXlIYWJpdHNteUhhYml0cycsIEpTT04uc3RyaW5naWZ5KG15SGFiaXRzKSk7XG4gICAgICAgIGlmKCFteUhhYml0cyB8fCBteUhhYml0cy5sZW5ndGggPT0gMCl7XG4gICAgICAgICAgICB0aGlzLmFkZEhhYml0KCk7ICAgIFxuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIG15SGFiaXRzLmZvckVhY2goaGFiaXQgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuYWRkSGFiaXQoaGFiaXQpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgZ29TdWJtaXQoKXtcbiAgICAgICAgbGV0IGhhYml0czogQXJyYXk8T2JqZWN0PiA9IFtdO1xuICAgICAgICB0aGlzLmhhYml0Q29udGFpbmVyLmVhY2hDaGlsZFZpZXcoY2hpbGQgPT4ge1xuICAgICAgICAgICAgaGFiaXRzLnB1c2goe1xuICAgICAgICAgICAgICAgIHRpdGxlOiBjaGlsZC5nZXRWaWV3QnlJZCgnaGFiaXROYW1lJykudGV4dCxcbiAgICAgICAgICAgICAgICB2YWx1ZTogTnVtYmVyKGNoaWxkLmdldFZpZXdCeUlkKCdoYWJpdENvdW50JykudGV4dClcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgICAgY29uc3QgZGF0ZSA9IHRoaXMuZGF0ZS50ZXh0LnNwbGl0KCcuJykuam9pbignJyk7XG4gICAgICAgIG1vZGVsLnVzZXJJbmZvLnNldERhaWx5SGFiaXRzKHtkYXRlLCBoYWJpdHN9KTtcbiAgICAgICAgdGhpcy5nb1Jlc3VsdCgpO1xuICAgIH1cblxuICAgIHB1YmxpYyBsb2dvdXQoKSB7XG4gICAgICAgIG1vZGVsLnVzZXJJbmZvLmxvZ291dCgpO1xuICAgIH1cblxuICAgIHByaXZhdGUgZ29SZXN1bHQoKSB7XG4gICAgICAgIGNvbnN0IHRvcG1vc3QgPSBmcmFtZU1vZHVsZS50b3Btb3N0KCk7XG4gICAgICAgIHRvcG1vc3QubmF2aWdhdGUoXCJjb21wb25lbnQvcmVzdWx0L3Jlc3VsdFwiKTtcbiAgICB9XG59XG5cbmV4cG9ydHMubmF2aWdhdGVkID0gZnVuY3Rpb24gKGFyZ3MpIHtcbiAgICBuZXcgRGFpbHlDaGVjayhhcmdzLm9iamVjdCk7XG59OyJdfQ==