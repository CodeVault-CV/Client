import { MouseEvent } from "react";
import Header from "../../../blocks/Header";
import Wrapper from "../../../blocks/Wrapper";
import ISessionEntity from "../../../../core/entities/interfaces/iSession";

type SessionHeaderProps = {
  session?: ISessionEntity;
  isLeader: boolean;
  handleDelete(event: MouseEvent<HTMLButtonElement>): void;
};

const defaultSession = {
  id: 0,
  name: "Unknown",
  start: new Date(0),
  end: new Date(0),
  problems: [],
};

export default function SessionHeader({ session = defaultSession }: SessionHeaderProps) {
  return (
    <Wrapper>
      <Header label="세션 이름" content={session.name} />
    </Wrapper>
  );
}
