const express = require('express');
const router = express.Router();
const controller = require('../controllers/partnerController');
const auth = require('../middlewares/auth');

router.get('/',controller.getAll);
router.post('/',auth,controller.createPartner);
router.delete('/:id',auth,controller.deletePartner);

module.exports = router;
