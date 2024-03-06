# Lexart Full Stack Javascript Developer Challanger

This project was developed as a technical challenge for the Lexart junior full-stack developer position.
It is a full-stack web application designed for product management.

## Live Deployment 
The application is currently deployed and accessible at [this link ↗️](https://page-store-smartphone-manager.vercel.app/dashboard).
The application is fully deployed at [<img src="https://img.shields.io/badge/vercel-000?style=for-the-badge&logo=vercel&logoColor=white">](https://vercel.com)

## Run locally

  1. First of all, you need to have the installed [Docker](https://docs.docker.com/engine/install/ubuntu/) and [Docker Compose](https://docs.docker.com/compose/install/) installed.
  2. Ensure that ports 3000, 3001 and 5432 on your computer are available; otherwise, errors may occur.
  3. Install all dependencies running:
  ```
    npm run install:all
  ```
  4. Inside each directory there is a `.env.example` file that you can configure manually or run the command:
  ```
    npm run setup:env
  ```
  5. Finally run:
  ```bash
    npm run docker:up
  ```
#### Finished! <br>
Now just go to [localhost:3000](http://localhost:3000/) that you will see something like that:

![healthy frontend](/assets/preview-frontend.png)

And go to [localhost:3001](http://localhost:3001/) that you will see something like that:

![healthy backend](/assets/preview-backend.png)

> The application will spin up three containers: one for the backend, one for the frontend, and one for the database.

## Database structure
<details> <summary>See more</summary>
The database used was Postgres for its speed, versatility and easy use. The structure chosen was as follows.

![db-structure](/assets/preview-db.jpg)
</details>

## API Documentation

<details> <summary>See more</summary>

### Create a new account

![#f03c15](https://placehold.co/15x15/49CC90/49CC90.png) &nbsp;**POST**

```
/signup
```

| Parameter   | Type       | Description                           |
| :---------- | :--------- | :---------------------------------- |
| `username` | `string` | At least 3 characters. |
| `password` | `string` | At least 5 characters. |

<details> <summary> Expected return </summary> 

* status code `201`

```bash
{
  "id": 1,
  "username": "Jorel",
  "token": "exampletoken.exampletoken.exampletoken"
}
```
</details>

___

### Log into

![#f03c15](https://placehold.co/15x15/49CC90/49CC90.png) &nbsp;**POST**

```
/login
```

| Parameter   | Type       | Description                           |
| :---------- | :--------- | :---------------------------------- |
| `username` | `string` | At least 3 characters. |
| `password` | `string` | At least 5 characters. |

<details> <summary> Expected return </summary> 

* status code `200`

```bash
{
  "id": 1,
  "username": "example",
  "token": "exampletoken.exampletoken.exampletoken"
}
```
</details>

___

### Create a new product 🔒
> `Token` is required on `Authorization` header. Ex: `Baerer ${token}`

![#f03c15](https://placehold.co/15x15/49CC90/49CC90.png) &nbsp;**POST**

<details> <summary> this route accept three different structures</summary>

1. First structure
```bash
{
  "name": "Xiaomi Redmi 9",
  "brand": "Xiaomi",
  "model": "Redmi 9",
  "price": 10000,
  "color": "red"
}
```

2. Second structure
```bash
{
  "name": "Xiaomi Redmi 9",
  "price": 10000,
  "details": {
    "brand": "Xiaomi",
    "model": "Redmi 9",
    "color": "red"
  },
}
```

3. Third structure
```bash
[
  {
    "name": "Xiaomi Redmi 9",
    "brand": "Xiaomi",
    "model": "Redmi 9",
    "data": [
      {
        "price": 10000,
        "color": "red"
      },
      {
        "price": 10000,
        "color": "blue"
      }
    ]
  },
  {
    "name": "Iphone 14 Pro",
    "brand": "Iphone",
    "model": "14 Pro",
    "data": [
      {
        "price": 30000,
        "color": "silver"
      },
      {
        "price": 30100,
        "color": "gold"
      }
    ]
  }
]
```

</details>

```
/dashboard/product
```

| Parameter   | Type       | Description                           |
| :---------- | :--------- | :---------------------------------- |
| `name` | `string` | At least 1 characters. |
| `brand` | `string` | At least 1 characters. |
| `model` | `string` | At least 1 characters. |
| `color` | `string` | At least 1 characters. |
| `price` | `number` | Is required. |

<details> <summary> Expected return </summary>

* status code `201`

> this route can return two different structures

1. First structure
```bash
{
  "id": 1
  "name": "Xiaomi Redmi 9",
  "brand": "Xiaomi",
  "model": "Redmi 9",
  "price": 10000,
  "color": "red",
  "userId": 1
}
```

2. Second structure
```bash
[
  {
    "id": 5,
    "name": "Xiaomi Redmi 9",
    "brand": "Xiaomi",
    "model": "Redmi 9",
    "price": 10000,
    "color": "red",
    "userId": 1
  },
  {
    "id": 6,
    "name": "Xiaomi Redmi 9",
    "brand": "Xiaomi",
    "model": "Redmi 9",
    "price": 10000,
    "color": "blue",
    "userId": 1
  },
  {
    "id": 7,
    "name": "Iphone 14 Pro",
    "brand": "Iphone",
    "model": "14 Pro",
    "price": 30000,
    "color": "silver",
    "userId": 1
  },
  {
    "id": 8,
    "name": "Iphone 14 Pro",
    "brand": "Iphone",
    "model": "14 Pro",
    "price": 30100,
    "color": "gold",
    "userId": 1
  }
]
```

</details>

___

### Get all products of user 🔒
> `Token` is required on `Authorization` header. Ex: `Baerer ${token}`

![#f03c15](https://placehold.co/15x15/61AFFE/61AFFE.png) &nbsp;**GET**

```
/dashboard/product
```

<details> <summary> Expected return </summary> 

* status code `200`

```bash
[
  {
    "id": 5,
    "name": "Xiaomi Redmi 9",
    "brand": "Xiaomi",
    "model": "Redmi 9",
    "price": 10000,
    "color": "red",
  },
  {
    "id": 6,
    "name": "Xiaomi Redmi 9",
    "brand": "Xiaomi",
    "model": "Redmi 9",
    "price": 10000,
    "color": "blue",
  },
  {
    "id": 7,
    "name": "Iphone 14 Pro",
    "brand": "Iphone",
    "model": "14 Pro",
    "price": 30000,
    "color": "silver",
  },
  {
    "id": 8,
    "name": "Iphone 14 Pro",
    "brand": "Iphone",
    "model": "14 Pro",
    "price": 30100,
    "color": "gold",
  }
]
```

</details>

___

### Update a product 🔒
> `Token` is required on `Authorization` header. Ex: `Baerer ${token}`

![#f03c15](https://placehold.co/15x15/FCA130/FCA130.png) &nbsp;**PUT**

```
/dashboard/product
```

| Parameter   | Type       | Description                           |
| :---------- | :--------- | :---------------------------------- |
| `id` | `number` | Is required. |
| `name` | `string` | At least 1 characters. |
| `brand` | `string` | At least 1 characters. |
| `model` | `string` | At least 1 characters. |
| `color` | `string` | At least 1 characters. |
| `price` | `number` | At least 1 characters. |

<details> <summary> Expected return </summary> 

* status code `200`

```bash
{
  "id": 4,
  "name": "Xiaomi Poco F3",
  "price": 2000,
  "brand": "Xiaomi",
  "model": "Poco F3",
  "color": "Blue"
}
```

</details>

___

### Delete a product 🔒
> `Token` is required on `Authorization` header. Ex: `Baerer ${token}`

![#f03c15](https://placehold.co/15x15/F93E3E/F93E3E.png) &nbsp;**DELETE**

```
/dashboard/product/:id
```

<details> <summary> Expected return </summary> 

* status code `204`

```bash
empty return
```

___
</details>

### Get a user 🔒
> `Token` is required on `Authorization` header. Ex: `Baerer ${token}`

![#f03c15](https://placehold.co/15x15/61AFFE/61AFFE.png) &nbsp;**GET**

```
/user
```

<details> <summary> Expected return </summary>

* status code `200`

```bash
{
  "username": "Jorel"
}
```

</details>

</details>

## Tests

<details> <summary>See more</summary>

  The API tests were run by the `Mocha`, `Chai`, and `Sinon`. Also `nyc` librarie that test file coverage.
  There are both integration and unit tests for better security in future updates.

  ### Run

  To run tests coverage use:
  ```bash
    npm run test:api:coverage
  ```

  If all happens well, you will see something like that:
  ![preview-test-api-coverage](/assets/preview-test-api-coverage.png)

</details>


## Design Pattern

<details> <summary> See more </summary> 

### MSC Design Pattern in API Development
#### Overview
The MSC (Model, Service, Controller) architectural pattern provides a structured approach to building APIs by segregating responsibilities into distinct layers: Model, Service, and Controller. This separation enhances maintainability, facilitates easier troubleshooting, and promotes scalability within the application.

#### Model
The Model layer serves as the interface for database interactions. It encapsulates all database-related operations, such as querying, inserting, updating, and deleting data. By handling these tasks, the Model ensures data integrity and consistency while abstracting the database complexity from other layers.

#### Service
The Service layer encapsulates the business logic and rules of the application. It utilizes the functionalities provided by the Model layer and implements the core logic required to process requests. This layer orchestrates different operations, enforces business rules, and acts as an intermediary between the Controller and the Model.

#### Controller
The Controller layer serves as the entry point for incoming requests and handles the interaction with the client. It receives requests, processes input data, calls the appropriate Service methods, and generates responses to send back to the client. The Controller ensures that the responses adhere to the required format and contain the necessary information.

#### Advantages
- Maintainability: The separation of concerns allows for easier maintenance and updates. Each layer can be modified or expanded without affecting the others, facilitating code management.
- Scalability: The modular structure enables easy scalability as different layers can be scaled independently based on the application's requirements.
- Testing: The distinct layers facilitate unit testing, as each layer can be tested separately, promoting better test coverage and reliability.

</details>

## Password security

<details> <summary> See more </summary> 

The API use [Bcrypt](https://github.com/dcodeIO/bcrypt.js#readme) the keep your password safe even if the database have a invasion. <br>
The database dashboard:

![db-dashboard](/assets/preview-db-dashboard.png)


</details>

## Others details

Both the `/frontend` and `/backend` folders have their respective `README.md` for some more details. Visit to find out more.

___

Thank you for your attention.