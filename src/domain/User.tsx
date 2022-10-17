import { Departments, JobTitles, Status } from "./enums";

export interface IUser {
    id: number;
    firstName: string;
    lastName: string;
    emailAddress: string;
    password: string;
    department: string;
    jobTitle: string;
    hiredDate: Date;
    status: boolean;
    avatar: number;
}

export class User implements IUser {

    constructor(data: any) {
        this.id = data.id;
        this.firstName = data.firstName;
        this.lastName = data.lastName;
        this.emailAddress = data.emailAddress;
        this.password = data.password;
        this.department = data.department;
        this.jobTitle = data.jobTitle;
        this.hiredDate = data.hiredDate
        this.status = data.status;
        this.avatar = data.avatar;
    }

    id: number;
    firstName: string;
    lastName: string;
    emailAddress: string;
    password: string;
    department: string;
    jobTitle: string;
    hiredDate: Date;
    status: boolean;
    avatar: any;
}