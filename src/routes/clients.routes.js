import { Router } from 'express'

import { getClients, createClient, getClient, getClientCIF, editClient, removeClient } from '../controllers/clients.controller';

const authAdmin = require("../middleware/auth");

const router = Router()

router.get('/api/clients', authAdmin, getClients);
router.get('/api/clientsCIF', authAdmin, getClientCIF);
router.post('/api/createClient', authAdmin, createClient);
router.get('/api/client/:id', authAdmin, getClient);
router.put('/api/editClient/:id', authAdmin, editClient);
router.delete('/api/removeClient/:id', authAdmin, removeClient);

export default router