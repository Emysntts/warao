# Warao Frontend 🚀

## Sumário

- [Estrutura do Projeto](#estrutura-do-projeto-️)
- [Pré-requisitos](#pré-requisitos-️)
- [Instalação](#instalação-)
- [Executando o Projeto](#executando-o-projeto-️)
- [Scripts Úteis](#scripts-úteis-)
- [Configuração](#configuração-️)
- [Contribuição](#contribuição-)
- [English Section](#english-section-)

Este projeto é a interface web do sistema Warao, desenvolvido em React e Expo para facilitar a interação dos usuários com as funcionalidades do sistema. 🌐

## Estrutura do Projeto 🗂️

```
warao-front/
├── public/             # Arquivos públicos (index.html, favicon, etc.)
├── src/
│   ├── assets/         # Imagens, ícones e outros recursos estáticos
│   ├── components/     # Componentes reutilizáveis da interface
│   ├── pages/          # Páginas principais do aplicativo
│   ├── services/       # Serviços para comunicação com APIs
│   ├── hooks/          # Hooks customizados do React
│   ├── styles/         # Arquivos de estilos (CSS/SCSS)
│   ├── App.jsx         # Componente principal da aplicação
│   └── main.jsx        # Ponto de entrada da aplicação
├── .env                # Variáveis de ambiente
├── app.json            # Configurações do Expo
├── package.json        # Dependências e scripts do projeto
└── README.md           # Documentação do projeto
```

## Pré-requisitos 🛠️

- [Node.js](https://nodejs.org/) (versão recomendada: 18+)
- [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/)
- [Expo CLI](https://docs.expo.dev/get-started/installation/) (`npm install -g expo-cli`)

## Instalação 📦

1. Clone o repositório:
    ```bash
    git clone https://github.com/seu-usuario/warao-front.git
    cd warao-front
    ```

2. Instale as dependências:
    ```bash
    npm install
    # ou
    yarn install
    ```

## Executando o Projeto ▶️

Para rodar o projeto em modo de desenvolvimento com Expo:

```bash
npm run start 
```

Você pode acessar o app no navegador, emulador ou dispositivo físico usando o aplicativo Expo Go. 📱

Se desejar rodar como web (caso o projeto suporte):

```bash
expo start --web
```

Acesse [http://localhost:19006](http://localhost:19006) no navegador para visualizar a aplicação web. 🖥️

## Scripts Úteis ⚡

- `expo start` — Inicia o servidor de desenvolvimento Expo
- `expo start --web` — Inicia o projeto no modo web
- `npm run build` — Gera a versão de produção (verifique se há script para build web)
- `npm run preview` — Visualiza a build de produção localmente

## Configuração ⚙️

- O arquivo `app.json` contém configurações específicas do Expo.

## Contribuição 🤝

Sinta-se à vontade para abrir issues e pull requests!

---

## English Section 🇬🇧

This project is the web interface of the Warao system, developed in React and Expo to facilitate user interaction with the system's features. 🌐

## Project Structure 🗂️

```
warao-front/
├── public/             # Public files (index.html, favicon, etc.)
├── src/
│   ├── assets/         # Images, icons, and other static resources
│   ├── components/     # Reusable UI components
│   ├── pages/          # Main application pages
│   ├── services/       # Services for API communication
│   ├── hooks/          # Custom React hooks
│   ├── styles/         # Style files (CSS/SCSS)
│   ├── App.jsx         # Main application component
│   └── main.jsx        # Application entry point
├── .env                # Environment variables
├── app.json            # Expo configuration
├── package.json        # Project dependencies and scripts
└── README.md           # Project documentation
```

## Prerequisites 🛠️

- [Node.js](https://nodejs.org/) (recommended version: 18+)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- [Expo CLI](https://docs.expo.dev/get-started/installation/) (`npm install -g expo-cli`)

## Installation 📦

1. Clone the repository:
    ```bash
    git clone https://github.com/your-username/warao-front.git
    cd warao-front
    ```

2. Install the dependencies:
    ```bash
    npm install
    # or
    yarn install
    ```

## Running the Project ▶️

To run the project in development mode with Expo:

```bash
npm run start 
```

You can access the app in your browser, emulator, or physical device using the Expo Go app. 📱

If you want to run as web (if the project supports it):

```bash
expo start --web
```

Go to [http://localhost:19006](http://localhost:19006) in your browser to view the web application. 🖥️

## Useful Scripts ⚡

- `expo start` — Starts the Expo development server
- `expo start --web` — Starts the project in web mode
- `npm run build` — Generates the production build (check if there is a script for web build)
- `npm run preview` — Previews the production build locally

## Configuration ⚙️

- The `app.json` file contains Expo-specific configurations.

## Contribution 🤝

Feel free to open issues and pull requests!

---
