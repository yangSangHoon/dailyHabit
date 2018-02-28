"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var observable_1 = require("data/observable");
var firebase = require("nativescript-plugin-firebase");
var frameModule = require("ui/frame");
var model_1 = require("./model/model");
var buttonModule = require("ui/button");
var utils_1 = require("utils/utils");
var absolute_layout_1 = require("ui/layouts/absolute-layout");
var HelloWorldModel = (function (_super) {
    __extends(HelloWorldModel, _super);
    function HelloWorldModel(page) {
        var _this = _super.call(this) || this;
        _this.topmost = frameModule.topmost();
        _this.checkLogin();
        _this.btn1 = page.getViewById('btn1');
        _this.btn2 = page.getViewById('btn2');
        _this.btn3 = page.getViewById('btn3');
        _this.btn4 = page.getViewById('btn4');
        _this.btn5 = page.getViewById('btn5');
        _this.stage = page.getViewById('stage');
        _this.stageWidth = _this.getWidth(_this.stage);
        _this.stageHeight = _this.getHeight(_this.stage);
        _this.eventSetting();
        _this.layoutSetting();
        return _this;
    }
    HelloWorldModel.prototype.layoutSetting = function () {
        console.log('this.stageWidth', this.stageWidth);
        absolute_layout_1.AbsoluteLayout.setLeft(this.btn2, this.stageWidth / 2);
        absolute_layout_1.AbsoluteLayout.setLeft(this.btn4, this.stageWidth / 2);
        absolute_layout_1.AbsoluteLayout.setTop(this.btn1, this.stageHeight / 9);
        absolute_layout_1.AbsoluteLayout.setTop(this.btn2, this.stageHeight / 9);
        absolute_layout_1.AbsoluteLayout.setTop(this.btn3, this.stageHeight / 3);
        absolute_layout_1.AbsoluteLayout.setTop(this.btn4, this.stageHeight / 3);
        absolute_layout_1.AbsoluteLayout.setTop(this.btn5, this.stageHeight / 1.7);
    };
    HelloWorldModel.prototype.getWidth = function (view) {
        return utils_1.layout.toDeviceIndependentPixels(view.getMeasuredWidth());
    };
    HelloWorldModel.prototype.getHeight = function (view) {
        return utils_1.layout.toDeviceIndependentPixels(view.getMeasuredHeight());
    };
    HelloWorldModel.prototype.eventSetting = function () {
        var _this = this;
        this.btn1.on(buttonModule.Button.tapEvent, function () {
            _this.navigate("component/create/create");
        });
        this.btn2.on(buttonModule.Button.tapEvent, function () {
            _this.navigate("component/dailyCheck/dailyCheck");
        });
        this.btn3.on(buttonModule.Button.tapEvent, function () {
            _this.navigate("component/result/result");
        });
        this.btn4.on(buttonModule.Button.tapEvent, function () {
            _this.navigate("component/profile/profile");
        });
        this.btn5.on(buttonModule.Button.tapEvent, function () {
            _this.navigate("component/groupResult/groupResult");
        });
    };
    HelloWorldModel.prototype.navigate = function (url) {
        this.topmost.navigate(url);
    };
    HelloWorldModel.prototype.checkLogin = function () {
        firebase.init({
            onAuthStateChanged: function (data) {
                return __awaiter(this, void 0, void 0, function () {
                    var myHabits;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                console.log(data.loggedIn ? "Logged in to firebase" : "Logged out from firebase");
                                if (!data.loggedIn) return [3 /*break*/, 2];
                                model_1.default.userInfo.uid = data.user.uid;
                                return [4 /*yield*/, model_1.default.userInfo.getMyHabits()];
                            case 1:
                                myHabits = _a.sent();
                                return [3 /*break*/, 3];
                            case 2:
                                this.topmost.navigate("component/login/login");
                                _a.label = 3;
                            case 3: return [2 /*return*/];
                        }
                    });
                });
            }
        }).then(function (instance) {
            console.log('instance', instance);
            console.log("firebase.init done");
        }, function (error) {
            console.log("firebase.init error: " + error);
        });
    };
    ;
    return HelloWorldModel;
}(observable_1.Observable));
exports.HelloWorldModel = HelloWorldModel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi12aWV3LW1vZGVsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibWFpbi12aWV3LW1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsOENBQTJDO0FBQzNDLElBQU0sUUFBUSxHQUFHLE9BQU8sQ0FBQyw4QkFBOEIsQ0FBQyxDQUFDO0FBQ3pELHNDQUF5QztBQUN6Qyx1Q0FBa0M7QUFDbEMsd0NBQTJDO0FBQzNDLHFDQUFtQztBQUNuQyw4REFBMEQ7QUFFMUQ7SUFBcUMsbUNBQVU7SUFhM0MseUJBQVksSUFBSTtRQUFoQixZQUNJLGlCQUFPLFNBWVY7UUFsQk8sYUFBTyxHQUFHLFdBQVcsQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQU9wQyxLQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDbEIsS0FBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3JDLEtBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNyQyxLQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDckMsS0FBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3JDLEtBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNyQyxLQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDdkMsS0FBSSxDQUFDLFVBQVUsR0FBRyxLQUFJLENBQUMsUUFBUSxDQUFDLEtBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUM1QyxLQUFJLENBQUMsV0FBVyxHQUFHLEtBQUksQ0FBQyxTQUFTLENBQUMsS0FBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzlDLEtBQUksQ0FBQyxZQUFZLEVB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QUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsR0FBRyx1QkFBdUIsR0FBRywwQkFBMEIsQ0FBQyxDQUFDO3FDQUU5RSxJQUFJLENBQUMsUUFBUSxFQUFiLHdCQUFhO2dDQUNiLGVBQUssQ0FBQyxRQUFRLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDO2dDQUNsQixxQkFBTSxlQUFLLENBQUMsUUFBUSxDQUFDLFdBQVcsRUFBRSxFQUFBOztnQ0FBN0MsUUFBUSxHQUFHLFNBQWtDOzs7Z0NBT25ELElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLHVCQUF1QixDQUFDLENBQUM7Ozs7OzthQUV0RDtTQUNKLENBQUMsQ0FBQyxJQUFJLENBQ0gsVUFBQSxRQUFRO1lBQ0osT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLEVBQUUsUUFBUSxDQUFDLENBQUM7WUFDbEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO1FBQ3RDLENBQUMsRUFDRCxVQUFBLEtBQUs7WUFDRCxPQUFPLENBQUMsR0FBRyxDQUFDLDBCQUF3QixLQUFPLENBQUMsQ0FBQztRQUNqRCxDQUFDLENBQ0osQ0FBQztJQUNOLENBQUM7SUFBQSxDQUFDO0lBQ04sc0JBQUM7QUFBRCxDQUFDLEFBcEdELENBQXFDLHVCQUFVLEdBb0c5QztBQXBHWSwwQ0FBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSAnZGF0YS9vYnNlcnZhYmxlJztcbmNvbnN0IGZpcmViYXNlID0gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1wbHVnaW4tZmlyZWJhc2VcIik7XG5pbXBvcnQgZnJhbWVNb2R1bGUgPSByZXF1aXJlKFwidWkvZnJhbWVcIik7XG5pbXBvcnQgbW9kZWwgZnJvbSAnLi9tb2RlbC9tb2RlbCc7XG5pbXBvcnQgYnV0dG9uTW9kdWxlID0gcmVxdWlyZShcInVpL2J1dHRvblwiKTtcbmltcG9ydCB7bGF5b3V0fSBmcm9tIFwidXRpbHMvdXRpbHNcIjtcbmltcG9ydCB7QWJzb2x1dGVMYXlvdXR9IGZyb20gJ3VpL2xheW91dHMvYWJzb2x1dGUtbGF5b3V0JztcblxuZXhwb3J0IGNsYXNzIEhlbGxvV29ybGRNb2RlbCBleHRlbmRzIE9ic2VydmFibGUge1xuXG4gICAgcHJpdmF0ZSBidG4xO1xuICAgIHByaXZhdGUgYnRuMjtcbiAgICBwcml2YXRlIGJ0bjM7XG4gICAgcHJpdmF0ZSBidG40O1xuICAgIHByaXZhdGUgYnRuNTtcbiAgICBwcml2YXRlIHN0YWdlO1xuICAgIHByaXZhdGUgdG9wbW9zdCA9IGZyYW1lTW9kdWxlLnRvcG1vc3QoKTtcblxuICAgIHByaXZhdGUgc3RhZ2VXaWR0aDogbnVtYmVyO1xuICAgIHByaXZhdGUgc3RhZ2VIZWlnaHQ6IG51bWJlcjtcblxuICAgIGNvbnN0cnVjdG9yKHBhZ2UpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5jaGVja0xvZ2luKCk7XG4gICAgICAgIHRoaXMuYnRuMSA9IHBhZ2UuZ2V0Vmlld0J5SWQoJ2J0bjEnKTtcbiAgICAgICAgdGhpcy5idG4yID0gcGFnZS5nZXRWaWV3QnlJZCgnYnRuMicpO1xuICAgICAgICB0aGlzLmJ0bjMgPSBwYWdlLmdldFZpZXdCeUlkKCdidG4zJyk7XG4gICAgICAgIHRoaXMuYnRuNCA9IHBhZ2UuZ2V0Vmlld0J5SWQoJ2J0bjQnKTtcbiAgICAgICAgdGhpcy5idG41ID0gcGFnZS5nZXRWaWV3QnlJZCgnYnRuNScpO1xuICAgICAgICB0aGlzLnN0YWdlID0gcGFnZS5nZXRWaWV3QnlJZCgnc3RhZ2UnKTtcbiAgICAgICAgdGhpcy5zdGFnZVdpZHRoID0gdGhpcy5nZXRXaWR0aCh0aGlzLnN0YWdlKTtcbiAgICAgICAgdGhpcy5zdGFnZUhlaWdodCA9IHRoaXMuZ2V0SGVpZ2h0KHRoaXMuc3RhZ2UpO1xuICAgICAgICB0aGlzLmV2ZW50U2V0dGluZygpO1xuICAgICAgICB0aGlzLmxheW91dFNldHRpbmcoKTtcbiAgICB9XG5cbiAgICBsYXlvdXRTZXR0aW5nKCkge1xuICAgICAgICBjb25zb2xlLmxvZygndGhpcy5zdGFnZVdpZHRoJywgdGhpcy5zdGFnZVdpZHRoKTtcbiAgICAgICAgQWJzb2x1dGVMYXlvdXQuc2V0TGVmdCh0aGlzLmJ0bjIsIHRoaXMuc3RhZ2VXaWR0aC8yKTtcbiAgICAgICAgQWJzb2x1dGVMYXlvdXQuc2V0TGVmdCh0aGlzLmJ0bjQsIHRoaXMuc3RhZ2VXaWR0aC8yKTtcbiAgICAgICAgQWJzb2x1dGVMYXlvdXQuc2V0VG9wKHRoaXMuYnRuMSwgdGhpcy5zdGFnZUhlaWdodC85KTtcbiAgICAgICAgQWJzb2x1dGVMYXlvdXQuc2V0VG9wKHRoaXMuYnRuMiwgdGhpcy5zdGFnZUhlaWdodC85KTtcbiAgICAgICAgQWJzb2x1dGVMYXlvdXQuc2V0VG9wKHRoaXMuYnRuMywgdGhpcy5zdGFnZUhlaWdodC8zKTtcbiAgICAgICAgQWJzb2x1dGVMYXlvdXQuc2V0VG9wKHRoaXMuYnRuNCwgdGhpcy5zdGFnZUhlaWdodC8zKTtcbiAgICAgICAgQWJzb2x1dGVMYXlvdXQuc2V0VG9wKHRoaXMuYnRuNSwgdGhpcy5zdGFnZUhlaWdodC8xLjcpO1xuICAgIH1cblxuICAgIHByaXZhdGUgZ2V0V2lkdGgodmlldyl7XG4gICAgICAgIHJldHVybiBsYXlvdXQudG9EZXZpY2VJbmRlcGVuZGVudFBpeGVscyh2aWV3LmdldE1lYXN1cmVkV2lkdGgoKSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBnZXRIZWlnaHQodmlldyl7XG4gICAgICAgIHJldHVybiBsYXlvdXQudG9EZXZpY2VJbmRlcGVuZGVudFBpeGVscyh2aWV3LmdldE1lYXN1cmVkSGVpZ2h0KCkpO1xuICAgIH1cblxuICAgIHByaXZhdGUgZXZlbnRTZXR0aW5nKCkge1xuICAgICAgICB0aGlzLmJ0bjEub24oYnV0dG9uTW9kdWxlLkJ1dHRvbi50YXBFdmVudCwgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5uYXZpZ2F0ZShcImNvbXBvbmVudC9jcmVhdGUvY3JlYXRlXCIpO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLmJ0bjIub24oYnV0dG9uTW9kdWxlLkJ1dHRvbi50YXBFdmVudCwgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5uYXZpZ2F0ZShcImNvbXBvbmVudC9kYWlseUNoZWNrL2RhaWx5Q2hlY2tcIik7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuYnRuMy5vbihidXR0b25Nb2R1bGUuQnV0dG9uLnRhcEV2ZW50LCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLm5hdmlnYXRlKFwiY29tcG9uZW50L3Jlc3VsdC9yZXN1bHRcIik7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuYnRuNC5vbihidXR0b25Nb2R1bGUuQnV0dG9uLnRhcEV2ZW50LCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLm5hdmlnYXRlKFwiY29tcG9uZW50L3Byb2ZpbGUvcHJvZmlsZVwiKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5idG41Lm9uKGJ1dHRvbk1vZHVsZS5CdXR0b24udGFwRXZlbnQsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMubmF2aWdhdGUoXCJjb21wb25lbnQvZ3JvdXBSZXN1bHQvZ3JvdXBSZXN1bHRcIik7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHByaXZhdGUgbmF2aWdhdGUodXJsKSB7XG4gICAgICAgIHRoaXMudG9wbW9zdC5uYXZpZ2F0ZSh1cmwpO1xuICAgIH1cblxuICAgIHByaXZhdGUgY2hlY2tMb2dpbigpIHtcbiAgICAgICAgZmlyZWJhc2UuaW5pdCh7XG4gICAgICAgICAgICBvbkF1dGhTdGF0ZUNoYW5nZWQ6IGFzeW5jIGZ1bmN0aW9uIChkYXRhKSB7IC8vIG9wdGlvbmFsIGJ1dCB1c2VmdWwgdG8gaW1tZWRpYXRlbHkgcmUtbG9nb24gdGhlIHVzZXIgd2hlbiBoZSByZS12aXNpdHMgeW91ciBhcHBcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhLmxvZ2dlZEluID8gXCJMb2dnZWQgaW4gdG8gZmlyZWJhc2VcIiA6IFwiTG9nZ2VkIG91dCBmcm9tIGZpcmViYXNlXCIpO1xuXG4gICAgICAgICAgICAgICAgaWYgKGRhdGEubG9nZ2VkSW4pIHtcbiAgICAgICAgICAgICAgICAgICAgbW9kZWwudXNlckluZm8udWlkID0gZGF0YS51c2VyLnVpZDtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbXlIYWJpdHMgPSBhd2FpdCBtb2RlbC51c2VySW5mby5nZXRNeUhhYml0cygpO1xuICAgICAgICAgICAgICAgICAgICAvKmlmIChteUhhYml0cykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdG9wbW9zdC5uYXZpZ2F0ZShcImNvbXBvbmVudC9kYWlseUNoZWNrL2RhaWx5Q2hlY2tcIik7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0b3Btb3N0Lm5hdmlnYXRlKFwiY29tcG9uZW50L2NyZWF0ZS9jcmVhdGVcIik7XG4gICAgICAgICAgICAgICAgICAgIH0qL1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudG9wbW9zdC5uYXZpZ2F0ZShcImNvbXBvbmVudC9sb2dpbi9sb2dpblwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pLnRoZW4oXG4gICAgICAgICAgICBpbnN0YW5jZSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2luc3RhbmNlJywgaW5zdGFuY2UpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZmlyZWJhc2UuaW5pdCBkb25lXCIpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVycm9yID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgZmlyZWJhc2UuaW5pdCBlcnJvcjogJHtlcnJvcn1gKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICB9O1xufSJdfQ==