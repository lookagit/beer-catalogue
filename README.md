# beer-catalogue

Copy code
# LandingPage Project

This project provides a dynamic landing page for displaying and filtering beers based on various criteria such as brand and price, and includes functionalities for sorting beers by top selling brands. It is built with React, utilizes Zustand for state management, and incorporates essential testing with React Testing Library.

## Table of Contents

- [Getting Started](#getting-started)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [Building](#building)
- [Running Tests](#running-tests)
- [Built With](#built-with)

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

This project has been tested and built using Node.js v18.17.0 and npm v9.6.7. It is recommended to use these versions to ensure compatibility:

```bash
node -v  # Should return v18.17.0
npm -v   # Should return 9.6.7
```

## Installation

Follow these steps to get your development environment set up:

### 1. Install Node.js and npm

If Node.js and npm are not already installed, or if you need to use a specific version, you can manage multiple versions using [nvm](https://github.com/nvm-sh/nvm).

```bash
nvm install 18.17.0
nvm use 18.17.0
npm install -g npm@9.6.7
```

### 2. Clone the Repository
Clone the repository using git:

```bash
git clone git@github.com:lookagit/beer-catalogue.git
cd beer-catalogue
```

### 3. Install Dependencies
Run the following command to install the necessary dependencies:

```bash
npm install
```

## Usage

To run the project on your local machine, follow these steps after completing the installation:
Run the following command in the terminal at the root of your project directory:

```bash
npm start
```

This will start the development server and host your application on http://localhost:3000 by default. Open your web browser and navigate to http://localhost:3000 to view the application.

## Building

Follow these steps to build the application and run it on your local server:

### 1. Build the Application

Run the following command to compile the application and generate the production files in the `dist` directory:

```bash
npm run build
```
### 2. Running the Server
After building the application, start your server by running:

```bash
node server.js
```
This will start the Node.js server and serve your application from the dist directory. Make sure your server.js is configured to serve the static files from the dist folder.


## Running Tests

Run the automated tests for this system using:

```bash
npm test
```

## Built With

- **[React](https://reactjs.org/)** - The web framework used for building the user interface.
- **[Zustand](https://github.com/pmndrs/zustand)** - State management library used for managing the application state.
- **[React Testing Library](https://testing-library.com/docs/react-testing-library/intro)** - Testing framework used to write unit and integration tests for React components.
