import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { InputContainer, InputField, CheckBoxField } from '../common/formElements/input';
import { PrimaryButton } from '../common/buttons/buttons';

const Container = styled.div`
  display: flex;
  width: 350px;
  margin: 6% auto 6% auto;
  background: rgba(255, 255, 255, 0.2);
  border: 1px solid #ccc;
  box-shadow: 0 0 15px 1px rgba(3, 6, 6, 0.08);
  border-radius: 3px;
`;

const StyledForm = styled.form`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  padding: 30px;
  background: #f7f7f7;
`;

const StyledLogoContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-bottom: 30px;
`;

const StyledLogo = styled.img`
  width: 140px;
`;

const RememberMeAndForgotPasswordContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 30px;

  span {
    font-family: 'Montserrat', sans-serif;
    margin-left: 5px;
    margin-top: 2px;
  }
`;

const StyledAnchorTag = styled.a`
  color: #0070d2;
  text-decoration: none;

  :hover {
    color: #0070d2;
  }
  ${props => (props.pullRight ? 'margin-left: auto;' : '')}
`;

const SignUpContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 30px;
  color: #636e7b;
`;

const CopyRightsContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;
  color: #636e7b;
  font-size: 10px;
`;

class Login extends React.Component {
  render = () => {
    return (
      <Container>
        <StyledForm action="https://xapi.recruitbpm.com/login">
          <StyledLogoContainer>
            <StyledLogo src="/images/tes-logo.png" alt="Tes logo" />
          </StyledLogoContainer>
          <InputContainer>
            <InputField type="email" name="email" placeholder="Email Address" />
          </InputContainer>
          <InputContainer>
            <InputField type="password" name="password" placeholder="Password" />
          </InputContainer>
          {/* <InputContainer>
            <InputField type="text" name="subdomain" placeholder="Sub Domain" />
          </InputContainer> */}
          <RememberMeAndForgotPasswordContainer>
            <CheckBoxField name="remember_me" />
            <span>Remember Me</span>
            <StyledAnchorTag pullRight href="#">
              Forgot Password ?{' '}
            </StyledAnchorTag>
          </RememberMeAndForgotPasswordContainer>
          <Link to="/">
            <PrimaryButton style={{ width: 'calc(100% - 30px)' }}>Sign In</PrimaryButton>
          </Link>
          <SignUpContainer>
            <span style={{ marginRight: 5 }}>No Account? </span>
            <StyledAnchorTag href="#">Create New</StyledAnchorTag>
          </SignUpContainer>
          <CopyRightsContainer>© 2020. All Rights Reserved. RecruitBPM</CopyRightsContainer>
        </StyledForm>
      </Container>
    );
  };
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
