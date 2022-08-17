import { IAuthEntity } from "../../entities/interfaces/iAuth";

export default interface IAuthUseCase {
  login(code: string): Promise<IAuthEntity>;
  logout(): void;
  getId(): string | null;
  getToken(): string | null;
}