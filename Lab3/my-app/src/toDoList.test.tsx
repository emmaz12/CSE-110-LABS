import { render, screen, fireEvent } from "@testing-library/react";
import { ToDoList } from "./toDoList";

describe('Todo List', () => {
    test('items are displaying', () =>{
        render(<ToDoList />);
        //items are displaying as expected
        expect(screen.getByText("Apples")).toBeInTheDocument();
        expect(screen.getByText("Bananas")).toBeInTheDocument();
    });

    test('Items bought matches number of checked boxes', () => {
        render(<ToDoList/>)

        expect(screen.getByText("Items bought: 0")).toBeInTheDocument();
        const bananasCheckbox = screen.getByTestId('Bananas')
        fireEvent.click(bananasCheckbox);

        expect(screen.getByText("Items bought: 1")).toBeInTheDocument();

        const applesCheckbox = screen.getByTestId('Apples')
        fireEvent.click(applesCheckbox);

        expect(screen.getByText('Items bought: 2')).toBeInTheDocument();
    });

})