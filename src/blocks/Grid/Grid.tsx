import styled from '@emotion/styled';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import React from 'react';

const Wrapper = styled.div`
  margin: 30px 0;
  display: flex;
  justify-content: center;
`;

const Item = styled(Paper)`
  padding: 5px 20px;
  box-shadow: rgb(0 0 0 / 8%) 2px 4px 12px;
  border-radius: 15px;
  transition: all 0.3s cubic-bezier(0, 0, 0.5, 1) 0s;
  cursor: pointer;
  &: hover {
    box-shadow: 2px 4px 16px rgb(0 0 0 / 16%);
    transform: scale3d(1.01, 1.01, 1.01);
  }
`;

function GridRow() {
  return (
    <React.Fragment>
      {[1, 2, 3, 4].map((_) => (
        <Grid item xs={4}>
          <Item>
            <h3>#1 - BFS & DFS</h3>
            {[
              '[백준] 가나다라마사바',
              '[프로그래머스] 가나다라',
              '[프로그래머스] 가나다라',
              '[프로그래머스] 가나다라',
              '[프로그래머스] 가나다라',
            ].map((problem) => (
              <p>{problem}</p>
            ))}
          </Item>
        </Grid>
      ))}
    </React.Fragment>
  );
}

export default function GridBlock() {
  return (
    <Wrapper>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={1}>
          <Grid container item spacing={3}>
            <GridRow />
          </Grid>
        </Grid>
      </Box>
    </Wrapper>
  );
}
