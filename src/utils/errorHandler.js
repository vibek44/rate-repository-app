import { CombinedGraphQLErrors, ServerError } from "@apollo/client/errors";

export const getErrors = (error) => {
  if (!error) return null;

  if (CombinedGraphQLErrors.is(error)) {
    return {
      type: "GRAPHQL",
      messages: error.errors.map((err) => err.message),
    };
  }

  if (ServerError.is(error)) {
    try {
      const parsed = JSON.parse(error.bodyText);
      if (Array.isArray(parsed?.errors && parsed.errors.length > 0)) {
        return {
          type: "GRAPHQL",
          messages: parsed.errors.map((err) => err.message),
        };
      }
    } catch (error) {}
    return {
      type: "SERVER",
      statusCode: error.statusCode,
      messages: [`Server error :${error.statusCode}! Please try again later!`],
    };
  }

  return {
    type: "NETWORK",
    messages: [
      `Server unreachable! Please,Check your internet connection and try again later.`,
    ],
  };
};
