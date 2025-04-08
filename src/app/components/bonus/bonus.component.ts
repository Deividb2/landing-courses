import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { matAdd } from '@ng-icons/material-icons/baseline';

@Component({
  selector: 'app-bonus',
  standalone: true,
  imports: [NgIcon],
  providers: [provideIcons({ matAdd })],
  templateUrl: './bonus.component.html',
  styleUrl: './bonus.component.scss'
})
export class BonusComponent {

}
