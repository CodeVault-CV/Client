import { PropsWithChildren } from 'react';
import { Modal as MaterialModal, Box, ModalProps } from '@mui/material';

const ModalStyle = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  borderRadius: '15px',
  boxShadow: 'rgb(0 0 0 / 8%) 2px 4px 12px',
  p: 4,
};

export default function Modal({ children, ...props }: PropsWithChildren<ModalProps>) {
  return (
    <MaterialModal {...props}>
      <Box sx={ModalStyle}>
        {children}
      </Box>
    </MaterialModal>
  );
}
