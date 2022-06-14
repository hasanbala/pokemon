import { useEffect } from "react";

export const PokemonDetail = (props: Props) => {
  // useEffect(() => {
  //   setLoading(true);
  //   getPokemonDetails(props.url)
  //     .then((res) => setPokemonDetails(res))
  //     .catch((err) => console.log(err))
  //     .finally(() => setLoading(false));
  // }, [props.url]);

  return <div></div>;
};

interface Props {
  id: number;
  pageCount: number;
  title: string;
  description: string;
  thumbnail: {
    path: string;
    extension: string;
  };
}
