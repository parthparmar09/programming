# Rocket Mail

Rocket Mail is a full-stack email application built with MERN stack. This README provides instructions to run the source code on a local machine.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
  - [Server Setup](#server-setup)
  - [Client Setup](#client-setup)
- [Running the Application](#running-the-application)
- [Additional Information](#additional-information)

## Prerequisites

Before you begin, ensure you have the following software installed on your local machine:

- [Node.js](https://nodejs.org/) (version 14 or later)
- [npm](https://www.npmjs.com/) (version 6 or later)
- [MongoDB](https://www.mongodb.com/) (version 4 or later)

## Getting Started

Unzip the file, move to the unzipped folder and open the folder with command palette or any code editor of your preference:

### Server Setup

1. Navigate to the server directory:

   ```bash
   cd server
   ```

2. Install server dependencies:

   ```bash
   npm install
   ```

3. Start the server:

   ```bash
   npm start
   ```

   The server will be running on `http://localhost:3000`.

### Client Setup

1. Navigate to the client directory:

   ```bash
   cd client
   ```

2. Install client dependencies:

   ```bash
   npm install
   ```

3. Start the client:

   ```bash
   npm run dev
   ```

   The client will be running on `http://localhost:3006`.

## Running the Application

With both the server and client running, you can access the application in your browser at `http://localhost:3006`.

## Additional Information

### API Endpoints

The server exposes various API endpoints under the `/api` path for managing emails, authentication, and user data.

### Authentication

The app uses JWT for authentication. Ensure that you have set the `JWT_SECRET` in your server's `.env` file.

### Mongoose Models

The server uses Mongoose to interact with MongoDB.

### Redux Toolkit

The client uses Redux Toolkit for state management and React Query for data fetching.

### Material-UI

The client UI is built using Material-UI components.
