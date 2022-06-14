import InfiniteScroll from "react-infinite-scroll-component";
import { useEffect } from "react";
import { Pokemon } from "components";
import { useAppContext } from "context";
import "styles/home.css";

export const Pokemons = () => {
  const { pokemons, getPokemons } = useAppContext();
  useEffect(() => {
    getPokemons();
    console.log("sjdkvlsjk");
  }, []);

  console.log(pokemons);
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
          {pokemons?.map((pokemon) => (
            <Pokemon key={pokemon.url} name={pokemon.name} url={pokemon.url} />
          ))}
        </div>
      </div>
    </div>
  );
};
