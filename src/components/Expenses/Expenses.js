import {useState} from "react";

import './Expenses.css';
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
    const currentYear = new Date().getFullYear().toString();
    const [filteredYear, setFilteredYear] = useState(currentYear);

    const expenses = props.expenses;
    const filteredExpenses = expenses.filter((expense) =>
        expense.date.getFullYear().toString() === filteredYear);

    const expensesFilterUpdate = (selectedExpensesFilter) => {
        setFilteredYear(selectedExpensesFilter);
    };

    return (
        <Card className="expenses">
            <ExpensesFilter selected={filteredYear} onExpensesFilterUpdate={expensesFilterUpdate}/>
            <ExpensesChart expenses={filteredExpenses}/>
            <ExpensesList items={filteredExpenses}/>
        </Card>
    );
};

export default Expenses;
