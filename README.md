### README.md

# TopShelfRE

Thank you for considering my application and the opportunity to take this assessment.

## How to Use

You can set up and run the project with the following steps:

### 1. Clone and Install

Clone the repository and install dependencies:

```sh
git clone <repository-url>
cd topshelfre
npm install
```

### 2. Set Environment Variables

Create a `.env` file in the root directory:

```dotenv
PORT=4000
```

### 3. Run the Server

Start the server:

```sh
npm start
```

Access the API at `http://localhost:4000`.

### 4. Run Tests

Execute tests with:

```sh
npm test
```

## Project Structure

- **controllers/**: Contains the logic for CRUD operations.
- **routes/**: Defines the API routes.
- **tests/**: Contains the test cases.
- **constants/**: Holds initial data.
- **server.js**: Configures and starts the server.

## Summary

- **CRUD API**: For managing books.
- **Initial Data**: Located in `constants/booksData.js`.
- **Testing**: Implemented with Jest and Supertest.


Note I briefly considered using Next.js 14 for this project, but I didn't want to overcomplicate things. Instead, I focused on setting up a clean, maintainable structure.


Thank you for reviewing my project. I look forward to discussing it further.
