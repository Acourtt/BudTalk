import "@testing-library/jest-dom/vitest";
import { afterEach, beforeAll } from "vitest"; 
import { cleanup } from "@testing-library/react";


beforeAll(() => {
    globalThis.IS_REACT_ACT_ENVIRONMENT = true;
});

afterEach(() => {
    cleanup();
});