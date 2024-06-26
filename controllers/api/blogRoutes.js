const router = require('express').Router();
const { Blog } = require('../../models');
const withAuth = require('../../utils/auth');

//user can only create a blog after they are logged in. 
router.post('/', withAuth, async (req, res) => {
  try {
    const newBlog = await Blog.create({
      ...req.body,
      //requires to see what user is logged in , whose session is running
      user_id: req.session.user_id,
    
    });

    res.status(200).json(newBlog);
    
  } catch (err) {
    res.status(400).json(err);
  }
});
// can only delete their own blog after they are logged in 
router.delete('/:id', withAuth, async (req, res) => {
  try {
    const blogData = await Blog.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!blogData) {
      res.status(404).json({ message: 'No Blog found with this id!' });
      return;
    }

    res.status(200).json(blogData);
  } catch (err) {
    res.status(500).json(err);
  }
});



module.exports = router;
