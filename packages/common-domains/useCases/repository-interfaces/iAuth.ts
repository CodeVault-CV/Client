import { IAuthDTO } from '../../dto/AuthDTO';

export default interface IAuthRepository {
  login(code: string): Promise<IAuthDTO>;
  logout(): void;
  getId(): string | null;
  getToken(): string | null;
}
