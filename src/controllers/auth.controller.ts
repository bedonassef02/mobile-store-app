import { Request, Response } from 'express';
import { AuthService } from '../services/auth.service';
import { SignUpDto } from '../utils/dtos/auth/sign-up.dto';
import { SignInDto } from '../utils/dtos/auth/sign-in.dto';
import { AuthDto } from '../utils/dtos/auth/auth.dto';

export class AuthController {
  constructor(private authService: AuthService) {}

  async signUp(req: Request, res: Response): Promise<void> {
    const signUpDto: SignUpDto = req.body;
    const authDto: AuthDto = await this.authService.signUp(signUpDto);
    res.status(201).json(authDto);
  }

  async signIn(req: Request, res: Response): Promise<void> {
    const signInDto: SignInDto = req.body;
    const authDto: AuthDto | null = await this.authService.signIn(signInDto);
    if (authDto) {
      res.status(200).json(authDto);
    } else {
      res.status(401).json({ message: 'Invalid credentials' });
    }
  }

  async changePassword(req: any, res: Response): Promise<void> {
    const userId: number = parseInt(req.user.id, 10);
    const password: string = req.body.password;
    const user: AuthDto = await this.authService.changePassword(
      userId,
      password,
    );
    res.status(200).json(user);
  }

  async forgetPassword(req: any, res: Response): Promise<void> {
    const email: string = req.body.email;
    await this.authService.forgetPassword(email);
    res
      .status(200)
      .json({ message: 'A password reset link has been sent to your email.' });
  }

  async resetPassword(req: any, res: Response): Promise<void> {
    const email: string = req.query.email;
    const password: string = req.body.password;
    await this.authService.resetPassword(email, password);
    res.status(200).json({ message: 'Your password has been changed.' });
  }

  async enable2FA(req: any, res: Response): Promise<void> {
    const userId: number = parseInt(req.user.id, 10);
    const secret: string = await this.authService.enable2FA(userId);
    res.status(201).json({ secret });
  }

  async verify2FA(req: any, res: Response): Promise<void> {
    const userId: number = parseInt(req.user.id, 10);
    const otp: any = req.body.otp;
    const authDto: AuthDto = await this.authService.verify2FA(userId, otp);
    if (authDto) {
      res.status(201).json(authDto);
    } else {
      res.status(401).json({ message: 'Invalid otp' });
    }
  }
}
