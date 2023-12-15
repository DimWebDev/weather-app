# Weather-App

This repository contains the Weather-App, a full-stack application that provides weather forecasts.

## Overview

The application is divided into two main components:

- `client`: The front-end React application built with TypeScript.
- `server`: The back-end Express server that provides API endpoints for weather data.

## Obtain an API Key:

- Visit the OpenWeatherMap website: https://openweathermap.org/
- Sign up and navigate to the API keys section in your account.
- Generate a new API key.

## Set Up the API Key in the Application:

- In the server directory of the application, create a file named .env.
- Add your API key to this file in the following format:
  `OPENWEATHER_API_KEY=your_api_key_here`
- This API key will be used by the server to make requests to the OpenWeatherMap API.

Note: The .env file should not be committed to your version control system. Make sure it is listed in your .gitignore file to avoid exposing your API key publicly.

## Key Features

- User Location Detection: The application retrieves the user's geographical location to provide localized weather forecasts.
- Daily Forecast Extraction: The OpenWeatherMap API provides weather forecasts in 3-hour intervals. To present a consistent daily forecast, the application specifically extracts forecasts for 15:00 each day. This approach was necessary because by default, the API response includes multiple forecasts per day. Filtering the data to focus on the same time each day allows for a more standardized and useful daily forecast representation. This time was chosen as it typically represents the temperature during the warmest part of the day.

## Getting Started

To get started with this application, clone the repository and install the dependencies for both the client and server.

### Prerequisites

- Node.js (v18.12.1 or higher)
- npm (included with Node.js)

### Installation & Launch of the Client and the Server

Navigate to both the `client` and `server` directories and install their dependencies:

```bash
cd client
npm install
npm start

cd server
npm install
npm run dev
```

## Client-Side Logic

The client application employs custom hooks and utility functions to manage and transform weather data. Key functionalities include:

- useWeatherData Hook: This custom React hook is responsible for fetching weather data based on the user's location. It manages state for the weather data, loading status, and any errors encountered.

```
// useWeatherData.ts
import { useState, useEffect } from 'react';
import { getWeatherData } from '../utils/weatherService';
// ... rest of the hook ...
```

- transformWeeklyForecast Utility: A function that processes the raw forecast data to extract a consistent daily forecast at 15:00 for the next five days.

```
// transformWeeklyForecast.ts
// ... function implementation ...
```

### Backend Integration

The server uses the OpenWeatherMap API to fetch weather data. It responds to requests from the client with relevant weather information based on the provided geographical coordinates.

## Further Documentation

For a detailed understanding of the data structure and to scale the application for more comprehensive weather details, refer to the OpenWeatherMap 5-day forecast API documentation:

OpenWeatherMap API Documentation: https://openweathermap.org/forecast5

## Running Component Tests

**Testing the Frontend (React Application)**

Our project comprises both client (frontend) and server (backend) components. To specifically test the frontend, which is our React application, we use Jest for component testing. This ensures that the UI components behave as expected. Follow these steps to execute the frontend component tests:

Our React application is equipped with component tests written using Jest. To ensure the components are functioning as expected, you can easily run these tests. Follow the steps below to execute the component tests:

1. **Navigate to the Client Directory**:
   First, you need to switch to the `client` directory where our React application resides. Open your terminal and run the following command:

   ```bash
   cd client
   ```

2. **Run the Tests**
   Once you are in the `client` directory, you can run the component tests using the following command:

   ```bash
   npm test
   ```

   This command will initiate the Jest testing framework and execute all the component tests. You'll see the test results in your terminal.

**Testing the Backend (Express Server)**

Testing the backend is equally important to ensure that our server-side logic functions correctly. We utilize Jest along with Supertest for this purpose. Supertest enables us to test HTTP endpoints without the need for the server to be actively listening on a network port.

1. **Navigate to the Server Directory**:

   ```bash
   cd server
   ```

2. **Run the Tests**
   Once you are in the `server` directory, you can run the tests using the following command:
   ```bash
   npm test
   ```
   This command runs the Jest framework, which processes the test files to check the functionality of your server routes and logic. Any network requests are handled by Supertest, which mocks actual HTTP requests to the server.

Please make sure you have all the necessary dependencies installed before running the tests. If you encounter any issues, feel free to check the troubleshooting section or contact the development team for assistance.
