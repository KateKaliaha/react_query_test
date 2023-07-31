import { useState } from 'react';
import { useQuery } from 'react-query';

import { getGifs } from '../utils/fetch';
import { Err } from './Error';
import { GifItem } from './GifItem';
import { Loading } from './Loading';
import { PageBtn } from './PageBtn';

export const GifsSection = () => {
  const [page, setPage] = useState(0);

  const getNextPage = () => {
    if (page < 20) {
      setPage((prev) => prev + 1);
    }
  };

  const getPrevPage = () => {
    if (page !== 0) {
      setPage((prev) => prev - 1);
    }
  };

  const { isLoading, error, data, isSuccess } = useQuery(
    ['gifs', page],
    () => getGifs(page),
    {
      keepPreviousData: true,
      staleTime: 5000,
    },
  );

  if (isLoading) return <Loading />;

  if (error instanceof Error) return <Err mes={error.message} />;

  return (
    <div className="blockWrapper">
      <h2> Gifs block</h2>
      {isSuccess &&
        data &&
        data.data.map((item) => <GifItem item={item} key={item.id} />)}
      <div className="buttonsWrapper">
        <PageBtn name={'Prev'} clickBtn={getPrevPage} pageNumber={page} confine={0} />
        <h3>{page + 1}</h3>
        <PageBtn name={'Next'} clickBtn={getNextPage} pageNumber={page} confine={20} />
      </div>
    </div>
  );
};
