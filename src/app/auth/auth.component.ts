import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthServiceService } from './auth-service.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent {
  isLoginMode = true;

  constructor(private authService: AuthServiceService) { }

  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;

  }

  onSubmit(form: NgForm) {
    console.log(form.value);
    form.reset();
    }
}
