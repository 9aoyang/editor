import styled from '@emotion/styled';
import Button from '@mui/material/Button';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import ToggleButton from '@mui/material/ToggleButton';
import TextField from '@mui/material/TextField';

import Snackbar from '@mui/material/Snackbar';

export const Container = styled.main({
  width: '800px',
  margin: '0 auto',
  paddingTop: '74px',
  background: '#f9f9f9',
});

export const Return = styled(Button)({
  color: '#8600FF',
});

export const Title = styled.div({
  margin: '18px 0 48px',

  textAlign: 'center',
  color: '#1F1F2C',
  fontWeight: 700,
  fontSize: '32px',
  lineHeight: '48px',
});

export const Tabs = styled(ToggleButtonGroup)({
  marginBottom: '47px',

  boxShadow: '0px 4px 14px rgba(0, 0, 0, 0.15)',
});

export const CountWrapper = styled.span({
  padding: '1px 8px',
  marginLeft: '10px',

  color: '#532BC5',
  borderRadius: '10px',
  background: '#fff',
});

export const Tab = styled(ToggleButton)({
  color: '#606060',

  textTransform: 'none',

  '&:hover': {
    background: 'transparent',
  },

  '&.selected, &.selected:hover': {
    color: '#fff',
    background: '#532BC5',
  },
});

export const TitleInput = styled(TextField)({
  marginBottom: '24px',
});

export const Footer = styled.footer({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginTop: '24px',
});

export const SaveButton = styled(Button)({
  padding: '14px 160px',

  color: '#fff',
  background:
    'radial-gradient(50% 115.18% at 50% -15.18%, #8F00FF 0%, #532BC5 100%)',
});

export const CancelButton = styled(Button)({
  color: '#606060',
});

export const StyledSnackbar = styled(Snackbar)({
  padding: 0,
  margin: 0,
  overflow: 'hidden',
});
