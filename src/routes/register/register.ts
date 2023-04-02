import {registerUser} from '../../helpers';
import express = require('express');
const router = express.Router();

router.post('/', registerUser);

export default router;