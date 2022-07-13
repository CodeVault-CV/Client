import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import CodeMirror from '@uiw/react-codemirror';
import { StreamParser, StreamLanguage } from '@codemirror/language';

interface CodeViewerProps {
  value: string;
  codeParser: StreamParser<unknown>;
  language: string;
  handleChange(value: string): void;
  handleSelectChange(event: SelectChangeEvent): void;
}

export default function CodeViewerBlock({ 
  value, 
  codeParser, 
  language, 
  handleChange, 
  handleSelectChange 
}: CodeViewerProps) {
  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 70 }} size='small'>
        <Select
          value={language}
          onChange={handleSelectChange}
          sx={{ height: 40 }}
        >
          <MenuItem value='cpp'>C++</MenuItem>
          <MenuItem value='java'>Java</MenuItem>
          <MenuItem value='javascript'>JavaScript</MenuItem>
          <MenuItem value='kotlin'>Kotlin</MenuItem>
          <MenuItem value='python'>Python</MenuItem>
          <MenuItem value='swift'>Swift</MenuItem>
          <MenuItem value='typeScript'>TypeScript</MenuItem>
        </Select>
      </FormControl>
      <CodeMirror
        value={value}
        onChange={handleChange}
        theme='dark'
        extensions={[StreamLanguage.define(codeParser)]}
      />
    </div>
  );
}
