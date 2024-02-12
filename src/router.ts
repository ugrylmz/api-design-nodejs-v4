import {Router} from 'express';
import {body, validationResult} from "express-validator";
import { handleInputErrors } from './modules/middleware';

const router = Router();

/**
 * Product routes
 */
router.get('/product', (req,res) => {
    console.log('req', req);
    res.send('Hello World!');
});
router.get('/product/:id', () => {});
router.put('/product/:id', body('name').isString(), handleInputErrors ,(req, res) => {
   console.log('here');
  });
router.post('/product', () => {});
router.delete('/product/:id', () => {});

/**
 * Update routes
 */
router.get('/update', () => {});
router.get('/update/:id', () => {});
router.put('/update/:id', () => {});
router.post('/update', () => {});
router.delete('/update/:id', () => {});

/**
 * Update Point
*/
router.get('/updatepoint', () => {});
router.get('/updatepoint/:id', () => {});
router.put('/updatepoint/:id', () => {});
router.post('/updatepoint', () => {});
router.delete('/updatepoint/:id', () => {});

export default router;

