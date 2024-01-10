// import emailjs from '@emailjs/browser';
import { Component } from '@angular/core';
import { FunctionsService } from 'src/app/services/functions/functions.service';


@Component({
  selector: 'app-form-patient',
  templateUrl: './form-patient.component.html'
})
export class FormPatientComponent {

  constructor(private functionsService: FunctionsService) { }

  step = 4;
  form = {
    step1: {
      name: {
        question: 'Nome Completo', value: '', type: 'text', error: false, required: true
      },
      gender: { question: 'Sexo', options: ['', 'Masculino', 'Feminino'], value: '', type: 'text', error: false, required: true },
      email: { question: 'E-mail', value: '', type: 'email', error: false, required: true },
      birth: {
        question: 'Data de Nascimento', value: '', type: 'date', error: false, required: true
      },
      age: { question: 'Idade', value: null, type: 'number', error: false, required: true },
      ageFirstPeriod: { question: 'Idade da primeira menstruação', value: null, type: 'number', error: false },
      menopause: {
        question: 'Ja entrou na menopausa?',
        options: ['Sim', 'Não'],
        value: '',
        age: { question: 'Idade da menopausa', value: null, type: 'number', error: false }, type: 'text', error: false
      },
      religion: {
        question: 'Religião', value: '', type: 'text', error: false, required: true
      },
      job: {
        question: 'Trabalho', value: '', type: 'text', error: false, required: true
      },
      phone: {
        question: 'Celular', value: '', mask: '(00) 00000-0000', type: 'text', error: false, required: true
      },
      adress: {
        street: { question: 'Rua', value: '', type: 'text', error: false, required: true },
        number: { question: 'Nº', value: null, type: 'number', error: false, required: true },
        complement: { question: 'Complemento', value: '', type: 'text' },
        neighborhood: { question: 'Bairro', value: '', type: 'text', error: false, required: true },
        city: { question: 'Cidade', value: '', type: 'text', error: false, required: true },
        state: { question: 'Estado', value: '', type: 'text', error: false, required: true },
        zipcode: { question: 'CEP', value: '', mask: '00000000', type: 'text', error: false, required: true }
      },
      knowUs: { question: 'COMO NOS CONHECEU?', value: '', type: 'text', error: false, required: true },
      motive: { question: 'PORQUE VOCÊ ESCOLHEU SE TRATAR NESTE MOMENTO?', value: '', type: 'textarea', error: false, required: true },
      emotion: {
        question: 'QUE EMOÇÕES VOCÊ ACHA QUE ESTÃO MAIS DESEQUILIBRADAS?',
        options: ['Alegria',
          'Raiva',
          'Tristeza',
          'Medo',
          'Nojo',
          'Outros'],
        value: [],
        especifique: { question: 'Especifique', value: '', type: 'textarea', error: false }, error: false, required: true
      },
      start: { question: 'QUANDO COMEÇOU O SEU PROBLEMA?', value: '', type: 'textarea', error: false, required: true },
      advantage: { question: 'VOCÊ CONSEGUE IDENTIFICAR ALGUMA VANTAGEM DE VIVER ESTE PROBLEMA?', value: '', type: 'textarea', error: false, required: true },
      inconvenient: { question: 'QUAL(IS) INCONVENIENTE (S) DE TER ESTE PROBLEMA?', value: '', type: 'textarea', error: false, required: true },
      needs: { question: 'QUAL NECESSIDADE VOCÊ ACHA QUE NÃO FOI ATENDIDA AO VIVER ESTE PROBLEMA?', value: '', type: 'textarea', error: false, required: true },
      problemOneWord: { question: 'SE VOCÊ CONSEGUISSE RESUMIR O SEU PROBLEMA EM UMA PALAVRA, QUE PALAVRA SERIA?', value: '', type: 'text', error: false, required: true },
    },
    step2: {
      physic: { 
        question: 'Sua queixa principal é um sintoma físico?', options: ['Sim', 'Não'], value: '',error: false, required: true 
      },
      infection: {
        question: 'Tem infecção?',
        options: ['Sim', 'Não'],
        typeOf: {
          question: 'Qual tipo?',
          options: [
            'Bacteria',
            'Vírus',
            'Fungo',
            'Parasita',
            'Não sei'
          ],
          value: ''
        },
        value: '',error: false, required: true
      },
      pain: {
        question: 'Tem dor?',
        options: ['Sim', 'Não'],
        value: '',
        cause: { question: 'Qual a causa?', type: 'text', value: '' },
        dayTime: { question: 'Algum período a dor piora?', options: ['Manha', 'Tarde', 'Noite', 'Qualquer horário'], value: '' },
        edema: { question: 'Incha?', options: ['Sim', 'Não'], value: '' },error: false, required: true
      },
      autoimune: { question: 'É uma doença autoimune?', options: ['Sim', 'Não'], value: '',error: false, required: true },
      simptomes: {
        question: 'Você apresenta algum destes sintomas?', options: ['Vômito',
          'Diarreia',
          'Constipação',
          'Insônia',
          'Sangramento',
          'Diabetes ou Pré-diabetes',
          'Nenhum destes'], value: [],error: false, required: true
      },
    },
    step3: [
      {
        question: '1- Existe alguma marca do passado que está sempre presente em sua mente? Boa ou ruim.',
        options: [
          '',
          'Muito Frequente',
          'Às vezes',
          'Raramente',
          'Nunca'
        ],
        value: '',
        error: false
      },
      {
        question: '2- As tarefas do dia a dia são um peso para você? Mas para atividades diferentes você se anima?',
        options: [
          '',
          'Muito Frequente',
          'Às vezes',
          'Raramente',
          'Nunca'
        ],
        value: '',
        error: false
      },
      {
        question: '3- Você tem a sensação de que a maioria das pessoas são lentas?',
        options: [
          '',
          'Muito Frequente',
          'Às vezes',
          'Raramente',
          'Nunca'
        ],
        value: '',
        error: false
      },
      {
        question: '4- Você percebe sua autoestima baixa?',
        options: [
          '',
          'Muito Frequente',
          'Às vezes',
          'Raramente',
          'Nunca'
        ],
        value: '',
        error: false
      },
      {
        question: '5- Você sente medo?',
        options: [
          '',
          'Muito Frequente',
          'Às vezes',
          'Raramente',
          'Nunca'
        ],
        value: '',
        error: false
      },
      {
        question: '6- Você conhece a origem do/dos seu/seus medo/medos?',
        options: [
          '',
          'Muito Frequente',
          'Às vezes',
          'Raramente',
          'Nunca'
        ],
        value: '',
        error: false
      },
      {
        question: '7- A timidez é um sentimento que está presente em sua vida?',
        options: [
          '',
          'Muito Frequente',
          'Às vezes',
          'Raramente',
          'Nunca'
        ],
        value: '',
        error: false
      },
      {
        question: '8- Você tem oscilações de humor?',
        options: [
          '',
          'Muito Frequente',
          'Às vezes',
          'Raramente',
          'Nunca'
        ],
        value: '',
        error: false
      },
      {
        question: '9- A tristeza é um sentimento comum em você?',
        options: [
          '',
          'Muito Frequente',
          'Às vezes',
          'Raramente',
          'Nunca'
        ],
        value: '',
        error: false
      },
      {
        question: '10- Nem sempre você consegue compreender o motivo da sua tristeza?',
        options: [
          '',
          'Muito Frequente',
          'Às vezes',
          'Raramente',
          'Nunca'
        ],
        value: '',
        error: false
      },
      {
        question: '11- É comum você assumir muitas responsabilidades?',
        options: [
          '',
          'Muito Frequente',
          'Às vezes',
          'Raramente',
          'Nunca'
        ],
        value: '',
        error: false
      },
      {
        question: '12- A verdade é que ninguém sabe, realmente, como você está no seu íntimo?',
        options: [
          '',
          'Muito Frequente',
          'Às vezes',
          'Raramente',
          'Nunca'
        ],
        value: '',
        error: false
      },
      {
        question: '13- É comum você esconder seus sentimentos atrás de um sorriso?',
        options: [
          '',
          'Muito Frequente',
          'Às vezes',
          'Raramente',
          'Nunca'
        ],
        value: '',
        error: false
      },
      {
        question: '14- É comum você utilizar alguma substância para aliviar o estresse ou angústias?',
        options: [
          '',
          'Muito Frequente',
          'Às vezes',
          'Raramente',
          'Nunca'
        ],
        value: '',
        error: false
      },
      {
        question: '15- Você sente a sensação de que algo está para acontecer, como uma premonição?',
        options: [
          '',
          'Muito Frequente',
          'Às vezes',
          'Raramente',
          'Nunca'
        ],
        value: '',
        error: false
      },
      {
        question: '16- Você tem sensação de medo sem identificar, claramente, do que?',
        options: [
          '',
          'Muito Frequente',
          'Às vezes',
          'Raramente',
          'Nunca'
        ],
        value: '',
        error: false
      },
      {
        question: '17- É difícil conviver com as pessoas, você se sente intolerante?',
        options: [
          '',
          'Muito Frequente',
          'Às vezes',
          'Raramente',
          'Nunca'
        ],
        value: '',
        error: false
      },
      {
        question: '18- Você se sente irritada com facilidade?',
        options: [
          '',
          'Muito Frequente',
          'Às vezes',
          'Raramente',
          'Nunca'
        ],
        value: '',
        error: false
      },
      {
        question: '19- É importante para você que todos ao seu redor estejam felizes e satisfeitos? E você se dedica para que isso aconteça?',
        options: [
          '',
          'Muito Frequente',
          'Às vezes',
          'Raramente',
          'Nunca'
        ],
        value: '',
        error: false
      },
      {
        question: '20- A opinião dos outros é muito importante para você?',
        options: [
          '',
          'Muito Frequente',
          'Às vezes',
          'Raramente',
          'Nunca'
        ],
        value: '',
        error: false
      },
      {
        question: '21- É comum você mudar uma escolha sua pela opinião de outra pessoa?',
        options: [
          '',
          'Muito Frequente',
          'Às vezes',
          'Raramente',
          'Nunca'
        ],
        value: '',
        error: false
      },
      {
        question: '22- É comum você ter dificuldade para decidir algo?',
        options: [
          '',
          'Muito Frequente',
          'Às vezes',
          'Raramente',
          'Nunca'
        ],
        value: '',
        error: false
      },
      {
        question: '23- Quando tem dificuldade para decidir algo, você pede a opinião de muitas pessoas?',
        options: [
          '',
          'Muito Frequente',
          'Às vezes',
          'Raramente',
          'Nunca'
        ],
        value: '',
        error: false
      },
      {
        question: '24- Você tem medo da sua reação se perder o controle?',
        options: [
          '',
          'Muito Frequente',
          'Às vezes',
          'Raramente',
          'Nunca'
        ],
        value: '',
        error: false
      },
      {
        question: '25- É comum você repetir erros na sua vida?',
        options: [
          '',
          'Muito Frequente',
          'Às vezes',
          'Raramente',
          'Nunca'
        ],
        value: '',
        error: false
      },
      {
        question: '26- O desafio presente na sua vida agora tem relação com a repetição de situações?',
        options: [
          '',
          'Muito Frequente',
          'Às vezes',
          'Raramente',
          'Nunca'
        ],
        value: '',
        error: false
      },
      {
        question: '27- Você tem a necessidade de ajudar as pessoas que você ama?',
        options: [
          '',
          'Muito Frequente',
          'Às vezes',
          'Raramente',
          'Nunca'
        ],
        value: '',
        error: false
      },
      {
        question: '28- É comum você ter a sensação que sabe o que é melhor para as pessoas?',
        options: [
          '',
          'Muito Frequente',
          'Às vezes',
          'Raramente',
          'Nunca'
        ],
        value: '',
        error: false
      },
      {
        question: '29- Você tem dificuldade em se concentrar?',
        options: [
          '',
          'Muito Frequente',
          'Às vezes',
          'Raramente',
          'Nunca'
        ],
        value: '',
        error: false
      },
      {
        question: '30- Você sente como se vivesse no mundo da lua?',
        options: [
          '',
          'Muito Frequente',
          'Às vezes',
          'Raramente',
          'Nunca'
        ],
        value: '',
        error: false
      },
      {
        question: '31- Você gosta do que vê no espelho?',
        options: [
          '',
          'Sim',
          'Não',
          'Gostaria de mudar bantante coisa'
        ],
        value: '',
        error: false
      },
      {
        question: '32- Você não se sente feliz com seu corpo?',
        options: [
          '',
          'Muito Frequente',
          'Às vezes',
          'Raramente',
          'Nunca'
        ],
        value: '',
        error: false
      },
      {
        question: '33- Você tem mania por limpeza?',
        options: [
          '',
          'Muito Frequente',
          'Às vezes',
          'Raramente',
          'Nunca'
        ],
        value: '',
        error: false
      },
      {
        question: '34- Esta fase da sua vida está com excesso de responsabilidades?',
        options: [
          '',
          'Muito Frequente',
          'Às vezes',
          'Raramente',
          'Nunca'
        ],
        value: '',
        error: false
      },
      {
        question: '35- Você tem a sensação de que está carregando peso nas costas?',
        options: [
          '',
          'Muito Frequente',
          'Às vezes',
          'Raramente',
          'Nunca'
        ],
        value: '',
        error: false
      },
      {
        question: '36- Você costuma ser pessimista?',
        options: [
          '',
          'Muito Frequente',
          'Às vezes',
          'Raramente',
          'Nunca'
        ],
        value: '',
        error: false
      },
      {
        question: '37- Está difícil acreditar que a situação pode mudar?',
        options: [
          '',
          'Muito Frequente',
          'Às vezes',
          'Raramente',
          'Nunca'
        ],
        value: '',
        error: false
      },
      {
        question: '38- Você acredita que é capaz de mudar a situação?',
        options: [
          '',
          'Muito Frequente',
          'Às vezes',
          'Raramente',
          'Nunca'
        ],
        value: '',
        error: false
      },
      {
        question: '39- Está cansada física e/ou mentalmente?',
        options: [
          '',
          'Muito Frequente',
          'Às vezes',
          'Raramente',
          'Nunca'
        ],
        value: '',
        error: false
      },
      {
        question: '40- A culpa é uma emoção presente na sua vida ou nesse momento?',
        options: [
          '',
          'Muito Frequente',
          'Às vezes',
          'Raramente',
          'Nunca'
        ],
        value: '',
        error: false
      },
      {
        question: '41- Para você é importante que a sua conduta seja perfeita?',
        options: [
          '',
          'Muito Frequente',
          'Às vezes',
          'Raramente',
          'Nunca'
        ],
        value: '',
        error: false
      },
      {
        question: '42- Alguém que você ama está te deixando preocupada no momento?',
        options: [
          '',
          'Muito Frequente',
          'Às vezes',
          'Raramente',
          'Nunca'
        ],
        value: '',
        error: false
      },
      {
        question: '43- Você é perfeccionista?',
        options: [
          '',
          'Muito Frequente',
          'Às vezes',
          'Raramente',
          'Nunca'
        ],
        value: '',
        error: false
      },
      {
        question: '44- Quando você faz alguma coisa, precisa seguir à risca?',
        options: [
          '',
          'Muito Frequente',
          'Às vezes',
          'Raramente',
          'Nunca'
        ],
        value: '',
        error: false
      },
      {
        question: '45- Você sente pânico ou medo excessivo que te impeça de realizar algo?',
        options: [
          '',
          'Muito Frequente',
          'Às vezes',
          'Raramente',
          'Nunca'
        ],
        value: '',
        error: false
      },
      {
        question: '46- Você tem pesadelos?',
        options: [
          '',
          'Muito Frequente',
          'Às vezes',
          'Raramente',
          'Nunca'
        ],
        value: '',
        error: false
      },
      {
        question: '47- Quando fica em dúvida, termina sempre entre duas opções?',
        options: [
          '',
          'Muito Frequente',
          'Às vezes',
          'Raramente',
          'Nunca'
        ],
        value: '',
        error: false
      },
      {
        question: '48- Você sente que o desafio da sua vida hoje tem relação com algum fato do passado?',
        options: [
          '',
          'Muito Frequente',
          'Às vezes',
          'Raramente',
          'Nunca'
        ],
        value: '',
        error: false
      },
      {
        question: '49- Aconteceu no seu passado algum evento muito marcante, que você entende que interferiu na sua vida?',
        options: [
          '',
          'Muito Frequente',
          'Às vezes',
          'Raramente',
          'Nunca'
        ],
        value: '',
        error: false
      },
      {
        question: '50- Nesse momento está sem energia física e mental',
        options: [
          '',
          'Muito Frequente',
          'Às vezes',
          'Raramente',
          'Nunca'
        ],
        value: '',
        error: false
      },
      {
        question: '51- É difícil você estar errada?',
        options: [
          '',
          'Muito Frequente',
          'Às vezes',
          'Raramente',
          'Nunca'
        ],
        value: '',
        error: false
      },
      {
        question: '52- É importante para você que as outras pessoas entendam e aceitem seu ponto de vista?',
        options: [
          '',
          'Muito Frequente',
          'Às vezes',
          'Raramente',
          'Nunca'
        ],
        value: '',
        error: false
      },
      {
        question: '53- É comum você perceber que é superior mentalmente que a maioria das pessoas?',
        options: [
          '',
          'Muito Frequente',
          'Às vezes',
          'Raramente',
          'Nunca'
        ],
        value: '',
        error: false
      },
      {
        question: '54- Você está em uma fase de mudança?',
        options: [
          '',
          'Muito Frequente',
          'Às vezes',
          'Raramente',
          'Nunca'
        ],
        value: '',
        error: false
      },
      {
        question: '55- Você sente que o ambiente influencia seu estado emocional/mental/humor?',
        options: [
          '',
          'Muito Frequente',
          'Às vezes',
          'Raramente',
          'Nunca'
        ],
        value: '',
        error: false
      },
      {
        question: '56- Você tem a sensação de que sua cabeça pensa demais?',
        options: [
          '',
          'Muito Frequente',
          'Às vezes',
          'Raramente',
          'Nunca'
        ],
        value: '',
        error: false
      },
      {
        question: '57- O excesso de pensamentos atrapalha seu sono ou suas atividades?',
        options: [
          '',
          'Muito Frequente',
          'Às vezes',
          'Raramente',
          'Nunca'
        ],
        value: '',
        error: false
      },
      {
        question: '58- É comum as pessoas julgarem você como alguém inacessível/com rei na barriga?',
        options: [
          '',
          'Muito Frequente',
          'Às vezes',
          'Raramente',
          'Nunca'
        ],
        value: '',
        error: false
      },
      {
        question: '59- Você faz amizades com facilidade?',
        options: [
          '',
          'Muito Frequente',
          'Às vezes',
          'Raramente',
          'Nunca'
        ],
        value: '',
        error: false
      },
      {
        question: '60- O pensamento: “A vida foi difícil para mim, muitas pessoas me magoaram” Se enquadra em sua vida?',
        options: [
          '',
          'Muito Frequente',
          'Às vezes',
          'Raramente',
          'Nunca'
        ],
        value: '',
        error: false
      },
    ],
    step4: {
      parentsAlive: {
        question: 'Seus Pais estão vivos?',
        options: ['Ambos vivos', 'Somente Pai Vivo', 'Somente Mão Vivo', 'Ambos falecidos'],
        value: '',
        relationship: {
          question: 'Como é(era) o seu relacionamento com seus Pais? (nota 0 - 10)', options: ['', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10'], value: '', error: false
        },
        description: { question: 'Conte-nos um pouco a respeito', value: '', error: false, type: 'textarea' }
      },
      haveSiblings: {
        question: 'Tem irmãos?',
        options: ['Sim', 'Não'],
        many: { question: 'Quantos irmãos?', value: '', error: false, type: 'number' },
        value: '',
        relationship: { question: 'Como é o seu relacionamento com seus Irmãos? (nota 0 - 10)', options: ['', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10'], value: '', error: false },
        description: { question: 'Conte-nos um pouco a respeito', value: '', error: false, type: 'textarea' }
      },
      relationship: {
        question: 'Relacionamentos',
        options: [
          'Casado(a)',
          'Solteiro(a)',
          'Divorciado(a)',
          'Viuvo(a)'],
        value: '',
        description: { question: 'Conte-nos um pouco a respeito', value: '', error: false, type: 'textarea' }
      },
      haveKids: {
        question: 'Tem filhos? (Se houver aborto responder Sim)',
        options: ['Sim', 'Não'],
        many: {
          question: 'Quantos filhos?',
          value: null,
          error: false,
          type: 'number'
        },
        abortion: {
          question: 'Teve Abortos?',
          options: ['Sim', 'Não'],
          value: '',
          error: false,
          many: {
            question: 'Quantos Abortos?',
            value: null,
            error: false,
            type: 'number'
          }
        },
        value: '',
        description: { question: 'Conte-nos um pouco a respeito', value: '', error: false, type: 'textarea' }
      },
      moreInfo: {
        question: 'Gostaria de Acrescentar algo mais?',
        value: '',
        error: false,
        type: 'textarea'
      }
    }
  }

  handleChangeStep(action?: string) {
  if (action === 'next' && this.step < 4) {
    if (this.step === 1 && this.functionsService.checkForm(this.form.step1, [
      'name', 'email', 'phone', 'birth', 'gender', 'religion', 'job', 'knowUs', 'motive', 'emotion', 'start', 'advantage', 'inconvenient', 'needs', 'problemOneWord',
      'adress.street', 'adress.number', 'adress.neighborhood', 'adress.city', 'adress.state', 'adress.zipcode'
    ])) {
      return;
    }

    if (this.step === 2 && this.functionsService.checkForm(this.form.step2, [
      'physic', 'infection', 'pain', 'autoimune'
    ])) {
      return;
    }

    if (this.step === 3) {
      let valid = true;
      for (const question of this.form.step3) {
        if (!question.value) {
          question.error = true;
          valid = false;
        } else {
          question.error = false;
        }
      }
      if (!valid) {
        return;
      }
    }

    return this.step++;
  }

  if (this.step < 1) {
    return;
  }

  return this.step--;
}

  async handleSubmit() {

    // if(this.functionsService.checkForm(this.form.step4, [
    //     'parentsAlive', 'haveSiblings', 'relationship', 'haveKids'
    //   ])) throw new Error('Preencha todos os campos obrigatórios!');


    const step1 = this.form.step1;
    const step2 = this.form.step2;
    const step3 = this.form.step3;
    const step4 = this.form.step4;
    try {
      // await emailjs.send(
      //     "service_2mocdp6",
      //     "template_aur8o8r",
      //     {
      //       nomeCompleto: step1.name.value,
  		// 					sexo:step1.gender.value,
  		// 					email:step1.email.value,
  		// 					cep:step1.adress.zipcode.value,
  		// 					rua:step1.adress.street.value,
  		// 					numero:step1.adress.number.value,
  		// 					complemento:step1.adress.complement.value,
  		// 					bairro:step1.adress.neighborhood.value,
  		// 					cidade:step1.adress.city.value,
  		// 					estado:step1.adress.state.value,
  		// 					telefone:step1.phone.value,
  		// 					profissao:step1.job.value,
  		// 					dataNascimento:step1.birth.value,
  		// 					idade:step1.age.value,
  		// 					idadePrimeiraMenstruacao:step1.ageFirstPeriod.value,
  		// 					menopausa:step1.menopause.value,
  		// 					idadeMenopausa:step1.menopause.age.value,
  		// 					religiao:step1.religion.value,
  		// 					comoConheceu:step1.knowUs.value,
  		// 					motivoTratamento:step1.motive.value,
  		// 					emocoesDesequilibradas:step1.emotion.value,
      //           especifiqueEmocoes:step1.emotion.especifique.value,
  		// 					inicioProblema:step1.start.value,
  		// 					vantagemProblema:step1.advantage.value,
  		// 					inconvenienteProblema:step1.inconvenient.value,
  		// 					necessidadeNaoAtendida:step1.needs.value,
  		// 					palavraResumoProblema:step1.problemOneWord.value,
  		// 					sintomaFisico:step2.physic.value,
  		// 					infeccao:step2.infection.value,
  		// 					tipoInfeccao:step2.infection.typeOf.value,
  		// 					temDor:step2.pain.value,
  		// 					causaDor:step2.pain.cause.value,
  		// 					pioraDor:step2.pain.dayTime.value,
  		// 					incha:step2.pain.edema.value,
  		// 					autoimune:step2.autoimune.value,
  		// 					algumSintomas:step2.simptomes.value,
  		// 					marcasPassado:step3[0].value,
  		// 					tarefasDiaDia:step3[1].value,
  		// 					percepcaoLentidao:step3[2].value,
  		// 					autoestimaBaixa:step3[3].value,
  		// 					sentimentoMedo:step3[4].value,
  		// 					origemMedos:step3[5].value,
  		// 					timidez:step3[6].value,
  		// 					oscilacoesHumor:step3[7].value,
  		// 					sentimentoTristeza:step3[8].value,
  		// 					compreensaoTristeza:step3[9].value,
  		// 					assumirResponsabilidades:step3[10].value,
  		// 					privacidadeEmocional:step3[11].value,
  		// 					esconderSentimentos:step3[12].value,
  		// 					usoSubstancia:step3[13].value,
  		// 					premonicao:step3[14].value,
  		// 					medoIndefinido:step3[15].value,
  		// 					intoleranciaConvivio:step3[16].value,
  		// 					irritabilidade:step3[17].value,
  		// 					buscarFelicidadeOutros:step3[18].value,
  		// 					importanciaOpiniao:step3[19].value,
  		// 					mudarEscolhasOpiniao:step3[20].value,
  		// 					dificuldadeDecisao:step3[21].value,
  		// 					pedirOpinioes:step3[22].value,
  		// 					medoPerderControle:step3[23].value,
  		// 					repeticaoErros:step3[24].value,
  		// 					desafioRelacaoRepeticao:step3[25].value,
  		// 					ajudaNecessidade:step3[26].value,
  		// 					melhorParaPessoas:step3[27].value,
  		// 					dificuldadeConcentracao:step3[28].value,
  		// 					mundoDaLua:step3[29].value,
  		// 					gostarAparencia:step3[30].value,
  		// 					infelicidadeCorpo:step3[31].value,
  		// 					maniaLimpeza:step3[32].value,
  		// 					excessoResponsabilidades:step3[33].value,
  		// 					pesoCostas:step3[34].value,
  		// 					pessimismo:step3[35].value,
  		// 					acreditarMudanca:step3[36].value,
  		// 					acreditarMudarSituacao:step3[37].value,
  		// 					energiaEsgotada:step3[38].value,
  		// 					culpaEmocao:step3[39].value,
  		// 					buscaPerfeicao:step3[40].value,
  		// 					preocupacaoAmado:step3[41].value,
  		// 					perfeccionismo:step3[42].value,
  		// 					escolhasRisca:step3[43].value,
  		// 					panicoImpedimento:step3[44].value,
  		// 					pesadelos:step3[45].value,
  		// 					dificuldadeDecisaoDuasOpcoes:step3[46].value,
  		// 					desafioRelacaoPassado:step3[47].value,
  		// 					eventoMarcantePassado:step3[48].value,
  		// 					semEnergia:step3[49].value,
  		// 					dificuldadeEstarErrada:step3[50].value,
  		// 					importanciaAceitacaoPontoVista:step3[51].value,
      //           percepcaoSuperioridadeMental:step3[52].value,
  		// 					faseMudanca:step3[53].value,
  		// 					influenciaAmbiente:step3[54].value,
  		// 					cabecaPensaDemais:step3[55].value,
  		// 					excessoPensamentos:step3[56].value,
  		// 					julgamentoInacessibilidade:step3[57].value,
  		// 					facilidadeAmizades:step3[58].value,
  		// 					vidaDificilMagoas:step3[59].value,
  		// 					paisVivos:step4.parentsAlive.value,
  		// 					relacionamentoPais:step4.parentsAlive.relationship.value,
  		// 					relacionamentoPaisDescricao:step4.parentsAlive.description.value,
  		// 					temIrmaos:step4.haveSiblings.value,
  		// 					quantidadeIrmaos:step4.haveSiblings.many.value,
  		// 					relacionamentoIrmaos:step4.haveSiblings.relationship.value,
  		// 					relacionamentoIrmaosDescricao:step4.haveSiblings.description.value,
  		// 					statusRelacionamento:step4.relationship.value,
  		// 					relacionamentoDescricao:step4.relationship.description.value,
  		// 					temFilhos:step4.haveKids.value,
  		// 					quantidadeFilhos:step4.haveKids.many.value,
  		// 					teveAborto:step4.haveKids.abortion.value,
  		// 					quantidadeAbortos:step4.haveKids.abortion.many.value,
  		// 					relacaoFilhos:step4.haveKids.description.value,
  		// 					acrescentarMais:step4.moreInfo.value,
      //     },
      //     "XvfhuCuvP_d-Gbx0P"
      // )
      
    } catch (error) {
      console.log(error);
      
    }

  }
}
