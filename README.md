# 🍹 Delivery Drink

Plataforma de delivery de bebidas que conecta clientes, lojas parceiras (bares, distribuidoras e conveniências) e entregadores — do catálogo até a confirmação de recebimento.

**Projeto Integrado II** · UAPITSI9 · Turma TLAGOASF (2025.2)

---

## 📋 Sobre o projeto

O sistema é composto por três perfis de usuário com necessidades distintas:

- **Cliente** — busca, compra e acompanha pedidos de bebidas.
- **Loja** — gerencia catálogo de produtos, recebe e processa pedidos.
- **Entregador** — aceita corridas de entrega e atualiza o status até a conclusão.

Este repositório contém o **front-end** da aplicação. O backend (Supabase/PostgreSQL) está sendo modelado em paralelo, conforme o diagrama de classes da documentação inicial.

## 🛠️ Tecnologias

| Camada | Tecnologia |
|---|---|
| Framework | React 18 |
| Build tool | Vite |
| Roteamento | React Router DOM |
| Estado global | Context API (nativo do React) |
| Estilização | CSS puro, com tokens de cor/tipografia próprios |
| Backend (planejado) | Supabase (PostgreSQL + Auth) |

## 🚀 Como rodar o projeto

Pré-requisito: [Node.js](https://nodejs.org) 18 ou superior instalado.

\`\`\`bash
# 1. Clonar o repositório
git clone https://github.com/jb7071999-hash/delivery-drink.git
cd delivery-drink

# 2. Instalar as dependências
npm install

# 3. Rodar o servidor de desenvolvimento
npm run dev
\`\`\`

Depois disso, acesse **http://localhost:5173** no navegador.

## 📁 Estrutura do projeto

\`\`\`
src/
├── context/
│   └── CartContext.jsx     # Estado global do carrinho (E3)
├── data/
│   └── products.js         # Dados mockados de produtos (temporário)
├── pages/
│   ├── Login.jsx            # Tela de cadastro e login (E1)
│   ├── Catalogo.jsx         # Tela de catálogo — listagem e busca (E2)
│   └── Carrinho.jsx         # Tela de carrinho (E3)
├── App.jsx                  # Rotas da aplicação
├── main.jsx                 # Ponto de entrada
└── index.css                # Estilos globais e tokens visuais
\`\`\`

## ✅ Progresso por entrega

### Entrega 1 — Planejamento
- [x] Documentação inicial com diagramas UML (casos de uso e classes)
- [x] Prototipação de telas
- [x] Criação e configuração do projeto no Trello
- [x] Criação, priorização e organização do backlog

### Entrega 2 — Front-end
- [x] Definição das tecnologias front-end
- [x] Criação do repositório remoto
- [x] Criação e versionamento do projeto UI
- [x] Tela de cadastro e login (E1)
- [x] Tela de catálogo — listagem e busca (E2)
- [x] Estado global do carrinho (E3)
- [x] Tela de carrinho (E3)

### Próximas entregas
- [ ] Modelagem e integração com Supabase (E1, E2)
- [ ] Tela de checkout e integração de pagamento (E4)
- [ ] Painel da loja — pedidos recebidos (E5)
- [ ] Painel do entregador — corridas disponíveis (E6)
- [ ] Acompanhamento do pedido em tempo real (E7)

## 🗂️ Épicos do projeto

| Épico | Descrição |
|---|---|
| E1 | Autenticação e Perfis |
| E2 | Catálogo de Produtos |
| E3 | Carrinho de Compras |
| E4 | Checkout e Pagamento |
| E5 | Gestão de Pedidos (Loja) |
| E6 | Logística de Entrega (Entregador) |
| E7 | Acompanhamento e Notificações |
| E8 | Infraestrutura e Configuração |

## 📌 Gestão do projeto

O acompanhamento das tarefas é feito no Trello, seguindo o fluxo:

\`Backlog\` → \`Sprint Atual (Priorizado)\` → \`Em Andamento\` → \`Em Revisão\` → \`Concluído\`

## 👥 Equipe

- Maria dos Remédios Oliveira Santos
- (Francisco das Chagas de Sousa)
- Francisco de Assis Brito Rocha Junior
- Joceli do Nascimento Rodrigues
- Salomão Wenderson Medeiros Jucá
