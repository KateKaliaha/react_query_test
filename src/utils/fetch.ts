import { GifsProps, TodoBodyProps, TodoData } from './types';

export const getGifs = async (page: number): Promise<GifsProps> => {
  const resp = await fetch(
    `https://api.giphy.com/v1/gifs/trending?api_key=xlifeXzW2GxsdA8uh0wHcpbO2uMcbK9q&limit=5&offset=${
      page * 5
    }`,
  );
  if (!resp.ok) throw new Error('Failed response!');
  return resp.json();
};

export const getTodos = async (): Promise<TodoData[]> => {
  const resp = await fetch(`http://localhost:3004/todos`);
  if (!resp.ok) throw new Error('Failed response!');
  return resp.json();
};

export const addTodo = async (body: TodoBodyProps) => {
  const resp = await fetch(`http://localhost:3004/todos`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({ ...body }),
  });

  if (!resp.ok) throw new Error('Failed response!');
};

export const updateTodo = async (id: number, done: boolean) => {
  const resp = await fetch(`http://localhost:3004/todos/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({ done }),
  });

  if (!resp.ok) throw new Error('Failed response!');

  return resp.json();
};
