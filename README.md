# Delivery Drink — Front-end

Projeto Integrado II · UAPITSI9 · TLAGOASF (2025.2)

## Tecnologias front-end

- **React 18** — biblioteca de UI
- **Vite** — build tool e dev server
- **React Router DOM** — roteamento entre telas (login, catálogo, carrinho)
- **Context API** (nativo do React) — estado global do carrinho, sem
  dependência externa de gerenciamento de estado nesta fase
- **CSS puro** (`src/index.css`), com tokens de cor/tipografia próprios,
  seguindo a identidade visual definida no protótipo (Anexo A da
  documentação da Entrega 1)
- **Supabase JS SDK** — planejado para a próxima entrega, quando o
  backend (tabelas de Usuário e Produto) estiver integrado

## Como rodar

```bash
npm install
npm run dev
```

Acesse `http://localhost:5173`.

## Estrutura

```
src/
  context/CartContext.jsx   # [E3] Estado global do carrinho
  data/products.js          # dados mockados (substituídos pelo Supabase depois)
  pages/Login.jsx            # [E1] Tela de cadastro e login
  pages/Catalogo.jsx         # [E2] Tela de catálogo (listagem e busca)
  pages/Carrinho.jsx         # [E3] Tela de carrinho
  App.jsx                    # rotas
```

## Tarefas da Sprint Inicial implementadas nesta entrega

- [E1] Tela de cadastro e login
- [E2] Tela de catálogo (listagem e busca)
- [E3] Estado global do carrinho
- [E3] Tela de carrinho

As tarefas de modelagem de dados (Supabase) e as demais telas
(checkout, painel da loja, painel do entregador) seguem no Backlog
priorizado do Trello para as próximas sprints.
