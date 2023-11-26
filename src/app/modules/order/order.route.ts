import express from 'express';

import { OrderCOntroller } from './order.controller';

const router = express.Router();

router.post('/create-order', OrderCOntroller.createOrder);
router.post('/', OrderCOntroller.getAllOrders);

export const OrderRoutes = router;
