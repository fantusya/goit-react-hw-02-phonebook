import {
  Form as FormikForm,
  Field as FormikField,
  ErrorMessage as FormikErrorMessage,
} from 'formik';
import styled from 'styled-components';

export const Form = styled(FormikForm)`
  display: inline-flex;
  padding: ${p => p.theme.space[5]}px;
  padding-top: ${p => p.theme.space[6]}px;
  padding-bottom: ${p => p.theme.space[6]}px;
  flex-direction: column;
  align-items: center;
  gap: ${p => p.theme.space[6]}px;
  color: ${p => p.theme.colors.accent};
  background-image: radial-gradient(
    circle 674px at 18.3% 77%,
    rgba(139, 186, 244, 1) 3.4%,
    rgba(15, 51, 92, 1) 56.6%
  );
  border-radius: ${p => p.theme.radii.normal};
  border: ${p => p.theme.borders.normal} ${p => p.theme.colors.border};
`;

export const FormLabelContainer = styled.label`
  position: relative;
  padding-top: ${p => p.theme.space[4]}px;
`;

export const Field = styled(FormikField)`
  padding: ${p => p.theme.space[3]}px;
  min-width: 300px;
  border-radius: ${p => p.theme.radii.normal};
  outline: none;
  border: ${p => p.theme.borders.normal} ${p => p.theme.colors.border};
  font-size: ${p => p.theme.fontSizes.m};
  color: ${p => p.theme.colors.text};

  &::placeholder {
    opacity: 0;
  }

  &:focus::placeholder {
    opacity: 1;
    color: ${p => p.theme.colors.silver};
    font-size: ${p => p.theme.fontSizes.m};
  }
`;

export const FormLabel = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  transform: translate(10px, 22px);
  color: ${p => p.theme.colors.text};
  font-family: ${p => p.theme.fonts.body};
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes.m};

  ${Field}:focus + &,
    ${Field}:not(: placeholder-shown) + & {
    display: block;
    padding: 6px;
    background: #7f7fd5;
    background: linear-gradient(to bottom, #91eae4, #86a8e7, #7f7fd5);
    border-radius: ${p => p.theme.radii.normal};
    outline: ${p => p.theme.borders.normal} ${p => p.theme.colors.border};
    transform: translate(0px, -30px);
    color: ${p => p.theme.colors.white};
  }
`;

export const AddContactBtn = styled.button`
  display: inline-block;
  width: 190px;
  margin: 0;
  outline: none;
  border: 1px solid transparent;

  background-image: linear-gradient(
    to right,
    #314755 0%,
    #26a0da 51%,
    #314755 100%
  );
  padding: 15px;
  text-align: center;
  text-transform: uppercase;
  transition: 0.5s;
  background-size: 200% auto;
  color: white;
  box-shadow: 0 0 20px #eee;
  border-radius: 10px;
  display: block;

  &:hover {
    background-position: right center; /* change the direction of the change here */
    color: #fff;
    text-decoration: none;
  }
`;

export const ErrorMessage = styled(FormikErrorMessage)`
  position: absolute;
  bottom: -30px;
  left: 10px;
  display: block;
  color: ${p => p.theme.colors.red};
  font-weight: ${p => p.theme.fontWeights.bold};
`;

export const ErrorMessageCustom = styled.span`
  position: absolute;
  bottom: -25px;
  left: 10px;
  display: block;
  color: ${p => p.theme.colors.red};
  font-weight: ${p => p.theme.fontWeights.bold};
  font-family: ${p => p.theme.fonts.monospace};
  font-size: ${p => p.theme.fontSizes.s};
`;
