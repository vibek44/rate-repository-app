import SignUpContainer from "./SignUpContainer";
const SignUp = () => {
  const onSubmit = (values) => {
    console.log(values);
  };
  return <SignUpContainer onSubmit={onSubmit} />;
};

export default SignUp;
