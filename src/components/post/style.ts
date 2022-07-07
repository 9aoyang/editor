import styled from '@emotion/styled';
import Button from '@mui/material/Button';

export const Container = styled.div({
  marginBottom: '56px',
});

export const Header = styled.header({
  marginBottom: '21px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  position: 'relative',

  '&::before': {
    content: '" "',
    height: '1px',
    position: 'absolute',
    left: 0,
    right: 0,
    top: '50%',

    background: 'rgba(0, 0, 0, 0.1)',
    transform: 'translate3d(0, -50%, 0);',
  },
});

export const Title = styled.span({
  padding: '4px 16px',
  zIndex: 1,

  background:
    'radial-gradient(50% 115.18% at 50% -15.18%, #8F00FF 0%, #532BC5 100%)',
  color: '#fff',
  borderRadius: '16px',
});

const BaseButton = styled(Button)({
  minWidth: 'inherit',
  height: '26px',
  padding: '7px',
  zIndex: 1,

  color: '#fff',
  fontSize: '12px',
  lineHeight: '18px',
  borderRadius: '16px',
  background: '#C4C4C4',
  textTransform: 'none',

  svg: {
    width: '12px',
    height: '12px',
  },
});

export const EditButton = styled(BaseButton)({
  marginRight: '8px',

  '&:hover': {
    background: '#532BC5',
  },
});

export const DeleteButton = styled(BaseButton)({
  '&:hover': {
    background: '#FF002E',
  },
});

export const Main = styled.main({
  padding: '0 20px',

  lineHeight: '24px',
});

export const ImgListContainer = styled.div({
  margin: '24px 0',

  columnCount: 2,
  columnGap: '24px',
});

export const Img = styled.img({
  width: '100%',
  marginBottom: '24px',
  breakInside: 'avoid',

  borderRadius: '5px',
});

export const Audio = styled.audio({
  margin: '24px 0',
});

export const Footer = styled.footer({
  marginTop: '24px',

  fontSize: '14px',
  lineHeight: '21px',
  color: '#818181',
});
