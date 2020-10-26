import React from "react";
    // Using render and screen from test-utils.js instead of
    // @testing-library/react
import { render, screen } from "../../test-utils";
import Header from '../../../src/components/header';

    
    describe("header", () => {
      it("should render the header", () => {
        render(<Header />);
    
        const heading = screen.getByText(
          /Reddit/i
        );
    
        // we can only use toBeInTheDocument because it was imported
        // in the jest.setup.js and configured in jest.config.js
        expect(heading).toBeInTheDocument();
    });

      });