import {
  render,
  screen,
  fireEvent,
  waitFor,
} from "@testing-library/react-native";
import SignInContainer from "../components/SignIn/SignInContainer";

describe("SignIn", () => {
  describe("SignInContainer", () => {
    it.only("calls onSubmit function with correct arguments when a valid form is submitted", async () => {
      const onSubmit = jest.fn();

      await render(<SignInContainer onSubmit={onSubmit} />);
      await fireEvent.changeText(
        screen.getByPlaceholderText("UserName"),
        "kalle"
      );
      await fireEvent.changeText(
        screen.getByPlaceholderText("Password"),
        "password"
      );
      await fireEvent.press(screen.getByText("SignIn"));
      await waitFor(() => {
        expect(onSubmit).toHaveBeenCalledTimes(1);
        expect(onSubmit.mock.calls[0][0]).toEqual({
          username: "kalle",
          password: "password",
        });
      });
    });
  });
});
