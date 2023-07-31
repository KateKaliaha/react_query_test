import { FC } from 'react';

type PageBtnProps = {
  name: string;
  clickBtn: () => void;
  pageNumber: number;
  confine: number;
};

export const PageBtn: FC<PageBtnProps> = ({ name, clickBtn, pageNumber, confine }) => {
  return (
    <button onClick={clickBtn} disabled={pageNumber === confine ? true : false}>
      {name}
    </button>
  );
};
