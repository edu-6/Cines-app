import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-nuevo-usuario-form',
  imports: [ReactiveFormsModule],
  templateUrl: './nuevo-usuario-form.html',
})
export class NuevoUsuarioForm {
  newEventForm!: FormGroup;

  constructor(private formBuilder: FormBuilder){

  }

  ngOnInit(): void {
    this.newEventForm = this.formBuilder.group({
      correo:[null, [Validators.required]],
      contraseña:[null, [Validators.required]],
      nombre :[null, [Validators.required]]
    })
    
  }

  submit (): void {
    console.log("se han enviado las credenciales");
  }

  reset(): void {
    this.newEventForm.reset();
  }

}
