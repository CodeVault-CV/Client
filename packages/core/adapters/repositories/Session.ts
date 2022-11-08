import HTTP from "../infra/http";
import SessionDTO, { ISessionDTO, ISessionParams } from "../../domains/dto/SessionDTO";
import ISessionRepository from "../../domains/useCases/repository-interfaces/iSession";

export default class SessionRepository implements ISessionRepository {
  async createSession(studyId: string, name: string, start: Date, end: Date): Promise<ISessionDTO> {
    return await HTTP.post(`/session`, {
      studyId,
      name,
      start,
      end,
    }).then(({ data }) => new SessionDTO(data));
  }

  async updateSession(session: ISessionParams): Promise<ISessionDTO> {
    return await HTTP.put(`/session/${session.id}`, session).then(
      ({ data }) => new SessionDTO(data)
    );
  }

  async getSession(sessionId: number): Promise<ISessionDTO> {
    return await HTTP.get(`/session/${sessionId}`).then(
      ({ data }) =>
        new SessionDTO({ ...data, start: new Date(data.start), end: new Date(data.end) })
    );
  }

  async getSessionList(studyId: string): Promise<ISessionDTO[]> {
    return await HTTP.get(`/session/list/${studyId}`).then(({ data }) =>
      data.map((el: ISessionParams) => new SessionDTO(el))
    );
  }

  async deleteSession(sessionId: number): Promise<boolean> {
    return await HTTP.deleteRequest(`/session/${sessionId}`).then(({ status }) => status === 200);
  }
}
