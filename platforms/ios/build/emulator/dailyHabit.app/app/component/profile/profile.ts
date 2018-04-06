import buttonModule = require("ui/button");
import model from '../../model/model';
import frameModule = require("ui/frame");

class Profile {

    private nickname;
    private btnSave;

    constructor(page) {
        this.nickname = page.getViewById('nickname');
        this.btnSave = page.getViewById('btnSave');
        this.btnSave.on(buttonModule.Button.tapEvent, () => {
            this.save();
        });
    }

    public async save() {
        try {
            await model.userInfo.setProfile({
                nickName: this.nickname.text
            });
            alert('등록되었습니다');
            const topmost = frameModule.topmost();
            topmost.navigate("component/main/main");
        } catch (e) {
        }
    }
}

exports.navigated = function (args) {
    new Profile(args.object);
};