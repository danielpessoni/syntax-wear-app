import Logo from '@/assets/images/Logo.png'
import IconUser from '@/assets/images/Icon-User.png'
import IconAbout from '@/assets/images/icon-about.png'
import IconCart from '@/assets/images/icon-cart.png'
import { Link } from '@tanstack/react-router'
import { ShoppingCart } from '../ShoppingCart'

export const Header = () => {
    return (
        <div className="relative">
            <header className="fixed top-10 left-0 right-0 z-10 mx-10">
                <div className='bg-white text-black max-w-330 mx-auto flex justify-between items-center py-3 px-7 rounded-2xl mt-5'>
                    <Link to="/">
                        <img className='w-32 md:w-36' src={Logo} alt="Logo SytaxWear" />
                    </Link>
                    <nav className='hidden md:flex md:flex-1 md:justify-center'>
                        <ul className='flex items-center justify-center gap-10 md:max-[1000px]:gap-[clamp(0.625rem,1.4vw,0.875rem)]'>
                            <li><a href="#">Masculino</a></li>
                            <li><a href="#">Feminino</a></li>
                            <li><a href="#">Outlet</a></li>
                        </ul>
                    </nav>

                    <nav className='md:flex-1'>
                        <ul className='flex gap-4 md:w-full md:items-center md:justify-end md:gap-10 md:max-[1000px]:gap-[clamp(0.5rem,1.2vw,0.75rem)]'>
                            <li className='hidden md:block'><a href="#">Nossas Lojas</a></li>
                            <li className='hidden md:block'><a href="#">Sobre</a></li>

                            <Link to='/sign-in'><img src={IconUser} alt="Ícone de login" /></Link>

                            <li>
                                <a href="#"><img src={IconAbout} alt="Ícone de Sobre" /></a></li>
                            {/* <li>
                                <a href="#"><img src={IconCart} alt="Ícone de Carrinho" /></a>
                            </li> */}

                            <ShoppingCart />
                        </ul>
                    </nav>
                </div>

            </header>
        </div>
    )
}