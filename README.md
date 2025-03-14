# **Subscription Tracker API**  

This is a REST API for managing user subscriptions. It allows users to create, retrieve, update, and delete their subscriptions. The API also includes features like automated subscription renewal reminders via email.

---

## **Features**  

- **User Authentication:** Secure user sign-up and sign-in using JWT (JSON Web Tokens).  
- **Subscription Management:** Create, retrieve, update, and delete subscriptions.  
- **Renewal Reminders:** Automated email reminders sent to users before their subscriptions renew using Upstash Workflow.  
- **Rate Limiting & Bot Detection:** Uses Arcjet to protect the API from abuse (rate limiting, bot detection, and common attack prevention).  
- **Data Validation:** Ensures data integrity through input validation.  
- **Error Handling:** Centralized error handling middleware for consistent error responses.  
- **Database:** MongoDB integration for persistent data storage.  
- **Email Notifications:** Uses Nodemailer for sending email reminders.  

---

## **Technologies Used**  

- **Node.js:** JavaScript runtime environment.  
- **Express.js:** Web application framework.  
- **MongoDB:** NoSQL database.  
- **Mongoose:** MongoDB object modeling tool.  
- **JWT (JSON Web Tokens):** Authentication and authorization.  
- **bcryptjs:** Password hashing.  
- **Nodemailer:** Email sending library.  
- **dotenv:** Environment variable management.  
- **Arcjet:** Security and rate-limiting middleware.  
- **Upstash Workflow:** Distributed task queue for scheduling email reminders.  
- **dayjs:** Date manipulation library.  
- **ESLint:** Linter for code quality and consistency.  
- **nodemon:** Development tool for automatic server restarts.  

---

## **Directory Structure**  

```
zakriakhanx-subscription-tracker-api/
├── README.md                    # API documentation
├── app.js                        # Main application file
├── eslint.config.js              # ESLint configuration
├── package.json                  # Project dependencies and scripts
├── config/                        # Configuration files
│   ├── arcjet.js                  # Arcjet configuration
│   ├── env.js                     # Environment variables
│   ├── nodemailer.js              # Nodemailer configuration
│   └── upstash.js                 # Upstash Workflow configuration
├── controllers/                    # Request handling logic
│   ├── auth.controller.js          # Authentication controllers (sign-up, sign-in, sign-out)
│   ├── subscription.controller.js  # Subscription controllers (create, retrieve)
│   ├── user.controller.js          # User controllers (retrieve)
│   └── workflow.controller.js      # Workflow controllers (email reminders)
├── database/                       # Database connection
│   └── mongodb.js                  # MongoDB connection setup
├── middlewares/                     # Middleware functions
│   ├── arcjet.middleware.js         # Arcjet middleware
│   ├── auth.middleware.js           # Authentication middleware
│   └── error.middleware.js          # Error handling middleware
├── models/                          # Data models
│   ├── subscription.model.js        # Subscription model
│   └── user.model.js                # User model
├── routes/                          # API routes
│   ├── auth.routes.js               # Authentication routes
│   ├── subscription.routes.js       # Subscription routes
│   ├── user.routes.js               # User routes
│   └── workflow.routes.js           # Workflow routes
└── utils/                           # Utility functions
    ├── email-template.js           # Email templates
    └── send-email.js               # Email sending logic
```

---

## **Setup and Installation**  

### **1. Clone the repository:**  

```bash
git clone <repository_url>
cd zakriakhanx-subscription-tracker-api
```

### **2. Install dependencies:**  

```bash
npm install
```

### **3. Configure environment variables:**  

- Create a `.env` file in the root directory.  
- Add the following environment variables (replace placeholders with actual values):  

```
PORT=3000
SERVER_URL=http://localhost:3000
DB_URI=<mongodb_connection_string>
JWT_SECRET=<your_jwt_secret>
JWT_EXPIRES_IN=7d
ARCJET_KEY=<your_arcjet_key>
ARCJET_ENV=development
QSTASH_URL=<your_upstash_url>
QSTASH_TOKEN=<your_upstash_token>
QSTASH_CURRENT_SIGNING_KEY=<your_current_key>
QSTASH_NEXT_SIGNING_KEY=<your_next_key>
EMAIL=<your_email_address>
EMAIL_PASSWORD=<your_email_password>
```

**Important:** For the `EMAIL_PASSWORD`, if your Gmail account has 2-Factor Authentication enabled, you'll need to create an "App Password" instead of using your regular password.

### **4. Start the development server:**  

```bash
npm run dev
```

For production:  

```bash
npm start
```

The server will start at `http://localhost:3000` (or the port specified in `.env`).

---

## **API Endpoints**  

### **Authentication**  

- `POST /api/v1/auth/sign-up`: Register a new user.  
- `POST /api/v1/auth/sign-in`: Log in an existing user.  
- `POST /api/v1/auth/sign-out`: Log out a user (not yet implemented).  

### **Users**  

- `GET /api/v1/users`: Get all users (requires authentication).  
- `GET /api/v1/users/:id`: Get a specific user by ID (requires authentication).  

### **Subscriptions**  

- `GET /api/v1/subscription`: Returns a simple message.  
- `GET /api/v1/subscription/:id`: Get a user's subscriptions by user ID (requires authentication).  
- `POST /api/v1/subscription`: Create a new subscription (requires authentication).  
- `PUT /api/v1/subscription/:id`: Update a subscription (not implemented).  
- `DELETE /api/v1/subscription/:id`: Delete a subscription (not implemented).  
- `PUT /api/v1/subscription/:id/cancel`: Cancel a subscription (not implemented).  
- `GET /api/v1/subscription/upcoming-renewals`: Get upcoming subscription renewals (not implemented).  

### **Workflows**  

- `POST /api/v1/workflows/subscription/reminder`: Endpoint triggered by Upstash Workflow (not to be called manually).  

---

## **Authentication**  

Include the JWT in the `Authorization` header:

```
Authorization: Bearer <your_jwt_token>
```

---

## **Error Handling**  

Example error response:

```json
{
  "success": false,
  "error": "Error message"
}
```

### **Common Error Status Codes**  

- **400**: Bad Request  
- **401**: Unauthorized  
- **403**: Forbidden  
- **404**: Not Found  
- **409**: Conflict  
- **429**: Too Many Requests  
- **500**: Internal Server Error  

---
