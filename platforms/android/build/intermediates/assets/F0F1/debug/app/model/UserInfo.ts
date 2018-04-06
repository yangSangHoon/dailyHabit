const firebase = require("nativescript-plugin-firebase");

class UserInfo {
    private _uid: string = '';
    private _myHabits = [];
    private _userInfo;

    get profile() {
        return this._userInfo.profile;
    }

    get uid() {
        return this._uid;
    }

    get userInfo() {
        return this._userInfo;
    }

    set userInfo(value) {
        this._userInfo = value;
    }

    set uid(value) {
        this._uid = value;
    }

    get myHabits() {
        return this._myHabits;
    }

    set myHabits(value) {
        this._myHabits = value;
    }

    public async getUserInfo() {
        const response = await firebase.getValue(`/users/${this.uid}`);
        this._userInfo = response.value || {};
        this.myHabits = this._userInfo.habits;
    }

    public async getMyHabits() {
        try {
            const response = await firebase.getValue(`/users/${this.uid}`);
            this._userInfo = response.value || {};
            console.log('this._userInfo', JSON.stringify(this._userInfo));
            this.checkDefaultProfile(this._userInfo);
            this.myHabits = this._userInfo.habits;
            return this.myHabits;
        } catch (e) {
            return null;
        }
    }

    private checkDefaultProfile(userInfo) {
        if(!userInfo.profile) {
            userInfo.profile = {
                nickname: `nickname${Math.ceil(Math.random() * 100)}`
            }
        }
    }

    async setDailyHabits({date, habits}) {
        try {
            await firebase.setValue(`/dailyHabit/${this.uid}/${date}`, {habits: habits});
            alert('등록되었습니다');
        } catch (e) {
            alert('등록실패하였습니다' + e);
        }
    }

    public async getMyDailyHabits() {
        const response = await this.getDailyHabits(this.uid);
        return response.value;
    }

    public async getDailyHabits(id) {
        try {
            return await firebase.getValue(`/dailyHabit/${id}`);
        } catch (e) {
            return null;
        }
    }

    async createHabits({habits}) {
        try {
            console.log('this.uid', this.uid);
            this.userInfo.habits = habits;
            await firebase.setValue(`/users/${this.uid}`, this.userInfo);
            alert('등록되었습니다');
        } catch (e) {
            alert('등록실패하였습니다' + e);
        }
    }

    async setProfile({nickName}) {
        this.userInfo.profile = {nickName: nickName};
        await firebase.setValue(`/users/${this.uid}`, this.userInfo);
    }

    public logout() {
        firebase.logout();
    }
}

export default UserInfo;