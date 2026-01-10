# Express Server

This project is a Node.js Express server that has been migrated from a Python FastAPI implementation. The server listens on port 8001 and provides a simple task management API.

## Features

- RESTful API with three endpoints:
  - `GET /` - Returns a "Hello World" message
  - `GET /tasks` - Retrieves all tasks
  - `POST /tasks` - Adds a new task
- Automatic code reloading using `nodemon` for development
- Docker support for containerized deployment
- Runs on port 8001

## Prerequisites

- Node.js (v14 or higher recommended)
- npm or Yarn package manager
- Docker (optional, for containerized deployment)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Wilcolab/Anythink-Market-rxs4uzls.git
   cd Anythink-Market-rxs4uzls/express-server
   ```

2. Install dependencies:

   Using npm:
   ```bash
   npm install
   ```

   Or using Yarn:
   ```bash
   yarn install
   ```

## Running the Server

To start the server with automatic reloading on code changes, use:

```bash
yarn start
```

The server will be running at `http://localhost:8001`.

### API Endpoints

Once the server is running, you can interact with the following endpoints:

- **GET /** - Returns "Hello World"
  ```bash
  curl http://localhost:8001/
  ```

- **GET /tasks** - Returns all tasks
  ```bash
  curl http://localhost:8001/tasks
  ```

- **POST /tasks** - Add a new task
  ```bash
  curl -X POST http://localhost:8001/tasks \
    -H "Content-Type: application/json" \
    -d '{"text": "Your new task here"}'
  ```

## Docker Deployment

### Building the Docker Image

To build the Docker image, run:

```bash
docker build -t express-server .
```

### Running the Docker Container

To run the Docker container, use:

```bash
docker run -p 8001:8001 express-server
```

The server will be accessible at `http://localhost:8001`.

### Running with Docker Compose

If you want to run both the Python server (port 8000) and Node server (port 8001) together:

```bash
cd ..
docker compose up
```

## Migration from Python FastAPI

This Express server is a direct migration from the original Python FastAPI implementation. Key differences include:

- **Language**: JavaScript (Node.js) instead of Python
- **Framework**: Express.js instead of FastAPI
- **Port**: Both servers run on port 8001, but the Python server runs on port 8000
- **Auto-reload**: Uses `nodemon` instead of `uvicorn --reload`
- **Functionality**: All endpoints maintain the same behavior and response format

The migration maintains API compatibility, so clients can interact with the Node.js server using the same requests they used with the Python server.

## Development

The project uses `nodemon` to automatically restart the server when code changes are detected. This is particularly useful during development. Simply modify any file in the `src/` directory, and the server will reload automatically.

## License

This project is licensed under the ISC License.
```

This updated README provides comprehensive information about:
- The Node.js server running on port 8001
- Clear setup and installation instructions
- API endpoint documentation with curl examples
- Docker deployment options
- Migration details from the Python FastAPI server
- Development workflow with nodemonThis updated README provides comprehensive information about:
- The Node.js server running on port 8001
- Clear setup and installation instructions
- API endpoint documentation with curl examples
- Docker deployment options
- Migration details from the Python FastAPI server
- Development workflow with nodemon