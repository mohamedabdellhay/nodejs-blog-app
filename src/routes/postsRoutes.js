const {
  createPost,
  getAllPosts,
  // getAllPostsSortedByCreatedAt,
  // getAllPostsSortedByUpdatedAt,
  // getAllPostsSortedByAuthor,
  getAllPostsByAuthor,
  getPostById,
  updatePostById,
  deletePostById,
} = require("../controllers/postsController");
const express = require("express");
const router = express.Router();
// create a post
router.post("/", createPost);
// get all posts
router.get("/", getAllPosts);
// get all posts sorted by createdAt
// router.get("/createdAt", getAllPostsSortedByCreatedAt);
// get all posts sorted by updatedAt
// router.get("/updatedAt", getAllPostsSortedByUpdatedAt);
// get all posts sorted by author
// router.get("/author", getAllPostsSortedByAuthor);
// get all posts by author
router.get("/author/:author", getAllPostsByAuthor);
// get a post by id
router.get("/:id", getPostById);
// update a post by id
router.put("/:id", updatePostById);
// delete a post by id
router.delete("/:id", deletePostById);
module.exports = router;
