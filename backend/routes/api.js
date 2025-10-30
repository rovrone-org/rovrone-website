const express = require('express');
const router = express.Router();

const siteController = require('../controllers/siteController');
const servicesController = require('../controllers/servicesController');
const productsController = require('../controllers/productsController');
const contactController = require('../controllers/contactController');

router.get('/site', siteController.getSite);
router.get('/services', servicesController.getServices);
router.get('/products', productsController.getProducts);
router.get('/products/:id', productsController.getProduct);
router.post('/contact', contactController.postContact);
router.post('/subscribe', contactController.postSubscribe);

module.exports = router;
