const express = require ('express');
const Post = require('../models/Post');
const router = express.Router();


router.get("/",(req,res)=>{
  res.send('we are on post')
})

router.post("/",(req,res)=>{
  const post = new Post({
    title: req.body.title,
    description: req.body.description
  });

  post.save().then(data=>{
    res.json(data);
    console.log(data)})
    .catch(console.log)
})

module.exports = router;