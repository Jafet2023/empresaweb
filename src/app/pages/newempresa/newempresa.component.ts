import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm, FormGroup, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ServiciosService } from 'src/app/services/servicios.service';

@Component({
  selector: 'app-newempresa',
  templateUrl: './newempresa.component.html',
  styleUrls: ['./newempresa.component.css']
})
export class NewempresaComponent implements OnInit {

  title = 'fileUpload';
  images;
  multipleImages = [];
  uploadForm: FormGroup;

  @ViewChild('fileInput',{static: false}) fileInput: ElementRef;

  constructor(private serviciosService: ServiciosService) {
   }

  ngOnInit(): void {
  }

  // RegistroEmpresa(fRegistro: NgForm) {
  //   this.serviciosService.RegisterEmpresa(fRegistro.value.nombre)
  //     .subscribe((data) : any => {
  //       console.log(data);
  //       // this.authService.login(
  //       //   data.id,
  //       //   data.nombre,
  //       //   data.apellidos
  //       // );
  //     }, error => {
  //       console.log(error);
  //     });
  // }

  PostEmpresa(fRegistro: NgForm) {
    this.serviciosService.RegisterEmpresa(fRegistro.value.nombre,fRegistro.value.nit,fRegistro.value.direccion,fRegistro.value.telefono,fRegistro.value.correo)
      .subscribe(data => {
        console.log(data);
      }, error => {
        console.log(error);
      });
  }

  onFileupload(){
    const imageBlob = this.fileInput.nativeElement.file[0];
    const file =  new FormData;
    file.set('file', imageBlob);

    
  }
  selectImage(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.images = file;
    }
  }

  selectMultipleImage(event){
    if (event.target.files.length > 0) {
      this.multipleImages = event.target.files;
    }
  }

  // onSubmit(){
  //   const formData = new FormData();
  //   formData.append('file', this.images);

  //   this.http.post<any>('http://localhost:3000/file', formData).subscribe(
  //     (res) => console.log(res),
  //     (err) => console.log(err)
  //   );
  // }

  // onMultipleSubmit(){
  //   const formData = new FormData();
  //   for(let img of this.multipleImages){
  //     formData.append('files', img);
  //   }

  //   this.http.post<any>('http://localhost:3000/multipleFiles', formData).subscribe(
  //     (res) => console.log(res),
  //     (err) => console.log(err)
  //   );
  // }

}
