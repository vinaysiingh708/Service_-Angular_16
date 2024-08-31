import { EventEmitter, Injectable } from "@angular/core";
import { LoggerServive } from "../header/logger.service";
import { User } from "../Models/User";

@Injectable()
export class UserService{
    users: User[]= [
        new User('Steve Smith','Male','Monthly','Active'),
        new User('Mary Jone','Female','Yearly','InActive'),
        new User('Mark Tyler','Male','Quarterly','Active'),
    ];

    constructor(private logger: LoggerServive){}

    OnUserDetailsClicked: EventEmitter<User> = new EventEmitter<User>();

    OnShowUserdetails(user: User){
        this.OnUserDetailsClicked.emit(user)
    }

    GetAllUsers(){
        return this.users;
    }

    CreateUser(name: string,gender: string,subType: string,status: string){
        let user = new User(name,gender,subType,status);
        this.users.push(user);
       // let logger= new LoggerServive();
        this.logger.LogMessage(name,status)
    }
}