# 👟 SyntaxWear — E-Commerce de Calçados & Moda Urbana

<p align="center">
  <strong>SyntaxWear</strong> é uma plataforma moderna de e-commerce voltada para o comércio de calçados que aliam estilo, conforto e inovação. Desenvolvida com as ferramentas mais modernas do ecossistema React e TypeScript, a aplicação oferece uma experiência de navegação rápida, fluida e responsiva.
</p>

---

## 📌 Sumário

- [Sobre o Projeto](#-sobre-o-projeto)
- [Funcionalidades Principais](#-funcionalidades-principais)
- [Tecnologias Utilizadas](#-tecnologias-utilizadas)
- [Estrutura do Projeto](#-estrutura-do-projeto)
- [Pré-requisitos](#-pré-requisitos)
- [Como Rodar o Projeto](#-como-rodar-o-projeto)
- [Scripts Disponíveis](#-scripts-disponíveis)
- [Dica para Usuários Windows (PowerShell)](#-dica-para-usuários-windows-powershell)
- [Licença](#-licença)

---

## 📖 Sobre o Projeto

O **SyntaxWear** foi concebido como uma loja virtual de calçados focada em proporcionar ao usuário uma experiência imersiva e sem atritos de compra. O projeto conta com rotas baseadas em arquivos pelo **TanStack Router**, formulários tipados com validação avançada via **Zod** e **React Hook Form**, estilização utilitária com o **Tailwind CSS v4** e gerenciamento de estado do carrinho de compras com persistência local.

---

## ✨ Funcionalidades Principais

### 🛍️ Experiência de Compra e Navegação
- **Home Interativa**: Banner principal (Hero) com chamada para ação, destaques de categorias de produtos e galeria de fotos conceituais.
- **Catálogo de Produtos**:
  - Listagem completa de produtos com imagens, preços e selos visuais.
  - Filtragem dinâmica por categoria (`/products/category/$category`) cobrindo categorias como Masculino, Feminino, Moderno, Futurista e Outlet.
- **Página de Detalhes do Produto (`/products/$productId`)**:
  - Exibição de especificações completas do produto (nome, cor, descrição e fotos).
  - Cálculo de preço promocional (10% de desconto à vista via PIX) e parcelamento em até 6x.
  - **Cálculo de Frete por CEP**: Integração direta com a API [ViaCEP](https://viacep.com.br/) para consulta do endereço e simulação do valor de entrega de acordo com a região brasileira (Norte, Nordeste, Centro-Oeste, Sudeste, Sul).

### 🛒 Carrinho de Compras (Cart Drawer)
- **Gaveta Lateral Deslizante**: Acesso instantâneo aos itens selecionados através de uma gaveta animada.
- **Gerenciamento de Itens**:
  - Adição de novos produtos a partir do catálogo e da página de detalhes.
  - Incremento e decremento das quantidades diretamente pelo carrinho.
  - Remoção de itens.
- **Persistência**: O estado do carrinho é mantido no `localStorage` do navegador para que os itens permaneçam salvos mesmo ao recarregar a página.

### 🔐 Autenticação e Formulários
- **Login (`/sign-in`)**: Tela para autenticação com e-mail/senha e opção para login via Google.
- **Cadastro de Usuário (`/sign-up`)**: Formulário completo de cadastro com validação em tempo real utilizando **React Hook Form** + **Zod**, incluindo:
  - Validação estrita de e-mail e confirmação de senha idêntica.
  - Algoritmo de validação de CPF real.
  - Máscaras e validação de telefone e campos obrigatórios.

### 🏬 Páginas Institucionais
- **Sobre Nós (`/about`)**: Apresentação da missão, valores e proposta de valor da marca.
- **Nossas Lojas (`/our-stores`)**: Tour pelas lojas físicas, destacando a experiência de atendimento personalizado e novidades presenciais.
- **Design Totalmente Responsivo**: Navegação fluida tanto em telas grandes quanto em dispositivos móveis através de menu móvel tipo hambúrguer.

---

## 🛠️ Tecnologias Utilizadas

| Tecnologia | Finalidade |
| :--- | :--- |
| **[React 19](https://react.dev/)** | Biblioteca principal para construção da interface de usuário |
| **[TypeScript](https://www.typescriptlang.org/)** | Tipagem estática para maior segurança e previsibilidade no código |
| **[Vite 8](https://vite.dev/)** | Bundler e servidor de desenvolvimento ultra-rápido |
| **[TanStack Router](https://tanstack.com/router)** | Roteamento type-safe com geração automática de árvores de rotas |
| **[Tailwind CSS v4](https://tailwindcss.com/)** | Framework CSS utilitário de última geração integrado nativamente ao Vite |
| **[React Hook Form](https://react-hook-form.com/)** | Gerenciamento de estado de formulários com foco em performance |
| **[Zod](https://zod.dev/)** | Validação de esquemas e dados com inferência de tipos |
| **[React Icons](https://react-icons.github.io/react-icons/)** | Pacote de ícones para interfaces |
| **[ViaCEP API](https://viacep.com.br/)** | API externa para busca de endereços e cálculo de frete por CEP |

---

## 📁 Estrutura do Projeto

```text
syntax-wear-app/
├── public/                 # Arquivos públicos e fontes estáticas
├── src/
│   ├── assets/             # Imagens, fontes e ícones da aplicação
│   ├── components/         # Componentes reutilizáveis de interface
│   │   ├── Button/         # Botões com variantes de estilo
│   │   ├── CartButton/     # Botão gatilho do carrinho
│   │   ├── CartDrawer/     # Gaveta lateral do carrinho de compras
│   │   ├── Categories/     # Seção de cards de categorias
│   │   ├── CEPForm/        # Formulário com cálculo de frete via CEP
│   │   ├── Footer/         # Rodapé com newsletter e links
│   │   ├── Gallery/        # Seção de galeria com fotos de produtos
│   │   ├── Header/         # Cabeçalho com navegação desktop e mobile
│   │   ├── Hero/           # Banner principal de destaque
│   │   ├── LoginForm/      # Formulário de login
│   │   ├── ProductCard/    # Card individual de exibição de produto
│   │   ├── ProductList/    # Grid de listagem de produtos
│   │   ├── RegisterForm/   # Formulário de cadastro com validações Zod
│   │   └── ...             # Demais componentes auxiliares
│   ├── contexts/           # Contextos globais do React (CartContext / CartProvider)
│   ├── helpers/            # Funções utilitárias e de formatação (ex: moedas)
│   ├── interfaces/         # Interfaces e tipos TypeScript de domínio (produto, categoria, etc.)
│   ├── mocks/              # Dados estáticos simulados (produtos, categorias)
│   ├── pages/              # Rotas da aplicação (TanStack Router)
│   │   ├── __root.tsx      # Rota raiz com o layout base
│   │   ├── _app/           # Layout com Header e Footer
│   │   │   ├── index.tsx   # Página inicial (Home)
│   │   │   ├── about/      # Sobre Nós
│   │   │   ├── our-stores/ # Nossas Lojas
│   │   │   └── products/   # Listagem e detalhes dinâmicos do produto
│   │   └── _auth/          # Rotas de autenticação (Sign In / Sign Up)
│   ├── styles/             # Definições globais de CSS e temas do Tailwind
│   ├── utils/              # Validadores utilitários (validação de CPF, etc.)
│   ├── App.tsx             # Configuração do RouterProvider e Contextos
│   └── main.tsx            # Ponto de entrada da aplicação
├── eslint.config.js        # Configurações de linter (ESLint)
├── vite.config.ts          # Configuração do Vite, Tailwind e TanStack Router
├── tsconfig.json           # Configurações do compilador TypeScript
└── package.json            # Dependências e scripts do projeto
```

---

## 📋 Pré-requisitos

Antes de iniciar, certifique-se de ter instalado em seu ambiente:
- **[Node.js](https://nodejs.org/)** (versão 18.x ou superior recomendada)
- **[npm](https://www.npmjs.com/)** (gerenciador de pacotes incluso no Node.js) ou outro gerenciador (Yarn, pnpm).
- **[Git](https://git-scm.com/)** para controle de versão.

---

## 🚀 Como Rodar o Projeto

Siga os passos abaixo para clonar e rodar o projeto localmente:

### 1. Clonar o repositório
```bash
git clone https://github.com/danielpessoni/syntax-wear-app.git
cd syntax-wear-app
```

### 2. Instalar as dependências
```bash
npm install
```

### 3. Iniciar o servidor de desenvolvimento
```bash
npm run dev
```

Após iniciar o servidor, abra seu navegador no endereço indicado no terminal (normalmente [http://localhost:5173](http://localhost:5173)).

---

## 📜 Scripts Disponíveis

No arquivo `package.json`, estão configurados os seguintes comandos:

| Comando | Descrição |
| :--- | :--- |
| `npm run dev` | Inicia o servidor local de desenvolvimento Vite com Hot Module Replacement (HMR) |
| `npm run build` | Valida as tipagens TypeScript (`tsc -b`) e compila a aplicação para produção na pasta `dist` |
| `npm run preview` | Inicia um servidor local para testar a versão compilada em `dist` |
| `npm run lint` | Executa o ESLint para verificar a conformidade e qualidade do código |

---

## 💡 Dica para Usuários Windows (PowerShell)

Caso você esteja utilizando o Windows PowerShell e se depare com o seguinte erro ao executar comandos `npm`:
```text
npm : O arquivo C:\Program Files\nodejs\npm.ps1 não pode ser carregado porque a execução de scripts foi desabilitada neste sistema.
```

Você pode contornar isso de duas formas:

1. **Executar com `.cmd`** (recomendado para uso rápido):
   ```powershell
   npm.cmd install
   npm.cmd run dev
   npm.cmd run build
   ```
2. **Ou liberar a política de execução de scripts para o usuário atual**:
   ```powershell
   Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned
   ```

---

## 📄 Licença

Este projeto é de uso educacional e portfólio.

---

<p align="center">
  Desenvolvido por <strong>Daniel Pessoni</strong>.
</p>
