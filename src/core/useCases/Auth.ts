import IAuthUseCase from "./interfaces/iAuth";
import IAuthRepository from "./repository-interfaces/iAuth";
import { IAuthEntity } from "../entities/interfaces/iAuth";

export default class AuthUseCase implements IAuthUseCase {
  constructor(private readonly authRepo: IAuthRepository) {}
  
  getToken(): string | null {
    // return this.authRepo.getToken();
   return 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2NjMzOTQyOTUsImV4cCI6MTY2MzM5Nzg5NSwiaWQiOiIzMzIyMDQwNCJ9.tO9Dz59ijKB_82S9XQ9PwyGdtwT5p23mcMa4ybzM0Ns';
  }
  
  getId(): string | null {
    // return this.authRepo.getId();
    return '33220404';
  }

  async login(code: string): Promise<IAuthEntity> {
    return await this.authRepo.login(code);
  }

  logout() {
    this.authRepo.logout();
  }
}
