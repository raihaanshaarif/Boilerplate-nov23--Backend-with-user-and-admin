import express from 'express';
import { UserController } from './user.controller';
import validateRequest from '../../middlewares/validateRequest';
import { UserValidation } from './user.validation';

const router = express.Router();

router.post(
  '/create-user',
  validateRequest(UserValidation.createAdminZodSchema),
  UserController.createUser,
);
router.get('/:id', UserController.geSingleUser);
router.get('/', UserController.getUser);
router.patch(
  '/:id',
  validateRequest(UserValidation.updateAdminZodSchema),
  UserController.updateUser,
);
router.delete('/:id', UserController.deleteUser);

export const UserRoutes = router;
