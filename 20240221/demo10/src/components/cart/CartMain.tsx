// Redux/Redux Toolkit
import { useDispatch, useSelector } from "react-redux";
import cartSlice from "../../state/cartSlice";
import IProduct from "../../models/IProduct";

function CartMain() {
  // Redux/Redux Toolkit
  // Read from state on global store
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { items } = useSelector((state: any) => state.cart);
  // Update state in global store
  const { clearCart, removeFromCart } = cartSlice.actions;
  // To execute actions on store
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const dispatch = useDispatch<any>();
  return (
    <>
      <h3>Cart</h3>
      {items?.length > 0 && (
        <>
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>Name</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>SubTotal</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {items.map((p: IProduct) => (
                <tr key={p.id}>
                  <td>{p.productName}</td>
                  <td>{p.unitPrice}</td>
                  <td>{p.quantity}</td>
                  <td>{p.unitPrice * p.quantity}</td>
                  <td>
                    <i
                      className="bi bi-bag-dash-fill"
                      style={{ color: "red", cursor: "pointer" }}
                      onClick={() => dispatch(removeFromCart(p))}
                    ></i>
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr>
                <th colSpan={2}></th>
                <th>Total</th>
                <td colSpan={2}>
                  {items.reduce((a: number, c: IProduct) => a + (c.unitPrice*c.quantity), 0)}
                </td>
              </tr>
            </tfoot>
          </table>
          <button
            className="btn btn-secondary"
            onClick={() => dispatch(clearCart())}
          >
            Clear cart
          </button>
        </>
      )}
      {items?.length === 0 && <p>Cart is empty!</p>}
    </>
  );
}

export default CartMain;
