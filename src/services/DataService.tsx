import { IUser, User } from "../domain/User";
import { Customer, ICustomer } from "../domain/Customer";
import userRawData from './../data/users.json';
import customerRawData from './../data/customers.json';
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

        userRawData.forEach((dataItem, i) => {
            i = i + 1;
            if (i < 100) {
                let userToAdd = new User(dataItem);
                userToAdd.avatar =  avatars[Number(dataItem.avatar)-1];
                listToReturn.push(userToAdd);
            }
        });

        return listToReturn;
    }
    
    public getUser(id: number): IUser {
        let users = this.getUsers();
        return users[id - 1];
    } 

    public getCustomers(): ICustomer[] {
        let listToReturn = new Array<ICustomer>();
        customerRawData.forEach((dataItem) => {
            listToReturn.push(new Customer(dataItem));     
        });
        listToReturn = listToReturn.sort((a, b) =>  a.firstName > b.firstName ? 1 : -1)
        return listToReturn;
    }

    public getCustomer(id: string): ICustomer | undefined {
        let customers = this.getCustomers();
        const customerToReturn = customers.find((customer) => customer.id === id);
        return customerToReturn;
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