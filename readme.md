# Mobile Store Ecommerce App with Express.js and MongoDB

An online ecommerce platform for mobile devices built with Express.js, MYSQL, Typescript and other technologies.

## Features

- Product Management: Create, update, delete, and view mobile devices for sale.
- Cart Management: Add, remove, and view items in the shopping cart.
- User Authentication: Secure user registration and login functionality.
- Order Management: Place orders for mobile devices and track order status.
- Category Management: Organize mobile devices into categories for easy browsing.

## Prerequisites

- Node.js: [Download and Install Node.js](https://nodejs.org/)

## Getting Started

1. Clone the repository:

   ```bash
   git clone https://github.com/BedoNassef71/mobile-store-app
   cd mobile-store-app
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Set up environment variables:

   Create a `.env` file in the root directory and add the following:

   ```env
   PORT=3000
   DATABASE_NAME=your-databasename
   ...
   SECRET_KEY=your-secretkey
   PAYMENT_SECRET_KEY=your-strip-secret
   APP_URL=http://localhost:3000
   ```

4. Run the application:

   ```bash
   npm start
   
   - for production
      - npm run build
      - npm run start:prod
   ```

   The application will be available at [http://localhost:3000](http://localhost:3000).

## Project Structure

- `src/`: Contains the source code for the application, including server setup, routes, and middleware.
  - `config/`: Configuration files for setting up environment variables and database connections.
  - `controllers/`: Controllers for handling business logic and request/response handling.
  - `middlewares/`: Custom middleware functions used for tasks such as authentication and request processing.
  - `models/`: MongoDB models defining the structure and behavior of mobile devices, users, carts, orders, and categories.
  - `routes/`: Route handlers defining API endpoints and request handling for different features of the application.
  - `services/`: Services encapsulating business logic and data manipulation for different entities in the application.
  - `utils/`: Utility functions and helper modules used throughout the application.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.