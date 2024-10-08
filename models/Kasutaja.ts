export class Kasutaja {
    private _id: number;
    private _username: string;
    private _password: string;
    private _firstName: string;
    private _lastName: string;

    constructor(id: number, username: string, password: string, firstName: string, lastName: string);
    constructor(username: string, password: string);

    constructor(idOrUsername: number | string, usernameOrPassword: string, password?: string, firstName: string = '', lastName: string = '') {
        if (typeof idOrUsername === 'number') {
            this._id = idOrUsername;
            this._username = usernameOrPassword;
            this._password = password!;
            this._firstName = firstName;
            this._lastName = lastName;
        } else {
            this._id = 0;
            this._username = idOrUsername;
            this._password = usernameOrPassword;
            this._firstName = '';
            this._lastName = '';
        }
    }

    get id(): number {
        return this._id;
    }

    get username(): string {
        return this._username;
    }

    set username(newUsername: string) {
        this._username = newUsername;
    }

    get password(): string {
        return this._password;
    }

    set password(newPassword: string) {
        this._password = newPassword;
    }

    get firstName(): string {
        return this._firstName;
    }

    set firstName(newFirstName: string) {
        this._firstName = newFirstName;
    }

    get lastName(): string {
        return this._lastName;
    }

    set lastName(newLastName: string) {
        this._lastName = newLastName;
    }
}
