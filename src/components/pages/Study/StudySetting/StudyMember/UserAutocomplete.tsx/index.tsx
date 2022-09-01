import { Box, TextField, Autocomplete } from "@mui/material";

import IMemberEntity from "../../../../../../core/entities/interfaces/iMember";

interface UserAutocompleteProps {
  value: IMemberEntity | null;
  isLoading: boolean;
  options?: readonly IMemberEntity[];
  handleValueChange(value: IMemberEntity | null): void;
  handleInputChange(value: string): void;
}

export default function UserAutocomplete({
  value,
  isLoading,
  options = [],
  handleValueChange,
  handleInputChange,
}: UserAutocompleteProps) {
  return (
    <Box sx={{ width: 240 }}>
      <Autocomplete
        autoComplete
        includeInputInList
        options={options}
        getOptionLabel={(option) => option.name}
        noOptionsText="결과가 없습니다"
        isOptionEqualToValue={(option, value) => option.id === value.id}
        loading={isLoading}
        loadingText="검색중..."
        value={value}
        defaultValue={null}
        size="small"
        onChange={(_, value: IMemberEntity | null) => {
          handleValueChange(value);
        }}
        onInputChange={(_, newInputValue) => {
          handleInputChange(newInputValue);
        }}
        renderOption={(props, option) => (
          <Box
            key={option.id}
            component="li"
            sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
            {...props}
          >
            <img
              loading="lazy"
              width="30"
              src={option.imageUrl}
              alt="Github Profile"
              style={{ borderRadius: "100%" }}
            />
            {option.name}
          </Box>
        )}
        renderInput={(params) => (
          <TextField {...params} label="새로운 멤버" placeholder="Github 이름" />
        )}
      />
    </Box>
  );
}
