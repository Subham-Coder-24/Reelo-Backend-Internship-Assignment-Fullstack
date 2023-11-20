# Reelo-Backend-Internship-Assignment-Fullstack
# Reelo Internship Assignment

This repository contains the code for the Reelo Internship Assignment. The assignment consists of a frontend application and a backend server.

## Live Demo

- [Live Demo](https://655b93c34cc967009304bff4--cool-smakager-a5b500.netlify.app/)

## Backend

- [GitHub Repository](https://github.com/Subham-Coder-24/Reelo-Backend-Internship-Assignment-Backend)
- [Backend API](https://reelo-backend-internship-assignment-backend.vercel.app/)

### API Endpoints

1. **Get Question Paper of 100 marks**
   - Endpoint: `https://reelo-backend-internship-assignment-backend.vercel.app/paper?easy=20&medium=30&hard=50`
   
2. **Get all questions (GET Request)**
   - Endpoint: `https://reelo-backend-internship-assignment-backend.vercel.app/questions`
   
3. **Create Questions (POST Request)**
   - Endpoint: `https://reelo-backend-internship-assignment-backend.vercel.app/question`
   - Sample JSON:
     ```json
     {
         "question": "what is life",
         "subject": "Synaptic Mechanisms",
         "topic": "Neurobiology",
         "difficulty": "Hard",
         "marks": "1"
     }
     ```
Brief description of your project.

## Test Cases

### Test Case 1

- Easy: 20
- Medium: 30
- Hard: 50

### Test Case 2

- Easy: 19
- Medium: 31
- Hard: 50

## Running the Application

### Frontend

1. Navigate to the client directory:
   ```bash
    cd client
    npm run dev
3. Navigate to the server directory:
    ```bash
    cd server
    npm run dev
