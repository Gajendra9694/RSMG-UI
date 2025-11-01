import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
router = inject(Router)
onLogin()
{
  if(this.loginObj.userName == 'admin' && this.loginObj.password == '112233' ){


this.router.navigateByUrl('/Dashboard1')
  }else
  {
    alert("Wrong Username or Password")
  }

}


loginObj: any ={
  userName: '',
  password: ''
}



}
