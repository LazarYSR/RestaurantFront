import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  
  // Define the FormGroup with its controls
  fgContact = new FormGroup({
    name: new FormControl('', [Validators.minLength(5), Validators.required]),
    email: new FormControl('', [Validators.email, Validators.required]),
    message: new FormControl('', [Validators.required])
  });

  ngOnInit(): void {
    this.fgContact.setValue({name:'',email:'',message:''});  
  }

  onSubmit() {
    if (this.fgContact.valid) {
      const { name, email, message } = this.fgContact.controls; 

    
      console.log('Formulaire envoyé avec succès !', this.fgContact.value);
      alert('Merci pour votre message, nous vous répondrons bientôt !');

      this.fgContact.reset();
    } else {
      alert('Veuillez remplir tous les champs.');
    }
  }
}
