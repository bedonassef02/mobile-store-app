import { Router, Request, Response } from 'express';
import passport from 'passport';
import '../utils/strategies/google.strategy';
export const router: Router = Router();

router.get(
  '/',
  passport.authenticate('google', { scope: ['profile', 'email'] }),
);

router.get('/success', (req: Request, res: Response) => {
  res.send({ message: 'success' });
});

router.get('/failure', (req: Request, res: Response) => {
  res.send({ message: 'failure' });
});

router.get(
  '/redirect',
  passport.authenticate('google', {
    successRedirect: '/auth/google/success',
    failureRedirect: '/auth/google/failure',
  }),
);
