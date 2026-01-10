# Express Server

This project is a simple Express server that listens on port 8001. It is set up for automatic code reloading using `nodemon` and can be run in a Docker container.

### Installation

1. Clone the repository:

   ```
   git clone https://github.com/Wilcolab/Anythink-Market-rxs4uzls.git
   cd Anythink-Market-rxs4uzls/express-server
   ```

2. Install dependencies:

   Using npm:
   ```
   npm install
   ```

   Or using Yarn:
   ```
   yarn install
   ```

### Running the Server

To start the server with automatic reloading, use:

```
yarn start
```

The server will be running at `http://localhost:8001`.

### Building the Docker Image

To build the Docker image, run:

```
docker build -t express-server .
```

### Running the Docker Container

To run the Docker container, use:

```
docker run -p 8001:8001 express-server
```

The server will be accessible at `http://localhost:8001`.

### License

This project is licensed under the MIT License.