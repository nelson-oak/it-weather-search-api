# API de Consulta de Clima

Projeto desenvolvido para o teste em uma vaga da empresa Fasters.

## Respostas das perguntas técnicas

1. Quanto tempo você usou para completar a solução apresentada? O que você faria se tivesse mais tempo?

2. Se usou algum framework, qual foi o motivo de ter usado este? Caso contrário, por que não utilizou nenhum?

## Casos de uso

* [ ] Deve ser possível listar a temperatura e o clima, baseada em uma cidade recebida por parâmetro (em Celsius, Kelvin ou Fahrenheit)
* [ ] Deve retornar um erro se não encontrar a temperatura pela cidade passada por parâmetro
* [ ] O padrão de temperatura deve ser Celsius

## Tecnologias usadas

* Node.js
* Typescript
* NestJS
* Jest
* Swagger

## Baixar e executar o projeto

Para executar o projeto, basta usar os comandos abaixo (no Terminal de Comandos do sistema).

### Clonar o projeto e atualizar as dependências

* Clonar o projeto:

  ```bash
  git clone https://github.com/nelson-oak/tp-nestjs-mvc.git
  ```

* Baixar as dependências:

  ```bash
  yarn
  ```

## Executar o projeto e testes automatizados

* Executar localmente:

  ```bash
  yarn start
  ```
  
* Executar localmente no watching mode:

  ```bash
  yarn start:dev
  ```

* Executar testes:

  ```bash
  yarn test
  ```

* Executar testes no watching mode:

  ```bash
  yarn test:watch
  ```

### Observações

* Para efetuar as consultas de clima, é necessário ter um App ID gerado no site <https://openweathermap.org/>, através da criação de uma conta
  * Deve-se criar um arquivo *.env* com o conteúdo de *.env.example*, adicionando o valor do App ID

## Documentação do projeto

Esse projeto tem uma rota com a documentação das demais rotas da aplicação, disponível no endereço <http://localhost:4000/api-docs/> (necessário estar com o projeto executando localmente para acessar).
