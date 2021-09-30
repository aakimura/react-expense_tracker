import React, { useState }from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
    const [toggleForm, setToggleForm] = useState(false);

    const toggleFormHandler = () => {
        setToggleForm(!toggleForm);
    }

    const SaveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData);
    };

    let formContent = <button onClick={toggleFormHandler}>Add new expense</button>

    if (toggleForm) {
        formContent = <ExpenseForm onSaveExpenseData={SaveExpenseDataHandler}
                                   onCancel={toggleFormHandler}/>
    }

    return (
        <div className="new-expense">
            {formContent}
        </div>
    );
};

export default NewExpense;