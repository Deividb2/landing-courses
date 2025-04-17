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
      question: "Esse eBook realmente vai me ajudar a conseguir um emprego?",
      response: "Sim! O conteúdo foi pensado para te dar direção prática. Ele não promete milagres, mas te entrega ferramentas e estratégias reais para conseguir seu emprego em tempo record."
    },
    {
      question: "Eu não tenho dinheiro para fazer cursos agora. Isso é um problema?",
      response: "De jeito nenhum. Todos os cursos indicados no eBook são gratuitos e com certificado, exatamente para quem está sem grana mas quer se desenvolver."
    },
    {
      question: "Nunca trabalhei, esse material serve pra mim?",
      response: "Serve sim! O eBook tem dicas específicas para quem não tem experiência, incluindo como montar um bom currículo mesmo assim, e como se sair bem nas entrevistas."
    },
    {
      question: "Preciso ter acesso à internet o tempo todo?",
      response: "Só para acessar os cursos e materiais extras. Mas o eBook pode ser lido offline, então você pode estudá-lo a qualquer momento."
    },
    {
      question: "E se nada disso funcionar pra mim?",
      response: "Tudo depende da sua dedicação. O eBook é um guia, mas quem coloca em prática é você. Se você aplicar as dicas com constância, os resultados virão."
    },
    {
      question: "Por que o eBook custa R$ 19,90?",
      response: "O valor é simbólico e foi pensado para ser acessível. Ele ajuda a manter o projeto e continuar oferecendo conteúdos de qualidade. Por apenas R$ 19,90, você terá acesso a informações que podem mudar completamente sua trajetória profissional."
    }
  ]
} 

interface IFaqDatas {
  question: string
  response: string
}
