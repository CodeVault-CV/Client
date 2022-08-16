import HTTP from "../../data/infra/http";
import Session from "../types/Session";
import ISessionUseCase from "./interfaces/iSession";

class SessionUseCase implements ISessionUseCase {
  async createSession(studyId: string, name: string, start: Date, end: Date): Promise<Session> {
    return await HTTP.post(`/session`, {
      studyId,
      name,
      start,
      end,
    }).then(({ data }) => data as Session);
  }
  async updateSession(session: Session): Promise<Session> {
    return await HTTP.put("/session", session).then(({ data }) => data as Session);
  }
  async getSession(sessionId: number): Promise<Session> {
    return await HTTP.get(`/session/${sessionId}`).then(({ data }) => ({
      ...data,
      start: new Date(data.start),
      end: new Date(data.end),
    }));
  }
  async getSessionList(studyId: string): Promise<Session[]> {
    return await HTTP.get(`/session/list/${studyId}`).then(({ data }) => data as Session[]);
  }
  async deleteSession(sessionId: number): Promise<boolean> {
    return await HTTP.deleteRequest(`/session/${sessionId}`).then(({ status }) => status === 200);
  }
}

export default SessionUseCase;
