<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

# Ejecutar en desarrollo

1. Clonar el repositorio
2. Ejecutar

```
yarn install
```

3. Tener Nest CLI instalado

```
npm i -g @nestjs/cli
```

4. Levantar la base de datos

```
docker-compose up -d
```

5. Clonar el archivo **.env.template** y renombrar el archivo a **.env**

6. Llenas las variables de entorno definidas en el archivo **.env**

7. Ejecutar la aplicación en modo de desarrollo:

```
yarn start:dev
```

8. Reconstruir la DB con la semilla

```
GET http://localhost:3000/api/v2/seed
```

# Production Build

1. Crear el archivo **.env.prod**
2. Establecer las variables de entorno de producción
3. Crear la nueva imagen

```
docker-compose -f docker-compose.prod.yaml --env-file .env.prod up --build
```

## Stack utilizado

- <a href="https://www.mongodb.com" target="_blank">MongoDB</a>
- <a href="https://nestjs.com" target="_blank">NestJS</a></a>
