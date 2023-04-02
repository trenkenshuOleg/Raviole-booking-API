import {createBooking, updateBooking} from '../../helpers';
import express = require('express');
const router = express.Router();

router.post('/', createBooking);
router.patch('/', updateBooking);
router.delete('/:clientId/:id', updateBooking);

export default router;