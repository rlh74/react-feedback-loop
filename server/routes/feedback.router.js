const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

router.get('/', (req, res) => {
    console.log('GET /feedback');
    pool.query('SELECT * FROM "feedback";').then((result)=>{
      res.send(result.rows);
  }).catch((error)=>{
    console.log('error in GET /feedback', error)
    res.sendStatus(500);
  });
})
router.post('/', (req, res)=>{
  console.log('in POST:', req.body);
  let queryString = `INSERT INTO "feedback" ("feeling", "understanding", "support", "comments")
  VALUES ($1, $2, $3, $4);`;
  pool.query(queryString, [req.body.feeling, req.body.understanding, req.body.support, req.body.comments]).then((result)=>{
      res.sendStatus(201);
  }).catch((err)=>{
      console.log(err);
      res.sendStatus(500);
  })
})

// INSERT INTO "feedback" ("feeling", "understanding", "support", "comments")
//VALUES ($1, $2, $3, $4);


module.exports = router;