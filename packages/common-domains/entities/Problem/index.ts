import iProblem, { iProblemParams } from './interface';

export default class Problem implements iProblem {
  private readonly _platform: string;

  private readonly _problemId: string;

  private readonly _name: string;

  constructor(params: iProblemParams) {
    this._platform = params.platform;
    this._problemId = params.problemId;
    this._name = params.name;
  }

  public get platform(): string {
    return this._platform;
  }

  public get problemId(): string {
    return this._problemId;
  }

  public get name(): string {
    return this._name;
  }
}
