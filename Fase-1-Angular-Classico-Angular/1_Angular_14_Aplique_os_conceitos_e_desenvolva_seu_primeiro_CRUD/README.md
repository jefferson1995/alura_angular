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
