const Post = require("../models/post.model");

const likePost = async (req, res) => {
  try {
    const postId = req.params.postId;
    const userId = req.body.userId;

    if (!userId) {
      return res.status(400).json({
        success: false,
        message: "User id is required",
      });
    }

    const post = await Post.findById(postId);

    if (!post) {
      return res.status(404).json({
        success: false,
        message: "Post not found",
      });
    }

    if (post.likes.includes(userId)) {
      return res.status(400).json({
        success: false,
        message: "You have already liked this post",
      });
    }

    post.likes.push(userId);
    await post.save();

    return res.status(200).json({
      success: true,
      message: "Post liked successfully",
      totalLikes: post.likes.length,
    });
  } catch (error) {
    console.error(error);
  }
};

module.exports = likePost;
