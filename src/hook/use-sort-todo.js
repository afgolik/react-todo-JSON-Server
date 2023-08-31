import { useState } from 'react';

export const useSortTodo = (searchedTodoList, setSearchedTodoList) => {
	const [isSorted, setIsSorted] = useState(false);

	const sortTodo = () => {
		setIsSorted(true);
		setSearchedTodoList(
			searchedTodoList.sort((a, b) => {
				let todoA = a.todo.toUpperCase();
				let todoB = b.todo.toUpperCase();
				return todoA < todoB ? -1 : 1;
			}),
		);
	};
	return {
		isSorted,
		sortTodo,
	};
};
