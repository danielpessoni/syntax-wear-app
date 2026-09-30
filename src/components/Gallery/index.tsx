import galeriaHomem from '@/assets/images/galeria-homem.jpg'
import galeriaModelo from '@/assets/images/galeria-modelo.jpg'
import galeriaTenisBrancoEPreto from '@/assets/images/galeria-tenis-branco-e-preto.jpg'
import galeriaTenisCinza from '@/assets/images/galeria-tenis-cinza.jpg'
import galeriaTenisColorido from '@/assets/images/galeria-tenis-colorido.jpg'
import galeriaTenisRoxo from '@/assets/images/galeria-tenis-roxo.jpg'

export const Gallery = () => {
    return (
        <section className="container grid grid-cols-4 grid-rows-[repeat(3,300px)] gap-7.5 py-10 [grid-template-areas:'highlight_highlight_sneaker-purple_sneaker-purple'_'highlight_highlight_model_sneaker-color'_'sneaker-white_sneaker-white_model_sneaker-silver'] min-[768px]:max-[1320px]:grid-rows-[repeat(3,calc((100vw-110px)/4))] max-md:grid-cols-2 max-md:grid-rows-[repeat(5,auto)] max-md:gap-2.5 max-md:px-2.5 max-md:py-5 max-md:[grid-template-areas:'highlight_highlight'_'sneaker-white_sneaker-white'_'model_sneaker-color'_'model_sneaker-silver'_'sneaker-purple_sneaker-purple']">
            <article className="group relative [grid-area:highlight] overflow-hidden rounded-[20px] max-md:min-h-123.5">
                <img src={galeriaHomem} alt="Modelo masculino usando tênis SyntaxWear" className="absolute inset-0 h-full w-full object-cover" />
                <div className="absolute inset-0 bg-black/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-within:opacity-100" />
                <div className="relative z-10 flex h-full flex-col items-center justify-center gap-5 px-4 text-center text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-within:opacity-100">
                    <div className="flex flex-col items-center gap-2.5">
                        <h2 className="text-xl font-medium leading-6 tracking-[0.08em]">Krypton One</h2>
                        <p className="text-2xl font-medium leading-8 tracking-[0.08em]">Estilo urbano com atitude</p>
                    </div>
                    <div className="flex gap-2.5">
                        <button type="button" className="h-6.5 min-w-23.5 rounded-full border-2 border-white px-4 text-xs font-medium leading-none">Feminino</button>
                        <button type="button" className="h-6.5 min-w-23.5 rounded-full border-2 border-white px-4 text-xs font-medium leading-none">Masculino</button>
                    </div>
                </div>
            </article>
            <img src={galeriaTenisBrancoEPreto} alt="Tênis branco e preto com sola azul" className="h-full w-full rounded-[20px] object-cover [grid-area:sneaker-white] max-md:h-auto max-md:aspect-2/1" />
            <img src={galeriaTenisRoxo} alt="Tênis roxo com detalhes verde-menta" className="h-full w-full rounded-[20px] object-cover [grid-area:sneaker-purple] max-md:h-auto max-md:aspect-2/1" />
            <div className="relative min-h-0 overflow-hidden rounded-[20px] [grid-area:model]">
                <img src={galeriaModelo} alt="Modelo feminina usando roupas casuais e tênis coloridos" className="absolute inset-0 h-full w-full object-cover object-top" />
            </div>
            <img src={galeriaTenisColorido} alt="Tênis esportivo colorido em roxo, rosa, laranja e turquesa" className="h-full w-full rounded-[20px] object-cover [grid-area:sneaker-color] max-md:h-auto max-md:aspect-square" />
            <img src={galeriaTenisCinza} alt="Tênis esportivo cinza" className="h-full w-full rounded-[20px] object-cover [grid-area:sneaker-silver] max-md:h-auto max-md:aspect-square" />
        </section>
    )
}