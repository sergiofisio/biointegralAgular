import { Component } from '@angular/core';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html'
})
export class FormComponent {
  model = {
    name: '',
    email: '',
    telefone: '',
    message: ''
  };

  onSubmit(e: Event) {

    console.log(this.model);


    e.preventDefault();
    try {
      const email = emailjs.send(
        "service_2mocdp6",
        "template_zisxvxu",
        {
          nome: this.model.name,
          email: this.model.email,
          telefone: `(${this.model.telefone.slice(0, 2)}) ${this.model.telefone.slice(
            2,
            7
          )}-${this.model.telefone.slice(7)}`,
          mensagem: this.model.message,
        },
        "XvfhuCuvP_d-Gbx0P"
      );
      console.log(email);

    } catch (error) {
      console.log(error);

    }
  }
}
