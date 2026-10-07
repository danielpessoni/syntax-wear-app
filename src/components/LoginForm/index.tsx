export const LoginForm = () => {
    return (
        <form className="flex flex-col gap-3.5">
            <input 
            type="email" 
            placeholder="E-mail"
            className="border rounded-[1px] border-gray-200 w-full p-3 text-black" />
            <button className="bg-[#212a2f] w-full p-3.5 rounded-[1px] cursor-pointer text-white">Continuar</button>
        </form>
    );
}