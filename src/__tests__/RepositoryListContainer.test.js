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
      await render(<RepositoryListContainer repositories={repositories} />);

      const repositoriesCopy = repositories.edges.map((edge) => edge.node);

      const [items1, items2] = screen.getAllByTestId("repositoryItem");
      const fullName = within(items1).getByText("jaredpalmer/formik");
      const description1 = within(items1).getByText(
        "Build forms in React, without the tears"
      );
      // expect(fullName1, description1).toBeOnTheScreen();
      console.log(fullName.length);
    });
  });
});
