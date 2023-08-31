import {useEffect, useState} from 'react';

export const useSortTodo = (searchedTodoList) => {
	const [sortedTodoList, setSortedTodoList] = useState(searchedTodoList);
	const [isSorted, setIsSorted] = useState(false);

	useEffect(() => {
		setSortedTodoList([...searchedTodoList]);
	}, [searchedTodoList]);
	const sortTodo = () => {
		if (isSorted) {
			setIsSorted(false);
			setSortedTodoList(searchedTodoList);
		} else {
			setIsSorted(true);
			setSortedTodoList(
				sortedTodoList.sort((a, b) => {
					let todoA = a.todo.toUpperCase();
					let todoB = b.todo.toUpperCase();
					return todoA < todoB ? -1 : 1;
				}),
			);
		}
	};
	return {
		isSorted,
		sortedTodoList,
		sortTodo,
	};
};
