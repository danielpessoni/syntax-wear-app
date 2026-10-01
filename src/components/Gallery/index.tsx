import galeriaHomem from '@/assets/images/galeria-homem.jpg'
import galeriaModelo from '@/assets/images/galeria-modelo.jpg'
import galeriaTenisBrancoEPreto from '@/assets/images/galeria-tenis-branco-e-preto.jpg'
import galeriaTenisCinza from '@/assets/images/galeria-tenis-cinza.jpg'
import galeriaTenisColorido from '@/assets/images/galeria-tenis-colorido.jpg'
import galeriaTenisRoxo from '@/assets/images/galeria-tenis-roxo.jpg'
import { Overlay } from '../Overlay'
import { Button } from '../Button'

export const Gallery = () => {
    return (
        <section className="container grid grid-cols-4 grid-rows-[repeat(3,300px)] gap-7.5 py-10 [grid-template-areas:'highlight_highlight_sneaker-purple_sneaker-purple'_'highlight_highlight_model_sneaker-color'_'sneaker-white_sneaker-white_model_sneaker-silver'] min-[768px]:max-[1320px]:grid-rows-[repeat(3,calc((100vw-110px)/4))] max-md:grid-cols-2 max-md:grid-rows-[repeat(5,auto)] max-md:gap-2.5 max-md:px-2.5 max-md:py-5 max-md:[grid-template-areas:'highlight_highlight'_'sneaker-white_sneaker-white'_'model_sneaker-color'_'model_sneaker-silver'_'sneaker-purple_sneaker-purple']">
            <article className="group relative [grid-area:highlight] overflow-hidden rounded-[20px] max-md:min-h-123.5">
                <img src={galeriaHomem} alt="Modelo masculino usando tênis SyntaxWear" className="absolute inset-0 h-full w-full object-cover" />
                <div className="absolute inset-0 bg-black/20 opacity-100 transition-opacity duration-300 md:opacity-0 md:group-hover:opacity-100 md:group-focus-within:opacity-100" />
                <Overlay title='Krypton One' subtitle='Estilo urbano com atitude' className=''>
                    <Button variant='secondary'>Feminino</Button>
                    <Button variant='secondary'>Masculino</Button>
                </Overlay>
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