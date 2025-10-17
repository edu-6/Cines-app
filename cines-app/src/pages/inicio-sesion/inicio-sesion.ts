import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-inicio-sesion',
  imports: [ReactiveFormsModule],
  templateUrl: './inicio-sesion.html',
  styleUrl: './inicio-sesion.css'
})
export class InicioSesion {
  newEventForm!: FormGroup;

  constructor(private formBuilder: FormBuilder){

  }

  ngOnInit(): void {
    this.newEventForm = this.formBuilder.group({
      correo:[null, [Validators.required]],
      contraseña:[null, [Validators.required]]
    })
    
  }

  submit (): void {
    console.log("se han enviado las credenciales");
  }

  reset(): void {
    this.newEventForm.reset();
  }
}


