# CardMaster

Front-end de uma aplicação de flashcards para estudo, desenvolvida em React como MVP da disciplina de Desenvolvimento Front-end Avançado (PUC-Rio). A aplicação não possui backend: todos os dados de categorias e cartões são lidos de um arquivo JSON local, simulando uma requisição a um servidor.

## Funcionalidades

- **Home (Dashboard):** visão geral das categorias de estudo disponíveis e estatísticas gerais (Total Cards, Mastered, In Progress).
- **Study Mode:** modo interativo de estudo por categoria, com flashcards que podem ser virados (pergunta/resposta) e marcados como "Acertei" ou "Errei".
- **All Cards:** lista de todos os cartões de uma categoria, com busca por texto e filtro por status.
- **Página 404:** mensagem amigável para rotas inexistentes, com atalho de volta para a Home.

### Diferenciais

- **Fila de revisão inteligente:** no Study Mode, cartões marcados como "Errei" voltam para o final da fila da sessão atual, priorizando a repetição do que ainda não foi dominado.
- **Busca e filtro em All Cards:** filtro por texto (pergunta/resposta) combinado com filtro por status (Novo / Em progresso / Dominado).
- **Atalhos de teclado no Study Mode:** Espaço/Enter vira o card, seta direita (ou `1`) marca acerto, seta esquerda (ou `2`) marca erro.

O progresso de estudo é salvo no `localStorage` do navegador e pode ser reiniciado a qualquer momento pela Home (com confirmação antes de apagar).

## Tecnologias

- [React](https://react.dev/) + [Vite](https://vitejs.dev/)
- [React Router](https://reactrouter.com/) (`react-router-dom`)
- [styled-components](https://styled-components.com/)
- [react-icons](https://react-icons.github.io/react-icons/)

## Componentes reutilizáveis

- `HeaderNavegacao` — cabeçalho com logo e navegação, com link ativo destacado via `useLocation`.
- `CardEstatistica` — bloco de estatística reutilizável (título, valor, cor e ícone configuráveis via props).
- `FlashcardInterativo` — card de pergunta/resposta com flip controlado por estado interno; reutilizado em modo interativo (Study Mode) e em modo somente leitura (All Cards).
- `BotaoAcao` — botão padronizado com variantes de estilo, usado em todas as páginas.

## Instalação e execução local

### Pré-requisitos

- [Node.js](https://nodejs.org/) versão 18 ou superior
- npm (instalado junto com o Node.js)

### Passos

1. Clone o repositório:
   ```bash
   git clone <url-do-repositorio>
   cd frontend-avancado-mvp
   ```
2. Instale as dependências:
   ```bash
   npm install
   ```
3. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```
4. Abra o endereço exibido no terminal (por padrão, [http://localhost:5173](http://localhost:5173)) no navegador.

### Build de produção

```bash
npm run build
npm run preview
```

O comando `build` gera os arquivos otimizados na pasta `dist/`; `preview` serve esse build localmente para validação.
