const firebase = require("nativescript-plugin-firebase");
import buttonModule = require("ui/button");

class Login {

    private email;
    private password;
    private btnLogin;

    constructor(page) {
        this.email = page.getViewById('email');
        this.password = page.getViewById('password');
        this.btnLogin = page.getViewById('btnLogin');
        this.btnLogin.on(buttonModule.Button.tapEvent, () => {
            this.goLogin();
        });
    }

    public async goLogin() {
        try {
            await firebase.login(
                {
                    type: firebase.LoginType.PASSWORD,
                    passwordOptions: {
                        email: this.email.text,
                        password: this.password.text,
                    }
                });
            alert('로그인 성공');
        } catch (e) {
            alert(e);
        }
    }
}

exports.navigated = function (args) {
    new Login(args.object);
};