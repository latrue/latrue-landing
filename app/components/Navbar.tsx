import React from 'react'
import { BsArrowRight } from 'react-icons/bs'

const Navbar = () => {
  return (
    <div className='p-10 bg-[#6608FA]'>
        <div className='border border-black border-t-0 border-l-0 border-r-0'>
            <div className='flex justify-between items-center mb-4'>
                <div className='text-4xl'>
                    <p>Latrue</p>
                    <p>Magazine</p>
                </div>
                <div className='text-4xl'>
                    <div>
                        <BsArrowRight/>
                    </div>
                    <div>
                        MUSEO VIRTUAL
                    </div>
                </div>
                <div className='text-4xl'>
                    <div>
                        <BsArrowRight/>
                    </div>
                    <div>
                        CONVOCATORIA 2023
                    </div>
                </div>
            </div>
        </div>
    </div>
    
  )
}

export default Navbar