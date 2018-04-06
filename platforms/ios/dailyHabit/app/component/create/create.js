"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var model_1 = require("../../model/model");
var buttonModule = require("ui/button");
var firebase = require("nativescript-plugin-firebase");
var builder = require('ui/builder');
var frameModule = require("ui/frame");
var Create = (function () {
    function Create(page) {
        this.topmost = frameModule.topmost();
        this.btnSubmit = page.getViewById('btnSubmit');
        this.btnAdd = page.getViewById('btnAdd');
        this.habitContainer = page.getViewById('habitContainer');
        this.btnLogout = page.getViewById('btnLogout');
        this.makeMyHabits();
        this.eventSetting();
    }
    Create.prototype.makeMyHabits = function () {
        var _this = this;
        this.habitContainer.removeChildren();
        var myHabits = model_1.default.userInfo.myHabits;
        if (!myHabits || myHabits.length == 0) {
            this.addHabit();
        }
        else {
            myHabits.forEach(function (habit) {
                _this.addHabit(habit);
            });
        }
    };
    Create.prototype.addHabit = function (habitDbData) {
        if (habitDbData === void 0) { habitDbData = null; }
        var habit = builder.load({
            path: '/component/create/habit',
            name: 'habit'
        });
        this.habitContainer.addChild(habit);
        if (habitDbData) {
            habit.getViewById('habitName').text = habitDbData.title;
            habit.getViewById('habitCount').text = habitDbData.value;
        }
    };
    Create.prototype.eventSetting = function () {
        var _this = this;
        this.btnSubmit.on(buttonModule.Button.tapEvent, function () {
            _this.goSubmit();
        });
        this.btnLogout.on(buttonModule.Button.tapEvent, function () {
            _this.logout();
        });
        this.btnAdd.on(buttonModule.Button.tapEvent, function () {
            _this.addHabit();
        });
    };
    Create.prototype.goSubmit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var habits;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        habits = [];
                        this.habitContainer.eachChildView(function (child) {
                            habits.push({
                                title: child.getViewById('habitName').text,
                                value: Number(child.getViewById('habitCount').text)
                            });
                        });
                        return [4 /*yield*/, model_1.default.userInfo.createHabits({ habits: habits })];
                    case 1:
                        _a.sent();
                        this.topmost.navigate("component/main/main");
                        return [2 /*return*/];
                }
            });
        });
    };
    Create.prototype.logout = function () {
        firebase.logout();
    };
    return Create;
}());
exports.navigated = function (args) {
    new Create(args.object);
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY3JlYXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsMkNBQXNDO0FBQ3RDLHdDQUEyQztBQUMzQyxJQUFNLFFBQVEsR0FBRyxPQUFPLENBQUMsOEJBQThCLENBQUMsQ0FBQztBQUN6RCxJQUFNLE9BQU8sR0FBRyxPQUFPLENBQUMsWUFBWSxDQUFDLENBQUM7QUFDdEMsc0NBQXlDO0FBRXpDO0lBT0ksZ0JBQVksSUFBSTtRQURSLFlBQU8sR0FBRyxXQUFXLENBQUMsT0FBTyxFQUFFLENBQUM7UUFFcEMsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQy9DLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUN6QyxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztRQUN6RCxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLENBQUM7UUFFL0MsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUN4QixDQUFDO0lBRU8sNkJBQVksR0FBcEI7UUFBQSxpQkFVQztRQVRHLElBQUksQ0FBQyxjQUFjLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDckMsSUFBTSxRQUFRLEdBQUcsZUFBSyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUM7UUFDekMsRUFBRSxDQUFDLENBQUMsQ0FBQyxRQUFRLElBQUksUUFBUSxDQUFDLE1BQU0sSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3BDLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUNwQixDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDSixRQUFRLENBQUMsT0FBTyxDQUFDLFVBQUEsS0FBSztnQkFDbEIsS0FBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUN6QixDQUFDLENBQUMsQ0FBQztRQUNQLENBQUM7SUFDTCxDQUFDO0lBRU8seUJBQVEsR0FBaEIsVUFBaUIsV0FBa0I7UUFBbEIsNEJBQUEsRUFBQSxrQkFBa0I7UUFDL0IsSUFBTSxLQUFLLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQztZQUN2QixJQUFJLEVBQUUseUJBQXlCO1lBQy9CLElBQUksRUFBRSxPQUFPO1NBQ2hCLENBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRXBDLEVBQUUsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7WUFDZCxLQUFLLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxDQUFDLElBQUksR0FBRyxXQUFXLENBQUMsS0FBSyxDQUFDO1lBQ3hELEtBQUssQ0FBQyxXQUFXLENBQUMsWUFBWSxDQUFDLENBQUMsSUFBSSxHQUFHLFdBQVcsQ0FBQyxLQUFLLENBQUM7UUFDN0QsQ0FBQztJQUNMLENBQUM7SUFFTyw2QkFBWSxHQUFwQjtRQUFBLGlCQVVDO1FBVEcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUU7WUFDNUMsS0FBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ3BCLENBQUMsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUU7WUFDNUMsS0FBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ2xCLENBQUMsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUU7WUFDekMsS0FBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ3BCLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVhLHlCQUFRLEdBQXRCOzs7Ozs7d0JBRVEsTUFBTSxHQUFrQixFQUFFLENBQUM7d0JBQy9CLElBQUksQ0FBQyxjQUFjLENBQUMsYUFBYSxDQUFDLFVBQUEsS0FBSzs0QkFDbkMsTUFBTSxDQUFDLElBQUksQ0FBQztnQ0FDUixLQUFLLEVBQUUsS0FBSyxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUMsQ0FBQyxJQUFJO2dDQUMxQyxLQUFLLEVBQUUsTUFBTSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsWUFBWSxDQUFDLENBQUMsSUFBSSxDQUFDOzZCQUN0RCxDQUFDLENBQUM7d0JBQ1AsQ0FBQyxDQUFDLENBQUM7d0JBRUgscUJBQU0sZUFBSyxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsRUFBQyxNQUFNLFFBQUEsRUFBQyxDQUFDLEVBQUE7O3dCQUEzQyxTQUEyQyxDQUFDO3dCQUM1QyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDOzs7OztLQUNoRDtJQUVNLHVCQUFNLEdBQWI7UUFDSSxRQUFRLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDdEIsQ0FBQztJQUdMLGFBQUM7QUFBRCxDQUFDLEFBMUVELElBMEVDO0FBRUQsT0FBTyxDQUFDLFNBQVMsR0FBRyxVQUFVLElBQUk7SUFDOUIsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQzVCLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb2RlbCBmcm9tICcuLi8uLi9tb2RlbC9tb2RlbCc7XG5pbXBvcnQgYnV0dG9uTW9kdWxlID0gcmVxdWlyZShcInVpL2J1dHRvblwiKTtcbmNvbnN0IGZpcmViYXNlID0gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1wbHVnaW4tZmlyZWJhc2VcIik7XG5jb25zdCBidWlsZGVyID0gcmVxdWlyZSgndWkvYnVpbGRlcicpO1xuaW1wb3J0IGZyYW1lTW9kdWxlID0gcmVxdWlyZShcInVpL2ZyYW1lXCIpO1xuXG5jbGFzcyBDcmVhdGUge1xuXG4gICAgcHJpdmF0ZSBidG5TdWJtaXQ7XG4gICAgcHJpdmF0ZSBidG5Mb2dvdXQ7XG4gICAgcHJpdmF0ZSBoYWJpdENvbnRhaW5lcjtcbiAgICBwcml2YXRlIGJ0bkFkZDtcbiAgICBwcml2YXRlIHRvcG1vc3QgPSBmcmFtZU1vZHVsZS50b3Btb3N0KCk7XG4gICAgY29uc3RydWN0b3IocGFnZSkge1xuICAgICAgICB0aGlzLmJ0blN1Ym1pdCA9IHBhZ2UuZ2V0Vmlld0J5SWQoJ2J0blN1Ym1pdCcpO1xuICAgICAgICB0aGlzLmJ0bkFkZCA9IHBhZ2UuZ2V0Vmlld0J5SWQoJ2J0bkFkZCcpO1xuICAgICAgICB0aGlzLmhhYml0Q29udGFpbmVyID0gcGFnZS5nZXRWaWV3QnlJZCgnaGFiaXRDb250YWluZXInKTtcbiAgICAgICAgdGhpcy5idG5Mb2dvdXQgPSBwYWdlLmdldFZpZXdCeUlkKCdidG5Mb2dvdXQnKTtcblxuICAgICAgICB0aGlzLm1ha2VNeUhhYml0cygpO1xuICAgICAgICB0aGlzLmV2ZW50U2V0dGluZygpO1xuICAgIH1cblxuICAgIHByaXZhdGUgbWFrZU15SGFiaXRzKCkge1xuICAgICAgICB0aGlzLmhhYml0Q29udGFpbmVyLnJlbW92ZUNoaWxkcmVuKCk7XG4gICAgICAgIGNvbnN0IG15SGFiaXRzID0gbW9kZWwudXNlckluZm8ubXlIYWJpdHM7XG4gICAgICAgIGlmICghbXlIYWJpdHMgfHwgbXlIYWJpdHMubGVuZ3RoID09IDApIHtcbiAgICAgICAgICAgIHRoaXMuYWRkSGFiaXQoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG15SGFiaXRzLmZvckVhY2goaGFiaXQgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuYWRkSGFiaXQoaGFiaXQpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIGFkZEhhYml0KGhhYml0RGJEYXRhID0gbnVsbCkge1xuICAgICAgICBjb25zdCBoYWJpdCA9IGJ1aWxkZXIubG9hZCh7XG4gICAgICAgICAgICBwYXRoOiAnL2NvbXBvbmVudC9jcmVhdGUvaGFiaXQnLFxuICAgICAgICAgICAgbmFtZTogJ2hhYml0J1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLmhhYml0Q29udGFpbmVyLmFkZENoaWxkKGhhYml0KTtcblxuICAgICAgICBpZiAoaGFiaXREYkRhdGEpIHtcbiAgICAgICAgICAgIGhhYml0LmdldFZpZXdCeUlkKCdoYWJpdE5hbWUnKS50ZXh0ID0gaGFiaXREYkRhdGEudGl0bGU7XG4gICAgICAgICAgICBoYWJpdC5nZXRWaWV3QnlJZCgnaGFiaXRDb3VudCcpLnRleHQgPSBoYWJpdERiRGF0YS52YWx1ZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgZXZlbnRTZXR0aW5nKCkge1xuICAgICAgICB0aGlzLmJ0blN1Ym1pdC5vbihidXR0b25Nb2R1bGUuQnV0dG9uLnRhcEV2ZW50LCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmdvU3VibWl0KCk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmJ0bkxvZ291dC5vbihidXR0b25Nb2R1bGUuQnV0dG9uLnRhcEV2ZW50LCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmxvZ291dCgpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5idG5BZGQub24oYnV0dG9uTW9kdWxlLkJ1dHRvbi50YXBFdmVudCwgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5hZGRIYWJpdCgpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGFzeW5jIGdvU3VibWl0KCkge1xuXG4gICAgICAgIGxldCBoYWJpdHM6IEFycmF5PE9iamVjdD4gPSBbXTtcbiAgICAgICAgdGhpcy5oYWJpdENvbnRhaW5lci5lYWNoQ2hpbGRWaWV3KGNoaWxkID0+IHtcbiAgICAgICAgICAgIGhhYml0cy5wdXNoKHtcbiAgICAgICAgICAgICAgICB0aXRsZTogY2hpbGQuZ2V0Vmlld0J5SWQoJ2hhYml0TmFtZScpLnRleHQsXG4gICAgICAgICAgICAgICAgdmFsdWU6IE51bWJlcihjaGlsZC5nZXRWaWV3QnlJZCgnaGFiaXRDb3VudCcpLnRleHQpXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgYXdhaXQgbW9kZWwudXNlckluZm8uY3JlYXRlSGFiaXRzKHtoYWJpdHN9KTtcbiAgICAgICAgdGhpcy50b3Btb3N0Lm5hdmlnYXRlKFwiY29tcG9uZW50L21haW4vbWFpblwiKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgbG9nb3V0KCkge1xuICAgICAgICBmaXJlYmFzZS5sb2dvdXQoKTtcbiAgICB9XG5cblxufVxuXG5leHBvcnRzLm5hdmlnYXRlZCA9IGZ1bmN0aW9uIChhcmdzKSB7XG4gICAgbmV3IENyZWF0ZShhcmdzLm9iamVjdCk7XG59OyJdfQ==