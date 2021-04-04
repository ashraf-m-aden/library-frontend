FROM node:12.21.0-alpine


WORKDIR /usr/src/library

#copier package and package-lock
COPY package*.json ./

#install latest npm
RUN npm install npm@6.14.4 -g

# installe un simple serveur http pour servir un contenu statique
RUN npm install -g http-server

# clean the cache
RUN npm cache clean --force

#installe angular-cli
RUN npm i -g @angular/cli@9.0.4


# clean the cache
RUN npm cache clean --force

# installe les dépendances du projet
RUN npm install

# copie tout le dossier de l'app sans node-modules et dist (si disponible)
COPY . .
RUN npm cache clean --force


# construit l'app pour la production en la minifiant
RUN npm run build

EXPOSE 4200
CMD http-server --port 4200 library
