import { render, screen, fireEvent } from "@testing-library/react";
import { StickyNotes } from "./stickyNotes";

describe("Create StickyNote", () => {
 test("renders create note form", () => {
   render(<StickyNotes />);

   const createNoteButton = screen.getByText("Create Note");
   expect(createNoteButton).toBeInTheDocument();
 });

 test("create multiple new notes", () => {
   render(<StickyNotes />);

   const createNoteTitleInput = screen.getByPlaceholderText("Note Title");
   const createNoteContentTextarea =
     screen.getByPlaceholderText("Note Content");
   const createNoteButton = screen.getByText("Create Note");

   fireEvent.change(createNoteTitleInput, { target: { value: "Note1" } });
   fireEvent.change(createNoteContentTextarea, {
     target: { value: "Note1Content" },
   });
   fireEvent.click(createNoteButton);

   fireEvent.change(createNoteTitleInput, { target: { value: "Note2" } });
   fireEvent.change(createNoteContentTextarea, {
     target: { value: "Note2Content" },
   });
   fireEvent.click(createNoteButton);

   fireEvent.change(createNoteTitleInput, { target: { value: "Note3" } });
   fireEvent.change(createNoteContentTextarea, {
     target: { value: "Note3Content" },
   });
   fireEvent.click(createNoteButton);

   const newNoteTitle1 = screen.getByText("Note1");
   const newNoteContent1 = screen.getByText("Note1Content");

   expect(newNoteTitle1).toBeInTheDocument();
   expect(newNoteContent1).toBeInTheDocument();

   const newNoteTitle2 = screen.getByText("Note2");
   const newNoteContent2 = screen.getByText("Note2Content");

   expect(newNoteTitle2).toBeInTheDocument();
   expect(newNoteContent2).toBeInTheDocument();

   const newNoteTitle3 = screen.getByText("Note3");
   const newNoteContent3 = screen.getByText("Note3Content");

   expect(newNoteTitle3).toBeInTheDocument();
   expect(newNoteContent3).toBeInTheDocument();
 });

 test('updating a note', () => {
    render(<StickyNotes />);

   const createNoteTitleInput = screen.getByPlaceholderText("Note Title");
   const createNoteContentTextarea =
     screen.getByPlaceholderText("Note Content");
   const createNoteButton = screen.getByText("Create Note");

   fireEvent.change(createNoteTitleInput, { target: { value: "Note1" } });
   fireEvent.change(createNoteContentTextarea, {
     target: { value: "Note1Content" },
   });
   fireEvent.click(createNoteButton);

   //updating note title
   const title = screen.getByText("Note1");
   fireEvent.input(title, {target: {textContent: "updatedTitle"},});

   expect(title).toHaveTextContent("updatedTitle");

   //updating note content
   const content = screen.getByText("Note1Content");
   fireEvent.input(content, {target: {textContent: "updatedContent"},});

   expect(content).toHaveTextContent("updatedContent");
 });

 test('deleting note', () => {
    render(<StickyNotes />);
    const createNoteTitleInput = screen.getByPlaceholderText("Note Title");
   const createNoteContentTextarea =
     screen.getByPlaceholderText("Note Content");
   const createNoteButton = screen.getByText("Create Note");

   fireEvent.change(createNoteTitleInput, { target: { value: "Note1" } });
   fireEvent.change(createNoteContentTextarea, {
     target: { value: "Note1Content" },
   });
   fireEvent.click(createNoteButton);

   expect(screen.getByText("Note1")).toBeInTheDocument();
   expect(screen.getByText("Note1Content")).toBeInTheDocument();

    const deleteButton = screen.getByTestId('delete');

    fireEvent.click(deleteButton);
    expect(screen.queryByText("Note1")).not.toBeInTheDocument();
    expect(screen.queryByText("Note1Content")).not.toBeInTheDocument();

 });
});

