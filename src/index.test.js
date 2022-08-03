import React from 'react';
import App from './App';

jest.mock("react-dom");

describe("Testing Application Root", () => {

    it("should render the app inside div which has root id", () => {
        expect(global.document.getElementById("root")).toBeDefined();
    });

    it("should render App component", () => {
        expect(App).toBeDefined();
    });

});