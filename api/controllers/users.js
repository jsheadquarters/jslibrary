const db = require("../models");

module.exports = {
  "index": function (req, res) {
    db.User.find({}, (err, users) => {
      if (err) {
        console.error(req, err);
        return res.status(500).json(err);
      }
      res.json({"users": users});
    });
  },
  "show": function (req, res) {
    db.User.findById(req.params.id, (err, user) => {
      if (err) {
        console.error(req, err);
        return res.status(500).json(err);
      }
      res.json({"user": user});
    });
  },
  "create": function (req, res) {
    // validation?!
    db.User.create(req.body, (err, user) => {
      if (err) {
        console.error(req, err);
        return res.status(500).json(err);
      }
      console.log(`Created new user ${user.name}`);
      res.json(user);
    });
  },
  "destroy": function (req, res) {
    const {"params": {id}} = req;
    db.User.findOneAndRemove({_id: id}, (err) => {
      if (err) {
        console.error(req, err);
        return res.status(500).json(err);
      }
      res.send(`Successfully deleted user ${id}.`);
    });
  },
  "nuke": function (req, res) {
    db.User.deleteMany({}, (err) => {
      if (err) {
        console.error(req, err);
        return res.status(500).json(err);
      }
      console.log("Nuked all users.");
      res.json("nuked all users");
    });
  }
};
