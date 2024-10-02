// IMPORTING THE ROUTER CLASS AND THE ROUTE MODULES
const router = require('express').Router();
const categoryRoutes = require('./category-routes');
const productRoutes = require('./product-routes');
const tagRoutes = require('./tag-routes');

// MOUNTING THE ROUTES TO THE CORRESPONDING PATHS. I.E. ANY REQUESTS TO /CATEGORIES WILL BE HANDLED BY THE CATEGORY ROUTE
router.use('/categories', categoryRoutes)
router.use('/products' productRoutes)
router.use('/tags', tagRoutes);

// EXPORTING THE ROUTER
module.exports = router;