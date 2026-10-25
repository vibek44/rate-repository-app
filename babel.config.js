export default function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    env: {
      production: {
        plugins: [
          [
            "react-remove-properties",
            {
              properties: ["testID"],
            },
          ],
        ],
      },
    },
  };
}
