import {states} from "@/app/data/states";
import {topics} from "@/app/data/topics";

export default function Home() {
  return (
    <div>
      <h1>Article Topics</h1>
      <ul>
        {topics.map((topic) => (
          <li key={topic.id}>id: {topic.id}, name: {topic.description}</li>
        ))}
      </ul>
    </div>
  );
}
