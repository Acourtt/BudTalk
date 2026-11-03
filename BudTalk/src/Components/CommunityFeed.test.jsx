import { render, screen } from "@testing-library/react";
import { act } from "react";
import { describe, it, expect, beforeEach } from "vitest";
import CommunityFeed from "./CommunityFeed";


describe("CommunityFeed", ()=> {
    beforeEach(() => {
        localStorage.clear();
    });

    it("muestra las publicaciones iniciales", async () => {
        await act(async () => {
            render(<CommunityFeed/>);
        });

        expect(
             screen.getByRole("heading", {
                name: "Conversaciones recientes",
            })
        ).toBeInTheDocument();

        expect(
            screen.getByText("¿Qué opinan de Blue Dream?")
        ).toBeInTheDocument();
    });
});