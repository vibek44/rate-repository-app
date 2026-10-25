//import { screen, render, waitFor } from "@testing-library/react-native";
import { RepositoryListContainer } from "../components/Repository";
//import { Text, View } from "react-native";
import { render, screen, within } from "@testing-library/react-native";

/*const Greeting = ({ name }) => {
  return (
    <View testID="repositoryItem">
      <Text>Hello {name}!</Text>
    </View>
  );
};

describe("Greeting", () => {
  it("renders a greeting message based on the name prop", async () => {
    await render(<Greeting name="Kalle" />);

    screen.debug();
    const items = screen.getAllByTestId("repositoryItem");
    console.log(items);
    //expect(screen.getByText("Hello Kalle!")).toBeDefined();
  });
});*/
describe("RepositoryList", () => {
  describe("RepositoryListContainer", () => {
    it("renders repository information correctly", async () => {
      const repositories = {
        totalCount: 8,
        pageInfo: {
          hasNextPage: true,
          endCursor:
            "WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==",
          startCursor: "WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd",
        },
        edges: [
          {
            node: {
              id: "jaredpalmer.formik",
              fullName: "jaredpalmer/formik",
              description: "Build forms in React, without the tears",
              language: "TypeScript",
              forksCount: 1619,
              stargazersCount: 21856,
              ratingAverage: 88,
              reviewCount: 3,
              ownerAvatarUrl:
                "https://avatars2.githubusercontent.com/u/4060187?v=4",
            },
            cursor: "WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd",
          },
          {
            node: {
              id: "async-library.react-async",
              fullName: "async-library/react-async",
              description: "Flexible promise-based React data loader",
              language: "JavaScript",
              forksCount: 69,
              stargazersCount: 1760,
              ratingAverage: 72,
              reviewCount: 3,
              ownerAvatarUrl:
                "https://avatars1.githubusercontent.com/u/54310907?v=4",
            },
            cursor:
              "WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==",
          },
        ],
      };
      const repositoriesCopy = repositories.edges.map((edge) => edge.node);

      await render(<RepositoryListContainer repositories={repositories} />);

      const [items1, items2] = screen.getAllByTestId("repositoryItem");
      repositoriesCopy.map((copy, index) => {
        const items = index === 0 ? items1 : items2;
        const fullName = within(items).getByText(copy.fullName);
        const description = within(items).getByText(copy.description);
        const language = within(items).getByText(copy.language);
        const forksCount = within(items).getByText(
          copy.forksCount >= 1000
            ? new Intl.NumberFormat("en-US", {
                notation: "compact",
                maximumFractionDigits: 1,
              }).format(copy.forksCount)
            : String(copy.forksCount)
        );
        const stargazersCount = within(items).getByText(
          copy.stargazersCount >= 1000
            ? new Intl.NumberFormat("en-US", {
                notation: "compact",
                maximumFractionDigits: 1,
              }).format(copy.stargazersCount)
            : String(copy.stargazersCount)
        );
        const ratingAverage = within(items).getByText(
          copy.ratingAverage >= 1000
            ? new Intl.NumberFormat("en-US", {
                notation: "compact",
                maximumFractionDigits: 1,
              }).format(copy.ratingAverage)
            : String(copy.ratingAverage)
        );
        const reviewCount = within(items).getByText(
          copy.reviewCount >= 1000
            ? new Intl.NumberFormat("en-US", {
                notation: "compact",
                maximumFractionDigits: 1,
              }).format(copy.reviewCount)
            : String(copy.reviewCount)
        );
        expect(fullName).toBeOnTheScreen();
        expect(description).toBeOnTheScreen();
        expect(language).toBeOnTheScreen();
        expect(forksCount).toBeOnTheScreen();
        expect(stargazersCount).toBeOnTheScreen();
        expect(ratingAverage).toBeOnTheScreen();
        expect(reviewCount).toBeOnTheScreen();
      });
    });
  });
});
