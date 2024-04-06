import { Request, Response } from "express";
import { AuthService } from "../services/auth.service";
import { SignUpDto } from "../utils/dtos/sign-up.dto";
import { SignInDto } from "../utils/dtos/sign-in.dto";

const authService = new AuthService();

export class AuthController{
  async signUp(req: Request, res: Response) {
    const signUpDto:SignUpDto = req.body;
    const user = await authService.signUp(signUpDto);
    res.status(201).json(user);
  }

  async signIn(req: Request, res: Response) {
    const signInDto:SignInDto = req.body;
    const user = await authService.signIn(signInDto);
    res.status(200).json(user);
  }
}