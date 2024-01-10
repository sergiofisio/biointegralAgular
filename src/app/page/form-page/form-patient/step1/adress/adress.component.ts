import { Component, EventEmitter, Input, Output } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-adress',
  templateUrl: './adress.component.html'
})
export class AdressComponent {
  @Input() adress!: any;
  @Output() modelChange = new EventEmitter<any>();

  async fillAdress(zipcode: string) {
    if(!zipcode || zipcode.length<8) return;
    try {
      const response = await axios.get(`https://viacep.com.br/ws/${zipcode}/json/`);
      if (response) {
        this.adress.street.value = response.data.logradouro;
        this.adress.neighborhood.value = response.data.bairro;
        this.adress.city.value = response.data.localidade;
        this.adress.state.value = response.data.uf;
      }
    } catch (error) {
      console.error(error);
    }
  }

    onFocus() {
    this.adress.zipcode.error = false
  }
  onModelChange(value: any) {

    this.adress.zipcode.value = value
    this.modelChange.emit(this.adress.zipcode.value)
  }
}
