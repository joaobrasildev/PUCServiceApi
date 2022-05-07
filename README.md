# PUCServiceApi

# dependencies instalation
$ npm i
```

- Another requirement for development is to have aws CLI installed aswell as the following profile registered.

```bash
# registering profile in AWS CLI
$ aws configure --profile final-job-puc-localstack

# then set the following options when prompted
# aws_access_key_id = TEST
# aws_secret_access_key = TEST
# region = us-east-1
```

> :bulb: Remember to register this AWS CLI profile named as `final-job-puc-localstack`.

### Local AWS environment setup for development

```bash
# run docker container for localstack environment
$ cd aws/local

# if it is the first time running it on docker you should first create it's network
$ docker network create localstack-aws-network

# install localstack container
$ docker-compose up -d

# add permission to execute file (for unix)
chmod +x localstack-setup.sh

# initialize the project setup for local aws infrastructure (you have t)
$ ./localstack-setup.sh
```

- Back to the root dir of service, then run the docker container which will serve the app.

```bash
# install and run docker development environment
$ make
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev
