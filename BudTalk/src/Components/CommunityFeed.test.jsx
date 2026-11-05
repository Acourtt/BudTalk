import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { act } from "react";
import { describe, it, expect, beforeEach, afterEach, vi } from "vitest";
import CommunityFeed from "./CommunityFeed";


describe("CommunityFeed", ()=> {
    beforeEach(() => {
        localStorage.clear();
    });

    afterEach(() => {
            vi.restoreAllMocks();
        });

// PRUEBA 1: mostrar publicaciones 

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

    
// PRUEBA 2: crear publicación

it("permite crear una publicación", async () => {
    const user = userEvent.setup();
    
    await act(async () => {

        render(<CommunityFeed/>);
    });

     const title = "Mi primera publicación de prueba";
     const content = "Estoy probando la creación de publicaciones.";

     await user.type(
        screen.getByPlaceholderText("Título de tu publicación"),
        title
     );

     await user.selectOptions(
        screen.getByRole("combobox"),
        "Blue Dream"
     );

     await user.type(
        screen.getByPlaceholderText(
            "¿Qué quieres compartir con la comunidad?"
        ),
        content
     );

     await user.click(
        screen.getByRole("button", { name: "Publicar" })
     );

     const createdHeading = screen.getByRole("heading", {
        name: title,
     });

     expect(createdHeading).toBeInTheDocument();
     expect(screen.getByText(content)).toBeInTheDocument();

     const createdCard = createdHeading.closest(".post-card");

     expect(createdCard).not.toBeNull();

     expect(
        within(createdCard).getByText("Blue Dream")
     ).toBeInTheDocument();
});


// PRUEBA 3: editar 


it("permite editar una publicación", async () => {
    const user = userEvent.setup();

    await act(async () => {
        render(<CommunityFeed />)
    });

    const originalTitle = "¿Qué opinan de Blue Dream?"

    const originalHeading = screen.getByRole("heading", {
        name: originalTitle,
    });

    const originalCard = originalHeading.closest(".post-card");

    await user.click(
        within(originalCard).getByRole("button", { name: "Editar" })
    );

    const titleInpunt = screen.getByPlaceholderText(
        "Título de tu publicación"
    );

    await user.clear(titleInpunt);
    await user.type(titleInpunt, "Mi publicación editada");

    const contentInput = screen.getByPlaceholderText(
        "¿Qué quieres compartir con la comunidad?"
    );

    await user.clear(contentInput);
    await user.type(contentInput, "Contenido actualizado.");

    await user.selectOptions(
        screen.getByRole("combobox"),
        "OG Kush"
    );

    await user.click(
        screen.getByRole("button", { name: "Guardar cambios" })
    );

    const updatedHeading = screen.getByRole("heading", {
        name: "Mi publicación editada",
    });

    expect(updatedHeading).toBeInTheDocument();

    expect(
        screen.queryByRole("heading", { name: originalTitle })
    ).not.toBeInTheDocument();

    const updatedCard = updatedHeading.closest(".post-card");

    expect(
        within(updatedCard).getByText("OG Kush")
    ).toBeInTheDocument();
});


// PRUEBA 4: Cancelar edición

it("permite cancelar una edición", async () => {
    const user = userEvent.setup();

    await act(async () => {
        render(<CommunityFeed />);
    })

    const originalTitle = "¿Qué opinan de Blue Dream?";

    const originalHeading = screen.getByRole("heading", {
        name: originalTitle,
    });

    const originalCard = originalHeading.closest(".post-card");

    await user.click(
        within(originalCard).getByRole("button", { name: "Editar" })
    );

    const titleInput = screen.getByPlaceholderText(
        "Título de tu publicación"
    );

    await user.clear(titleInput);
    await user.type(titleInput, "Este cambio será cancelado");

    await user.click(
        screen.getByRole("button", { name: "Cancelar edición" })
    );

    expect(
        screen.getByRole("heading", { name: originalTitle })
    ).toBeInTheDocument();

    expect(
        screen.queryByRole("heading", {
            name: "Este cambio será cancelado"
        })
    ).not.toBeInTheDocument();

    expect(titleInput).toHaveValue("")
});


// PRUEBA 5: Eliminar

it("permite eliminar una publicación", async () => {
    const user = userEvent.setup();

    await act(async () => {
        render(<CommunityFeed />);
    })

    const targetTitle = "¿Qué opinan de Blue Dream?";

    const targetHeading = screen.getByRole("heading", {
        name: targetTitle,
    });

    const targetCard = targetHeading.closest(".post-card");

    vi.spyOn(window, "confirm").mockReturnValue(true);

    await user.click(
        within(targetCard).getByRole("button", { name: "Eliminar" })
    );
    
    expect(
        screen.queryByRole("heading", { name: targetTitle })
    ).not.toBeInTheDocument();

    const savedPosts = JSON.parse(
        localStorage.getItem("budtalk-posts")
    );

    expect(savedPosts).toHaveLength(2);

    expect(
        savedPosts.some((post) => post.title === targetTitle)
    ).toBe(false)
});

});


