# Photo Store React Application

This is a simple photo store application built with React. It allows users to search for photos and display them in a gallery.

## Installation

To install the dependencies, run:

```
npm install
```

## Usage

To run the application, run:

```
npm start
```

This will start the development server and open the application in your default browser.

## Docker

To run the application using Docker, first build the Docker image:

```
docker build -t photo-store .
```

Then, run the Docker container:

```
docker run -p 3000:3000 photo-store
```

This will start the application in a Docker container and make it available at `http://localhost:3000`.

## File Structure

- `App.jsx`: The main component that renders the application.
- `PhotoGallery.jsx`: A component that displays a gallery of photos.
- `Photo.jsx`: A component that displays a single photo.
- `SearchBar.jsx`: A component that allows users to search for photos.
- `Dockerfile`: A file that contains instructions for building a Docker image of the application.