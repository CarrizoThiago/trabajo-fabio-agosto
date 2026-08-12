import './nav.css';


function Nav() {
    return (
        <>
            <div className='tarjetas'>
                <div className='tarjeta'>
                    <h3 className='tt'>Clientes</h3>
                    <p className='texto'>Pagina de administacion<br />de los clientes</p>
                    <button className='boton'>Ir a clientes</button>

                </div>
                <div className='tarjeta'>
                    <h3 className='tt'>Productos</h3>
                    <p className='texto'>Pagina de administacion<br /> de los productos</p>
                    <button className='boton'>Ir a productos</button>

                </div>
                <div className='tarjeta'>
                    <h3 className='tt'>Ventas</h3>
                    <p className='texto'>Pagina de administacion<br /> de las ventas</p>
                    <button className='boton'>Ir a ventas</button>

                </div>

            </div>


        </>
    )
}
export default Nav;