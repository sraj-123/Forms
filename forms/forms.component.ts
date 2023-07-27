import { Component } from '@angular/core';
import { FormGroup,FormControl,Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent {

  loginUser = new FormGroup({
    name: new FormControl('',[Validators.required,Validators.pattern('[A-Za-z\s]+$'),Validators.minLength(5),Validators.maxLength(30)]),
    id: new FormControl('',[Validators.required,Validators.pattern('[0-9]+$'),Validators.minLength(6),Validators.maxLength(6)]),
    projectId: new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z0-9]'),Validators.minLength(12),Validators.maxLength(12)]),
    Location: new FormControl('',[Validators.required]),
    Skills: new FormControl('',[Validators.minLength(5)]),
    files: new FormControl('',[Validators.required]),
    comment: new FormControl('',[Validators.required,Validators.minLength(1)])
  })

  get name(){
    return this.loginUser.get('name');

  }
  get id(){
    return this.loginUser.get('id');
  }

  get projectId(){
    return this.loginUser.get('projectId');
  }
   
  get Location(){
    return this.loginUser.get('Location');
  }
  get Skills(){
    return this.loginUser.get('Skills');
  }
  get files(){
    return this.loginUser.get('files');
  }
  get comment(){
    return this.loginUser.get('comment');
  }


  
    
  
    constructor() { }
  
  
    }

    




  
    
  


