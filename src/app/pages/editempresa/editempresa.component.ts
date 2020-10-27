import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ServiciosService } from 'src/app/services/servicios.service';

@Component({
  selector: 'app-editempresa',
  templateUrl: './editempresa.component.html',
  styleUrls: ['./editempresa.component.css']
})
export class EditempresaComponent implements OnInit {

  information: any;
  id: number;

  constructor(private serviciosService: ServiciosService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    let id =this.route.snapshot.paramMap.get('id');
    this.serviciosService.getEmpresa(id).subscribe(result => {
      console.log('detalles:', result);
      this.information = result;
    });
  }

  PutEmpresa() {
    this.serviciosService.UpdateEmpresa(this.information.id,this.information)
      .subscribe(data => {
        console.log(data);
      }, error => {
        console.log(error);
      });
  }

  onSubmit() {
    this.PutEmpresa();
  }

}
