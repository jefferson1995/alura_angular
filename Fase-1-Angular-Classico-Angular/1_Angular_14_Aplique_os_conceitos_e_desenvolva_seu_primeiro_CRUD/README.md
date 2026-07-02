# Angular 14: aplique os conceitos e desenvolva seu primeiro CRUD

## 1 - Conhecendo o Angular

Figma: https://www.figma.com/design/YTSUBbe7Zgwx3L567TAzTc/Angular-14--aplique-os-conceitos-e-desenvolva-seu-primeiro-CRUD-%7C-Memoteca?node-id=148-26&p=f&t=uGaoINQH77Q6fbss-0


Preparando o ambiente: https://drive.google.com/file/d/1ydovphruleEG3frj0nR2vDSt2Ja265kg/view?usp=drive_link

interface linha de comando: http://angular.io/cli

📂 Estrutura Principal

meu-projeto-angular/

```bash

├── src/                          # Código-fonte da aplicação
│   ├── app/                      # Componentes e módulos da app
│   │   ├── app.component.ts      # Componente raiz
│   │   ├── app.component.html    # Template do componente
│   │   ├── app.component.css     # Estilos do componente
│   │   ├── app.component.spec.ts # Testes unitários
│   │   └── app.module.ts         # Módulo raiz
│   ├── assets/                   # Imagens, fontes, arquivos estáticos
│   ├── environments/             # Configurações por ambiente
│   ├── index.html                # Página HTML principal
│   ├── main.ts                   # Ponto de entrada da aplicação
│   ├── styles.css                # Estilos globais
│   └── polyfills.ts              # Compatibilidade com navegadores
├── angular.json                  # Configurações do Angular CLI
├── package.json                  # Dependências do projeto
├── tsconfig.json                 # Configurações do TypeScript
└── node_modules/    



```
🎯 Para que serve cada um:
| Arquivo/Pasta | Função | |---|---| | src/ | Contém todo o código-fonte da sua aplicação | | app/ | Pasta onde ficam seus componentes, serviços e módulos | | app.component.ts | Componente raiz (principal) da aplicação | | app.module.ts | Módulo raiz que declara componentes, diretivas e pipes | | assets/ | Recursos estáticos (imagens, ícones, etc) | | index.html | Arquivo HTML principal - a "página única" da SPA | | main.ts | Arquivo que inicializa a aplicação Angular | | angular.json | Configurações do projeto (build, serve, etc) | | package.json | Lista de dependências e scripts do projeto |


resumo: 

- Instalar e utilizar o Angular CLI;
- Criar uma aplicação Angular;
- Estrutura da aplicação gerada pelo Angular CLI;
- Criar e utilizar um componente Angular;
- Inserimos a fonte, as cores e estilos.


# 2 - Entendendo o fluxo de dados

- Criando o formulário

- Propertie / binding 

Nesta aula, você aprendeu sobre como o Angular lida com o fluxo de dados entre o arquivo TypeScript (component) e o arquivo HTML (template).

Os pontos principais abordados foram:

Função dos arquivos: O arquivo TypeScript (.ts) é responsável pela lógica do formulário, enquanto o arquivo HTML (.html) cuida da visualização e interação do usuário.
Analogia do desfile de moda: Para facilitar o entendimento, foi apresentada uma analogia onde os bastidores são o component (TypeScript), as pessoas são os atributos, as ações são os métodos/eventos e a passarela é o template (HTML).
Property Binding: Você viu como associar dados do component ao template usando o Property Binding.
Com colchetes []: Usado para associar atributos de um objeto (como pensamento.conteudo e pensamento.autoria) a propriedades de elementos HTML como input (ex: [value]="pensamento.conteudo"). A dica para lembrar dos colchetes é imaginar suas mãos segurando uma câmera.
Com interpolação {{}}: Usado para exibir o conteúdo de propriedades do component diretamente no template, dentro de tags como p (ex: <p class="conteudo">{{ pensamento.conteudo }}</p>).
O objetivo principal foi mostrar como os dados definidos no seu component TypeScript podem ser exibidos e utilizados no seu template HTML, estabelecendo uma comunicação unidirecional.


- Associando com Evento Binding 

Nesta aula, aprendemos a configurar ações que devem ocorrer quando o usuário interage com o template, especificamente ao clicar em um botão. A instrutora usou a analogia do "clique" de uma máquina fotográfica para sinalizar uma ação, que no nosso código é o "clique" do botão "Salvar".

Vimos como criar um método no arquivo TypeScript do componente (criar-pensamento.component.ts), chamado criarPensamento(). Em seguida, associamos esse método ao botão "Salvar" no arquivo HTML (criar-pensamento.component.html) usando o Event Binding.

O Event Binding é feito colocando parênteses () ao redor do evento que queremos "ouvir", como (click), e atribuindo a ele o nome do método que deve ser executado, por exemplo: (click)="criarPensamento()". Para testar, adicionamos um alert dentro do método criarPensamento que exibe a mensagem "Novo pensamento criado!".

A aula também destacou a diferença entre Property Binding e Event Binding:

Property Binding ([]): Envia dados do componente para o template.
Event Binding (()): Envia dados do template para o componente, "ouvindo" eventos que ocorrem no template.
Para nos ajudar a lembrar dos parênteses do Event Binding, a instrutora usou a analogia de colocar as mãos em formato de concha ao redor das orelhas para ouvir melhor, lembrando o formato dos parênteses.

Ao final, foi proposto um desafio para você criar o Event Binding para o botão "Cancelar", associando-o a um método de cancelamento que você deve criar na classe TypeScript.

- Two way data binding

- Nesta aula, você aprendeu a resolver o problema de conteúdo fixo nos campos do formulário, que impedia a prévia de exibir o texto digitado. Para isso, foi introduzida a associação de dados bidirecional, ou "two-way data binding", que atualiza o template e o componente ao mesmo tempo.

Foi utilizada a analogia do tráfego de carros para explicar a diferença entre o fluxo de dados unidirecional (via de mão única) e o bidirecional (via de mão dupla). A sintaxe do two-way data binding é uma combinação de colchetes [] e parênteses (), conhecida como "banana na caixa".

Para configurar o data binding bidirecional, você utilizou a diretiva de atributo ngModel, que faz parte do FormsModule. Para isso, foi necessário importar o FormsModule no arquivo app.module.ts. Em seguida, nos inputs de "Pensamento", "Autoria" e nos três inputs dos modelos no arquivo criar-pensamento.component.html, o atributo [value] foi substituído pela diretiva [(ngModel)].

Ao final, você testou a funcionalidade, inserindo um conteúdo no atributo modelo no arquivo criar-pensamento.component.ts, e verificou que, ao digitar nos campos do navegador, as prévias foram atualizadas e sincronizadas.


resumo

- Criar componente de formulário para adicionar novos pensamentos;
- Passar valores de uma propriedade do component para atributos de tag dentro do template com o uso de property binding;
- Mostrar valores de propriedades do component no template por meio da interpolação;
- Escutar eventos do template e fazer a chamada de métodos no component com o event binding;
- Usar a diretiva ngModel que pertence ao FormsModule para a comunicação bidirecional entre component e template;
- Como funcionam os diferentes tipos de comunicação entre component e template.


# Aula 03: Navegação com roteamento


- Configurações de rotas 

Nesta aula, você aprendeu a configurar as rotas da sua aplicação Angular. A instrutora mostrou como modificar o arquivo app-routing.module.ts, que foi gerado automaticamente quando você criou o projeto com o comando ng new e respondeu "sim" à pergunta sobre adicionar o arquivo de rotas.

Você viu que a constante routes é um array de objetos, onde cada objeto representa uma rota. Para cada rota, você configurou um path (caminho) e o component (componente) correspondente que será exibido.

Por exemplo, para a rota de criação de pensamentos, você configurou:

{
path: 'criarPensamento',
component: CriarPensamentoComponent
}
Também foi configurada uma rota para a página inicial (path: ''), que redireciona para a rota listarPensamento usando redirectTo e pathMatch: 'full', garantindo que toda a URL seja considerada para o redirecionamento.

Ao final da aula, você conseguiu acessar os diferentes componentes digitando as URLs diretamente no navegador, como "http://localhost:4200/criarPensamento" ou "http://localhost:4200/listarPensamento". A instrutora mencionou que, embora as rotas estejam configuradas, a navegação manual não é ideal para o usuário, e a próxima etapa será aprender a navegar entre os componentes de forma mais eficiente.

- Navegação com routerLink 
    Vimos como adicionar o routerLink a um botão, especificando o path da rota para a qual queremos navegar. No exemplo da aula, configuramos o botão "Adicionar pensamento" para redirecionar para a página do formulário de inclusão de pensamentos, usando o path /criarPensamento.
    Para saber mais como usar pagina que esta ativada: https://drive.google.com/file/d/1jzdCd-LZwng_bdhmitCcoPF7TLKKKDSW/view?usp=drive_link

Nesta aula:
- Utilizar o RouterModule;
- Utilizar a diretiva <router-outlet>;
- Criar e configurar rotas;
- Navegar por meio da propriedade routerLink.


# Aula 04 - Diretivas


Listando com *ngFor

 
- Configurar o botão "Cancelar": Foi adicionado um routerLink ao botão "Cancelar" na página de criação de pensamentos, que agora redireciona para a página de listagem (/listarPensamento) após o clique, além de exibir um alert.
- Criar o componente pensamento: Para exibir os pensamentos de forma padronizada, foi criado um novo componente chamado pensamento.
- Estilizar o componente pensamento: O arquivo pensamento.component.css recebeu estilos prontos para formatar a aparência do cartão de pensamento.
- Definir a estrutura do componente pensamento: No pensamento.component.ts, foi criado um objeto pensamento com conteudo, autoria e modelo para teste.
- Construir o HTML do componente pensamento: No pensamento.component.html, foi criada uma div principal com classes para estilização e interpolação para exibir o conteúdo, autoria e o modelo do pensamento, incluindo imagens de aspas e botões de editar e excluir.
- Integrar o componente pensamento na listagem: O seletor app-pensamento foi adicionado ao listar-pensamento.html dentro de uma div com a classe "mural", para exibir um pensamento de teste.
- Introduzir a diretiva *ngFor: Para listar múltiplos pensamentos, foi apresentada a diretiva estrutural *ngFor.
- Preparar a lista de pensamentos: No listar-pensamento.component.ts, foi criado um atributo listaPensamentos inicializado como um array vazio.
- Aplicar o *ngFor: A diretiva *ngFor="let pensamento of listaPensamentos" foi aplicada a uma div que envolve o seletor app-pensamento no listar-pensamento.html, com o objetivo de iterar sobre a lista de pensamentos.

Comunicação entre os componentes

- comunicação entre componentes no Angular, especificamente como um componente "pai" (listar-pensamento) pode passar informações para um componente "filho" (app-pensamento).
- Vimos que para o componente filho receber dados, precisamos usar o decorador @Input() na propriedade que receberá a informação, dentro do arquivo .ts do componente filho. Isso indica que essa propriedade espera receber valores de fora.
- Em seguida, no template HTML do componente pai, utilizamos um Property Binding (com colchetes []) para ligar a propriedade do componente filho (que está com @Input) à variável local do pai que contém os dados a serem passados. No nosso exemplo, foi [pensamento]="pensamento".
- Com isso, o componente filho (app-pensamento) consegue exibir os dados recebidos do pai, atuando como um "dumb component" (componente burro), que apenas recebe e exibe informações, sem ter sua própria lógica de dados. Essa característica o torna reutilizável em diferentes partes da aplicação.


Condições com *NgIf

- diretiva estrutural ngIf do Angular, que funciona como um comando If para exibir ou ocultar elementos HTML.
- A instrutora mostrou como usar o ngIf para exibir uma mensagem de "Ainda não há pensamentos cadastrados!" na página "Meu Mural" quando a lista de pensamentos estiver vazia. Para isso, foi utilizada uma expressão booleana dentro do ngIf para verificar se a listaPensamentos.length é maior que 0.
- ´Além disso, você viu como usar o else em conjunto com o ngIf, importando um ng-template para definir o conteúdo a ser exibido quando a condição do ngIf for falsa.
- Em resumo, a aula focou em como usar o ngIf para controlar a renderização de elementos na sua aplicação, melhorando a experiência do usuário.

Estilizando com ngClass

- Nesta aula, aprendemos sobre a diretiva ngClass no Angular, que nos permite aplicar estilos CSS de forma condicional. A instrutora usou a analogia de mudar o estilo de roupa de acordo com o tempo para explicar a ideia de estilos condicionais.
- Vimos como usar o ngClass para alterar a largura dos cartões de pensamento no projeto. Para isso, acessamos o pensamento.component.ts e criamos um método chamado larguraPensamento() que retorna uma string ('pensamento-g' ou 'pensamento-p') baseada no tamanho do conteúdo do pensamento. No pensamento.component.html, substituímos a classe estática pela diretiva [ngClass]="larguraPensamento()", fazendo com que a largura do cartão seja definida dinamicamente.
- Ao final, testamos a implementação adicionando pensamentos com diferentes tamanhos de conteúdo no listar-pensamento.component.ts e verificamos no navegador que os estilos foram aplicados corretamente.

Para saber mais: tipos de diretivas: 

Diretivas de componentes: usado com um modelo. Esse tipo de diretiva é a mais comum.

Ex: <app-listarPensamentos>.

Diretivas estruturais: altera o layout do DOM adicionando e removendo elementos DOM.

Ex: NgIf, NgFor. NgSwitch.

Diretivas de atributos: altera a aparência ou o comportamento de um elemento, componente ou outra diretiva.

Ex: NgClass, NgStyle.


resumo: 

pontos importantes sobre as diretivas estruturais ngFor e ngIf, destacando sua função de incluir ou excluir elementos na página, além de mencionar o uso do ngClass para aplicar estilos dinamicamente, o que mostra que você está assimilando como manipular a estrutura e a aparência dos componentes. Também é interessante que você tenha mencionado a anotação @Input, que é fundamental para a comunicação entre componentes pai e filho, permitindo a passagem de dados de forma organizada.

Para complementar, vale destacar que as diretivas estruturais como ngFor e ngIf não apenas adicionam ou removem elementos, mas também controlam a renderização condicional e a repetição de elementos com base em dados dinâmicos, o que torna a interface mais interativa e eficiente. Já o ngClass permite aplicar múltiplas classes CSS de forma condicional, facilitando a estilização responsiva e adaptativa dos componentes. Sobre a anotação @Input, ela é essencial para criar componentes reutilizáveis e modulares, pois permite que o componente filho receba dados do componente pai, promovendo uma arquitetura mais clara e organizada.

Esses conceitos são fundamentais para construir aplicações Angular mais dinâmicas e escaláveis, e entender bem como usá-los vai facilitar muito o desenvolvimento dos seus projetos. Continue estudando e praticando!


# Aula 05: Comunicação com o Backend

Versão do JSON-Server

Mas é super importante que, para evitar incompatibilidades no código, você utilize a mesma versão que a instrutora.

Para isso, no momento da instalação (em 1min45seg do vídeo), quando for utilizado o comando npm i json-server, adicione a versão específica na frente do comando, assim:

JSON-Server

comando para criar o arquivo packge.json dentro da pasta backend
```bash
npm init -y

```

Simulador de backend

```bash
npm i json-server@0.17.4
```

A aula aborda a importância da comunicação entre front-end e back-end para realizar operações de CRUD. Como o foco do curso é o front-end, você aprendeu a usar o JSON Server, uma ferramenta que simula uma API REST de forma simples.

Os passos principais foram:

Criar uma pasta chamada "backend" dentro do projeto MEMOTECA.

Inicializar um projeto Node.js com o comando npm init -y, gerando um arquivo package.json.

Instalar o JSON Server com npm i json-server@0.17.4.

Criar um arquivo db.json contendo um objeto com um array de pensamentos, que servirá como banco de dados simulado.

Modificar o script "start" no package.json para executar o comando json-server --watch db.json --port 3000, configurando a API para rodar na porta 3000.

Executar npm start para iniciar o servidor e verificar que a API está funcionando acessando http://localhost:3000/pensamentos no navegador.

Com isso, você tem uma API REST simulada pronta para ser consumida pela sua aplicação Angular. Na próxima aula, você aprenderá a fazer requisições HTTP para se comunicar com essa API.

- Implementando interfaces

A aula começa com uma analogia: assim como um aparelho elétrico de 220 volts só funciona em uma rede de 220 volts, e um plugue de três pinos não encaixa em uma tomada de dois encaixes, os dados enviados para o back-end também precisam respeitar um formato específico.

O problema é que objetos possuem vários atributos, cada um com seu próprio formato. Se não padronizarmos, a base de dados fica desorganizada — por exemplo, datas podem ser escritas de várias formas diferentes (com barras, traços, abreviações de ano, etc.).

Para garantir a integridade dos dados, você cria uma interface, que é um modelo de retorno da API. No Angular, chamamos isso de "interface" ou "tipagem estrutural".

O processo prático é:

Criar um arquivo chamado pensamento.ts na pasta de pensamentos
Definir uma interface Pensamento com todos os atributos e seus tipos esperados (id como number, conteudo como string, autoria como string, modelo como string)
Usar export para tornar a interface acessível em outras classes
Aplicar essa tipagem em três arquivos: pensamento.component.ts, criar-pensamento.component.ts e listar-pensamento.component.ts
Usar a sintaxe Pensamento[] para arrays de pensamentos
O grande benefício é que o VS Code sinalizará erros automaticamente se você esquecer um atributo ou usar um tipo incorreto, garantindo que os dados sejam enviados corretamente para o back-end.

- Conhecendo services

A aula aborda a importância de organizar a estrutura do Angular seguindo boas práticas de programação. O componente deve conter apenas a lógica de comportamento e renderização, enquanto a lógica de negócios e comunicação com o servidor devem ficar em um arquivo separado chamado service.

Para criar um service, você utiliza o comando ng g service (ou ng g s) no terminal, seguido do caminho onde deseja criá-lo. Por exemplo: ng g s componentes/pensamentos/pensamento.

Esse comando gera dois arquivos: o serviço em si (pensamento.service.ts) e um arquivo de testes (pensamento.service.spec.ts).

O arquivo service é uma classe TypeScript com o decorador @Injectable, que significa que ela pode ser injetada em outros componentes e classes através do método de injeção de dependências. O metadado providedIn: 'root' indica que o serviço está disponível para toda a aplicação.

Dentro do service, você adicionará posteriormente os métodos do CRUD (cadastro, listagem, edição e exclusão) e toda a lógica de comunicação com o servidor, mantendo os componentes mais limpos e organizados.

- Injeção de dependências

A aula começa com uma analogia prática: assim como você pede comida por um aplicativo de entrega em vez de cozinhar e se responsabilizar por todo o processo, a injeção de dependências funciona de forma similar no Angular. Você não cria as dependências diretamente, mas as solicita para que sejam fornecidas.

Na prática, você aprendeu a implementar isso no arquivo pensamento.service.ts adicionando o HttpClient como uma dependência. Para isso, você declara um parâmetro no construtor da classe com o modificador private e o tipo HttpClient. Dessa forma, o Angular automaticamente cria esse atributo na classe sem que você precise instanciá-lo manualmente.

O código fica assim:

```bash
export class PensamentoService {
	constructor(private http: HttpClient) { }
}
```

Também é importante garantir que o HttpClient foi importado do módulo @angular/common/http. Com isso feito, você tem acesso a todos os métodos dessa classe para realizar operações HTTP.

Em essência, você aprendeu que a injeção de dependências é um padrão de projeto onde a classe solicita dependências externas ao invés de criá-las, tornando o código mais limpo e fácil de manter.

Para saber mais: Services e Injeção de dependência
Discutir no fórum
Injeção de dependência é um termo que pode parecer assustador para quem está iniciando na área de programação, mas não é um bicho de sete cabeças.

Escrevi este artigo https://www.alura.com.br/artigos/services-injecao-dependencia-angular-o-que-sao-como-funcionam#:~:text=Sim%2C%20%C3%A9%20s%C3%B3%20isso%20mesmo,declarado%20como%20atributo%20dessa%20classe sobre Services e injeção de dependência para te ajudar a entender mais sobre esse assunto.

resumo: 

- Utilizar o JSON-Server simulando uma API REST;
- Criar uma interface para definir tipos personalizados;
- Entender a importância do Service e o novo decorator @Injectable();
- Injetar dependências.


# Aula 06: Requisições HTTP

- Requisições com HttpClient

Nesta aula, você aprendeu os conceitos fundamentais sobre requisições HTTP no Angular através de uma analogia bem interessante: comparamos as requisições HTTP com as chamadas que fazemos a um garçom em um restaurante.

Os pontos principais foram:

Configuração inicial: Você viu como acessar o arquivo pensamento.service.ts e criar um atributo API que armazena a URL da sua API falsa (http://localhost:3000/pensamentos).

Importação do HttpClient: Para utilizar requisições HTTP, foi necessário importar o módulo HttpClientModule no arquivo app.module.ts na seção de imports.

Criação do método listar: Dentro do serviço, você criou o método listar() que utiliza o método get do HttpClient para solicitar os dados da API, retornando um arranjo de pensamentos tipado como Pensamento[].

Injeção de dependência: No componente listar-pensamento.component.ts, você injetou o serviço no construtor para ter acesso aos seus métodos.

Chamada no ciclo de vida: Você inseriu a chamada ao método listar() dentro do ngOnInit(), que é executado quando o componente é carregado.

O problema encontrado: Ao tentar executar, você recebeu uma mensagem do sistema indicando que o método deveria retornar um Observable, o que será explorado na próxima aula.

- Compreendendo Observables

A aula começa com uma analogia: assim como uma pessoa coloca um produto na lista de favoritos de um site para receber notificações quando o preço cai, um Observable funciona de forma similar. O Observable é como o site (que emite notificações) e o Observer é a pessoa interessada em receber essas notificações.

A grande diferença entre Observable e Promise é que o Observable permite uma transferência contínua de dados, ou seja, pode emitir dados várias vezes durante sua existência. Ele faz parte da biblioteca RXJS, que já vem instalada no Angular.

Na prática, você aprendeu a:

Adicionar Observable no método listar() do serviço, importando-o do RXJS
Usar o método subscribe() no componente para se "inscrever" nas notificações do Observable, similar a se inscrever em um canal do YouTube
Implementar uma arrow function dentro do subscribe para receber e armazenar os dados da API
Criar o método criar() no serviço usando http.post() que também retorna um Observable
Consumir esse serviço no componente de criação
Tornar o id opcional na interface Pensamento usando o ponto de interrogação
Usar o router para redirecionar o usuário após salvar ou cancelar a criação de um pensamento
Ao final, você testou o fluxo completo criando um novo pensamento pela página e verificando se ele foi salvo no banco de dados.


- Componente Excluir

Nesta aula, você aprendeu a criar o componente de exclusão de pensamentos para a sua aplicação Angular.

Os principais passos foram:

Nesta aula, você aprendeu a criar o componente de exclusão de pensamentos para a sua aplicação Angular.

Os principais passos foram:
*   **Criação do componente ExcluirPensamento**: Você gerou um novo componente (`excluir-pensamento`) para isolar a lógica de exclusão.
*   **Estilização e Estrutura HTML**: Você adicionou o CSS e montou a estrutura HTML do modal de confirmação, incluindo a mensagem e os botões de "Excluir" e "Cancelar".
*   **Implementação do serviço de exclusão**: No `pensamento.service.ts`, você criou o método `excluir(id: number)` que utiliza o `HttpClient.delete` para remover um pensamento e o método `buscarPorId(id: number)` para obter os dados de um pensamento específico.
*   **Lógica do componente ExcluirPensamento**: No `excluir-pensamento.component.ts`, você injetou os serviços necessários (`PensamentoService`, `Router`, `ActivatedRoute`), implementou o `ngOnInit` para capturar o `id` do pensamento da rota e buscar seus dados, e criou os métodos `excluirPensamento()` e `cancelar()` para lidar com as ações do usuário no modal.
*   **Configuração de rotas**: Você adicionou a rota para o componente `ExcluirPensamentoComponent` no `app-routing.module.ts`, incluindo um parâmetro `id`.
*   **Integração com o cartão de pensamento**: No `pensamento.component.html`, você adicionou o `routerLink` ao botão de lixeira, direcionando para a rota de exclusão com o `id` do pensamento.

Ao final, você testou a funcionalidade, confirmando que o modal de exclusão aparece e que é possível deletar ou cancelar a ação.



- Componente editar

Olá! Para te ajudar a fixar o conteúdo, preparei um resumo da aula "Componente Editar":

Nesta aula, você aprendeu a configurar a funcionalidade de "editar" para os pensamentos, completando assim o CRUD. Para isso, foi criado o componente `editar-pensamento` usando o comando `ng g c componentes/pensamentos/editar-pensamento`.

No arquivo `pensamento.service.ts`, foi adicionado o método `editar()` que utiliza o comando `put` para atualizar um pensamento existente na API.

A interface da tela de edição foi construída copiando o HTML do componente `criar-pensamento` para `editar-pensamento.component.html` e fazendo as devidas alterações, como a classe da `section` e o método do botão "Salvar" para `editarPensamento()`.

No arquivo `editar-pensamento.component.ts`, você declarou o atributo `pensamento` do tipo `Pensamento` e injetou os serviços `PensamentoService`, `Router` e `ActivatedRoute` no `constructor`.

Dentro do `ngOnInit`, foi configurada a lógica para buscar o pensamento pelo `id` da rota e preencher os campos do formulário automaticamente.

Por fim, foram implementados os métodos `editarPensamento()` para chamar o serviço de edição e redirecionar para a lista de pensamentos, e o método `cancelar()` para retornar ao mural.

Para que a funcionalidade estivesse completa, você também configurou a rota para o componente `editar-pensamento` em `app-routing.module.ts` e adicionou o `routerLink` no botão de edição do `pensamento.component.html`.

Ao final, a aplicação foi testada para garantir que todas as funcionalidades de edição e cancelamento estavam funcionando corretamente.

Parabéns por finalizar o seu primeiro CRUD em Angular! Se tiver mais alguma dúvida sobre o conteúdo da aula, é só perguntar!

resumo:

- Utilizar métodos de requisição HTTP com serviço HttpClient;
- Utilizar o Observable no retorno dos métodos HTTP;
- Capturar parâmetros em rotas;
- Criar um CRUD.