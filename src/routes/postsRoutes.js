const { upload } = require("../controllers/fileUpload");
const {
  createPost,
  getAllPosts,
  getAllPostsByAuthor,
  getPostById,
  updatePostById,
  deletePostById,
} = require("../controllers/postsController");
const express = require("express");
const router = express.Router();
// create a post
router.post(
  "/",
  upload.fields([
    { name: "postImageMobile", maxCount: 1 }, // صورة الموبايل
    { name: "postImageDesktop", maxCount: 1 }, // صورة الكمبيوتر
  ]),
  createPost
);

// get all posts
router.get("/", getAllPosts);
// get all posts sorted by author
router.get("/author/:author", getAllPostsByAuthor);
// get a post by id
router.get("/:id", getPostById);
// update a post by id
router.put("/:id", updatePostById);
// delete a post by id
router.delete("/:id", deletePostById);
module.exports = router;
