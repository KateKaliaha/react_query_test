import { FC, FormEvent, useRef } from 'react';
import { UseMutateFunction } from 'react-query';

import { TodoBodyProps } from '../utils/types';

type FormProps = {
  func: UseMutateFunction<void, unknown, TodoBodyProps, unknown>;
};

export const Form: FC<FormProps> = ({ func }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const submitForm = async (ev: FormEvent) => {
    ev.preventDefault();
    const input = inputRef.current;

    if (input) {
      if (input.value) {
        func({ title: input.value, done: false });
        input.value = '';
      }
    }
  };

  return (
    <form className="form" onSubmit={(event) => submitForm(event)}>
      <input ref={inputRef} type="text" />
      <button type="submit">Add todo</button>
    </form>
  );
};
