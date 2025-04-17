import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';

// icons
import { heroCheckCircleSolid as check } from '@ng-icons/heroicons/solid';
// import { matClose as close } from '@ng-icons/material-icons/baseline';
import { heroXCircleSolid as close } from '@ng-icons/heroicons/solid';

@Component({
  selector: 'app-target-audience',
  standalone: true,
  imports: [CommonModule, NgIcon],
  providers: [provideIcons({ check, close })],
  templateUrl: './target-audience.component.html',
  styleUrl: './target-audience.component.scss'
})
export class TargetAudienceComponent {

  targetAudience: ReadonlyArray<string> = [
    "Para quem está desempregado e quer sair dessa situação o mais rápido possível.",
    "Para quem nunca trabalhou e precisa entrar no mercado de trabalho.",
    "Para quem quer mudar de área e precisa se qualificar sem gastar dinheiro.",
    "Para quem já enviou currículos, mas nunca é chamado para entrevistas."
  ]

  targetAudienceNot: ReadonlyArray<string> = [
    "Você prefere culpar o sistema do que buscar alternativas.",
    "Não está disposto a sair da inércia.",
    "Ainda acredita que alguém vai bater na sua porta oferecendo emprego.",
    "Acha que estudar de graça na internet é perda de tempo."
  ]

}
