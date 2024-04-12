# Mobile Store Ecommerce App with Express.js and MySQL

Welcome to the Mobile Store Ecommerce App, a sophisticated platform for buying and selling mobile devices, meticulously crafted with Express.js, MySQL, TypeScript, Redis, Docker, and other state-of-the-art technologies. Empowering businesses and customers alike, our platform offers a seamless and secure shopping experience.

## Features

- **Comprehensive Product Management**: Effortlessly manage your product catalog with features for creating, updating, deleting, and viewing mobile devices for sale.
- **Efficient Cart Management**: Streamline the shopping process with intuitive cart management functionalities, allowing users to add, remove, and view items in their shopping cart.
- **Personalized Wishlist**: Enhance user engagement by enabling customers to save their favorite products to a wishlist for future consideration and purchase.
- **Robust User Authentication**: Ensure the security of user accounts with a robust authentication system, enabling secure registration and login functionality.
- **Efficient Order Management**: Seamlessly handle orders for mobile devices, providing users with real-time tracking of order status.
- **Secure Payment Processing**: Safely process payments for orders using the highly secure Stripe payment gateway.
- **Organized Category Management**: Facilitate easy browsing for customers by organizing mobile devices into categories based on their specifications and features.

## User Authentication

- **Seamless Passport.js Integration**: Seamlessly integrate user authentication using Passport.js, a battle-tested authentication middleware for Node.js applications.
- **OAuth Providers Integration**: Enhance user convenience by allowing them to log in using their GitHub and Google accounts through OAuth authentication strategies provided by Passport.js.
- **Enhanced Security with Two-Factor Authentication (2FA)**: Elevate account security with two-factor authentication (2FA), providing an additional layer of protection using the Google Authenticator app.

## Prerequisites

Before getting started, ensure you have Node.js installed. If not, you can download and install it from [here](https://nodejs.org/).

## Getting Started

1. **Clone the repository:**

   ```bash
   git clone https://github.com/BedoNassef71/mobile-store-app
   cd mobile-store-app
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Set up environment variables:**

   Create a `.env` file in the root directory and add the required environment variables as specified in the `.env.example` file.

4. **Run the application:**

   ```bash
   npm start
   
   # for production
   npm run build
   npm run start:prod
   
   # for Docker
   docker-compose up
   ```

   Access the application at [http://localhost:3000](http://localhost:3000) and start exploring the world of mobile commerce!

## Project Structure

- `src/`: Contains the source code for the application, including server setup, routes, and middleware.
  - `config/`: Configuration files for setting up environment variables and database connections.
  - `controllers/`: Controllers responsible for handling business logic and request/response handling.
  - `middlewares/`: Custom middleware functions used for tasks such as authentication and request processing.
  - `models/`: MySQL models defining the structure and behavior of mobile devices, users, carts, orders, and categories.
  - `routes/`: Route handlers defining API endpoints and request handling for different features of the application.
  - `services/`: Services encapsulating business logic and data manipulation for different entities in the application.
  - `utils/`: Utility functions and helper modules used throughout the application.

## Contributing

We welcome contributions from the community! If you have ideas for enhancements or would like to report issues, please feel free to open an issue or submit a pull request. Together, let's make the Mobile Store Ecommerce App even better!