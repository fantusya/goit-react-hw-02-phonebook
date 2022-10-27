import styled from 'styled-components';

export const PageTitle = styled.h1`
  color: ${p => p.theme.colors.accent};
  font-family: ${p => p.theme.fonts.heading};
  font-size: ${p => p.theme.fontSizes.xl};
  font-weight: ${p => p.theme.fontWeights.normal};
  margin-bottom: ${p => p.theme.space[5]}px;
`;
