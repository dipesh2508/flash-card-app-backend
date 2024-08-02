# Flashcard App Backend Documentation

## Authentication Routes

### Register a User

- **URL:** `/auth/register`
- **Method:** `POST`
- **Description:** Registers a new user.
- **Request Payload:**
  ```json
  {
    "email": "user@example.com",
    "password": "password123",
    "name": "John Doe"
  }
  ```
- **Response Payload:** Success
  ```json
  {
    "message": "User created",
    "user": {
      "id": 1,
      "email": "user@example.com",
      "name": "John Doe"
    }
  }
  ```
- **Response Payload:** Error
  ```json
  {
    "message": "Email already exists"
  }
  ```

### Log in a User

- **URL** `/auth/login`
- **Method** `POST`
- **Description:** Logs in a user and returns a JWT token.
- **Request Payload:**
  ```json
  {
    "email": "user@example.com",
    "password": "password123"
  }
  ```
- **Response Payload:** Success
  ```json
  {
    "token": "jwt_token_here"
  }
  ```
- **Response Payload:** Error
  ```json
  {
    "error": "Invalid credentials"
  }
  ```

## User Routes

### Get User Profile

- **URL:** `/user/profile`
- **Method:** `GET`
- **Description:** Returns the user's profile.
- **Request Headers:**
  ```json
  {
    "Authorization": "Bearer jwt_token_here"
  }
  ```
- **Response Payload:** Success
  ```json
  {
    "id": 1,
    "email": "user@example.com",
    "name": "John Doe",
    "topics": [
    {
        "id": 1,
        "title": "JavaScript",
        "userId": 1,
        "flashcards": [
            {
            "id": 1,
            "question": "What is a closure?",
            "answer": "A closure is a function..."
            }
        ]
    }]
  }
    ```

## Topic Routes

### Get All Topics

- **URL:** `/topics`
- **Method:** `GET`
- **Description:** Returns all topics for the user.
- **Request Headers:**
  ```json
  {
    "Authorization": "Bearer jwt_token_here"
    }
    ```
- **Response Payload:** Success
    ```json
    [
        {
            "id": 1,
            "title": "JavaScript",
            "userId": 1,
            "flashcards": [
                {
                    "id": 1,
                    "question": "What is a closure?",
                    "answer": "A closure is a function..."
                }
            ]
        }
    ]
    ```

### Create a Topic

- **URL:** `/topics`
- **Method:** `POST`
- **Description:** Creates a new topic for the user.
- **Request Headers:**
  ```json
  {
    "Authorization": "Bearer jwt_token_here"
    }
    ```

- **Request Payload:**
    ```json
    {
        "title": "JavaScript"
    }
    ```

- **Response Payload:** Success
    ```json
    {
        "id": 1,
        "title": "JavaScript",
        "userId": 1
    }
    ```

### Flashcard Routes

### Get All Flashcards

- **URL:** `/topics/:topicId/flashcards`
- **Method:** `GET`
- **Description:** Returns all flashcards for a topic.
- **Request Headers:**
  ```json
  {
    "Authorization": "Bearer jwt_token_here"
    }
    ```

- **Response Payload:** Success
    ```json
    [
        {
            "id": 1,
            "question": "What is a closure?",
            "answer": "A closure is a function...",
            "topicId": 1
        }
    ]
    ```

### Create a Flashcard

- **URL:** `/topics/:topicId/flashcards`
- **Method:** `POST`
- **Description:** Creates a new flashcard for a topic.
- **Request Headers:**
  ```json
  {
    "Authorization": "Bearer jwt_token_here"
    }
    ```
- **Request Payload:**
    ```json
    {
        "question": "What is a closure?",
        "answer": "A closure is a function..."
    }
    ```
- **Response Payload:** Success
    ```json
    {
        "id": 1,
        "question": "What is a closure?",
        "answer": "A closure is a function...",
        "topicId": 1
    }
    ```
- **Response Payload:** Error
    ```json
    {
        "message": "Unauthorized"
    }
    ```