import ReviewFormContainer from "./ReviewFormContainer";
import { useCreateReview } from "../../hooks/useReview";
import { reviewSchema } from "./ReviewFormContainer";
const ReviewForm = () => {
  const [review] = useCreateReview();
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
