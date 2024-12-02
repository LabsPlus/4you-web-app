import React from 'react'
import './style.css'
import Image from 'next/image';

const index = () => {

    const planos = [

        {
            plano: "Basis Plan",
            info: "Amet minim mollit non deserunt ullamco est sit aliqua dolor.",
            valor: "$5",
            botao: "Get Started Now",
            tempo: "/Year",
            descricao: [
                {
                    image: <Image src="Checking.svg" alt='' width={40} height={40} />,
                    descricao1: "Unlimited friends on your friendship tree"
                },
                {
                    image: <Image src="Checking.svg" alt='' width={40} height={40} />,
                    descricao1: "Photos for up to 3 of your closest friends"
                },
                {
                    image: <Image src="Checking.svg" alt='' width={40} height={40} />,
                    descricao1: "Birthday reminders via email and Whatsapp"
                },
                {
                    image: <Image src="Checking.svg" alt='' width={40} height={40} />,
                    descricao1: "Unlimited Sharing"
                }
            ]
        },

        {
            plano: "Premium Plan",
            info: "Amet minim mollit non deserunt ullamco est sit aliqua dolor.",
            valor: "$9,90",
            botao: "Get Started Now",
            tempo: "/Year",
            descricao: [
                {
                    image: <Image src="Checking.svg" alt='' width={40} height={40} />,
                    descricao1: "Unlimited friends with up to 10 photos of your closest friends"
                },
                {
                    image: <Image src="Checking.svg" alt='' width={40} height={40} />,
                    descricao1: "Reminders via WhatsApp, email, and social networks, including gift ideas"
                },
                {
                    image: <Image src="Checking.svg" alt='' width={40} height={40} />,
                    descricao1: "Customize with background music and exclusive layout options"
                },
                {
                    image: <Image src="Checking.svg" alt='' width={40} height={40} />,
                    descricao1: "Unlimited Sharing"
                }
            ]
        }
    ]
    return (

        <div className='index-planos'>
            <h1>
                To yoou Plans – Simple and Tailored Just <br />for You
            </h1>

            <p>
                Choose the plan that best suits your needs
            </p>

            <div className='planos-container'>

                <div className='planos-container'>
                    {planos.map((item) => (
                        <div className="planos-apper">

                            <h4>{item.plano}</h4>

                            <p>{item.info}</p>

                            <div className="valor-apper" style={{ display: "flex", alignItems: "center", gap: "1rem" }}>

                                <h2>{item.valor}</h2>

                                <p>{item.tempo}</p>
                            </div>
                            
                            <div className="btn-container">

                                <button className='btn-planos'>{item.botao}</button>
                            </div>

                            <div className='descricao-container'>
                                {item.descricao.map((desc, descIndex) => (
                                    <div key={descIndex} className='descricao-item'>
                                        {desc.image}
                                        <p>{desc.descricao1}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default index