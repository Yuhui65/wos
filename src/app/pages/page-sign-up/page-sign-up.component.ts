import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-page-sign-up',
  templateUrl: './page-sign-up.component.html',
  styleUrls: ['./page-sign-up.component.css']
})
export class PageSignUpComponent implements OnInit {
  public signUpForm!: FormGroup;
  // point d'exclamation sert à dire à notre code TS
  // que nous n'allons pas initialiser cette propriété
  // dans le constructor mais plus tard (ici dans le ngOnInit)

  constructor(private fb: FormBuilder, private authService: AuthenticationService , private router: Router) { }

  ngOnInit(): void {
    this.signUpForm = this.fb.group({
      userName: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(12)]],
      confirmPassword: ['', [Validators.required]]
    },
    {
      validator: this.passwordMatchValidator
    }
    );
  }

  passwordMatchValidator(form: FormGroup) {

    if(form.get('password')?.value === form.get('confirmPassword')?.value) {
      return null;
    } else {
      return { mismatch: true};
    }
  }

  onSubmitForm() {
    const username = this.signUpForm.value.userName;
    const password = this.signUpForm.value.password;

    this.authService.registerUser(username, password).subscribe((reponseApi) => {
      console.log(reponseApi);
       this.router.navigateByUrl('/sign-in');
    })
  }

}
