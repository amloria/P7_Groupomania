const Article = require("../models/Article");
const fs = require("fs");

exports.createArticle = (req, res, next) => {
  const articleObject = JSON.parse(req.body.article);
  delete articleObject._id;
  delete articleObject._userId;
  const article = new Article({
    ...articleObject,
    userId: req.auth.userId,
    imageUrl: `${req.protocol}://${req.get("host")}/images/${
      req.file.filename
    }`,
  });
  article
    .save()
    .then(() => {
      res.status(201).json({ message: "Post saved successfully!" });
    })
    .catch((error) => {
      res.status(400).json({ error });
    });
};

exports.getAllArticles = (req, res, next) => {
  Article.find()
    .then((article) => {
      res.status(200).json(article);
    })
    .catch((error) => {
      res.status(400).json({ error });
    });
};

exports.modifyArticle = (req, res, next) => {
  const articleObject = req.file
    ? {
        ...JSON.parse(req.body.article),
        imageUrl: `${req.protocol}://${req.get("host")}/images/${
          req.file.filename
        }`,
      }
    : { ...req.body };

  delete articleObject._userId;
  Article.findOne({ _id: req.params.id })
    .then((article) => {
      if (article.userId != req.auth.userId) {
        res.status(403).json({ message: "Not authorized" });
      } else {
        Article.updateOne(
          { _id: req.params.id },
          { ...articleObject, _id: req.params.id }
        )
          .then(() =>
            res.status(200).json({ message: "Updated successfully!" })
          )
          .catch((error) => res.status(401).json({ error }));
      }
    })
    .catch((error) => {
      res.status(400).json({ error });
    });
};

exports.deleteArticle = (req, res, next) => {
  Article.findOne({ _id: req.params.id })
    .then((article) => {
      if (article.userId != req.auth.userId) {
        res.status(401).json({ message: "Not authorized" });
      } else {
        const filename = article.imageUrl.split("/images/")[1];
        fs.unlink(`images/${filename}`, () => {
          Article.deleteOne({ _id: req.params.id })
            .then(() => {
              res.status(204).json({ message: "Deleted successfully!" });
            })
            .catch((error) => res.status(401).json({ error }));
        });
      }
    })
    .catch((error) => {
      res.status(500).json({ error });
    });
};

exports.likeArticle = (req, res, next) => {
  Article.findOne({ _id: req.params.id })
    .then((article) => {
      const likeStatus = req.body.like;
      switch (likeStatus) {
        case 1:
          if (
            !article.usersLiked.includes(req.body.userId) &&
            !article.usersDisliked.includes(req.body.userId)
          ) {
            // updating DB
            Article.updateOne(
              { _id: req.params.id },
              {
                $inc: { likes: 1 },
                $push: { usersLiked: req.body.userId },
              }
            )
              .then(() => {
                res.status(201).json({ message: "Like +1 !" });
              })
              .catch((error) => {
                res.status(400).json({ error });
              });
          }
          break;
        case -1:
          if (
            !article.usersDisliked.includes(req.body.userId) &&
            !article.usersLiked.includes(req.body.userId)
          ) {
            // updating DB
            Article.updateOne(
              { _id: req.params.id },
              {
                $inc: { dislikes: 1 },
                $push: { usersDisliked: req.body.userId },
              }
            )
              .then(() => {
                res.status(201).json({ message: "Like -1 !" });
              })
              .catch((error) => {
                res.status(400).json({ error });
              });
          }
          break;
        case 0:
          if (article.usersLiked.includes(req.body.userId)) {
            // updating DB
            Article.updateOne(
              { _id: req.params.id },
              {
                $inc: { likes: -1 },
                $pull: { usersLiked: req.body.userId },
              }
            )
              .then(() => {
                res.status(200).json({ message: "Like 0 !" });
              })
              .catch((error) => {
                res.status(400).json({ error });
              });
          }
          if (article.usersDisliked.includes(req.body.userId)) {
            // updating DB
            Article.updateOne(
              { _id: req.params.id },
              {
                $inc: { dislikes: -1 },
                $pull: { usersDisliked: req.body.userId },
              }
            )
              .then(() => {
                res.status(200).json({ message: "Like 0 !" });
              })
              .catch((error) => {
                res.status(400).json({ error });
              });
          }
          break;
        default:
          console.log("Default Answer !");
      }
    })
    .catch((error) => {
      res.status(400).json({ error });
    });
};