import { Departments, JobTitles, Status } from "../domain/enums";
import { IUser, User } from "../domain/User";

import johnSmith from './../assets/avatars/johnsmith.jpeg';
import karenmonroe from './../assets/avatars/karenmonroe.jpeg';
import juliawest from './../assets/avatars/juliawest.jpeg';

import users from './users.json';




export class DataService {

    constructor() { }
    
    getUsers(): IUser[] {
        let listToReturn = new Array<IUser>();


       /* users.forEach(user => {
            listToReturn.push(new User(user))
        });*/


        listToReturn.push(this.getUser01())
     /*  listToReturn.push(this.getUser02())
       listToReturn.push(this.getUser03())*/

        return listToReturn;
    } 

    getUser01(): IUser {
        let valueToReturn = new User(
            {
                id: 101,
                firstName: 'John',
                lastName: 'Smith',
                emailAddress: 'johnsmith@monitron.com',
                password: 'password',
                depatment: 'Management',
                jobTitle: 'Managing Director',
                dateHired: new Date('2015-01-03'),
                status: true,
                avatar: johnSmith
            }
          );
        return valueToReturn;
    }
/*
    getUser02(): IUser {
        let valueToReturn = new User(102,
            'Karen',
            'Monroe',
            'karenmonroe@monitron.com',
            'password',
            'Human Resources',
            'Manager',
            new Date('2017-09-23'),
            true,
            karenmonroe
          );
        return valueToReturn;
    }

    getUser03(): IUser {
        let valueToReturn = new User(103,
            'Julia',
            'West',
            'juliawest@monitron.com',
            'password',
            'Marketing',
            'Senior Consultant',
            new Date('2019-06-15'),
            false,
            juliawest
          );
        return valueToReturn;
    }*/

}