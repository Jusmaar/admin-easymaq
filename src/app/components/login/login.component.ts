import {
  Component,
  OnInit,
  OnDestroy,
} from '@angular/core';
import{Router} from '@angular/router'
import { AdminService } from '../../services/admin.service';
import { Subscription } from 'rxjs/Rx';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {

  /* subForm: Subscription; */

  constructor(
    private service: AdminService,
    private router:Router
  ) { }

  ngOnInit() {
  }

  ngOnDestroy(): void {
    /* this.subForm.unsubscribe(); */
  }

  submit(name,pass){
    let obj = {
      email: name,
      password: pass
    }
    
    let subForm: Subscription = this.service.login('http://34.227.201.151:8080/usuarios/login?include=user', obj)
      .subscribe((res: any) => {
        console.log('res: ', res);
        this.service.set(res)
      }, (err: any) => {
        console.log('err : ', err);
      }, () => {
        console.log('complete');
        subForm.unsubscribe();
        this.router.navigate(['/home']);
      });

      
  }

}
