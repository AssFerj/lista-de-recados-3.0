import { Alert, Collapse, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import React from 'react';

interface AlertComponentProps {
  open: boolean;
  text: string;
  close: boolean;
}

const AlertComponent: React.FC<AlertComponentProps> = ({ open, text, close }) => {
    function setOpen(arg0: boolean) {
        throw new Error('Function not implemented.');
    }

  return (
    <React.Fragment>
      <Collapse in={open}>
        <Alert
            action={
            <IconButton
                aria-label="close"
                color="inherit"
                size="small"
                onClick={() => {
                setOpen(close);
                }}
            >
                <CloseIcon fontSize="inherit" />
            </IconButton>
            }
            sx={{ mb: 2 }}
        >
          {text}
        </Alert>
      </Collapse>
    </React.Fragment>
  );
};

export default AlertComponent;
