import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { matWhatsapp } from '@ng-icons/material-icons/baseline';

@Component({
  selector: 'app-whats-button',
  standalone: true,
  imports: [NgIcon],
  providers: [provideIcons({ matWhatsapp })],
  templateUrl: './whats-button.component.html',
  styleUrl: './whats-button.component.scss'
})
export class WhatsButtonComponent {
  private phoneNumber: string = '5521965782815'
  public message = 'Olá! Gostaria de saber mais sobre o produto.'
  public encodeMessage = encodeURIComponent(this.message)
  private ulr = `https://wa.me/${this.phoneNumber}?text=${this.encodeMessage}`

  openWhatsApp() {
    window.open(this.ulr, '_blank')
  }
}
