import IProblemEntity from "./interfaces/iProblem";
import ISessionEntity from "./interfaces/iSession";

export interface ISessionData {
  id: number;
  name: string;
  start: Date;
  end: Date;
}

export default class Session implements ISessionEntity {
  private readonly _id: number;
  private readonly _name: string;
  private readonly _start: Date;
  private readonly _end: Date;
  private _problems: IProblemEntity[];

  constructor(params: ISessionData) {
    this._id = params.id;
    this._name = params.name;
    this._start = params.start;
    this._end = params.end;
    this._problems = [];
  }

  pushProblems(problems: IProblemEntity[]) {
    this._problems = this._problems.concat(problems);
    return this;
  }

  get id() {
    return this._id;
  }
  get name() {
    return this._name;
  }
  get start() {
    return this._start;
  }
  get end() {
    return this._end;
  }
  get problems() {
    return this._problems;
  }
}
