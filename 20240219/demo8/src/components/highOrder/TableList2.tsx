import withProductSearch from "../../hoc/withProductSearch";
import TableList from "./TableList";

const TableList2 = withProductSearch(TableList,'chai');

export default TableList2

