const firebase = require("nativescript-plugin-firebase");
import buttonModule = require("ui/button");

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
        } catch (e) {
        }
    }
}

exports.navigated = function (args) {
    new Profile(args.object);
};