import styled from '@emotion/styled';
import Grid from '@mui/material/Grid';
import ShadowBox from '../../../blocks/ShadowBox';

const GridWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

function GridItem() {
  return (
    <Grid item xs={4}>
      <ShadowBox>
        <div style={{ padding: '5px 20px' }}>
          <h3>#1 - BFS & DFS</h3>
          {[
            '[백준] 가나다라마사바',
            '[프로그래머스] 가나다라',
            '[프로그래머스] 가나다라',
            '[프로그래머스] 가나다라',
            '[프로그래머스] 가나다라',
          ].map((problem, i) => (
            <p key={i}>{problem}</p>
          ))}
        </div>
      </ShadowBox>
    </Grid>
  );
}

export default function SessionGrid() {
  return (
    <GridWrapper>
      <Grid container spacing={3} columns={{ xs: 8, md: 12 }}>
        {[1, 2, 3, 4].map((i) => (
          <GridItem key={i} />
        ))}
      </Grid>
    </GridWrapper>
  );
}
