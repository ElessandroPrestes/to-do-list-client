import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';


import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  signinForm!: FormGroup

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private snackBar: MatSnackBar

  ) { }

  ngOnInit(): void {
    this.signinForm = new FormGroup({
      mail: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    });
  }

  onSubmit() {
    const credentials = this.signinForm.value;
    this.authService.signin(credentials)
      .subscribe(
        (user) => {
          console.log(user);
          this.snackBar.open(
            'Logged in successfuly. Welcome', 'OK',
            { duration: 3000 }
          );
          this.router.navigateByUrl('api/lists');
        },
        (err) => {
          console.log(err);
          this.snackBar.open(
            'Invalid username or password', 'OK',
            { duration: 3000 }
          );
        }
      )
  }

}
