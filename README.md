# Weather-App

The Weather-App is a full-stack web application that provides localized weather forecasts using data from the OpenWeatherMap API. It is built with a React front-end and an Express.js back-end, designed to deliver daily weather forecasts in a clean, user-friendly interface.

## Table of Contents

- [Overview](#overview)
- [Key Features](#key-features)
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
  - [Cloning the Repository](#cloning-the-repository)
  - [API Key Setup](#api-key-setup)
  - [Installing Dependencies](#installing-dependencies)
  - [Running the Application](#running-the-application)
- [Client-Side Logic](#client-side-logic)
- [Backend Integration](#backend-integration)
- [Testing](#testing)
  - [Frontend Tests](#frontend-tests)
  - [Backend Tests](#backend-tests)
- [Further Documentation](#further-documentation)

## Overview

The Weather-App consists of two main components:

- **Client:** A React application built with TypeScript that serves the front-end interface.
- **Server:** An Express.js application that fetches weather data from the OpenWeatherMap API and serves it to the client.

This structure allows the app to handle user requests for weather information and display forecasts in a simple, accessible way.

## Key Features

- **User Location Detection:** Automatically detects the user's geographical location to provide localized weather forecasts.
- **Daily Forecast Extraction:** The application extracts weather forecasts for 15:00 each day to ensure a consistent, comparable daily forecast.
- **Responsive UI:** The React front-end is designed to work across various device sizes, ensuring a smooth user experience on both desktop and mobile.
  
## Prerequisites

Before you begin, ensure you have the following installed on your machine:

- **Node.js** (v18.12.1 or higher)
- **npm** (comes bundled with Node.js)

You will also need an API key from OpenWeatherMap to fetch weather data.

## Getting Started

### Cloning the Repository

To get started, clone the repository to your local machine using the following command:

```bash
git clone https://github.com/your-username/weather-app.git
```

### API Key Setup

To use the OpenWeatherMap API, you'll need to obtain an API key:

1. **Visit the OpenWeatherMap Website:** Sign up or log in at [OpenWeatherMap](https://openweathermap.org/).
2. **Generate API Key:** Once logged in, navigate to the API keys section and create a new API key.
3. **Set Up API Key in the Server:** 
   - Navigate to the `server` directory.
   - Create a `.env` file and add your API key in the following format:
   
     ```bash
     OPENWEATHER_API_KEY=your_api_key_here
     ```

4. Ensure the `.env` file is included in your `.gitignore` to prevent it from being pushed to version control.

### Installing Dependencies

You need to install the necessary dependencies for both the client and the server.

1. **Navigate to the client directory and install dependencies:**

   ```bash
   cd client
   npm install
   ```

2. **Navigate to the server directory and install dependencies:**

   ```bash
   cd server
   npm install
   ```

### Running the Application

Once the dependencies are installed, you can run the client and server separately.

1. **Start the Client:**

   In the `client` directory, run:

   ```bash
   npm start
   ```

   This will start the React development server, typically available at `http://localhost:3000`.

2. **Start the Server:**

   In the `server` directory, run:

   ```bash
   npm run dev
   ```

   This will start the Express server, typically available at `http://localhost:5000`.

## Client-Side Logic

The client-side React application manages and displays weather data using custom hooks and utility functions:

- **`useWeatherData` Hook:** This hook is responsible for fetching weather data based on the user's location. It manages the state for the weather data, loading status, and error handling. It calls a utility function to make requests to the back-end and keeps track of the data-fetching lifecycle.

- **`transformWeeklyForecast` Utility:** This utility function processes the raw weather data received from the API. It extracts and standardizes daily forecasts at 15:00 for the next five days, providing a consistent view of the forecast.

These components work together to ensure smooth data flow from the OpenWeatherMap API to the user interface.

## Backend Integration

The Express.js back-end handles API requests from the client and interacts with the OpenWeatherMap API. It retrieves weather data based on geographical coordinates and sends the relevant data back to the client.

- **API Integration:** The back-end uses the API key from the `.env` file to authenticate requests to the OpenWeatherMap API.
- **Geolocation-Based Forecasts:** The client sends the user's geolocation (latitude and longitude) to the server, which in turn fetches weather data from the OpenWeatherMap API and returns it.

## Testing

### Frontend Tests

We use **Jest** for testing the React components in the front-end. To run the tests:

1. **Navigate to the client directory:**

   ```bash
   cd client
   ```

2. **Run the tests:**

   ```bash
   npm test
   ```

   This command will run the test suite and display the results in your terminal. Jest will automatically look for test files and execute the component tests.

### Backend Tests

For testing the server, we use **Jest** combined with **Supertest**. Supertest allows us to simulate HTTP requests to the server without requiring the server to listen on a port.

1. **Navigate to the server directory:**

   ```bash
   cd server
   ```

2. **Run the tests:**

   ```bash
   npm test
   ```

   This will execute the test suite, validating that the API endpoints and server logic are functioning as expected.

## Further Documentation

For more detailed information on how the weather data is structured or to extend the application, refer to the OpenWeatherMap API documentation:

- **[OpenWeatherMap 5-Day Forecast API Documentation](https://openweathermap.org/forecast5)**
