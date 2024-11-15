# MERN Stack Application

This project is a MERN (MongoDB, Express.js, React.js, Node.js) stack application developed as part of a tutorial by freeCodeCamp. It demonstrates how to build and deploy a full-stack JavaScript application using modern web development technologies.

## Features

- **Frontend**: Built with React.js for a dynamic and responsive user interface.
- **Backend**: Developed using Node.js and Express.js to handle server-side logic and API endpoints.
- **Database**: Utilizes MongoDB for data storage and management.
- **Deployment**: Includes configurations for deploying to a production environment.

## Installation and Setup

### Prerequisites
- [Node.js](https://nodejs.org/) installed on your system
- [MongoDB](https://www.mongodb.com/) for the database
- [Git](https://git-scm.com/) for version control

### Step 1: Clone the Repository
Clone this repository to your local machine:
```bash
git clone https://github.com/tuanlong1106/MERN-Stack.git
cd MERN-Stack
```

### Step 2: Install Backend Dependencies
Navigate to the `backend` directory and install the required packages:
```bash
cd backend
npm install
```

### Step 3: Install Frontend Dependencies
Navigate to the `frontend` directory and install the required packages:
```bash
cd ../frontend
npm install
```

### Step 4: Configure Environment Variables
Create a `.env` file in the `backend` directory to store environment variables such as the MongoDB connection string and API keys. Example:
```env
MONGO_URI=your-mongodb-connection-string
PORT=5000
```

### Step 5: Run the Application
Start both the backend and frontend servers:

- **Backend**:
  ```bash
  cd ../backend
  npm start
  ```

- **Frontend**:
  ```bash
  cd ../frontend
  npm start
  ```

## Accessing the Application
Once both servers are running, you can access the application in your web browser at:
```
http://localhost:3000
```

## Tutorial Source
This project is based on the MERN Stack tutorial by freeCodeCamp:
[Learn the MERN Stack - Full Tutorial (MongoDB, Express, React, Node.js)](https://www.youtube.com/watch?v=7CqJlxBYj-M)

## Contributing
Contributions are welcome! Feel free to fork the repository and submit a pull request with your changes.

## License
This project is licensed under the MIT License.

---

Happy coding!
