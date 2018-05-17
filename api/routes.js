const controllers = require("./controllers");
const router = require("express").Router();

const {users} = controllers;
router.route("/users")
  .get(users.index)
  .post(users.create);

router.route("/users/:id")
  .get(users.show)
  .delete(users.destroy);

router.route("/nuke")
  .get(users.nuke);

module.exports = router;
