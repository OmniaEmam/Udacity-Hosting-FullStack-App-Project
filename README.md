# Hosting a Full-Stack Application

# Udagram
This application is a fairly simple application that includes all the main components of a Full-Stack web application.
It builds by a database component using Postgres and RDS in AWS and frontend using Angular, backend using Node.js and Express.
The project is uploaded and deployed via AWS and CircleCi
- **The link of deploying** : ```[http://o-udagram.s3-website-us-east-1.amazonaws.com]([http://o-udagram.s3-website-us-east-1.amazonaws.com)```


### **This Project build by :**
- [Node](https://nodejs.org) - Javascript Runtime
- [TypeScript](https://www.typescriptlang.org/) -  Syntactic superset of JavaScript which adds static typing
- [Angular](https://angular.io/) - Single Page Application Framework
- [Postgresql](https://www.postgresql.org/) - Free and open-source relational database management system emphasizing extensibility and SQL compliance
- [Express](https://expressjs.com/) - Javascript API Framework
- [CORS](https://www.npmjs.com/package/cors) - node.js package for providing a Connect/Express middleware that can be used to enable CORS with various options.
- [AWS](https://aws.amazon.com/) - Amazon Web Services
- [Circleci](https://circleci.com/) - continuous integration and continuous delivery platform that can be used to implement DevOps practices
---


### Dependencies

```
- Node v14.15.1 (LTS) or more recent. While older versions can work it is advisable to keep node to latest LTS version

- npm 6.14.8 (LTS) or more recent, Yarn can work but was not tested for this project

- AWS CLI v2, v1 can work but was not tested for this project

- A RDS database running Postgres.

- A S3 bucket for hosting uploaded pictures.

- A EB for hosting server.

```

### Installation

Provision the necessary AWS services needed for running the application:

1. In AWS, provision a publicly available RDS database running Postgres.
1. In AWS, provision a s3 bucket for hosting the uploaded files.
1. Export the ENV variables needed or use a package like [dotnev](https://www.npmjs.com/package/dotenv)/.
1. Download or clone project to your PC

2. setup dependenscies
   - Download all pervious by :

     ```bash
     npm run api:install
     npm run frontend:install
     ```

3. setup databases

   - open postgres on postbird or cmd , coonect to database and create db and its recomended to set it "postgres"

     ```bash
     psql -U postgres
     CREATE DATABASE postgres;
     \c postgres;
     ```

4. Env Set up

   - environmental variables that needs to set in .env file.

    ```
      POSTGRES_USERNAME="postgres"
      POSTGRES_PASSWORD="postgres"
      POSTGRES_HOST="localhost"
      POSTGRES_DB="postgres"
      AWS_BUCKET="arn:aws:s3::: **your s3 bucket name** "
      AWS_REGION="us-east-1"
      AWS_PROFILE="default"
      JWT_SECRET=" **yoursecrettoken** "
      URL="http://localhost"
      AWS_ACCESS_KEY_ID=" **yourAWS_ACCESS_KEY_ID** "
      AWS_SECRET_ACCESS_KEY=" **yourAWS_SECRET_ACCESS_KEY** "
      POSTGRES_PORT=5432
      PORT=8080
    ```

6. build server

   ```
     api:build
   ```
7. build frontend

   ```
     frontend:build
   ```

## Testing

This project contains two different test you can run it by 

1. `npm run frontend:test`
2. `npm run api:test`

There are no Unit test on the back-end

### Deploying

This project you can deploy it by: 
1. `npm run deploy`

- **BUT BEFORE IT YOU SHOULS CHANGE**
   ```
     in udagram/udagram-frontend/bin/deploy.sh
     "aws s3 cp --recursive ./www s3://**your s3 bucket name**/"
   ```

- **AND**

   ```
     in udagram/udagram-api/bin/deploy.sh
     eb init udagram-api --platform node.js --region us-east-1
     eb use udagram-api-dev
     eb deploy

     eb setenv AWS_ACCESS_KEY_ID="$AWS_ACCESS_KEY_ID" AWS_SECRET_ACCESS_KEY="$AWS_SECRET_ACCESS_KEY"
     AWS_DEFAULT_REGION="$AWS_DEFAULT_REGION" POSTGRES_USERNAME="$POSTGRES_USERNAME" POSTGRES_PASSWORD="$POSTGRES_PASSWORD"
     POSTGRES_DB="$POSTGRES_DB" PORT="$PORT" POSTGRES_HOST="$POSTGRES_HOST" AWS_REGION="$AWS_REGION" 
     AWS_PROFILE="$AWS_PROFILE" AWS_BUCKET="$AWS_BUCKET" URL="$URL" dbport="$dbport" JWT_SECRET="$JWT_SECRET" 
     AWS_PROFILE="$AWS_PROFILE"
 
   ```


## License

[License](LICENSE.txt)
