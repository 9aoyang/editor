import React from 'react';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Snackbar from '@mui/material/Snackbar';

import { MessageWrapper, IconWrapper, ContentWrapper } from './style';

export const Message = ({ postId }: { postId: string }) => {
  const link = `https://twitter.com/p/${postId}`;

  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (
    event: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    setOpen(false);
  };

  return (
    <MessageWrapper>
      <IconWrapper>
        <CheckCircleIcon />
      </IconWrapper>
      <ContentWrapper>
        <span>link to your profile</span>
        <div>
          <a href="https://twitter.com/p/12345">{link}</a>
          <ContentCopyIcon onClick={handleClick} />
        </div>
      </ContentWrapper>
      <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={open}
        autoHideDuration={1000}
        onClose={handleClose}
        message="Copy success"
      />
    </MessageWrapper>
  );
};
