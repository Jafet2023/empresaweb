import { Component, OnInit, NgModule } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiciosService } from '../../services/servicios.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  informacion :  any;
  // id: number;

  constructor( private router: Router, private serviciosService: ServiciosService, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  PostLogin(fRegistro: NgForm) {
    // let id = this.route.snapshot.paramMap.get('id');
    this.serviciosService.login(fRegistro.value.identifier, fRegistro.value.password)
      .subscribe(
        res => {
          console.log('details:', res);
          this.router.navigate(['/empresas/']);
        },
        err => console.log(err)
      )
  }

  // onLogin(): void {
  //  this.authService.loginEmailUser(this.email, this.password)
  //     .then((res) => {
  //      this.onLoginRedirect();
  //    }).catch(err => console.log('err', err.message));
  // }

  onLoginGoogle() {
    // this.authService.loginGoogleUser()
    // .then((res) => {
    //   this.onLoginRedirect();
    // }).catch ( err => console.log('err', err.message));
  }

  onLogout() {
    // this.authService.logoutUser();
  }

  onLoginRedirect(): void {
    // this.router.navigate(['admin/list-books']);
  }

  // PostLogin(fRegistro: NgForm) {
  //   this.serviciosService.login(fRegistro.value.identifier, fRegistro.value.password)
  //   .subscribe(data => {
  //     console.log(data);
  //   }, error => {
  //     console.log(error);
  //   });
  // }

  // onLogin(fRegistro: NgForm): void {
  //   this.serviciosService.login(fRegistro.value.identifier, fRegistro.value.password)
  //   .subscribe(res => {
  //     this.router.navigateByUrl('/auth');
  //   });
  // }



}
