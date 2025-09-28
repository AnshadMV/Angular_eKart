import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MyServiceService } from '../../services/my-service.service';
import { from, interval, Observable, of, Subscription } from 'rxjs';
@Component({
  selector: 'app-top-menu',
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.css']
})
export class TopMenuComponent implements OnInit {

  private router = inject(Router)

  onSubmitApply() {
    this.router.navigate(['/app-about'])
  }



  private myService = inject(MyServiceService);
  
  cartClick() {
    this.myService.showAlert("Added to cart"); // Use service method
  }

  // ngOnInit(): void {
  //   const source$ = from([10, 20, 30, 40]);

  //   source$.subscribe({
  //     next: value => console.log('From:', value),
  //     complete: () => console.log('From Completed')
  //   });
  // }

  private subscription!: Subscription;

  ngOnInit(): void {
    const source$ = interval(1000);

    this.subscription = source$.subscribe({
      next: value => console.log('Interval:', value)
    });
  }






  //-----------Enth kond First number$ vannitt in console , pinne observable varunnu ? 

  // observable$!: Observable<number>;

  // ngOnInit(): void {
  //   this.observable$ = of(1, 2, 3, 4, 6);
  //   this.observable$.subscribe(value => console.log(value));
  // }


  // number$: Observable<string>;
  // constructor() {
  //   this.number$ = new Observable<string>((observer) => {
  //     observer.next("hi");
  //     observer.next("hello");
  //     observer.next("how are you");
  //     observer.complete();
  //   });

  //   this.number$.subscribe({
  //     next: value => console.log(value),
  //     complete: () => console.log('Observable completed')
  //   });
  // }









}
