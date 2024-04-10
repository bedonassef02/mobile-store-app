import { Router, Request, Response } from 'express';
import passport from 'passport';
import '../utils/strategies/github.strategy';
export const router: Router = Router();

router.get(
  '/',
  passport.authenticate('github', { scope: ['profile', 'email'] }),
);

router.get('/success', (req: Request, res: Response) => {
  res.send({ message: 'success' });
});

router.get('/failure', (req: Request, res: Response) => {
  res.send({ message: 'failure' });
});

router.get(
  '/callback',
  passport.authenticate('github', {
    successRedirect: '/auth/github/success',
    failureRedirect: '/auth/github/failure',
  }),
);
