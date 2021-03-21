const { Post } = require('../models');

const postData = [
    {
        title: "Retro Movie",
        post_content: "Try the Retro Movie Titles if you’re looking for a retro style titles. The template comes with easily editable layers and full color control that makes it easy to customize the title to match your brand.",
        user_id: 3
    },
    {
        title: "Ready Typography Scene",
        post_content: "If you’re looking for an elegant After Effects Title template, look no further than the 16 Ready Typography Scene template pack. This title pack includes 16 different title styles and a detailed help file to help you customize the project to your needs.",
        user_id: 1
    },
    {
        title: "Project-x Glitch Text Maker",
        post_content: "A glitch effect is sure to make you stand out and get your audience to pay attention to your videos. This template pack makes it easy to add your own text and it’s a perfect choice for anyone looking for a retro or a vintage effect.",
        user_id: 2

    },
    {
        title: "Liquid Animation",
        post_content: "This completely well- organized title animation opener is ideal for promoting just about anything. It contains 110 animated elements which are pre-rendered into .mov files with a JPEG + Alpha codec. It also includes 9 premade text scenes and you can easily add more.",
        user_id: 5
    },
    {
        title: "Bite the bullet",
        post_content: "In the olden days, when doctors were short on anesthesia or time during a battle, they would ask the patient to bite down on a bullet to distract from the pain.",
        user_id: 4
    }
]

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;