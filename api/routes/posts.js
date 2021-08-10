const router = require('express').Router();
const User = require('../models/User');
const Post = require('../models/Post');

// Create Post
router.post('/', async (req, res) => {
  const newPost = new Post(req.body);
  try {
    const savedPost = await newPost.save();
    res.status(200).json(savedPost);
  } catch (error) {
    res.status(500).json(error);
  }
});

// Update Post
router.delete('/:id', async (req, res) => {
  
});

// Delete Post

// Get Post
router.get('/:id', async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    const { password, ...others } = user._doc;
    res.status(200).json(others);
  } catch (error) {
    res.status(500).json(500);
  }
});

module.exports = router;
