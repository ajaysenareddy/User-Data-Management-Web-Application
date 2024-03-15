# User Data Management Web Application Documentation

## Overview
This document provides an overview of the User Data Management Web Application. The application allows users to input their data, which is then validated, stored in a database, and displayed in a tabular format.

## Features
1. User Input Form:
   - Provides fields for users to input their name, email, age, and date of birth.
   - Implements client-side validation to ensure data integrity.

2. Database:
   - Utilizes a simple MySQL database to store user data.
   - Defines a table structure with fields for ID, name, email, age, and date of birth.

3. Data Storage:
   - Stores user data in the database upon form submission.

4. Data Retrieval:
   - Retrieves user data from the database.
   - Displays user data in a tabular format on the frontend.

5. Frontend:
   - Provides a user-friendly interface for data input and display.
   - Implemented using HTML, CSS, and JavaScript.

6. Backend:
   - Built using Java Spring Boot framework.
   - Defines RESTful API endpoints for handling user data.

## Project Structure
taskproj/
├── src/
│   ├── main/
│   │   ├── java/
│   │   │   └── com/
│   │   │       └── springwebapp.taskproj/
│   │   │           ├── Controller/
│   │   │           │   └── UserController.java
│   │   │           ├── Entity/
│   │   │           │   └── User.java
│   │   │           ├── Exception/
│   │   │           │   └── ResourceNotFoundException.java
│   │   │           ├── Implementation/
│   │   │           │   └── UserServiceImpl.java
│   │   │           ├── Payload/
│   │   │           │   ├── ApiResponse.java
│   │   │           │   └── UserDto.java
│   │   │           ├── Repository/
│   │   │           │   └── UserRepo.java
│   │   │           └── Service/
│   │   │               └── UserService.java
│   │   └── resources/
│   │       ├── static/
│   │       │   ├── index.html
│   │       │   ├── styles.css
│   │       │   └── scripts.js
│   │       └── application.properties
└── pom.xml


## Frontend
- **HTML Form (`index.html`):** Provides fields for user data input.
- **CSS Stylesheet (`styles.css`):** Defines styles for the HTML elements.
- **JavaScript File (`scripts.js`):** Handles form submission and fetching data from the backend.

## Backend
- **Controller (`UserController.java`):** Defines REST endpoints for user data management.
- **Entity (`User.java`):** Represents the user entity mapped to the database.
- **Exception (`ResourceNotFoundException.java`):** Custom exception class for resource not found errors.
- **Implementation (`UserServiceImpl.java`):** Implements the service logic for user data management.
- **Payload (`ApiResponse.java`, `UserDto.java`):** Payload classes for API responses and data transfer objects.

## Database
- **Database Name:** `task_proj`
- **Table Name:** `user`
- **Table Schema:**
  - `id INT PRIMARY KEY AUTO_INCREMENT`
  - `name VARCHAR(255)`
  - `email VARCHAR(255)`
  - `age INT`
  - `dob DATE`

## Setup and Configuration
1. **Clone Repository:** Clone the Git repository to your local machine.
2. **Database Setup:** Configure a MySQL database and update the `application.properties` file with the database credentials.
3. **Backend Setup:** Import the project into IntelliJ IDEA or your preferred IDE and run the Spring Boot application.
4. **Frontend Setup:** Open the `index.html` file in a web browser to access the user interface.

## Usage
1. Access the web application through the browser.
2. Fill out the user input form with valid data.
3. Submit the form to store the user data in the database.
4. View the list of users displayed in a tabular format on the same page.

## Known Issues
- No known issues at the moment.

## Future Enhancements
- Implement additional validation rules for user input.
- Add user authentication and authorization features.
- Enhance the frontend with a more interactive user interface.

## Contributors
Ajay Sena Reddy


