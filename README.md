#1. Criação de componentes básicos

# wiz-angular-wk
Projeto base para treinamento Angular 2+

----
## Requisitios de ambiente:
* Instale o [nodejs](https://nodejs.org/).
* Em seguida, via terminal, utilize o comando `npm install -g @angular/cli` para instalar o angular e suas dependências. 

*Você também pode seguir o tutorial direto do site do [Angular](https://angular.io/guide/quickstart)*.

##Criando um projeto como este
Para criar um projeto como este do zero, após a configuração do angular, basta executar o seguinte comando, via linha de comando, em seu repositório local de projetos.

```bash
> ng new wiz-angular-wk --style=scss
```

*A pasta **wiz-angular-wk** será criada com este comando, portanto não precisa ser criada. No nível imediato ao qual o comando for executado a pasta será criada e dentro dela o projeto angular estará configurado.

## Como iniciar o projeto?
1. Baixe o template para uma pasta.
2. Navegue até a pasta raiz do site, utilizando o terminal e execute o comando `npm install`.
3. Em seguida, execute o comando `ng serve --o`se tudo estiver correto será lançado em seu navegador padrão a tela inicial do site.

## Organização do curso:
As partes do curso serão dívidas em Branchs deste projeto, Assim será possível consultar como o projeto ficará em cada uma das etapas do curso. As partes de Workshop serão:

1. Construção de um projeto base.
2. Criação de componentes básicos.
3. Criação de telas de um Crud com consumo de WebApi.
4. Navegação por rotas e criação de módulos por contexto
5. Componentes recicláveis
6. Estrutura do projeto padrão Wiz para Angular