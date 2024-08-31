import { Component, inject } from '@angular/core';
import { SubscribeService } from 'src/app/Services/subscribe.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
})
export class HeroComponent {

  //1.How to provide 
  // constructor(private subService: SubscribeService){}

  // Angular 14
  subService = inject(SubscribeService);

  OnSubscribe(){
   this.subService.OnSubscribeClicked('yearly');
  }

}
