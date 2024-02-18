/*
export the 
body('title').optional,
body('body').optional,
body('status').optional,
body('version').optional, 
*/

// Path: src/validations/update.ts
import {body, oneOf} from "express-validator";

export const putUpdateValidation = [
    body('title').optional(),
    body('body').optional(),
    body('status').isIn(['IN_PROGRESS', 'SHIPPED', 'DEPRECATED']).optional(),
    body('version').optional()
];

export const postUpdateValidation = [
    body('title').exists().isString(),
    body('body').exists().isString(),
];