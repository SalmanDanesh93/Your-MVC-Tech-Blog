const router = require('express').Router();
const { Comment } = require('../../models/');
const withAuth = require('../../utils/auth');

// Create Post route for users to add a comment
router.post('/', withAuth, async (req, res) => {
  try {
    // Create newComment const and sets Comment variable for when user inputs req.body
    const newComment = await Comment.create({
      ...req.body,
      userId: req.session.userId,
    });
    // Sends new comment to .json 
    res.json(newComment);
    // If error, sends status 500 error
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
