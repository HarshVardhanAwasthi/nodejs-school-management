# School Location Management API

This project is an API designed to manage school data based on their geographic locations. The API provides functionalities to add new schools, retrieve a list of schools, and calculate the distance between the user's location and the schools. The project utilizes Express.js for the API framework and Sequelize for handling MySQL database operations. It also employs the Haversine formula to calculate the geographic distance between two points based on their latitude and longitude.

## Key Features

    Adding a School: The API allows users to add a school by providing its name, address, latitude, and longitude.

    Listing Schools: Users can get a list of all schools stored in the database, sorted by their proximity to a provided location (latitude and longitude).

    Distance Calculation: The API calculates the distance between the user's provided location and each school using the Haversine formula. This formula accounts for the curvature of the Earth to provide accurate distance measurements in kilometers.

## Core Technologies

    Node.js: A JavaScript runtime used to build the server-side application.

    Express.js: A web framework for Node.js that helps in building robust APIs.

    Sequelize: An ORM (Object Relational Mapper) that connects the application with the MySQL database for CRUD operations.

    Haversine Formula: A mathematical formula used to calculate the great-circle distance between two points on the Earth's surface, given their longitudes and latitudes.

    Validator: A library to ensure that user inputs are valid, such as checking the format of latitude, longitude, and school name.

## API Endpoints

    Add a School:
        This endpoint accepts the school name, address, latitude, and longitude in the request body. It checks if the school already exists in the database (by matching address and coordinates) and if not, creates a new record.

    List Schools by Distance:
        This endpoint returns a list of all schools, ordered by their distance from the user's location, which is provided as latitude and longitude in the URL. The response includes the calculated distance for each school.

## Workflow

    Validation: The data submitted (e.g., school name, address, latitude, longitude) is validated to ensure correctness. For example, the latitude must be between -90 and 90, and the longitude must be between -180 and 180.

    Database Interaction: The MySQL database stores school records, and Sequelize is used to interact with the database efficiently. Schools are stored with their geographic coordinates (latitude and longitude).

    Distance Calculation: The Haversine formula is used to calculate the distance between two geographic points. This helps in sorting schools by their proximity to a given location.

## Environment Setup

    The project requires a MySQL database, and sensitive credentials (such as database name, username, and password) are managed through environment variables to maintain security.
    
    The application uses .env files to manage configuration like database connection settings and server port.