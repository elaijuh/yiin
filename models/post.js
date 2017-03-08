const mongoose = require('mongoose')

const postSchema = mongoose.Schema({
    ip: String,
    user_agent: String,
    referer: String,
    post: String
},
{ timestamps: {} })

const Post = mongoose.model('Post', postSchema)

module.exports = Post

