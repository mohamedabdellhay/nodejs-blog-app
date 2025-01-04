# Node.js Blog Application

A simple and scalable blog application built with Node.js, Express, and MongoDB. This project allows users to create, read, update, and delete blog posts.

## Features

- **Create Blog Posts**: Users can create new blog posts with a title, content, and author.
- **Read Blog Posts**: Users can view all blog posts or a single post by its ID.
- **Update Blog Posts**: Users can update existing blog posts.
- **Delete Blog Posts**: Users can delete blog posts.
- **MongoDB Database**: Blog posts are stored in a MongoDB database for persistence.
- **RESTful API**: The application provides a RESTful API for managing blog posts.

## Technologies Used

- **Node.js**: A JavaScript runtime built on Chrome's V8 JavaScript engine.
- **Express**: A fast, unopinionated, minimalist web framework for Node.js.
- **MongoDB**: A NoSQL database used to store blog posts.
- **Mongoose**: An ODM (Object Data Modeling) library for MongoDB and Node.js.
- **Postman**: Used for testing the API endpoints.

## Installation

Follow these steps to set up the project locally:

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/mohamedabdellhay/nodejs-blog-app.git
   cd nodejs-blog-app
   ```

2. **Install Dependencies**:

   ```bash
   npm install
   ```

3. **Set Up MongoDB**:

   - Make sure you have MongoDB installed and running locally or provide a connection string to a remote MongoDB instance.
   - Create a `.env` file in the root directory and add your MongoDB connection string:
     ```env
     MONGO_URI=mongodb://localhost:27017/blog-app
     ```

4. **Run the Application**:
   ```bash
   npm start
   ```
   The application will start running on `http://localhost:3000`.

## API Endpoints

| HTTP Method | Endpoint         | Description                         |
| ----------- | ---------------- | ----------------------------------- |
| GET         | `/api/posts`     | Get all blog posts.                 |
| GET         | `/api/posts/:id` | Get a single blog post by ID.       |
| POST        | `/api/posts`     | Create a new blog post.             |
| PUT         | `/api/posts/:id` | Update an existing blog post by ID. |
| DELETE      | `/api/posts/:id` | Delete a blog post by ID.           |

## Example Requests

### Create a New Blog Post

```bash
curl -X POST http://localhost:3000/api/posts \
-H "Content-Type: application/json" \
-d '{
  "title": "My First Blog Post",
  "content": "This is the content of my first blog post.",
  "author": "Mohamed Abdelhay"
}'
```

### Get All Blog Posts

```bash
curl -X GET http://localhost:3000/api/posts
```

### Get a Single Blog Post by ID

```bash
curl -X GET http://localhost:3000/api/posts/<post_id>
```

### Update a Blog Post by ID

```bash
curl -X PUT http://localhost:3000/api/posts/<post_id> \
-H "Content-Type: application/json" \
-d '{
  "title": "Updated Blog Post Title",
  "content": "This is the updated content."
}'
```

### Delete a Blog Post by ID

```bash
curl -X DELETE http://localhost:3000/api/posts/<post_id>
```

## Contributing

Contributions are welcome! If you'd like to contribute to this project, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bugfix.
3. Commit your changes.
4. Push your branch to your forked repository.
5. Submit a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact

If you have any questions or suggestions, feel free to reach out:

- **Name**: Mohamed Abdelhay
- **GitHub**: [mohamedabdellhay](mailto:mohamedabdellhay1@gmail.com)
