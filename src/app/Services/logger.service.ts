import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
}) // Not compulsory but as a practice we can inject
export class LoggerService{
    LogMessage(name: string,status: string){
        console.log(`A new user with name ${name} with status ${status} is added to user list.`);
    }
}