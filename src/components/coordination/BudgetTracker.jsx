import React, { useState } from "react";

const BudgetTracker = () => {
  const [expenses, setExpenses] = useState([]);
  const [expense, setExpense] = useState("");
  const [amount, setAmount] = useState(0);

  const addExpense = () => {
    setExpenses([...expenses, { expense, amount }]);
    setExpense("");
    setAmount(0);
  };

  return (
    <div className="budget-tracker-container p-4">
      <h2 className="text-xl font-bold mb-2">Budget Tracker</h2>
      <input
        type="text"
        placeholder="Expense"
        value={expense}
        onChange={(e) => setExpense(e.target.value)}
        className="border p-2 mb-2 rounded"
      />
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(Number(e.target.value))}
        className="border p-2 mb-2 rounded"
      />
      <button
        onClick={addExpense}
        className="bg-red-500 text-white px-4 py-2 rounded"
      >
        Add Expense
      </button>
      <ul className="mt-4">
        {expenses.map((exp, index) => (
          <li key={index} className="mb-1">
            {exp.expense}: ${exp.amount}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BudgetTracker;
