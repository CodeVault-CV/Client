import { Stack } from "@mui/material";
import { useState } from "react";
import Profile from "../../../../blocks/Profile";
import Button from "../../../../atoms/Button";
import UserAutocomplete from "./UserAutocomplete.tsx";
import debounce from "../../../../../utils/debounce";
import Study from "../../../../../di/Study";
import IMemberEntity from "../../../../../core/entities/interfaces/iMember";

interface StudyMemberProps {
  id: string;
  members: IMemberEntity[];
}

export default function StudyMember({ id, members }: StudyMemberProps) {
  const [userName, setUserName] = useState<string>("");
  const [searched, setSearched] = useState<IMemberEntity[]>([]);

  const searchUser = debounce((name: string) => {
    if (!name) {
      setSearched([]);
      return;
    }
    Study.searchStudyMember(id, name).then((data) => {
      setSearched(data);
    });
  });

  const handleChange = (value: string) => {
    setUserName(value);
    searchUser(value);
  };

  const handleClick = () => {
    handleChange("");
    // Study.addStudyMember(id, userName).then(({ status, message }) => {
    //   if (status === 200) {
    //     message = `${userName} 님에게 초대 메일을 전송했습니다.`;
    //   }
    //   window.alert(message);
    // });
  };

  return (
    <>
      <h3>스터디원</h3>
      <Stack direction="row" spacing={4} sx={{ mb: 3, overflowX: "auto" }}>
        {members.map(({ id, name, imageUrl, githubUrl }) => (
          <Profile key={id} name={name} imageUrl={imageUrl} href={githubUrl} />
        ))}
      </Stack>
      <Stack direction="row" spacing={1}>
        <UserAutocomplete userName={userName} searched={searched} handleChange={handleChange} />
        <Button color="success" onClick={handleClick}>
          초대
        </Button>
      </Stack>
    </>
  );
}
