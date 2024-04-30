const User = require('./User');
const Blog = require('./Blog');
const Comment = require('./Comment');

//creating relationships

//one users can have many blogs
User.hasMany(Blog, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});


//blog belong to the user
Blog.belongsTo(User, {
  foreignKey: 'user_id'
});

//blog can have many comments
Blog.hasMany(Comment, {
  foreignKey: 'blog_id'
});

//comment belongs to the user
Comment.belongsTo(User, {
  foreignKey: 'user_id'
})

module.exports = { User, Blog, Comment };
