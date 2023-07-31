import { useMutation, useQuery, useQueryClient } from 'react-query';

import { addTodo, getTodos } from '../utils/fetch';
import { Err } from './Error';
import { Form } from './Form';
import { Loading } from './Loading';
import { TodoList } from './TodoList';

export const TodoSection = () => {
  const { isLoading, error, data, isSuccess } = useQuery(['todos'], () => getTodos(), {
    keepPreviousData: true,
    staleTime: 5000,
  });
  const client = useQueryClient();
  const { mutate: add } = useMutation({
    mutationFn: addTodo,
    onSuccess: () => {
      client.invalidateQueries({ queryKey: ['todos'] });
    },
  });

  if (isLoading) return <Loading />;

  if (error instanceof Error) return <Err mes={error.message} />;

  return (
    <div className="blockWrapper">
      <h2> Todo list block</h2>
      <Form func={add} />
      {isSuccess && data && <TodoList data={data} />}
    </div>
  );
};
