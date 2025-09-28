import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyServiceService {

  constructor() { }

  showAlert(message: string): void {
    alert('Alert ! '+ message);
  }

  showConfirm(message: string): boolean {
    return confirm('Are you ready ! '+ message);
  }

  showPrompt(message: string): string {
    return prompt('Add ! '+ message);
  }

}
