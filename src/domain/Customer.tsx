
export interface ICustomer {
  id: string;
  firstName: string;
  lastName: string;
  emailAddress: string;
  mobile: string;
  country: string;
}


export class Customer implements ICustomer {

  constructor(data: any) {
      this.id = data.id;
      this.firstName = data.firstName;
      this.lastName = data.lastName;
      this.emailAddress = data.emailAddress;
      this.mobile = data.mobile;
      this.country = data.country

  }

  id: string;
  firstName: string;
  lastName: string;
  emailAddress: string;
  mobile: string;
  country: string;

}