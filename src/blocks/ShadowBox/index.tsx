import styled from '@emotion/styled';
import { PropsWithChildren } from 'react';

const Box = styled.div`
  background-color: white;
  box-shadow: rgb(0 0 0 / 8%) 2px 4px 12px;
  border-radius: 15px;
  transition: all 0.3s cubic-bezier(0, 0, 0.5, 1) 0s;
  cursor: pointer;
  &: hover {
    box-shadow: 2px 4px 16px rgb(0 0 0 / 16%);
    transform: scale3d(1.01, 1.01, 1.01);
  }
`;

export default function ShadowBox({ children }: PropsWithChildren) {
    return (
        <Box>
            {children}
        </Box>
    )
}
