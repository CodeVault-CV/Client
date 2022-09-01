import { Stack } from "@mui/material";
import { useCallback, useState } from "react";

import Profile from "../../../../blocks/Profile";
import Button from "../../../../atoms/Button";
import UserAutocomplete from "./UserAutocomplete.tsx";
import debounce from "../../../../../utils/debounce";
import Study from "../../../../../di/Study";
import IMemberEntity from "../../../../../core/entities/interfaces/iMember";
import useSearchUser from "../../../../../hooks/useSearchUser";

interface StudyMemberProps {
  studyId: string;
  members: IMemberEntity[];
}

export default function StudyMember({ studyId, members }: StudyMemberProps) {
  const { isLoading, users, searchUser } = useSearchUser(studyId);
  const [value, setValue] = useState<IMemberEntity | null>(null);
  const [inputValue, setInputValue] = useState("");
  const [typing, setTyping] = useState(false);

  const loadOptions = useCallback(
    debounce((name: string) => {
      searchUser(name);
      setTyping(false);
    }, 300),
    []
  );

  const handleInputChange = (value: string) => {
    setTyping(true);
    setInputValue(value);
    loadOptions(value);
  };

  const handleValueChange = (value: IMemberEntity | null) => {
    setValue(value);
  };

  const handleClick = () => {
    if (value?.name) {
      const username = value.name;

      Study.addStudyMember(studyId, username).then(({ status, message }) => {
        if (status === 200) {
          message = `${username} 님에게 초대 메일을 전송했습니다.`;
        }
        window.alert(message);
      });
    }
    setValue(null);
  };

  const loading = isLoading || typing;

  return (
    <>
      <h3>스터디원</h3>
      <Stack direction="row" spacing={4} sx={{ mb: 3, overflowX: "auto" }}>
        {members.map(({ id, name, imageUrl, githubUrl }) => (
          <Profile key={id} name={name} imageUrl={imageUrl} href={githubUrl} />
        ))}
      </Stack>
      <Stack direction="row" spacing={1}>
        <UserAutocomplete
          value={value}
          options={loading || !inputValue ? [] : users}
          isLoading={loading}
          handleValueChange={handleValueChange}
          handleInputChange={handleInputChange}
        />
        <Button color="success" onClick={handleClick} disabled={!value}>
          초대
        </Button>
      </Stack>
    </>
  );
}
