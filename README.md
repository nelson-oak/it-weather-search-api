# API de Consulta de Clima

Projeto desenvolvido para o teste em uma vaga da empresa Fasters.

## Respostas das perguntas técnicas

1. Quanto tempo você usou para completar a solução apresentada? O que você faria se tivesse mais tempo?

  Eu levei 5h para desenvolver esse projeto. Coisas que eu poderia adicionar em mais tempo, seriam outras rotas de consulta à essa API do OpenWeather. Talvez outros dados no retorno poderiam ser interessante (sensação térmica por exemplo). Adicionaria também um Rate Limiter, e um container do docker-compose com o Redis (é uma implementação tranquila, mas optei por deixar o projeto simples na execução).

2. Se usou algum framework, qual foi o motivo de ter usado este? Caso contrário, por que não utilizou nenhum?

  Eu utilizei o Axios para conexão à API externa. Não é um framework, mas acho uma biblioteca interessante para conexão à APIs. Eu tenho mais experiência usando o framework Express, mas desenvolver essa API usando o NestJS me fez me sentir ainda mais confortável ao desenvolver com esse framework que venho estudando recentemente. Não sei se as minhas decisões de arquitetura são as melhores, mas eu acredito que ficou um bom projeto desenvolvido dessa forma.

## Casos de uso

* [x] Deve ser possível listar a temperatura e o clima, baseada em uma cidade recebida por parâmetro (em Celsius, Kelvin ou Fahrenheit)
* [x] Deve retornar um erro se não encontrar a temperatura pela cidade passada por parâmetro
* [x] O padrão de temperatura deve ser Celsius

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
