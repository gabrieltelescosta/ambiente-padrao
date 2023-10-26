# Ambiente Padrão - Ação Digital

## Visão Geral

Configuração padrão para o ambiente de desenvolvimento de Tema na Tray.

## Requisitos

- Node.js 18 ou superior
- NPM 9 ou superior
- Tray CLI (Instalar Globalmente)

## Configuração Inicial

1. **Clonagem do Repositório** 

   ```shell
   git clone git@github.com:gabrieltelescosta/padrao-projetos.git
   git clone https://github.com/gabrieltelescosta/padrao-projetos.git

2. **Instalação de Dependências** 

   ```shell
   cd seu-projeto
   npm install
   
## Uso


1. **Configurando e baixando arquivos da Tray (Caso necessário)** 

   ```shell
   cd seu-projeto/theme (Pasta para os arquivos do tema)
   tray configure [key] [password] [theme_id]
   tray download

2. **Iniciando Tray** 

   ```shell
   cd seu-projeto/theme (Pasta contendo os arquivos do tema)
   tray watch

3. **Iniciando GULP** 

   ```shell
   cd seu-projeto (pasta raiz)
   gulp