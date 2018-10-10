const Article = require('../models/Question')

module.exports = {
  question: (req, res, next) => {
    Article.findById(req.params.id)
      .then(article => {
        if (article.user == req.decoded.id) {
          next()
        } else {
          res.status(401).json({error: 'You are not allowed to access this question!'})
        }
      })
      .catch(err => {
        res.status(500).json({error: err.message})
      })
  }
}