module.exports = app => {
  const appcrud = require("../controllers/appcontroller.js");

  var router = require("express").Router();

  // Create a new Tutorial
  router.post("/", appcrud.create);

  // Retrieve all Tutorials
  router.get("/", appcrud.findAll);

  // Retrieve all published Tutorials
  router.get("/published", appcrud.findAllPublished);

  // Retrieve a single Tutorial with id
  router.get("/:id", appcrud.findOne);

  // Update a Tutorial with id
  router.put("/:id", appcrud.update);

  // Delete a Tutorial with id
  router.delete("/:id", appcrud.delete);

  // Create a new Tutorial
  router.delete("/", appcrud.deleteAll);

  app.use("/api/appcrud", router);
};
