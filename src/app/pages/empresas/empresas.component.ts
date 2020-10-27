import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiciosService } from 'src/app/services/servicios.service';

@Component({
  selector: 'app-empresas',
  templateUrl: './empresas.component.html',
  styleUrls: ['./empresas.component.css']
})
export class EmpresasComponent implements OnInit {

  informacion: any;
  id: number;

  isLoading = true;

  constructor(private serviciosService: ServiciosService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.mostrarEmpresa();
  }

  mostrarEmpresa(){
    let id = this.route.snapshot.paramMap.get('id');
    this.serviciosService.getempresaforid(id).subscribe(result => {
      console.log('detalles:', result);
      this.informacion = result;
    });
  }

  // eliminarEmpresa(id: String){
  //   // let id =this.route.snapshot.paramMap.get('id');
  //   this.serviciosService.DeleteEmpresa(id).subscribe(
  //     res=> {
  //       console.log(res);
  //       // this.ngOnInit();
  //     },
  //     err => console.log(err)
  //   )

  // }

}
