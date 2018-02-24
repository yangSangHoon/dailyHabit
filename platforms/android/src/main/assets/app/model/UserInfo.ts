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

    set uid(value) {
        this._uid = value;
    }

    get myHabits() {
        return this._myHabits;
    }

    set myHabits(value) {
        this._myHabits = value;
    }

    public async getMyHabits() {
        try {
            const response = await firebase.getValue(`/users/${this.uid}`);
            this._userInfo = response.value;
            this.myHabits = this._userInfo.habits;
            return this.myHabits;
        } catch (e) {
            return null;
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
            await firebase.setValue(`/users/${this.uid}`, {habits: habits});
            alert('등록되었습니다');
        } catch (e) {
            alert('등록실패하였습니다' + e);
        }
    }

    async setProfile({nickName}) {
        this._userInfo.profile = {nickName: nickName};
        await firebase.setValue(`/users/${this.uid}`, this._userInfo);
    }

    public logout() {
        firebase.logout();
    }
}

export default UserInfo;