import { Router } from 'express'
import { verificateUser, verificateAccess } from '../controllers/user.controller';

const router = Router()

router.post('/api/verificateUser', verificateUser);
router.post('/api/verificateAccess', verificateAccess);

export default router