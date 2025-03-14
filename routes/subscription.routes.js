import { Router } from "express";
import authorize from "../middlewares/auth.middleware.js";
import { createSubscription, getUserSubscriptions } from "../controllers/subscription.controller.js";

const subscriptionRouter = Router();

subscriptionRouter.get('/', (req, res) => {
    res.send({ title: 'GET all subscriptions' });
});

subscriptionRouter.get('/:id', authorize, getUserSubscriptions);

subscriptionRouter.post('/', authorize, createSubscription);

subscriptionRouter.put('/:id', (req, res) => {
    res.send({ title: 'UPDATE subscription' });
});

subscriptionRouter.delete('/:id', (req, res) => {
    res.send({ title: 'DELETE subscription' }); 
});

subscriptionRouter.get('/user/:id', (req, res) => {
    res.send({ title: 'GET all user subscriptions' });
});

subscriptionRouter.put('/:id/cancel', (req, res) => {
    res.send({ title: 'CANCEL subscription' });
});

subscriptionRouter.get('/upcoming-renewals', (req, res) => {
    res.send({ title: 'GET upcoming-renewals subscription' });
});




export default subscriptionRouter;