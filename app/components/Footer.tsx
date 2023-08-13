import React from 'react'

const Footer = () => {
  return (
    <div className='flex w-full'>
        <div className='bg-[#6608FA] text-black text-9xl'>
            <div className='flex flex-col'>
                <div className='p-10 text-9xl mb-10 border border-black border-l-0 border-r-0 border-t-0 font-semibold'>
                    Latrue Magazine
                </div>
                <div className='p-10 text-4xl flex-auto h-64 border border-black border-l-0 border-r-0 border-t-0'>
                    <p> Sobre nosotros
                    </p>
                    <p>
                    La primera revista de arte emergente
                    </p>
                    <p> 
                    y museo virtual
                    </p>
                </div>
                <div className='px-10 py-4 text-base text-left'>
                    CREADO POR DARIO MUNOZ STUDIOS, LOS TRABAJOS ESTAN DESARROLLADOS POR ARTISTAS EMERGENTES
                </div>
            </div>
        </div>
        <div className='flex-auto w-64 bg-black text-[#6608FA]'>
            <div className='flex flex-col'>
                <div className='p-10 text-4xl mb-10 border border-[#6608FA] border-l-0 border-r-0 border-t-0'>
                    hola@latrue.org
                </div>
                <div className='p-10 text-4xl flex-auto h-64 border border-[#6608FA] border-l-0 border-r-0 border-t-0'>
                    <p>Latrue Magazine Ltd.
                    </p>
                    <p>
                    2023 Todos los Derechos Reservados
                    </p>
                    <p> 
                    La Rinconada, CU-112, Pisac, Cusco
                    </p>
                </div>
                <div className='p-10 text-base text-left'>
                    INSTAGRAM / X / FACEBOOK / OTROS
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer