import React, {useEffect} from 'react';
import styles from './app.module.css';
import { useState } from 'react';
import { TodoList } from './components/todo/todo-list';
import { InputWithButton } from './components/text-field/input-with-button';
import { Loader } from './components/loader/loader';
import {useRequestAddTodo, useRequestDeleteTodo, useRequestUpdateStatus, useRequestGetTodos, useRequestUpdateTodo} from './hook';
import { Modal } from './components/modal/modal';
import {Search} from "./components/search/search";

export const App = () => {
	const [modalActive, setModalActive] = useState(false);
	const [refreshTodosFlag, setRefreshTodosFlag] = useState(false);
	const refreshTodos = () => setRefreshTodosFlag(!refreshTodosFlag);
	const { todoList, isLoading } = useRequestGetTodos(refreshTodosFlag);
	const { isCreated, requestAddTodo, addInputValue, setAddInputValue } = useRequestAddTodo(refreshTodos);
	const { isUpdated, requestUpdateStatus } = useRequestUpdateStatus(todoList,	refreshTodos);
	const { isDeleted, requestDeleteTodo } = useRequestDeleteTodo(todoList, refreshTodos);
	const { isEdited, editableElementId, requestUpdateTodo, setEditableElementId } = useRequestUpdateTodo(todoList, refreshTodos);

	const [filteredTodoList, setFilteredTodoList] = useState(todoList)

	useEffect(() => {
		setFilteredTodoList(todoList)
	}, [todoList])
	const searchingTodo = (search) => {
		setFilteredTodoList(filteredTodoList.filter((todoList) => todoList.todo.includes(search)));
	};

	const onClickChange = (id) => setEditableElementId(id);


	return (
		<div className={styles.app}>
			<Search onClick={searchingTodo} />
			<Modal
				active={modalActive}
				setActive={setModalActive}
				addInputValue={addInputValue}
				setAddInputValue={setAddInputValue}
				onCreate={requestAddTodo}
				isCreated={isCreated}
			/>
			{isLoading ? <Loader /> : todoList.length ?
				<TodoList
					todoList={filteredTodoList}
					isUpdated={isUpdated}
					onChange={requestUpdateStatus}
					onClick={requestDeleteTodo}
					isDeleted={isDeleted}
					isEdited={isEdited}
					onClickChange={onClickChange}
					editableElementId={editableElementId}
					onBlur={requestUpdateTodo}
				/> :
				<div className={styles.text}>Список задач пуст</div>
			}
		</div>
	);
};
