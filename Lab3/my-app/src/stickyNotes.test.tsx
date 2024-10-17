import { render, screen, fireEvent } from "@testing-library/react";
import { StickyNotes } from "./stickyNotes";
test("renders create note form", () => {
 render(<StickyNotes />);
 const createNoteButton = screen.getByText("Create Note");
 expect(createNoteButton).toBeInTheDocument();
});
