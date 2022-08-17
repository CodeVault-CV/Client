import { IAuthEntity } from "../core/entities/interfaces/iAuth";
import AuthUseCase from "../core/useCases/Auth";
import TypeStorage from "../data/infra/TypeStorage";
import AuthPresenter from "../data/presenters/Auth";
import AuthRepository from "../data/repositories/Auth";

const authRepo = new AuthRepository(new TypeStorage<IAuthEntity>("auth", localStorage));
const authUseCase = new AuthUseCase(authRepo);
const Auth = new AuthPresenter(authUseCase);

export default Auth;
