import {topics} from "@/app/data/topics";
import {DataTable} from "primereact/datatable";
import {Column} from "primereact/column";

export default function Home() {
  return (
    <>
      <DataTable value={topics} showGridlines stripedRows header="Article Topics">
        <Column field="id" header="Id"></Column>
        <Column field="description" header="Description"></Column>
      </DataTable>
    </>
  );
}
