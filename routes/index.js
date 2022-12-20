const express = require('express');


const router = express.Router();

const homeController = require('../controller/home_controller');
const app = express();
console.log('Router Loaded');

router.get('/', homeController.home);
router.post('/create-task', homeController.create);
router.get('/delete-task', homeController.delete);
module.exports = router;