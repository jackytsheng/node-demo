## Simple Node Sever Project

Implement RabittMQ communication with other project build using springboot

This project is a standalone simple Micro service, subscripting to `Queue "StudentQueue"` can be interacted with a backend [student-demo application](https://github.com/jackytsheng/backend-student-demo).

## How to run it ?

After **git cloning** or **downloading** run the following
``` bash

$ npm start

```

Then, set up mongo DB

If using docker run the following

```bash
$ docker run -d --name node-mongo-test -v ~/node-mongo-test:/data/db -p 27017:27017 -d mongo
```

```bash
$ docker exec -it node-mongo-test bash
```

you can check mongo DB here
```bash
$ mongo localhost:27017
```

## How to interact with it?

Open [Postman](https://www.postman.com/). Then Import the `Simple_Student_REST_Api.postman_collection.json` under the root directory.

Or Check out the [Postman documentation for this project.](https://documenter.getpostman.com/view/9118370/SztJzPVj)

## What is in this project?

The backend is done with:
- Node.js
- MongoDB
- AMQP Library for RabbitMQ subscription
