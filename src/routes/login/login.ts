import {loginUser} from '../../helpers';
import express = require('express');
const router = express.Router();

router.post('/', loginUser);

export default router;