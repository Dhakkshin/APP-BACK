const express = require("express");
const postsController = require("../controllers/postsController.js");
const { route } = require("./profileRoutes.js");

const {
  getPosts,
  getPostById,
  getPostByUsername,
  createPost,
  updatePost,
  deletePost,
  getPostsbyLocation
} = postsController;


const router = express.Router();

router.get("/", getPosts);
router.get("/:id", getPostById);
router.get("/:username", getPostByUsername);
router.post("/", createPost);
router.put("/:id", updatePost);
router.delete("/:id", deletePost);
router.get("/pbpos/:xpos/:ypos", getPostsbyLocation);

module.exports = router;
