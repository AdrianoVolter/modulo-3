# Use uma imagem oficial do Node.js como base
FROM node:14

# Definir diretório de trabalho no container
WORKDIR /usr/src/app

# Instalar dependências da aplicação
COPY package*.json ./
RUN npm install

# Copiar arquivos do app
COPY . .

# Fazer a aplicação escutar na porta 8080
EXPOSE 8080

# Comando para iniciar a aplicação
CMD [ "node", "server.js" ]
