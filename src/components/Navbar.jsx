import React from 'react'

const Navbar = () => {
    return (
        <div className='bg-slate-800 text-white'>
            <nav className='flex justify-around py-3'>

                <span className=''>
                    <div className='flex appLogo gap-3 py-2 px-2 text-3xl font-bold justify-center hover:bg-slate-900 hover:rounded-xl hover:ring-1 hover:ring-[#717c97] w-fit'>
                        <div>
                            <img className='invert gap-2' width={33} height={33} src="/src/assets/images/desktop-password.svg" alt="" />
                        </div>
                        <div>
                            <span className='text-green-700'>&lt;</span>
                            <span className='font-bold pr-1'>Password</span>
                            <span className='text-green-900'>Manager/&gt;</span>
                        </div>
                    </div>
                </span>

                <span>

                    <div className="gitLogo rounded-xl">
                        <a href="https://github.com/Sagar-ITCS">
                            <button className='flex gap-3 justify-around px-2 py-2 items-center hover:bg-slate-600 hover:rounded-xl ring-[#717c97] ring-1 rounded-3xl '>
                                <img className='invert' width={35} height={35} src="/src/assets/images/github.svg" alt="Github" />
                                <span className='font-bold font-[cursive]'>Github</span>
                            </button>
                        </a>
                    </div>
                </span>

            </nav>
        </div>
    )
}

export default Navbar
