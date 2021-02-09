import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {

  constructor(private http: HttpClient) { }

  requestHeaders = new HttpHeaders()
  
  doLogin(email:String, senha:String): Observable<any>{
    return this.http.post("https://presensor.herokuapp.com/aluno/login", {
        email: email,
        senha: senha
    
  }, {headers: this.requestHeaders,responseType: 'text'})
  }
}
