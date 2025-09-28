import { Component, inject } from '@angular/core';
import { MyServiceService } from '../services/my-service.service';

@Component({
  selector: 'app-top-header',
  templateUrl: './top-header.component.html',
  styleUrls: ['./top-header.component.css']
})
export class TopHeaderComponent {
  private myServices= inject(MyServiceService)
  
  headerClicked(){
    this.myServices.showConfirm(" Big Billion days Are Coming")
  }

}
