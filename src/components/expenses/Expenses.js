import React, { useState } from 'react';

import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';
import Card from "../ui/Card";

import './Expenses.css';

const Expenses = (props) => {
    // Set state for year filter
    const [selectedYear, setSelectedYear] = useState('all');

    // Create filtered list
    const filterByYearHandler = (selectedFilter) => {
        setSelectedYear(selectedFilter);
    };

    let filteredExpenses = props.expenses;

    if (selectedYear !== 'all') {
        filteredExpenses = props.expenses.filter(expense => {
            return expense.date.getFullYear().toString() === selectedYear;
        }); 
    }
    

    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter onAddFilter={filterByYearHandler}
                                addSelectedYear={selectedYear} />
                <ExpensesChart expenses={filteredExpenses}/>
                <ExpensesList items={filteredExpenses} />
            </Card>
        </div>
    )
}

export default Expenses;