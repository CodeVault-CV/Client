import IAuthUseCase from './interfaces/iAuth';
import IAuthRepository from './repository-interfaces/iAuth';
import { IAuthEntity } from '../entities/interfaces/iAuth';

export default class AuthUseCase implements IAuthUseCase {
  constructor(private readonly authRepo: IAuthRepository) {}

  getToken(): string | null {
    return this.authRepo.getToken();
  }

  getId(): string | null {
    return this.authRepo.getId();
  }

  async login(code: string): Promise<IAuthEntity> {
    return await this.authRepo.login(code);
  }

  logout() {
    this.authRepo.logout();
  }
}
