import { Request, Response } from "express";
import { AuthService } from "../services/auth.service";

const authService = new AuthService();

export class AuthController{
  async signUp(req: Request, res: Response) {
    const { name, email, password } = req.body;
    const user = await authService.signUp({ name, email, password });
    res.status(201).json(user);
  }

  async signIn(req: Request, res: Response) {
    const { email, password } = req.body;
    const user = await authService.signIn({ email, password });
    res.status(200).json(user);
  }
}