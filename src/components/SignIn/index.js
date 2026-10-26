import useSigIn from "../../hooks/useSignIn";
import SignInContainer from "./SignInContainer";

const SignIn = () => {
  const [signIn] = useSigIn();

  const onSubmit = async (values) => {
    const { username, password } = values;
    try {
      await signIn({ username, password });
    } catch (error) {
      console.log(error);
    }
  };
  //console.log(formik);
  return <SignInContainer onSubmit={onSubmit} />;
};

export default SignIn;
