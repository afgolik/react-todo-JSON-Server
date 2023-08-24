import { TODO_LIST } from '../utils/url';
import { useState } from 'react';

export const useRequestUpdateTodo = (todoList, refreshTodos) => {
	const [isEdited, setIsEdited] = useState(false);
	const [editableElementId, setEditableElementId] = useState(null);

	const requestUpdateTodo = (id, value) => {
		setIsEdited(true);
		todoList.map((todo) => {
			if (todo.id === id) {
				fetch(`${TODO_LIST}/${id}`, {
					method: 'PUT',
					headers: { 'Content-Type': 'application/json;charset=utf-8' },
					body: JSON.stringify({
						todo: value,
						completed: todo.completed,
					}),
				})
					.then((rawResponse) => rawResponse.json())
					.then((response) => {
						console.log('Задача изменена:', response);
						refreshTodos();
					})
					.finally(() => {
						setIsEdited(false);
						setEditableElementId(null);
					});
			}
		});
	};
	return {
		isEdited,
		editableElementId,
		requestUpdateTodo,
		setEditableElementId,
	};
};
