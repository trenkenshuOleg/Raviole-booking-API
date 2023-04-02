import {getClientById, editClient} from '../../helpers';
import express = require('express');
const router = express.Router();

router.get(`/:id`, getClientById);
router.patch('/edit', editClient);

export default router;