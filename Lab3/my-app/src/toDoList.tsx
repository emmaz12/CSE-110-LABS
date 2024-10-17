import React, { ChangeEventHandler } from "react";
import "./App.css";
import { useState } from "react";
import { GroceryItem } from "./types";
import { dummyGroceryList } from "./constants";
import { useParams } from "react-router-dom";

export function ToDoList() {
 const { name } = useParams();
 const [numRemainingItems, setNumRemainingItems] = useState(0);

 let [items, setItems] = useState(dummyGroceryList);

 function handleCheckboxClick(e: React.ChangeEvent<HTMLInputElement>) {
   const checkbox: HTMLInputElement = e.target as HTMLInputElement;

   const itemName = checkbox.name;

   const itemIndex = items.findIndex((item) => item.name === itemName);
   items[itemIndex] = { name: itemName, isPurchased: checkbox.checked };

   const uncheckedItems = items.filter((item) => !item.isPurchased);
   const checkedItems = items.filter((item) => item.isPurchased);

   const newItems = uncheckedItems.concat(checkedItems);

   setItems(newItems);

   const diff = checkbox.checked ? 1 : -1;

   setNumRemainingItems(numRemainingItems + diff);
 }

 return (
   <center>
     <div>
       <h1>{name}'s To Do List</h1>
       Items bought: {numRemainingItems}
       <form action=".">
         {items.map((item) => ListItem(item, handleCheckboxClick))}
       </form>
     </div>
   </center>
 );
}

function ListItem(item: GroceryItem, changeHandler: ChangeEventHandler) {
 return (
   <div>
     <input
       type="checkbox"
       data-testid = {item.name}
       onChange={changeHandler}
       checked={item.isPurchased}
       name={item.name}
     />
     {item.name}
   </div>
 );
}