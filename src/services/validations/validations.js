const { newError } = require('./newError');

const validatePostUser = (post, { id }) => {
  if (post.userId !== id) {
    newError('Unauthorized', 'Unauthorized user');
  }

  if (!post) {
    newError('Not Found', 'Post does not exist');
  }
};

module.exports = {
  validatePostUser,
};