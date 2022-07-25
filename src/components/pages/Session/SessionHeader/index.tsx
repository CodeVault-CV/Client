import Header from "../../../blocks/Header";
import DateLabel from "../../../atoms/DateLabel";
import SessionEditor from "./SessionEditor"

interface SessionHeaderProps {
  id: number;
  name: string;
  start: string;
  end: string;
}

export default function SessionHeader({ id, name, start, end }: SessionHeaderProps) {
  return (
    <Header title={name}>
      <DateLabel start={new Date(start)} end={new Date(end)} />
      <SessionEditor id={id} name={name} start={new Date(start)} end={new Date(end)} />
    </Header>
  );
}