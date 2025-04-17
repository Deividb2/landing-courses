import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';

// icons
import { heroAcademicCap } from '@ng-icons/heroicons/outline';
import { matStar } from '@ng-icons/material-icons/baseline';
import { matAssignmentIndOutline, matBoltOutline, matManageSearchOutline, matDescriptionOutline } from '@ng-icons/material-icons/outline';

@Component({
  selector: 'app-benefits',
  standalone: true,
  imports: [CommonModule, NgIcon],
  providers: [provideIcons({ heroAcademicCap, matAssignmentIndOutline, matManageSearchOutline, matStar, matBoltOutline, matDescriptionOutline })],
  templateUrl: './benefits.component.html',
  styleUrl: './benefits.component.scss'
})
export class BenefitsComponent {
  cardsData: ReadonlyArray<IBenefitsCards> = [
    {
      icon: "heroAcademicCap",
      title: "Como se qualificar gratuitamente",
      text: "Lista de plataformas com cursos gratuitos e certificados reconhecidos pelo mercado"
    },
    {
      icon: "matAssignmentIndOutline",
      title: "Currículo impecável",
      text: "O que colocar, como organizar e como fazer seu currículo se destacar."
    },
    {
      icon: "matManageSearchOutline",
      title: "Onde procurar vagas",
      text: "Os melhores sites e empresas que estão sempre contratando."
    },
    {
      icon: "matStar",
      title: "Como se destacar na seleção",
      text: "Dicas para entrevistas e como ser notado pelos recrutadores."
    },
    {
      icon: "matBoltOutline",
      title: "Plano de ação “30 Dias para o Emprego” ",
      text: "Estratégia para enviar 30 currículos por dia e se tornar impossível não ser contratado!"
    },
    {
      icon: "matDescriptionOutline",
      title: "Script de Entrevistas de emprego",
      text: "Garantia de aprovação em qualquer entrevista, baseado na visão geral de mercado hoje."
    }
  ]
}

interface IBenefitsCards {
  icon: string
  title: string
  text: string
}
