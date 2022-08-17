import { IAuthEntity } from "../../core/entities/interfaces/iAuth";
import IAuthRepository from "../../core/useCases/repository-interfaces/iAuth";
import iStorage from "../infra/interfaces/iStorage";
import HTTP from "../infra/http";

export default class AuthRepository implements IAuthRepository {
  constructor(private readonly storage: iStorage) {}

  async login(code: string): Promise<IAuthEntity> {
    const authEntity = await HTTP.get(`/user/login?code=${code}`).then(
      ({ data }) => data as IAuthEntity
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
