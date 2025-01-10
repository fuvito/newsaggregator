import {states} from "@/app/data/states";
import {DataTable} from "primereact/datatable";
import {Column} from "primereact/column";

export default function Home() {
  return (
    <>
      <DataTable value={states} showGridlines header="US States" tableStyle={{minWidth: '60rem'}}>
        <Column field="id" header="Id"></Column>
        <Column field="name" header="Name"></Column>
      </DataTable>
    </>
  );
}
