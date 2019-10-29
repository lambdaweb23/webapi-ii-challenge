const express = require('express');
const db = require('../data/db.js');

const router = express.Router();

router.get('/', (req, res) => {
     db.find()
          .then(posts => res.status(200).json(posts))
          .catch(err => {
               console.log(err);
               res.status(500).json({error: 'The posts information could not be retrieved. '})
          });
});

router.get('/:id', (req, res) => {
     const { id } = req.params;
     db.findById(id)
          .then(posts => {
               const [post] = posts;
               console.log(post);
               if (post) {
                    res.status(200).json(post);
               } else {
                    res.status(404).json({error: `This post id:${id} does not exist`})
               }
          });
});

module.exports = router;