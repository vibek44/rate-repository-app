import ReviewFormContainer from "./ReviewFormContainer";
import useReview from "../../hooks/useReview";
import { reviewSchema } from "./ReviewFormContainer";
const ReviewForm = () => {
  const [review] = useReview();
  const onSubmit = async (values) => {
    const castedValues = reviewSchema.cast(values);
    try {
      await review(castedValues);
    } catch (error) {
      console.log(JSON.stringify(error));
    }
  };
  return <ReviewFormContainer onSubmit={onSubmit} />;
};

export default ReviewForm;
