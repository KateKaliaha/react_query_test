import { FC } from 'react';

type ErrProps = {
  mes: string;
};

export const Err: FC<ErrProps> = ({ mes }) => {
  return (
    <div className="blockWrapper">
      <div>An error has occurred: + {mes}</div>
    </div>
  );
};
