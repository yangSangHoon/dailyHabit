const firebase = require("nativescript-plugin-firebase");

class UserInfo {
    private _uid: string = '';
    private _myHabits = [];

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
            const respone = await firebase.getValue(`/users/${this.uid}`);
            this.myHabits = respone.value.habits;
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
        await firebase.setValue(`/users/${this.uid}/profile`, {
            nickName: nickName
        });
    }

    public logout() {
        firebase.logout();
    }
}

export default UserInfo;