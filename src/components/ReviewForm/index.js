import ReviewFormContainer from "./ReviewFormContainer";
const ReviewForm = () => {
  const onSubmit = (values) => {
    console.log(values);
  };
  return <ReviewFormContainer onSubmit={onSubmit} />;
};

export default ReviewForm;
