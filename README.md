# Binniback-sails

Backend listo para implementar utilizando [Sails v1](https://sailsjs.com).

### Version info

This app was originally generated on Mon Dec 09 2019 13:24:05 GMT-0600 (CST) using Sails v1.2.1.

<!-- Internally, Sails used [`sails-generate@1.16.8`](https://github.com/balderdashy/sails-generate/tree/v1.16.8/lib/core-generators/new). -->

### Correr en producción

Para ejecutar el proyecto en producción cambiar ***migrate:*** a ***safe*** el archivo
***/binniback-sails/config/models.js***
```
migrate: 'safe',
```

### Whitelist de acceso al API
Es necesario dar de alta las URL's o IP's permitidas para hacer peticiones a la API:
Para asignarlo es necesario modificar el archivo:
***/binniback-sails/config/security.js***

Por default la URL permitida es 'http://localhost:3000'
```
module.exports.security = {
  cors: {
    allRoutes: true,
    allowOrigins: ['http://localhost:3000'],
    allowCredentials: true,
  },
  csrf: false
};
```

### Base de datos
Cambiar el adaptador de base de datos en la ruta:
***/binniback-sails/config/datastores.js***
Es necesario instalar el modulo de node de cada gestor de base de datos, principales:
##### MySQL
```
$ npm install sails-mysql
```

##### PostgreSQL
```
$ npm install sails-postgresql
```

##### MongoDB
```
$ npm install sails-mongo
```

##### MSSQL
```
$ npm install waterline-mssql
```




