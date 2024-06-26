const router = require('express').Router();
const { Comment } = require('../../models');
const withAuth = require('../../utils/auth');

//just to test if already created comments show up or not
router.get('/', async (req, res) => {
    Comment.findAll({})
    .then(commentData => res.json(commentData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err)
    });
});

router.get('/:id', (req, res) => {
    Comment.findAll({
            where: {
                id: req.params.id
            }
        })
        .then(commentData => res.json(commentData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        })
});

//to post new comment 
router.post('/', async (req, res) =>{
try{
    const newComment = await Comment.create({
        ...req.body,
        user_id: req.session.user_id,
    });
    res.json(newComment);
} catch (err){
    res.status(500).json(err);
}
});

//can only delete after they are logged in
router.delete('/:id', withAuth, async (req, res) => {
  try {
    const commentData = await Comment.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!commentData) {
      res.status(404).json({ message: 'No Blog found with this id!' });
      return;
    }

    res.status(200).json(commentData);
  } catch (err) {
    res.status(500).json(err);
  }
});



module.exports = router;