import { Departments, JobTitles, Status } from "../domain/enums";
import { IUser, User } from "../domain/User";

import johnSmith from './../assets/avatars/johnsmith.jpeg';
import karenmonroe from './../assets/avatars/karenmonroe.jpeg';
import juliawest from './../assets/avatars/juliawest.jpeg';

import avatar1 from './../assets/avatars/1.jpeg';
import avatar2 from './../assets/avatars/2.jpeg';
import avatar3 from './../assets/avatars/3.jpeg';
import avatar4 from './../assets/avatars/4.jpeg';
import avatar5 from './../assets/avatars/5.jpeg';
import avatar6 from './../assets/avatars/6.jpeg';
import avatar7 from './../assets/avatars/7.jpeg';
import avatar8 from './../assets/avatars/8.jpeg';
import avatar9 from './../assets/avatars/9.jpeg';
import avatar10 from './../assets/avatars/10.jpeg';
import avatar11 from './../assets/avatars/11.jpeg';
import avatar12 from './../assets/avatars/12.jpeg';
import avatar13 from './../assets/avatars/13.jpeg';
import avatar14 from './../assets/avatars/14.jpeg';
import avatar15 from './../assets/avatars/15.jpeg';
import avatar16 from './../assets/avatars/16.jpeg';
import avatar17 from './../assets/avatars/17.jpeg';
import avatar18 from './../assets/avatars/18.jpeg';
import avatar19 from './../assets/avatars/19.jpeg';
import avatar20 from './../assets/avatars/20.jpeg';
import avatar21 from './../assets/avatars/21.jpeg';
import avatar22 from './../assets/avatars/22.jpeg';
import avatar23 from './../assets/avatars/23.jpeg';
import avatar24 from './../assets/avatars/24.jpeg';
import avatar25 from './../assets/avatars/25.jpeg';
import avatar26 from './../assets/avatars/26.jpeg';
import avatar27 from './../assets/avatars/27.jpeg';
import avatar28 from './../assets/avatars/28.jpeg';
import avatar29 from './../assets/avatars/29.jpeg';
import avatar30 from './../assets/avatars/30.jpeg';
import avatar31 from './../assets/avatars/31.jpeg';
import avatar32 from './../assets/avatars/32.jpeg';
import avatar33 from './../assets/avatars/33.jpeg';
import avatar34 from './../assets/avatars/34.jpeg';
import avatar35 from './../assets/avatars/35.jpeg';
import avatar36 from './../assets/avatars/36.jpeg';
import avatar37 from './../assets/avatars/37.jpeg';
import avatar38 from './../assets/avatars/38.jpeg';
import avatar39 from './../assets/avatars/39.jpeg';
import avatar40 from './../assets/avatars/40.jpeg';
import avatar41 from './../assets/avatars/41.jpeg';
import avatar42 from './../assets/avatars/42.jpeg';
import avatar43 from './../assets/avatars/43.jpeg';
import avatar44 from './../assets/avatars/44.jpeg';
import avatar45 from './../assets/avatars/45.jpeg';
import avatar46 from './../assets/avatars/46.jpeg';
import avatar47 from './../assets/avatars/47.jpeg';
import avatar48 from './../assets/avatars/48.jpeg';
import avatar49 from './../assets/avatars/49.jpeg';
import avatar50 from './../assets/avatars/50.jpeg';
import avatar51 from './../assets/avatars/51.jpeg';
import avatar52 from './../assets/avatars/52.jpeg';
import avatar53 from './../assets/avatars/53.jpeg';
import avatar54 from './../assets/avatars/54.jpeg';
import avatar55 from './../assets/avatars/55.jpeg';
import avatar56 from './../assets/avatars/56.jpeg';
import avatar57 from './../assets/avatars/57.jpeg';
import avatar58 from './../assets/avatars/58.jpeg';
import avatar59 from './../assets/avatars/59.jpeg';
import avatar60 from './../assets/avatars/60.jpeg';
import avatar61 from './../assets/avatars/61.jpeg';
import avatar62 from './../assets/avatars/62.jpeg';
import avatar63 from './../assets/avatars/63.jpeg';
import avatar64 from './../assets/avatars/64.jpeg';
import avatar65 from './../assets/avatars/65.jpeg';
import avatar66 from './../assets/avatars/66.jpeg';
import avatar67 from './../assets/avatars/67.jpeg';
import avatar68 from './../assets/avatars/68.jpeg';
import avatar69 from './../assets/avatars/69.jpeg';
//import avatar70 from './../assets/avatars/70.jpeg';
import avatar71 from './../assets/avatars/71.jpeg';
import avatar72 from './../assets/avatars/72.jpeg';
//import avatar73 from './../assets/avatars/73.jpeg';
import avatar74 from './../assets/avatars/74.jpeg';
import avatar75 from './../assets/avatars/75.jpeg';
//import avatar76 from './../assets/avatars/76.jpeg';
//import avatar77 from './../assets/avatars/77.jpeg';
//import avatar78 from './../assets/avatars/78.jpeg';
//import avatar79 from './../assets/avatars/79.jpeg';
//import avatar80 from './../assets/avatars/80.jpeg';
import avatar81 from './../assets/avatars/81.jpeg';
import avatar82 from './../assets/avatars/82.jpeg';
//import avatar83 from './../assets/avatars/83.jpeg';
import avatar84 from './../assets/avatars/84.jpeg';
//import avatar85 from './../assets/avatars/85.jpeg';
//import avatar86 from './../assets/avatars/86.jpeg';
import avatar87 from './../assets/avatars/87.jpeg';
import avatar88 from './../assets/avatars/88.jpeg';
import avatar89 from './../assets/avatars/89.jpeg';
//import avatar90 from './../assets/avatars/90.jpeg';
import avatar91 from './../assets/avatars/91.jpeg';
import avatar92 from './../assets/avatars/92.jpeg';
//import avatar93 from './../assets/avatars/93.jpeg';
//import avatar94 from './../assets/avatars/94.jpeg';
import avatar95 from './../assets/avatars/95.jpeg';
import avatar96 from './../assets/avatars/96.jpeg';
//import avatar97 from './../assets/avatars/97.jpeg';
//import avatar98 from './../assets/avatars/98.jpeg';
import avatar99 from './../assets/avatars/99.jpeg';
import avatar100 from './../assets/avatars/100.jpeg';

import users from './users.json';




export class DataService {

    constructor() { }


    
    getUsers(): IUser[] {
        let listToReturn = new Array<IUser>();
        let avatars = this.avatarArray;


        users.forEach((user, i) => {
            i = i + 1;
            if (i < 100) {
                let userToAdd = new User(user);
                userToAdd.avatar =  avatars[Number(user.avatar)];
                listToReturn.push(userToAdd);
            }
        });


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
                department: 'Management',
                jobTitle: 'Managing Director',
                hiredDate: '2015-01-03',
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

    get avatarArray() : Array<any> {
        const arr = new Array();
        arr.push(avatar1);
        arr.push(avatar2);
        arr.push(avatar3);
        arr.push(avatar4);
        arr.push(avatar5);
        arr.push(avatar6);
        arr.push(avatar7);
        arr.push(avatar8);
        arr.push(avatar9);
        arr.push(avatar10);
        arr.push(avatar11);
        arr.push(avatar12);
        arr.push(avatar13);
        arr.push(avatar14);
        arr.push(avatar15);
        arr.push(avatar16);
        arr.push(avatar17);
        arr.push(avatar18);
        arr.push(avatar19);
        arr.push(avatar20);
        arr.push(avatar21);
        arr.push(avatar22);
        arr.push(avatar23);
        arr.push(avatar24);
        arr.push(avatar25);
        arr.push(avatar26);
        arr.push(avatar27);
        arr.push(avatar28);
        arr.push(avatar29);

        arr.push(avatar20);
        arr.push(avatar21);
        arr.push(avatar22);
        arr.push(avatar23);
        arr.push(avatar24);
        arr.push(avatar25);
        arr.push(avatar26);
        arr.push(avatar27);
        arr.push(avatar28);
        arr.push(avatar29);

        arr.push(avatar30);
        arr.push(avatar31);
        arr.push(avatar32);
        arr.push(avatar33);
        arr.push(avatar34);
        arr.push(avatar35);
        arr.push(avatar36);
        arr.push(avatar37);
        arr.push(avatar38);
        arr.push(avatar39);

        arr.push(avatar40);
        arr.push(avatar41);
        arr.push(avatar42);
        arr.push(avatar43);
        arr.push(avatar44);
        arr.push(avatar45);
        arr.push(avatar46);
        arr.push(avatar47);
        arr.push(avatar48);
        arr.push(avatar49);

        arr.push(avatar50);
        arr.push(avatar51);
        arr.push(avatar52);
        arr.push(avatar53);
        arr.push(avatar54);
        arr.push(avatar55);
        arr.push(avatar56);
        arr.push(avatar57);
        arr.push(avatar58);
        arr.push(avatar59);

        arr.push(avatar60);
        arr.push(avatar61);
        arr.push(avatar62);
        arr.push(avatar63);
        arr.push(avatar64);
        arr.push(avatar65);
        arr.push(avatar66);
        arr.push(avatar67);
        arr.push(avatar68);
        arr.push(avatar69);

      //  arr.push(avatar70);
        arr.push(avatar71);
        arr.push(avatar72);
      //  arr.push(avatar73);
        arr.push(avatar74);
        arr.push(avatar75);
      //  arr.push(avatar76);
      //  arr.push(avatar77);
       // arr.push(avatar78);
       // arr.push(avatar79);

       // arr.push(avatar80);
        arr.push(avatar81);
        arr.push(avatar82);
      //  arr.push(avatar83);
        arr.push(avatar84);
       // arr.push(avatar85);
      //  arr.push(avatar86);
        arr.push(avatar87);
        arr.push(avatar88);
        arr.push(avatar89);

     //   arr.push(avatar90);
        arr.push(avatar91);
        arr.push(avatar92);
       // arr.push(avatar93);
       // arr.push(avatar94);
        arr.push(avatar95);
        arr.push(avatar96);
      //  arr.push(avatar97);
      //  arr.push(avatar98);
        arr.push(avatar99);

        return arr;
    }

}