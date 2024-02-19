import withProductSearch from "../../hoc/withProductSearch";
import SimpleList from "./SimpleList";
import TableList from "./TableList";
import TableList2 from "./TableList2";

function HighOrderTest() {
  const SimpleListWrapped = withProductSearch(SimpleList,'queso');
  const TableListWrapped = withProductSearch(TableList,'queso');
  return (
    <>
      <hr />
      <h5>High-Order Components Test</h5>
      {/* <SimpleListWrapped/> */}
      {/* <TableListWrapped/> */}
      <TableList2/>
    </>
  );
}

export default HighOrderTest;
