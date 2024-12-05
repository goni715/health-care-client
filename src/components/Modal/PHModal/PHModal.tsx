import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { Dispatch, SetStateAction, ReactNode } from 'react';


const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

type TProps = {
    open: boolean;
    setOpen: Dispatch<SetStateAction<boolean>>;
    title: string;
    children: ReactNode
}


const PHModal = ({open, setOpen, title, children}: TProps) => {

 
  const handleClose = (event: React.SyntheticEvent, reason: string) => {
    // Prevent closing the dialog on overlay click or escape key
    if (reason === 'backdropClick' || reason === 'escapeKeyDown') {
      return;
    }
    setOpen(false);
  };

  return (
    <>
      
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          {title}
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={() => setOpen(false)}
          sx={(theme) => ({
            position: 'absolute',
            right: 8,
            top: 8,
            color: theme.palette.grey[500],
          })}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent dividers>
          {children}
        </DialogContent>
      </BootstrapDialog>
    </>
  );
}

export default PHModal;
