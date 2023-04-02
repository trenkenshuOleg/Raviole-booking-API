import {createReview, updateReview} from '../../helpers';
import express = require('express');
const router = express.Router();

router.post('/', createReview);
router.patch('/', updateReview);
router.delete('/:clientId/:id', updateReview);

export default router;