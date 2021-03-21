const { Comment } = require('../models');

const commentData = [
    {
        user_id: 1,
        post_id: 5,
        comment_text: "Let our advance worrying become advance thinking and planning."
    },
    {
        user_id: 4,
        post_id: 4,
        comment_text: "It's a bad plan that admits of no modification."
    },
    {
        user_id: 1,
        post_id: 4,
        comment_text: "Plans are worthless. Planning is essential." 
    },
    {
        user_id: 3,
        post_id: 5,
        comment_text: "Management is doing things right; leadership is doing the right things." 
    },
    {
        user_id: 3,
        post_id: 2,
        comment_text: "The key to successful leadership today is influence not authority."
    },
    {
        user_id: 3,
        post_id: 4,
        comment_text: "This is one of our biggest and the most awaited feature. Keep up the good work!"
    },
    {
        user_id: 5,
        post_id: 3,
        comment_text: "Inventories can be managed but people must be lead."
    },
    {
        user_id: 2,
        post_id: 1,
        comment_text: "The single biggest problem in communication is the illusion that it has taken place."
    }
]

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;