// test-utils.js
import { render } from "@testing-library/react";
// reference https://dev.to/maciekgrzybek/setup-next-js-with-typescript-jest-and-react-testing-library-28g5
// Add in any providers here if necessary:
// (ReduxProvider, ThemeProvider, etc)
const Providers = ({ children }) => {
  return children;
};

const customRender = (ui, options = {}) =>
  render(ui, { wrapper: Providers, ...options });

// re-export everything
export * from "@testing-library/react";

// override render method
export { customRender as render };
