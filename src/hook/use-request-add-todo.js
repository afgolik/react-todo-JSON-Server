import { TODO_LIST } from '../utils/url';
import { useState } from 'react';

export const useRequestAddTodo = (refreshTodos) => {
	const [isCreated, setIsCreated] = useState(false);
	const [addInputValue, setAddInputValue] = useState('');

	const requestAddTodo = () => {
		setIsCreated(true);
		fetch(TODO_LIST, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json;charset=utf-8' },
			body: JSON.stringify({
				todo: addInputValue,
				completed: false,
			}),
		})
			.then((rawResponse) => rawResponse.json())
			.then((response) => {
				console.log('Новая задача добавлена:', response);
				refreshTodos();
			})
			.finally(() => {
				setIsCreated(false);
				setAddInputValue('');
			});
	};
	return {
		isCreated,
		requestAddTodo,
		addInputValue,
		setAddInputValue,
	};
};
