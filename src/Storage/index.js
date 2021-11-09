import { AuthContextProvider } from "./auth-context";
import { CartContextProvider } from "./cart-context";

export function Provider({children}) {
  return (
    <AuthContextProvider>
      <CartContextProvider>
        {children}
      </CartContextProvider>
    </AuthContextProvider>
  )
}