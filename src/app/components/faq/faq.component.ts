import { Component } from '@angular/core';
import { QuestionComponent } from "./question/question.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [ CommonModule, QuestionComponent],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.scss'
})
export class FaqComponent {
  faqDatas: ReadonlyArray<IFaqDatas> = [
    {
      question: "Quais são os meios de pagamento?",
      response: "Omnis, itaque quam, est ea harum at suscipit optio debitis enim ab, ad placeat eveniet facilis. Ab mollitia minus dicta dolorem atque!"
    },
    {
      question: "Quais garantias são oferecidas?",
      response: "Omnis, itaque quam, est ea harum at suscipit optio debitis enim ab, ad placeat eveniet facilis. Ab mollitia minus dicta dolorem atque!"
    },
    {
      question: "Como ganhar um oscar?",
      response: "Omnis, itaque quam, est ea harum at suscipit optio debitis enim ab, ad placeat eveniet facilis. Ab mollitia minus dicta dolorem atque!"
    },
    {
      question: "Como alugar uma casa na vila do Chaves?",
      response: "Não contavam com minha astúcia"
    },
    {
      question: "Vamos todos a Acapulco",
      response: "Omnis, itaque quam, est ea harum at suscipit optio debitis enim ab, ad placeat eveniet facilis. Ab mollitia minus dicta dolorem atque!"
    },
  ]
} 

interface IFaqDatas {
  question: string
  response: string
}
