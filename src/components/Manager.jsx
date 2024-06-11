import React, { useEffect, useRef, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import { v4 as uuidv4 } from 'uuid';


const Manager = () => {

    const see = useRef()
    const passwordRef = useRef()
    const [form, setform] = useState({ username: "", email: "", password: "" })
    const [passwordArray, setPasswordArray] = useState([])


    useEffect(() => {
        let passwords = localStorage.getItem("passwords")

        if (passwords) {
            setPasswordArray(JSON.parse(passwords))
        }
    }, [])


    // Aa Function password show karvo ke nahi te mate chhe
    const showPassword = () => {
        // alert("Password is Seen")
        // see.current.src = "src/assets/images/eye-slash.svg"

        console.log(see.current.src)
        // passwordRef.current.type = "text"    // batave k password see or unseen 

        if (see.current.src.includes("src/assets/images/eye-slash.svg")) {
            see.current.src = "src/assets/images/eye.svg"
            passwordRef.current.type = "text"

        }
        else {
            see.current.src = "src/assets/images/eye-slash.svg"
            passwordRef.current.type = "password"
        }

    }


    const savePassword = () => {

        if (form.username.length > 3 && form.email.length > 3 && form.password.length > 3) {
            setPasswordArray([...passwordArray, { ...form, id: uuidv4() }])
            localStorage.setItem("password", JSON.stringify([...passwordArray, { ...form, id: uuidv4() }]))

            console.log([...passwordArray, form])

            setform({ username: "", email: "", password: "" })
            toast('🦄 Account Detail is Stored...', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });

        }
        else {
            toast('🦄ERROR : Account Detail is not Stored...', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });

        }
    }

    const handleChange = (e) => {
        setform({ ...form, [e.target.name]: e.target.value })

    }

    const TextCopy = (text) => {
        toast('🦄 Copy to Clipboard \n' + text, {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        });
        navigator.clipboard.writeText(text)
    }

    const DeleteButton = (id) => {
        console.log("Deleteing by ID of User Account...")

        // setPasswordArray([...passwordArray, { ...form, id: uuidv4() }])

        let conf = confirm("Do you Really wanna DELETE this User Account ?")
        if (conf) {
            setPasswordArray(passwordArray.filter(item => item.id !== id))
            localStorage.setItem("password", JSON.stringify(passwordArray.filter(item => item.id !== id)))

            toast('🦄UserID ' + form.username + ' Deleted !', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });

        }


    }

    const EditButton = (id) => {
        console.log("Editing by ID of User Account...")
        setform(passwordArray.filter(item => item.id === id)[0])
        setPasswordArray(passwordArray.filter(item => item.id !== id))

    }



    return (
        <>

            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
                transition="Bounce"
            />
            {/* Same as */}
            <ToastContainer />


            {/* <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div> */}
            {/* ------------------------------------------------------------------------------ */}
            <div className="bg-slate-700 md:mycontainer min-h-[84.2vh] w-full">
                <h1 className='text-4xl font-bold text-center mb-5'>
                    <span className='text-green-700'>&lt;</span>
                    <span className='text-[#4f8ee5]'>Pass</span>
                    <span className='text-green-700'>OP/&gt;</span>
                </h1>

                <p className='text-[20px] italic underline font-medium font-mono text-center text-white'>You can save your
                    <span className='text-red-400'> Username</span>,
                    <span className='text-red-400'>Email ID</span>,
                    <span className='text-red-400'>Password</span>
                    ...</p>

                <div className='text-white flex flex-col p-4 items-center'>
                    <input value={form.username} onChange={handleChange} className='w-full p-4 py-2 mb-5 bg-slate-800 text-[17px] border border-blue-700 rounded-full' placeholder='Enter Username' type="text" name='username' id='1' />

                    <div className='flex w-full gap-2  justify-between relative'>
                        <input value={form.email} onChange={handleChange} className='border border-blue-700 w-full p-4 py-2 bg-slate-800 text-[17px] rounded-full' placeholder='Enter Email ID' type="email" name="email" id="2" />

                        <input ref={passwordRef} value={form.password} onChange={handleChange} className='border border-blue-700 w-full p-4 py-2 bg-slate-800 text-[17px] rounded-full' placeholder='Enter your Password' type="password" name="password" id="3" />
                        <span className='absolute right-4 top-2 w-fit cursor-pointer' onClick={showPassword}>
                            <img ref={see} width={30} height={10} src="src/assets/images/eye-slash.svg" alt="Show Password" />
                        </span>

                    </div>

                    {/*--------- Save Password Button ---------------- */}
                    <button onClick={savePassword} className='flex gap-3 bg-[#1f1c2d] mt-10 w-fit px-5 py-3 border-[3px] border-blue-950 rounded-[30px] mb-[13px] text-[17px] hover:bg-teal-200 hover:text-yellow-950  text-[#9fc0f2] font-bold' type="submit">
                        <img width={25} height={25} src="/src/assets/images/diskette-save.svg" alt="Save" />Save Account Details</button>

                </div>

                <hr />

                <h2 className='font-bold text-4xl text-gray-200 text-center mb-5 mt-6'>Your Passwords</h2>

                {passwordArray.length === 0 &&
                    <div className='font-medium text-[22px] text-lime-400'>No Password has Stored...</div>}
                {passwordArray.length != 0 &&

                    <table className="table-auto w-full text-center border border-blue-500 rounded-[20px] overflow-hidden">
                        <thead className='text-black bg-green-700'>
                            <tr>
                                <th className='w-32 text-[20px] py-2'>Username</th>
                                <th className='w-32 text-[20px] py-2'>Email ID</th>
                                <th className='w-32 text-[20px] py-2'>Your Password</th>
                                <th className='w-32 text-[20px] py-2'>Actions</th>
                            </tr>
                        </thead>
                        <tbody className='bg-green-200 text-[16px] font-medium'>
                            {passwordArray.map((item, index) => {
                                return <tr key={index} className=''>
                                    <td className='p-1 items-center'>
                                        <div className='flex justify-center gap-2 '>
                                            <a href={item.username} target='_blank'>{item.username}</a>
                                            <div className='mt-1 cursor-pointer hover:bg-green-400' onClick={() => TextCopy(item.username)}>
                                                <img width={20} height={20} src="/src/assets/images/copy-svgrepo.svg" alt="Copy-Username" />
                                            </div>
                                        </div>

                                    </td>

                                    <td className='p-1 items-center'>
                                        <div className='flex justify-center gap-2 '>
                                            {item.email}
                                            <div className='mt-1 cursor-pointer hover:bg-green-400' onClick={() => TextCopy(item.email)}>
                                                <img width={20} height={20} src="/src/assets/images/copy-svgrepo.svg" alt="Copy-Username" />
                                            </div>
                                        </div>
                                    </td>

                                    <td className='p-1 items-center'>
                                        <div className='flex justify-center gap-2 '>
                                            {item.password}
                                            <div className='mt-1 cursor-pointer hover:bg-green-400' onClick={() => TextCopy(item.password)}>
                                                <img width={20} height={20} src="/src/assets/images/copy-svgrepo.svg" alt="Copy-Username" />
                                            </div>
                                        </div>
                                    </td>

                                    <td className='p-1 items-center'>
                                        <div className='flex justify-around'>
                                            <button className='EditButton' onClick={() => EditButton(item.id)}>
                                                <div className='flex gap-2'>
                                                    <span>
                                                        <img width={20} height={20} src="src/assets/images/edit-svgrepo-com.svg" alt="Edit" />
                                                    </span>
                                                    <span>Edit</span>
                                                </div>
                                            </button>

                                            <button className='DeleteButton' onClick={() => DeleteButton(item.id)}>
                                                <div className='flex gap-2'>
                                                    <span>
                                                        <img className='' width={20} height={20} src="/src/assets/images/delete-1487-svgrepo.svg" alt="Delete" />
                                                    </span>
                                                    <span>Delete</span>
                                                </div>
                                            </button>
                                        </div>
                                    </td>

                                </tr>
                            })}
                        </tbody>
                    </table>
                }
            </div>

        </>
    )
}

export default Manager
