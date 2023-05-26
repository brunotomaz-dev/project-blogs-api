# :construction: README em construção ! :construction:

<!-- Olá, Tryber!
Esse é apenas um arquivo inicial para o README do seu projeto.
É essencial que você preencha esse documento por conta própria, ok?
Não deixe de usar nossas dicas de escrita de README de projetos, e deixe sua criatividade brilhar!
:warning: IMPORTANTE: você precisa deixar nítido:
- quais arquivos/pastas foram desenvolvidos por você;
- quais arquivos/pastas foram desenvolvidos por outra pessoa estudante;
- quais arquivos/pastas foram desenvolvidos pela Trybe.
-->

## O que foi desenvolvido

Foi desenvolvido uma API e um banco de dados para a produção de conteúdo para um blog!

Uma aplicação em `Node.js` usando o pacote `sequelize` para fazer um `CRUD` de posts.

1. Endpoints conectados ao banco de dados seguindo os princípios do REST;

2. Para fazer um post é necessário usuário e login, portanto foi trabalhada a **relação entre** `user` e `post`;

3. Utilização de categorias para os posts, trabalhando, assim, a **relação de** `posts` para `categories` e de `categories` para `posts`.

## Para rodar com docker e testar a api

**:warning: Antes de começar, seu docker-compose precisa estar na versão 1.29 ou superior. [Veja na documentação](https://docs.docker.com/compose/install/) como instalá-lo se necessário.**

> :information_source: Rode os serviços `node` e `db` com o comando `docker-compose up -d --build`.

- Lembre-se de parar o `mysql` se estiver usando localmente na porta padrão (`3306`), ou adapte, caso queria fazer uso da aplicação em containers;

- Esses serviços irão inicializar um container chamado `blogs_api` e outro chamado `blogs_api_db`;

- A partir daqui você pode rodar o container `blogs_api` via CLI ou abri-lo no VS Code;

> :information_source: Use o comando `docker exec -it blogs_api bash`.

- Ele te dará acesso ao terminal interativo do container criado pelo compose, que está rodando em segundo plano.

> :information_source: Instale as dependências [**Caso existam**] com `npm install`. (Instale dentro do container)

- **:warning: Atenção:** Caso opte por utilizar o Docker, **TODOS** os comandos disponíveis no `package.json` (npm start, npm test, npm run dev, ...) devem ser executados **DENTRO** do container, ou seja, no terminal que aparece após a execução do comando `docker exec` citado acima.
