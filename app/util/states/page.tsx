import {states} from "@/app/data/states";

export default function Home() {
  return (
    <>
      <table>
        <thead>
          <tr className="border-bottom border-primary">
            <th>Id</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
        {states.map(state =>
          <tr key={state.id} className="border-bottom border-primary">
            <td>{state.id}</td>
            <td>{state.name}</td>
          </tr>
        )}
        </tbody>
      </table>
    </>
  );
}
