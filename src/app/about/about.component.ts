import { Component, inject, OnInit, } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})

export class AboutComponent implements OnInit {

  pageTitle: string = '';

  constructor(private router: ActivatedRoute) { }

  ngOnInit(): void {
    this.pageTitle = this.router.snapshot.data['title'];
  }

  userForm = new FormGroup({
    username: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email])
  });

  onSubmit() {
    console.log(this.userForm.value);
  }

}
