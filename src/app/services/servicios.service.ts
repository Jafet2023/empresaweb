import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CursorError } from '@angular/compiler/src/ml_parser/lexer';

@Injectable({
  providedIn: 'root'
})
export class ServiciosService {

  constructor(public http: HttpClient) {
    console.log('Hola Provider');
  }

  apiUrl = 'https://strapi-udi.herokuapp.com';

  // Register(username: String, email: String, password: Number){
  //   return this.http.post(this.apiUrl + '/auth/local/register',
  //     {username: username, email: email, password: password}
  //   );
  // }

  // register(username: String, email: String, password: String) {
  //   return this.http.post(this.apiUrl + '/auth/local/register',
  //     user).pipe(tap(
  //       (res: TokenResponse) => {
  //         if (res) {
  //           // guardar token
  //           this.saveToken(res.dataUser.accessToken, res.dataUser.expiresIn);
  //         }
  //       })
  //     );
  // }

  register(username: String, email: String, password: String){
    return this.http.post(this.apiUrl + '/auth/local/register',
      {username: username, email: email, password: password}
    );
  }

  login(identifier: String, password: Number){
    return this.http.post(this.apiUrl + '/auth/local',
      {identifier: identifier, password: password}
    );
  }

  RegisterEmpresa(nombre: String, nit: Number, direccion: String, telefono: Number, correo:String) {
    return this.http.post(this.apiUrl + '/empresas',
      {nombre: nombre, nit: nit, direccion: direccion, telefono: telefono, correo: correo}
    );
  }

  // UploadImage(){
  //   return this.http.post(this.apiUrl + '/empresas',
  //     {nombre: nombre, nit: nit, direccion: direccion, telefono: telefono, correo: correo}
  //   );
  // }

  UpdateEmpresa(id: String, value: any) {
    return this.http.put(`${this.apiUrl}/empresas/${id}`,
      value
    );
  }

  getEmpresa(id: string){
    return this.http.get(`${this.apiUrl}/empresas/${id}`);
  }

  DeleteEmpresa(id: String) {
    return this.http.delete(`${this.apiUrl}/empresas/${id}`);
  }

  MostrarEmpresas(){
    return new Promise(resolve => {
      this.http.get(this.apiUrl + '/empresas').subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

  // signInUser(user) {
  //   return this.http.post<any>(this.apiUrl + '/auth/local', user);
  // }

  getempresaforid(id: string){
    return this.http.get(`${this.apiUrl}/users/${id}`);
  }

}
