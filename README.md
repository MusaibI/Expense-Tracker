# Expense Tracker App

This Expense Tracker App is built using React.js and Firebase Firestore. It allows users to track their expenses by adding, editing, and deleting transactions. Here's a brief overview of the project structure and functionalities:

## Project Structure

The project consists of the following main components:

1. **App.js:** The main component that orchestrates the state management, Firebase interactions, and rendering of child components.
2. **ExpenseForm:** Component for adding new expenses or editing existing ones.
3. **ExpenseInfo:** Component that displays the balance, total income, and total expenses.
4. **ExpenseList:** Component for displaying the list of transactions.
5. **Transaction:** Component representing each individual transaction with options to edit or delete.

## Firebase Integration

The project integrates with Firebase Firestore for real-time data storage and retrieval. It utilizes Firestore methods like `addDoc`, `setDoc`, `getDocs`, and `deleteDoc` to interact with the database.

## Features

- **Add Expense:** Users can add new expenses by entering the text and amount. Negative amounts represent expenses, while positive amounts represent income.
- **Edit Expense:** Expenses can be edited by clicking the edit icon next to each transaction. The ExpenseForm component facilitates editing.
- **Delete Expense:** Transactions can be deleted by clicking the delete icon next to each transaction.
- **Balance Calculation:** The ExpenseInfo component dynamically calculates and displays the total balance, income, and expenses based on the transactions.

## Getting Started

To run the project locally, follow these steps:

1. Clone the repository to your local machine.
2. Navigate to the project directory and run `npm install` to install dependencies.
3. Create a Firebase project and set up Firestore.
4. Update the Firebase configuration in the `firebaseInit.js` file with your Firebase project details.
5. Run `npm start` to start the development server.

## Technologies Used

- React.js
- Firebase Firestore
- React Toastify for notifications
