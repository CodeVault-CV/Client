import iSolution, { iSolutionParams } from './interface';

export default class Solution implements iSolution {
  private readonly _language: string;

  private readonly _code: string;

  private readonly _memory: number;

  private readonly _time: number;

  private readonly _readMe: string;

  private readonly _date: Date;

  constructor(params: iSolutionParams) {
    this._code = params.code;
    this._language = params.language;
    this._memory = params.memory;
    this._time = params.time;
    this._readMe = params.readMe;
    this._date = params.date;
  }

  public get language() {
    return this._language;
  }

  public get code() {
    return this._code;
  }

  public get memory() {
    return this._memory;
  }

  public get time() {
    return this._time;
  }

  public get readMe() {
    return this._readMe;
  }

  public get date() {
    return this._date;
  }
}
