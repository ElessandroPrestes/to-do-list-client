/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { IUser } from '../IUser';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  formRegister!: FormGroup;

  constructor(
    private authService: AuthService,
    private snackBar: MatSnackBar,
    private router: Router) { }

  ngOnInit(): void {
    this.formRegister = new FormGroup({
      name: new FormControl('', [Validators.required]),
      mail: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    });
  }

  get name() {
    return this.formRegister.get('name')!;
  }

  get mail() {
    return this.formRegister.get('mail')!;
  }

  get password() {
    return this.formRegister.get('password')!;
  }

  onSubmit() {
    if (this.formRegister.invalid) {
      return;
    }
    console.log(this.formRegister.value);

    const u: IUser = {
      ...this.formRegister.value
    }

    this.authService.signup(u)
      .subscribe(
        {
          next: () => {
            this.snackBar.open(
              'Successfuly registered',
              'OK', { duration: 200 }
            );
            window.location.reload();
            this.router.navigateByUrl('auth/signin');
          },
          error: (err) => {
            console.error(err);
            this.snackBar.open(err.error.message, 'OK', { duration: 2000 });
          }
        })
  }

}
