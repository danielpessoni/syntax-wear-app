interface OverlayProps {
    children: React.ReactNode;
    title: string;
    subtitle: string;
    className?: string
}

export const Overlay = ({ children, title, subtitle, className }: OverlayProps) => {
    return <div className="absolute inset-0 flex items-center justify-center text-center">

        <div className={`flex w-full max-w-97 flex-col items-center px-4 text-white ${className}`}>
            <h2 className='text-xl font-medium leading-normal tracking-wider mb-2.5'>{title}</h2>
            <h1 className='text-2xl leading-9 tracking-widest mb-5'>{subtitle}</h1>

            <div className='flex gap-3.5'>
                {children}
            </div>
        </div>
    </div>
}