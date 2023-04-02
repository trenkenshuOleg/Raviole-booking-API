import {updateFavourites} from '../../helpers';
import express = require('express');
const router = express.Router();

router.delete('/:clientId/:cafeId', updateFavourites);
router.post('/:clientId/:cafeId', updateFavourites);

export default router;