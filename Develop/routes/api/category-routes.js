const router = require("express").Router();
const { Category, Product } = require("../../models");

// The `/api/categories` endpoint
// NOTE: THE CRUD ACTIONS ARE THE SAME OR SIMILAR FOR THIS ROUTE AND THE OTHER API ROUTE FILES

router.get("/", (req, res) => {
  // find all categories
  Category.findAll({
    include: [Product], // INCLUDE ASSOCIATED PRODUCT MODEL
  })
    .then((categories) => res.json(categories)) // SENDING CATEGORIES AS JSON
    .catch((err) =>
      res
        .status(500)
        .json({ err: "an error occurred while retrieving categories" })
    );
});

router.get("/:id", (req, res) => {
  // find one category by its `id` value
  Category.findOne({
    // SEARCHES FOR A SPECIFIC CATEGORY THAT HAS A SPECIFIC ID
    where: {
      id: req.params.id, // FINDING A CATEGORY WITH AN ID THAT MATCHES THE ID IN THE URL
    },
    include: [Product], // INCLUDE ASSOCIATED PRODUCT MODEL (EAGER LOADING)
  })
    //RESULT HANDLING
    .then((category) => res.json(category)) // SENDING CATEGORIES AS JSON
    .catch((err) => res.status(500).json(err)); // ERROR HANDLING
});

router.post("/", (req, res) => {
  // create a new category
  Category.create(req.body) // USING REQ.BODY TO CREATE A NEW CATEGORY
    .then((category) => res.json(category))
    .catch((err) => res.status(400).json(err));
});

router.put("/:id", (req, res) => {
  // update a category by its `id` value
  Category.update(req.body, {
    // USING REQ.BODY TO UPDATE A CATEGORY
    where: {
      id: req.params.id, // SPECIFIES THAT THE UPDATED CATEGORY HAS AN ID THAT MATCHES THE ID IN THE URL
    },
  })
    .then((category) => res.json(category))
    .catch((err) => res.status(400).json(err));
});

router.delete("/:id", (req, res) => {
  // delete a category by its `id` value
  Category.destroy({
    where: {
      id: req.params.id, // SPECIFIES THAT THE DELETED CATEGORY HAS AN ID THAT MATCHES THE ID IN THE URL
    },
  })
    .then((category) => res.json(category))
    .catch((err) => res.status(400).json(err));
});

// NOTE THAT THE RESULT HANDLING IS THE SAME FOR EACH ROUTE AND WILL HAVE ESSENTIALLY THE SAME FUNCTIONALITY FOR THE OTHER API ROUTE FILES

// EXPORTING THE ROUTER
module.exports = router;
