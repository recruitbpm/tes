import styled from 'styled-components';

export const InputContainer = styled.div`
  display: flex;
  margin-bottom: 30px;

  label {
    position: absolute;
    -moz-transform: translateY(14px);
    -webkit-transform: translateY(14px);
    -webkit-transform: translateY(14px);
    -ms-transform: translateY(14px);
    transform: translateY(14px);
    color: #777;
    -webkit-transition: all 0.25s ease;
    -webkit-transition: all 0.25s ease;
    transition: all 0.25s ease;
    -webkit-backface-visibility: hidden;
    pointer-events: none;
    padding-left: 10px;
  }
`;

export const InputField = styled.input`
  width: 100%;
  padding: 5px;
  height: 20px;
  font-size: 12px;
  border: 1px solid #e1e2e9;
  border-radius: 3px;
  letter-spacing: 0.5px;
  box-shadow: none;

  :focus {
    outline: none;
    border: 1px solid #4597c6;
    box-shadow: 0 0 5px #4597c6;
  }
`;

export const CheckBoxField = styled.input.attrs({ type: 'checkbox' })`
  cursor: pointer;
`;
