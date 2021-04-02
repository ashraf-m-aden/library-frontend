FROM node

#install latest npm
RUN npm install npm@latest -g

# installe un simple serveur http pour servir un contenu statique
RUN npm install -g http-server
# clean the cache
RUN npm cache clean --force
#installe angular-cli
RUN npm i -g @angular/cli@9.0.4

RUN mkdir library

WORKDIR /library

# copie tout le dossier de l'app sans node-modules et dist (si disponible)
COPY * .

# clean the cache
RUN npm cache clean --force

# installe les dépendances du projet
RUN npm install --force
# construit l'app pour la production en la minifiant
RUN npm run build --env=prod

EXPOSE 4200
CMD [ "http-server", "library" ]
