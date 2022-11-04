import InfiniteScroll from "react-infinite-scroll-component";
import { useEffect } from "react";
import { Pokemon } from "components";
import { useAppDispatch, useAppSelector } from "hooks";
import "styles/pokemon.scss";
import { getPokemons } from "features";

export const Pokemons = () => {
  const pokemons = useAppSelector((state) => state.pokemons);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getPokemons());
  }, [dispatch]);

  return (
    <div className="products">
      <div className="products-sub">
        {/* <InfiniteScroll
          dataLength={pokemons.length}
          next={() => getPokemons(pokemons.length)}
          style={{ display: "flex", flexDirection: "column-reverse" }}
          hasMore={true}
          loader={<h4>{""}</h4>}>""
        </InfiniteScroll> */}
        <div className="products-caption">
          {pokemons.data?.map((pokemon) => (
            <Pokemon key={pokemon.url} name={pokemon.name} url={pokemon.url} />
          ))}
        </div>
      </div>
    </div>
  );
};
