import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import { Dispatch, SetStateAction, ReactNode} from 'react';
import { DialogContent, DialogTitle, SxProps } from '@mui/material';

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<unknown>;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});


type TProps = {
    open: boolean;
    setOpen: Dispatch<SetStateAction<boolean>>;
    title: string;
    children: ReactNode
}



const PHFullscreenModal = ({open, setOpen, title, children}: TProps) => {

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
     
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
         <DialogTitle
               sx={{ color: 'primary.main', background: '#f4f7fe' }}
               id='customized-dialog-title'
            >
               {title}
            </DialogTitle>
            <IconButton
               aria-label='close'
               onClick={handleClose}
               sx={{
                  position: 'absolute',
                  right: 8,
                  top: 8,
                  color: (theme) => theme.palette.grey[500],
               }}
            >
               <CloseIcon />
            </IconButton>
        <DialogContent sx={{ mx: 1 }}>{children}</DialogContent>
      </Dialog>
    </>
  );
}

export default PHFullscreenModal;