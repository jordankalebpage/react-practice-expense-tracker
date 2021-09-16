import {useState} from "react";

import './NewExpense.css';
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
    const [showExpenseForm, setShowExpenseForm] = useState(false);

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };

        console.log(expenseData);

        props.onAddExpense(expenseData);
    };

    const hideExpenseFormHandler = () => {
        setShowExpenseForm(false);
    };

    const showExpenseFormHandler = () => {
        setShowExpenseForm(true);
    }

    return (
        <div className="new-expense">
            {!showExpenseForm && <button onClick={showExpenseFormHandler}>Add New Expense</button>}
            {showExpenseForm && <ExpenseForm
                onSaveExpenseData={saveExpenseDataHandler}
                onCancel={hideExpenseFormHandler}
            />}
        </div>
    );
};

export default NewExpense;
