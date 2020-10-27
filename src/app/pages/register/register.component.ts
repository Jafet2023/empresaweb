import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiciosService } from 'src/app/services/servicios.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private serviciosService: ServiciosService, private router: Router) { }

  ngOnInit(): void {
  }

  PostRegister(fRegistro: NgForm) {
    this.serviciosService.register(fRegistro.value.username, fRegistro.value.email, fRegistro.value.password)
    .subscribe(data => {
      console.log(data);
    }, error => {
      console.log(error);
    });
  }

}
