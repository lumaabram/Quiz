const data = [
  {
    category: "Java",
    questions: [
      {
        question: "O que é Java?",
        options: ["Um café especial", "Uma linguagem de programação", "Uma cidade na Indonésia", "Um tipo de dança brasileira"],
        answer: "Uma linguagem de programação",
        tip: "Lembre sobre o que é o tema do quiz",
      },
      {
        question: "Qual é o propósito da palavra-chave static em Java",
        options: ["Tornar uma variável constante", "Definir um método como pertencente à classe, não à instância", "Permitir a modificação de variáveis fora da classe", "Ocultar a implementação de uma classe"],
        answer: "Definir um método como pertencente à classe, não à instância",
        tip: "A palavra-chave static em Java está relacionada a algo que pertence à classe como um todo, não a instâncias específicas.",
      },
      {
        question: "O que é uma classe em Java?",
        options: [" Uma instância de um objeto", "Um tipo de dado primitivo", "Um bloco de código executável", "Um modelo para a criação de objetos"],
        answer: "Um modelo para a criação de objetos",
      },
      {
        question: " O que significa polimorfismo em Java?",
        options: ["Uma classe herdar de várias classes", "Uma classe fornecer implementações diferentes de métodos com a mesma assinatura", "Restrição de acesso a membros de uma classe", "Ocultar a implementação de uma classe"],
        answer: "Uma classe fornecer implementações diferentes de métodos com a mesma assinatura",
      },
      {
        question: "O que é um construtor em Java?",
        options: ["Uma máquina de construção civil", "Um método que constrói objetos de uma classe", "Um tipo de variável primitiva", "Uma estrutura de controle de fluxo"],
        answer: "Um método que constrói objetos de uma classe",
      },
    ],
  },
  {
    category: "C",
    questions: [
      {
        question: "O que é um ponteiro em C",
        options: ["Um tipo de variável", "Um operador aritmético", "Um endereço de memória", "Uma estrutura condicional"],
        answer: "Um endereço de memória",
        tip: "Ponteiros armazenam endereços de memória, permitindo manipulação direta dos dados.",
      },
      {
        question: "Qual é a função da biblioteca stdio.h em C",
        options: ["Gerenciamento de memória", "Manipulação de strings", "Entrada e saída padrão", "Controle de fluxo de execução"],
        answer: "Entrada e saída padrão",
      },
      {
        question: "O que é um operador ternário em C",
        options: ["Operador lógico AND", "Operador de atribuição", "Operador de comparação", "Operador condicional"],
        answer: "Operador condicional",
      },
    ],
  },
  {
    category: "PYTHON",
    questions: [
      {
        question: "Qual é a principal proposta da linguagem de programação Python?",
        options: [
          "Linguagem para manipulação de dados biológicos",
          "Desenvolvimento de sistemas operacionais",
          "Facilitar a leitura e escrita de código",
          "Execução de cálculos matemáticos complexos",
        ],
        answer: "Facilitar a leitura e escrita de código",
      },
      {
        question: "O que é um loop em Python?",
        options: ["Um tipo de dado", "Uma estrutura de controle de fluxo", "Um módulo para manipulação de strings", "Uma função para criar listas"],
        answer: "Uma estrutura de controle de fluxo",
      },
      {
        question: "Qual é o principal uso da função print() em Python?",
        options: ["Execução de operações matemáticas", "Controle de exceções", "Exibição de mensagens na tela", "Criação de arquivos"],
        answer: "Exibição de mensagens na tela",
      },
      {
        question: "O que são listas em Python?",
        options: ["Comentários no código", "Estruturas condicionais", "Coleções ordenadas de elementos", "Comparações lógicas"],
        answer: "Coleções ordenadas de elementos",
      },
      {
        question:
          "O que é a expressão lambda em Python?",
        options: ["Um tipo de dado", "Uma função anônima", "Uma estrutura de controle de fluxo", "Uma classe pré-definida"],
        answer: "Uma função anônima",
      },
    ],
  },
];

export default data;
