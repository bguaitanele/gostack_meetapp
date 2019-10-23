# Meetapp - Frontend

## Pré-requisitos

Ter instalado:

- Node
- Yarn
- Backend rodando

## Passos para instalação

Todos os comandos solicitados devem ser executados na raiz do projeto "frontend".

### Preparando código

- Na raiz do projeto rode o comando abaixo para instalar as dependências:

```
yarn
```

### Definição de variáveis de ambiente

Faça uma cópia do arquivo **.evn.example** na raiz do projeto para **.env**. Essa configuração é essencial para a aplicação se comunicar com o backend.

## Rodando o projeto

Execute o comando abaixo na raiz do projeto para iniciar o expo:

```
yarn start
```

A aplicação deverá iniciar automaticamente no navegador, através do endereço http://localhost:3000

## Debug

A aplicação já está configurada para realizar o debug em ambiente local. Caso seja necessário configurar outro host, essa alteração pode ser feita no .env:

```
#Reactotron
REACT_APP_HOST = 192.168.0.4
```
