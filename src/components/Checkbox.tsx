import { FC } from 'react';
import { useMutation, useQueryClient } from 'react-query';

import { updateTodo } from '../utils/fetch';
import { TodoData } from '../utils/types';

type CheckboxProps = { item: TodoData };

export const Checkbox: FC<CheckboxProps> = ({ item }) => {
  const client = useQueryClient();

  const { mutate: update } = useMutation({
    mutationFn: () => updateTodo(item.id, !item.done),
    onSuccess: () => {
      client.invalidateQueries({ queryKey: ['todos'] });
    },
  });

  return (
    <>
      <input
        type="checkbox"
        id={item.id.toString()}
        className="checkbox"
        checked={item.done}
        onChange={() => update()}
      />
      <label htmlFor={item.id.toString()} />
    </>
  );
};
