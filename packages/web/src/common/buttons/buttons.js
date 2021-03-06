import styled from 'styled-components';

export const ButtonBase = styled.button`
  display: inline-block;
  font-weight: 400;
  color: #212529;
  text-align: center;
  vertical-align: middle;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  background-color: transparent;
  border: 1px solid transparent;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  border-radius: 0.25rem;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out,
    box-shadow 0.15s ease-in-out;
  cursor: pointer;
  text-decoration: none !important;
  -webkit-appearance: button;
  text-transform: none;
  overflow: visible;
  font: inherit;
  margin: 0;
  box-sizing: inherit;
  box-shadow: none;
  outline: none;

  ${props => (props.disabled ? 'background: #e9ebee;    opacity: 0.3; pointer-events:none;' : '')}
`;

export const HeaderButton = styled(ButtonBase)`
  color: rgba(0, 0, 0, 0.65);
  background: #dddfe2;
  border: 1px solid #e1e1e1;
  padding: 6px 15px;
  border-radius: 4px;
  border: 1px solid #ccc;
  :hover {
    background: #dddfe2;
    border-color: #dddfe2;
    color: rgba(0, 0, 0, 0.75);
    outline: none;
  }
`;

export const PrimaryButton = styled(ButtonBase)`
  color: #fff;
  background-color: #007bff;
  border-color: #007bff;

  :hover {
    color: #fff;
    background-color: #0069d9;
    border-color: #0062cc;
  }
`;
