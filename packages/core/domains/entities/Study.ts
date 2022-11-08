import IMemberEntity from "./interfaces/iMember";
import { ISessionData } from "./interfaces/iSession";
import IStudyEntity, { IStudyData } from "./interfaces/iStudy";

export default class Study implements IStudyEntity {
  private readonly _id: string;
  private readonly _members: IMemberEntity[];
  private readonly _leader: string;
  private readonly _name: string;
  private readonly _url: string;
  private _sessions: ISessionData[];

  constructor(params: IStudyData) {
    this._id = params.id;
    this._members = params.members;
    this._leader = params.leader;
    this._name = params.name;
    this._url = params.url;
    this._sessions = [];
  }

  pushSessions(sessions: ISessionData[]) {
    this._sessions = this._sessions.concat(sessions);
    return this;
  }

  get id() {
    return this._id;
  }

  get members() {
    return this._members;
  }

  get leader() {
    return this._leader;
  }

  get name() {
    return this._name;
  }

  get url() {
    return this._url;
  }

  get sessions() {
    return this._sessions;
  }
}
