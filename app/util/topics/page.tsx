import {topics} from "@/app/data/topics";

export default function Home() {
  return (
    <>
      <table>
        <thead>
          <tr className="border-bottom border-primary">
            <th>Id</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
        {topics.map(topic =>
          <tr key={topic.id} className="border-bottom border-primary">
            <td>{topic.id}</td>
            <td>{topic.description}</td>
          </tr>
        )}
        </tbody>
      </table>
    </>
  );
}
