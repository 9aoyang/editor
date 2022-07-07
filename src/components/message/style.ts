import styled from '@emotion/styled';

export const MessageWrapper = styled.div({
  width: '800px',
  height: '100px',
  display: 'flex',

  background: '#FFF',
  borderRadius: '5px',
  boxShadow: '0px 4px 14px rgba(0, 0, 0, 0.15)',
  overflow: 'hidden',
});

export const IconWrapper = styled.div({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  width: '100px',

  background:
    'radial-gradient(84.9% 100% at 50% 0%, #8F00FF 0%, #532BC5 100%);',

  svg: {
    width: '33.33px',
    height: '33.33px',
    color: '#FFF',
  },
});

export const ContentWrapper = styled.div({
  padding: '24px 32px',
  flex: 1,

  '> span': {
    fontSize: '12px',
    lineHeight: '18px',
    color: '#606060',
  },

  div: {
    marginTop: '10px',

    display: 'flex',
    alignItems: 'center',

    a: {
      marginRight: '12px',

      color: '#1F1F2C',
      lineHeight: '24px',
      textDecoration: 'none',
    },

    svg: {
      cursor: 'pointer',
    },
  },
});
