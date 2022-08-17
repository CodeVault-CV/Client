import { IAuthEntity } from "../../../core/entities/interfaces/iAuth";

export default interface IAuthPresenter {
  login(code: string): Promise<IAuthEntity>;
  logout(): void;
  getId(): string | null;
  getToken(): string | null;
}