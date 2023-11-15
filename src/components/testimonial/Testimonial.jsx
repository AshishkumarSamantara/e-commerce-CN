import React, { useContext } from 'react'
import myContext from '../../context/data/myContext'

function Testimonial() {
    const context = useContext(myContext)
    const { mode } = context
    return (
        <div>
            <section className="text-gray-600 body-font mb-10">
                <div className="container px-5 py-10 mx-auto">
                    <h1 className=' text-center text-3xl font-bold text-black' style={{color: mode === 'dark' ? 'white' : ''}}>Testimonial</h1>
                    <h2 className=' text-center text-2xl font-semibold mb-10' style={{color: mode === 'dark' ? 'white' : ''}}>What our <span className=' text-pink-500'>customers</span> are saying</h2>
                    <div className="flex flex-wrap -m-4">
                        <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
                            <div className="h-full text-center">
                                <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="data:image/webp;base64,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" />
                                <p style={{color: mode === 'dark' ? 'white' : ''}} className="leading-relaxed">Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p>
                                <span className="inline-block h-1 w-10 rounded bg-pink-500 mt-6 mb-4" />
                                <h2 style={{color: mode === 'dark' ? '#ff4162' : ''}} className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">Ashish Kumar Samantara</h2>
                                <p style={{color: mode === 'dark' ? 'white' : ''}} className="text-gray-500">Senior Product Designer</p>
                            </div>
                        </div>
                        <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
                            <div className="h-full text-center">
                                <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://cdn-icons-png.flaticon.com/128/2763/2763444.png" />
                                <p  style={{color: mode === 'dark' ? 'white' : ''}}className="leading-relaxed">Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p>
                                <span className="inline-block h-1 w-10 rounded bg-pink-500 mt-6 mb-4" />
                                <h2 style={{color: mode === 'dark' ? '#ff4162' : ''}} className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">React Js</h2>
                                <p style={{color: mode === 'dark' ? 'white' : ''}} className="text-gray-500">UI Develeoper</p>
                            </div>
                        </div>
                        <div className="lg:w-1/3 lg:mb-0 p-4">
                            <div className="h-full text-center">
                                <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://webknudocs.vercel.app/logo/react.png" />
                                <p style={{color: mode === 'dark' ? 'white' : ''}} className="leading-relaxed">Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p>
                                <span className="inline-block h-1 w-10 rounded bg-pink-500 mt-6 mb-4" />
                                <h2 style={{color: mode === 'dark' ? '#ff4162' : ''}} className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">React Js</h2>
                                <p  style={{color: mode === 'dark' ? 'white' : ''}}className="text-gray-500">CTO</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Testimonial