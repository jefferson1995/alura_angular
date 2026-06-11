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


