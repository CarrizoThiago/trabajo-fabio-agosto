import './nav.css';


function Nav() {
    return (
        <>
            <div className='tarjetas'>
                <div className='tarjetac'>
                    <h3 className='ttc'>Clientes</h3>
                    <p className='texto'>Pagina de administacion<br />de los clientes</p>
                    <button className='botonc'>Ir a clientes</button>

                </div>
                <div className='tarjetap'>
                    <h3 className='ttp'>Productos</h3>
                    <p className='textop'>Pagina de administacion<br /> de los productos</p>
                    <button className='botop'>Ir a productos</button>

                </div>
                <div className='tarjetav'>
                    <h3 className='ttv'>Ventas</h3>
                    <p className='textov'>Pagina de administacion<br /> de las ventas</p>
                    <button className='botov'>Ir a ventas</button>

                </div>

            </div>


        </>
    )
}
export default Nav;