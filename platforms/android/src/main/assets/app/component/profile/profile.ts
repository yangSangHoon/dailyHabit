import buttonModule = require("ui/button");
import model from '../../model/model';

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
        } catch (e) {
        }
    }
}

let profile = null;
exports.navigated = function (args) {
    if(!profile){
        profile = new Profile(args.object);
    }

};