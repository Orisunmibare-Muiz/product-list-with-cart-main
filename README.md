# React-independent-state-logic

A deep dive into React state management focusing on item isolation within mapped containers.

# The Challenge 
Initially, I had my toggle state in the parent list. Because I was mapping over data, every item was listening to the exact same boolean variable. When I clicked 'Add to Cart' on a Waffle, the Crème Brûlée also thought it was clicked because they shared one single switch.

## The Solution

I learned to create a Child Component. By moving the useState and card UI inside that component, React creates a fresh, private state instance for every single item it renders. Now, each card acts independently.

## Description:

A deep dive into React state management focusing on item isolation within mapped containers. This project demonstrates how to refactor a single global state into independent child components. By encapsulating logic within a ProductCard component, each item in the dessert list maintains its own 'Add to Cart' toggle and UI state without affecting its neighbors. This solves the common issue where clicking one button triggers a state change across an entire mapped array.
