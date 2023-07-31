import { FC } from 'react';

import { GifData } from '../utils/types';

type GifItemProps = { item: GifData };

export const GifItem: FC<GifItemProps> = ({ item }) => {
  return (
    <div key={item.id}>
      <img src={item.images.downsized_still.url} alt="gif" className="image" />
      <h3> {item.title}</h3>
    </div>
  );
};
