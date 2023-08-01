import { UserRoles } from "./user.enum.model";

export class User {
  constructor(
    public username: string,
    public email: string,
    public role: UserRoles ,
    public id: number,
    public accessToken: string,
    public createdAt: Date
  ) {}
  // get token(){
  //   if(!this._tokenExpirationDate || new Date()> this._tokenExpirationDate){
  //     return null;
  //   }
  //   return this._token;
  // }
}
