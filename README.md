# Talkify

**Talkify** is a real-time chat application that allows users to communicate with each other in a seamless and intuitive manner. The app provides a platform for private messaging within a secure and user-friendly interface.

## Features

- **Real-time Messaging**: Instant communication with friends.
- **User Authentication**: Secure login and signup with JWT authentication.
- **Responsive Design**: Optimized for both desktop and mobile devices.
- **Online status**: Display online status of the every users

## Installation

To run Talkify locally, follow these steps:

1. **Clone the Repository**:

   git clone https://github.com/binuri-mindula/chatapp.git

2. **Navigate to the Project Directory**:
   cd Chatapp
3. **Install Dependencies:**
   npm install
4. **Set Up Environment Variables:**
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   PORT=your_port
5. **Run the Application:**
   npm run server

## Usage
- Sign Up: Create a new account using your email and a secure password.
- Login: Access your account by logging in with your credentials.
- Start Chatting: Search for friends or join group chats to start messaging.

## Technologies Used

**Frontend:**

- React
- Tailwind CSS
- React Router DOM
- Socket.IO Client

**Backend:**

- Node.js
- Express
- MongoDB
- Socket.IO
- bcryptjs for password hashing
- JSON Web Tokens (JWT) for authentication





