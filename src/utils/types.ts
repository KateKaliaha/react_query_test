type GifImage = {
  downsized_still: {
    url: string;
  };
};

export type GifData = {
  type: string;
  id: string;
  url: string;
  images: GifImage;
  title: string;
};

export type GifsProps = {
  data: GifData[];
};

export type TodoData = {
  id: number;
  title: string;
  done: boolean;
};

export type TodoBodyProps = Omit<TodoData, 'id'>;
