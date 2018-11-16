export class User {
    private _user: any;
    private _uname: any;
    private _pname: String;

    public constructor(u) {
        this.uname = u.name;
        this.pname = u.pname;
        this.user = u.user;
    }

    public get pname(): String {
        return this._pname;
    }
    public set pname(value: String) {
        this._pname = value;
    }

    public get uname(): any {
        return this._uname;
    }
    public set uname(value: any) {
        this._uname = value;
    }

    public get user(): any {
        return this._user;
    }
    public set user(value: any) {
        this._user = value;
    }
}
