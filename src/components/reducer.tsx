import { useReducer } from "react";

interface Note {
  content: string;
}

type Actions =
  | { type: "add"; content: string }
  | { type: "remove"; id: number };

type State = Note[];

const Reducer = (state: State, action: Actions) => {
  console.log(state);
  switch (action.type) {
    case "add":
      return [...state, { content: action.content }];

    case "remove":
      return state.filter((_, item) => action.id !== item);

    default:
      return [...state];
  }
};

const Main: React.FC = () => {
  const [note, dispatch] = useReducer(Reducer, []);

  return (
    <div>
      <h1>helloooooo</h1>
      <button
        onClick={() => {
          dispatch({ type: "add", content: "not1" });
        }}>
        lup
      </button>
    </div>
  );
};
export default Main;
