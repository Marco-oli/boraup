# 🚀 BoraUp

<div align="center">

![React Native](https://img.shields.io/badge/React%20Native-0.79.5-blue?style=for-the-badge&logo=react)
![Expo](https://img.shields.io/badge/Expo-53.0.20-black?style=for-the-badge&logo=expo)
![TypeScript](https://img.shields.io/badge/TypeScript-5.8.3-blue?style=for-the-badge&logo=typescript)
![Zustand](https://img.shields.io/badge/Zustand-5.0.7-purple?style=for-the-badge)

</div>

## 📱 Sobre o Projeto

**BoraUp** é um aplicativo móvel desenvolvido em React Native com Expo, focado em autenticação de usuários e gerenciamento de sessões. O app oferece uma experiência de login segura e uma interface para visualização de informações do usuário.

## ✨ Funcionalidades

- 🔐 **Sistema de Login**: Autenticação segura com email e senha
- 🔄 **Gerenciamento de Tokens**: Suporte a access token e refresh token
- 👤 **Perfil do Usuário**: Visualização de informações pessoais
- 🚪 **Logout**: Encerramento seguro de sessão

## 🛠️ Tecnologias Utilizadas

### Frontend

- **React Native** - Framework para desenvolvimento mobile
- **Expo** - Plataforma para desenvolvimento React Native
- **TypeScript** - Linguagem com tipagem estática
- **React Navigation** - Navegação entre telas

### Gerenciamento de Estado

- **Zustand** - Biblioteca para gerenciamento de estado global

### Estilização

- **React Native StyleSheet** - Estilização nativa
- **Expo Fonts** - Sistema de fontes personalizadas (Lato)

### Comunicação com API

- **Axios** - Cliente HTTP para requisições

## 📁 Estrutura do Projeto

```
boraup/
├── src/
│   ├── assets/
│   │   └── colors.ts          # Paleta de cores do app
│   ├── components/
│   │   ├── CustomButton/      # Botão personalizado
│   │   ├── CustomText/        # Texto personalizado
│   │   └── CustomTextInput/   # Input personalizado
│   ├── routes/
│   │   └── routes.tsx         # Configuração de navegação
│   ├── screens/
│   │   ├── LoginScreen/       # Tela de login
│   │   └── UserInfoScreen/    # Tela de informações do usuário
│   ├── services/
│   │   ├── api.ts             # Configuração da API
│   │   ├── auth.ts            # Serviços de autenticação
│   │   └── user.ts            # Serviços de usuário
│   ├── store/
│   │   └── authStore.ts       # Store de autenticação (Zustand)
│   ├── types/
│   │   ├── auth.ts            # Tipos de autenticação
│   │   └── user.ts            # Tipos de usuário
├── App.tsx                    # Componente principal
├── package.json               # Dependências do projeto
└── tsconfig.json              # Configuração TypeScript
```

## 🚀 Como Executar

### Pré-requisitos

- [Node.js](https://nodejs.org/) (versão 18 ou superior)
- [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/)
- [Expo CLI](https://docs.expo.dev/get-started/installation/)
- [Expo Go](https://expo.dev/client) (app para testar no dispositivo)

### Instalação

1. **Clone o repositório**

   ```bash
   git clone <url-do-repositorio>
   cd boraup
   ```

2. **Instale as dependências**

   ```bash
   yarn install
   # ou
   npm install
   ```

3. **Execute o projeto**

   ```bash
   yarn start
   # ou
   npm start
   ```

4. **Teste no dispositivo**
   - Abra o app **Expo Go** no seu smartphone
   - Escaneie o QR Code que aparecerá no terminal
   - O app será carregado automaticamente

### Scripts Disponíveis

- `yarn start` - Inicia o servidor de desenvolvimento
- `yarn android` - Executa no emulador Android
- `yarn ios` - Executa no simulador iOS
- `yarn web` - Executa na versão web

## 🔧 Configuração

### Variáveis de Ambiente

Crie um arquivo `.env` na raiz do projeto com as seguintes variáveis:

```env
API_BASE_URL=sua_url_da_api_aqui
```

## 📱 Telas do App

### Login Screen

- Campo de email com foco automático
- Campo de senha
- Botão de login com estado de loading

### User Info Screen

- Exibição de informações do usuário (nome, email, ID)
- Atualização automática a cada 5 segundos
- Botão de logout
- Redirecionamento automático em caso de erro

## 🔐 Sistema de Autenticação

O app utiliza um sistema de autenticação baseado em JWT com:

- **Access Token**: Para autenticação de requisições
- **Refresh Token**: Para renovação automática de sessão
- **Validação Automática**: Verificação periódica da validade dos tokens

## 👨‍💻 Autor

**Marcooli** - [GitHub](https://github.com/Marco-oli)
