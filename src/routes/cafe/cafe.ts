import {createCafe, getCafeById, getCafeFiltered, getByCity} from '../../helpers';
import express = require('express');
const router = express.Router();

router.post('/new', createCafe);
router.get('/:id', getCafeById);
router.get('/', getCafeFiltered);
router.get('/city/:city', getByCity);

export default router;