import { IUser, User } from "../domain/User";
import users from './users.json';
import avatar1 from './../assets/avatars/1.jpeg';
import avatar2 from './../assets/avatars/2.jpeg';
import avatar3 from './../assets/avatars/3.jpeg';
import avatar4 from './../assets/avatars/4.jpeg';
import avatar5 from './../assets/avatars/5.jpeg';
import avatar6 from './../assets/avatars/6.jpeg';

export class DataService {

    constructor() { }
    
    public getUsers(): IUser[] {
        let listToReturn = new Array<IUser>();
        let avatars = this.avatarArray;

        users.forEach((user, i) => {
            i = i + 1;
            if (i < 100) {
                let userToAdd = new User(user);
                userToAdd.avatar =  avatars[Number(user.avatar)-1];
                listToReturn.push(userToAdd);
            }
        });

        return listToReturn;
    }
    
    public getUser(id: number): IUser {
        let users = this.getUsers();
        return users[id - 1];
    } 
  
    private get avatarArray(): Array<any> {
        const arr = new Array();
        arr.push(avatar1);
        arr.push(avatar2);
        arr.push(avatar3);
        arr.push(avatar4);
        arr.push(avatar5);
        arr.push(avatar6);
        return arr;
    }

}