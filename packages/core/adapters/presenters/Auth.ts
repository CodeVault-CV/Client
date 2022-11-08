import { IAuthEntity } from "../../domains/entities/interfaces/iAuth";
import IAuthUseCase from "../../domains/useCases/interfaces/iAuth";
import IAuthPresenter from "./interfaces/iAuth";

export default class AuthPresenter implements IAuthPresenter {
  constructor(private readonly useCase: IAuthUseCase) {}

  async login(code: string): Promise<IAuthEntity> {
    return await this.useCase.login(code);
  }

  logout(): void {
    this.useCase.logout();
  }

  getId(): string | null {
    return this.useCase.getId();
  }
  
  getToken(): string | null {
    return this.useCase.getToken();
  }
}
