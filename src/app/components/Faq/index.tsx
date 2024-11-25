"use client";
import React, { useState } from 'react'
import './style.css'
import Image from 'next/image';


const Faq = () => {

    const [activeIndex, setActiveIndex] = useState(null);


    const handleClick = (index: any) => {
        setActiveIndex(activeIndex === index ? null : index);
    };



    const faqs = [

        {
            pergunta: "What is 4yoou?",
            resposta: "1"
        },
        {
            pergunta: "How does the Premium Plan work?",
            resposta: "2"
        },
        {
            pergunta: "Can I support from air?",
            resposta: "3"
        },
        {
            pergunta: "How can I product update",
            resposta: "4"
        },
        {
            pergunta: "How to cantact air?",
            resposta: "5"
        },
        {
            pergunta: "How can get support?",
            resposta: "6"
        }
    ]

    return (
        <section className='faq-container'>

            <div className="faq-title">
                <h2>
                    Frequently asked questions
                </h2>
            </div>

            <div className='wrapper'>
                {faqs.map((item, index) => (
                    <div key={index}>
                        <div className='faq-pergunta'
                            onClick={() => handleClick(index)}
                            style={{
                                cursor: "pointer",
                                padding: "10px",
                                backgroundColor: "#ffff",
                                border: "solid #505056 1px",
                                marginBottom: "5px",
                                borderRadius: "3px",
                                fontFamily: "Roboto, sans-serif;",
                                width: "25rem"
                            }}
                        >
                            {item.pergunta} <Image src="Icon+.svg" alt="icone" width={10} height={10} />
                        </div>
                        {activeIndex === index && (
                            <div style={{ 
                                padding: "10px", 
                                backgroundColor: "#e0e0e0", 
                                }}>
                                {item.resposta}
                            </div>
                        )}
                    </div>
                ))}
            </div>

        </section>
    )
}

export default Faq
