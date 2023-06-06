import { Component } from '@angular/core';
import { ApiService } from './api.service';
import { AbstractControl, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public data;
  public form =new FormGroup({
    name: new FormControl(",[Validators.required]")
  })
  constructor(public apiService){
    this.apiService.getAllData().then((data)=>
    {
      console.log(data);
      this.data=data;
    });
  }
  public get name(): AbstractControl{
    return this.form.controls['name'];
  }
}
