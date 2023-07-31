import { FC } from 'react';

import { TodoData } from '../utils/types';
import { Checkbox } from './Checkbox';

type TodoListProps = { data: TodoData[] };

export const TodoList: FC<TodoListProps> = ({ data }) => {
  return (
    <ul className="todoList">
      {data.map((item: TodoData) => (
        <li className="todoItem" key={item.id}>
          <Checkbox item={item} />
          <h3 className="todoTitle"> {item.title}</h3>
        </li>
      ))}
    </ul>
  );
};
