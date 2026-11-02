import SignUpContainer from "./SignUpContainer";
import { useCreateUser } from "../../hooks/useUser";
const SignUp = () => {
  const [createUser] = useCreateUser();
  const onSubmit = async (values) => {
    const { username, password } = values;
    await createUser({ username, password });
  };
  return <SignUpContainer onSubmit={onSubmit} />;
};

export default SignUp;
