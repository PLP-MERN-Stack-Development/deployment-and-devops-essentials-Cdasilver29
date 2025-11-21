const Post = require('../models/Post');
const { validatePost } = require('../utils/validation');

// Get all posts with pagination and filtering
exports.getAllPosts = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;

    // Build query
    let query = {};
    
    // Filter by category
    if (req.query.category) {
      query.category = req.query.category;
    }
    
    // Filter by status
    if (req.query.status) {
      query.status = req.query.status;
    }
    
    // Search functionality
    if (req.query.search) {
      query.$text = { $search: req.query.search };
    }

    const posts = await Post.find(query)
      .populate('category', 'name slug')
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit);

    const total = await Post.countDocuments(query);

    res.json({
      success: true,
      data: posts,
      pagination: {
        currentPage: page,
        totalPages: Math.ceil(total / limit),
        totalPosts: total,
        limit
      }
    });
  } catch (error) {
    res.status(500).json({ 
      success: false, 
      message: 'Error fetching posts', 
      error: error.message 
    });
  }
};

// Get single post
exports.getPostById = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id)
      .populate('category', 'name slug description');
    
    if (!post) {
      return res.status(404).json({ 
        success: false, 
        message: 'Post not found' 
      });
    }

    res.json({ success: true, data: post });
  } catch (error) {
    res.status(500).json({ 
      success: false, 
      message: 'Error fetching post', 
      error: error.message 
    });
  }
};

// Create post
exports.createPost = async (req, res) => {
  try {
    // Validate input
    const { error } = validatePost(req.body);
    if (error) {
      return res.status(400).json({ 
        success: false, 
        message: error.details[0].message 
      });
    }

    const post = await Post.create(req.body);
    const populatedPost = await Post.findById(post._id)
      .populate('category', 'name slug');

    res.status(201).json({ 
      success: true, 
      data: populatedPost,
      message: 'Post created successfully'
    });
  } catch (error) {
    res.status(500).json({ 
      success: false, 
      message: 'Error creating post', 
      error: error.message 
    });
  }
};

// Update post
exports.updatePost = async (req, res) => {
  try {
    // Validate input
    const { error } = validatePost(req.body);
    if (error) {
      return res.status(400).json({ 
        success: false, 
        message: error.details[0].message 
      });
    }

    const post = await Post.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    ).populate('category', 'name slug');

    if (!post) {
      return res.status(404).json({ 
        success: false, 
        message: 'Post not found' 
      });
    }

    res.json({ 
      success: true, 
      data: post,
      message: 'Post updated successfully'
    });
  } catch (error) {
    res.status(500).json({ 
      success: false, 
      message: 'Error updating post', 
      error: error.message 
    });
  }
};

// Delete post
exports.deletePost = async (req, res) => {
  try {
    const post = await Post.findByIdAndDelete(req.params.id);

    if (!post) {
      return res.status(404).json({ 
        success: false, 
        message: 'Post not found' 
      });
    }

    res.json({ 
      success: true, 
      message: 'Post deleted successfully' 
    });
  } catch (error) {
    res.status(500).json({ 
      success: false, 
      message: 'Error deleting post', 
      error: error.message 
    });
  }
};

// Add comment to post
exports.addComment = async (req, res) => {
  try {
    const { author, content } = req.body;
    
    if (!author || !content) {
      return res.status(400).json({ 
        success: false, 
        message: 'Author and content are required' 
      });
    }

    const post = await Post.findById(req.params.id);
    
    if (!post) {
      return res.status(404).json({ 
        success: false, 
        message: 'Post not found' 
      });
    }

    post.comments.push({ author, content });
    await post.save();

    res.json({ 
      success: true, 
      data: post,
      message: 'Comment added successfully'
    });
  } catch (error) {
    res.status(500).json({ 
      success: false, 
      message: 'Error adding comment', 
      error: error.message 
    });
  }
};
