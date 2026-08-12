import './nav.css';


function Nav() {
    return (
        <>
            <div className='tarjetas'>
                <div className='tarjeta tcli'>
                    <h3 className='tt'>Clientes</h3>
                    <p className='texto'>Pagina de administacion<br />de los clientes</p>
                    <button className='boton'>Ir a clientes</button>

                </div>
                <div className='tarjeta tpro'>
                    <h3 className='tt'>Productos</h3>
                    <p className='texto'>Pagina de administacion<br /> de los productos</p>
                    <button className='boton bpro'>Ir a productos</button>

                </div>
                <div className='tarjeta tven'>
                    <h3 className='tt'>Ventas</h3>
                    <p className='texto'>Pagina de administacion<br /> de las ventas</p>
                    <button className='boton bven'>Ir a ventas</button>

                </div>

            </div>


        </>
    )
}
export default Nav;