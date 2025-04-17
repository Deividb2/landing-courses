import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { heroAcademicCap } from '@ng-icons/heroicons/outline';

@Component({
  selector: 'app-product-guide',
  standalone: true,
  imports: [CommonModule, NgIcon],
  providers: [provideIcons({ heroAcademicCap })],
  templateUrl: './product-guide.component.html',
  styleUrl: './product-guide.component.scss'
})
export class ProductGuideComponent {

  productGuideCards: ReadonlyArray<IProductGuideCards> = [
    {
      icon: 'heroAcademicCap',
      title: 'Cursos gratuitos que realmente fazem diferença no seu currículo.'
    },
    {
      icon: 'heroAcademicCap',
      title: 'Técnicas para criar um currículo atrativo e aprovado pelos recrutadores.'
    },
    {
      icon: 'heroAcademicCap',
      title: 'Estratégia de networking para aumentar suas chances de contratação.'
    },
    {
      icon: 'heroAcademicCap',
      title: 'Checklist e plano de ação para garantir que você está no caminho certo.'
    }
  ]

}

interface IProductGuideCards {
  icon: string
  title: string
}
