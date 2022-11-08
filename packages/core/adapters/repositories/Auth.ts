import IAuthRepository from "../../domains/useCases/repository-interfaces/iAuth";
import iStorage from "../infra/interfaces/iStorage";
import HTTP from "../infra/http";
import AuthDTO, { IAuthDTO } from "../../domains/dto/AuthDTO";

export default class AuthRepository implements IAuthRepository {
  constructor(private readonly storage: iStorage) {}

  async login(code: string): Promise<IAuthDTO> {
    const authEntity = await HTTP.get(`/user/login?code=${code}`).then(
      ({ data }) => new AuthDTO(data)
    );

    this.storage.set(authEntity);

    return authEntity;
  }

  logout() {
    this.storage.remove();
  }

  getId() {
    const auth = this.storage.get();
    return auth ? auth.id : null;
  }

  getToken(): string | null {
    const auth = this.storage.get();
    return auth ? auth.token : null;
  }
}
