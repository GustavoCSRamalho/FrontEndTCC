import { Component, OnInit } from '@angular/core';
import { HttpServiceService } from '../service/http-service.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  data = {
    email:"",
    senha: ""
  }

  constructor(public apiService: HttpServiceService){}
  ngOnInit() {
  }

  submitForm(){
    this.apiService.doLogin(this.data.email,this.data.senha).subscribe((data:String)  => {
      console.log("Eu aqui porra")
      console.log(data)
    })
  }

}
