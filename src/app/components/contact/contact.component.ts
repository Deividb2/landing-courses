import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { matEmail, matWhatsapp } from '@ng-icons/material-icons/baseline';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [NgIcon],
  providers: [provideIcons({ matEmail, matWhatsapp })],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

}
