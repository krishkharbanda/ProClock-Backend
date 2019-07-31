export class changePassword {
    newPassword: string;
    oldPassword: string;
    confirmpassword?:string;
    constructor(public userId: string) { }
}
