import {states} from "@/app/data/states";

export default function Home() {
  return (
    <div>
      <h1>US States</h1>
      <ul>
        {states.map((state) => (
          <li key={state.id}>id: {state.id}, name: {state.name}</li>
        ))}
      </ul>
    </div>
  );
}
