import {topics} from "@/app/data/topics";
import {DataTable} from "primereact/datatable";
import {Column} from "primereact/column";

export default function Home() {
  return (
    <>
      <DataTable value={topics} showGridlines header="Article Topics" tableStyle={{minWidth: '60rem'}}>
        <Column field="id" header="Id"></Column>
        <Column field="description" header="Description"></Column>
      </DataTable>
    </>
  );
}
