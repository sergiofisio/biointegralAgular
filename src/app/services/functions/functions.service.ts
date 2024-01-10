import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FunctionsService {

  constructor() { }

  checkForm(form: any, keys: string[]): boolean {
    let hasError = false;

    for (const key of keys) {

      const parts = key.split('.');
      let value;

      if (parts.length === 1) {
        value = (form as any)[parts[0]].value;
        if (!value || !value.length) {
          (form as any)[parts[0]].error = true;
          hasError = true;
        }else{
        (form as any)[parts[0]].error = false;
        }
      } else {
        value = (form as any)[parts[0]][parts[1]].value;

        if (!value) {
          (form as any)[parts[0]][parts[1]].error = true;
          hasError = true;
        }else{
        (form as any)[parts[0]][parts[1]].error = false;
        }
      }
    }

    return hasError;
  }

  resetForm(form: any, keys: string[]) {
    for (const key of keys) {
      console.log(key);
      
      const parts = key.split('.');
      if (parts.length === 1) {
        (form as any)[parts[0]].error = false;
      } else {
        (form as any)[parts[0]][parts[1]].error = false;
      }
    }
  }
}
