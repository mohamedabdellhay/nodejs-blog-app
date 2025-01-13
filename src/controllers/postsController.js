const Post = require("../models/postModel");

// create a post
const createPost = async (req, res) => {
  try {
    const { title, content, author, tags, isPublished } = req.body;

    const postImageDesktop = req.files["postImageDesktop"][0].path;
    const postImageMobile = req.files["postImageMobile"][0].path;

    const post = new Post({
      title,
      content,
      author,
      postImageDesktop,
      postImageMobile,
      tags: tags ? tags.split(",") : [],
      isPublished: isPublished || false,
    });

    await post.save();
    res.status(201).json(post);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// get all posts
const getAllPosts = async (req, res) => {
  try {
    const searchBy = req.query.sort;
    if (!searchBy) {
      const posts = await Post.find({}, { _id: 0, __v: 0 }); // exclude _id and __v
      if (posts.length === 0) {
        return res.json({ message: "No posts found" });
      }
      res.json(posts);
    } else if (searchBy === "createdAt") {
      return getAllPostsSortedByCreatedAt(req, res);
    } else if (searchBy === "updatedAt") {
      return getAllPostsSortedByUpdatedAt(req, res);
    } else if (searchBy === "author") {
      return getAllPostsSortedByAuthor(req, res);
    }
  } catch (err) {
    res.json({ message: err });
  }
};

// get all posts sorted by createdAt
const getAllPostsSortedByCreatedAt = async (req, res) => {
  try {
    const searchBy = req.query.sort;
    console.log(req.query);
    console.log(searchBy);
    const posts = await Post.find({}, { _id: 0, __v: 0 }).sort({
      createdAt: -1,
    });
    if (posts.length === 0) {
      return res.json({ message: "No posts found" });
    }
    res.json(posts);
  } catch (err) {
    res.json({ message: err });
  }
};

// get all posts sorted by updatedAt

const getAllPostsSortedByUpdatedAt = async (req, res) => {
  try {
    const posts = await Post.find({}, { _id: 0, __v: 0 }).sort({
      updatedAt: -1,
    });
    if (posts.length === 0) {
      return res.json({ message: "No posts found" });
    }
    res.json(posts);
  } catch (err) {
    res.json({ message: err });
  }
};

// get all posts sorted by author
const getAllPostsSortedByAuthor = async (req, res) => {
  try {
    const posts = await Post.find({}, { _id: 0, __v: 0 }).sort({ author: 1 });
    if (posts.length === 0) {
      return res.json({ message: "No posts found" });
    }
    res.json(posts);
  } catch (err) {
    res.json({ message: err });
  }
};

// get all posts by author
const getAllPostsByAuthor = async (req, res) => {
  try {
    const posts = await Post.find(
      { author: req.params.author },
      { _id: 0, __v: 0 }
    );
    if (posts.length === 0) {
      return res.json({ message: "No posts found" });
    }
    res.json(posts);
  } catch (err) {
    res.json({ message: err });
  }
};

//get a post by id
const getPostById = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id, { _id: 0, __v: 0 });
    if (!post) {
      return res.json({ message: "Post not found" });
    }
    res.json(post);
  } catch (err) {
    res.json({ message: err });
  }
};

// update a post by id
const updatePostById = async (req, res) => {
  try {
    const updatedPost = await Post.findByIdAndUpdate(
      req.params.id,
      {
        title: req.body.title,
        content: req.body.content,
      },
      { new: true }
    );
    if (!updatedPost) {
      return res.json({ message: "Post not found" });
    }
    res.json(updatedPost);
  } catch (err) {
    res.json({ message: err });
  }
};

// delete a post by id
const deletePostById = async (req, res) => {
  try {
    const deletedPost = await Post.findByIdAndDelete(req.params.id);
    if (!deletedPost) {
      return res.json({ message: "Post not found" });
    }
    res.json(deletedPost);
  } catch (err) {
    res.json({ message: err });
  }
};

// export the model
module.exports = {
  createPost,
  getAllPosts,
  getAllPostsByAuthor,
  getPostById,
  updatePostById,
  deletePostById,
};
