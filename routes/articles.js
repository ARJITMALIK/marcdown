const express = require("express")
const router = express.Router()

router.get('/', (req, res) => {
  res.send("Woooh, IM in articles already!!")
})

module.exports = router