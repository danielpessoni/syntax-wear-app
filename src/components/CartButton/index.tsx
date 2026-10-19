import IconCart from '@/assets/images/icon-cart.png'
import { useContext } from "react"
import { CartContext } from "../../contexts/CartContext"

interface CartButtonProps {
    onClick?: () => void;
}

export const CartButton = ({ onClick }: CartButtonProps) => {

    const { cart } = useContext(CartContext);

    return (
        <button className="cursor-pointer relative flex items-center"
            onClick={onClick}>
            <img src={IconCart} alt="Ícone de Carrinho de Compras" />
            {cart.length > 0 && (
                <span className="absolute -top-3 -right-2 bg-error text-white rounded-full h-5 w-5 flex items-center justify-center text-xs">
                    {cart.length}
                </span>
            )}
        </button>
    )
}