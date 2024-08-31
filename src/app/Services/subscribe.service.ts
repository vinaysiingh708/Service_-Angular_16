import { Injectable } from "@angular/core";

@Injectable() // Not compulsory but as a practice we can inject
export class SubscribeService{
  OnSubscribeClicked(type: string){
        //ADD USER TO DATABASE
    
      //SEND EMAIL WITH SUBSCRIPTION DETAIL 
    
      //ALLOW USER TO ACCESS THE SERVICES
    
      alert('Thank you for '+type+' subscribing. You can the service now.')
      }
}