import { ISolvedMemberEntity } from './interfaces/iMember';
import IProblemEntity, { IProblemData } from './interfaces/iProblem';

export default class Problem implements IProblemEntity {
  private readonly _id: number;

  private readonly _number: string;

  private readonly _name: string;

  private readonly _platform: string;

  private readonly _url: string;

  private _solvedMembers: ISolvedMemberEntity[];

  constructor(params: IProblemData) {
    this._id = params.id;
    this._number = params.number;
    this._name = params.name;
    this._platform = params.platform;
    this._url = params.url;
    this._solvedMembers = [];
  }

  pushSolvedMembers(solvedMembers: ISolvedMemberEntity[]) {
    this._solvedMembers = this.solvedMembers.concat(solvedMembers);
    return this;
  }

  get id() {
    return this._id;
  }

  get number() {
    return this._number;
  }

  get name() {
    return this._name;
  }

  get platform() {
    return this._platform;
  }

  get url() {
    return this._url;
  }

  get solvedMembers() {
    return this._solvedMembers;
  }
}
