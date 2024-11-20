import React from 'react'
import './style.css'

const Faq = () => {


    const faqs = [

        {
            pergunta: "What is 4yoou?",
            resposta: ""
        },
        {
            pergunta: "How does the Premium Plan work?",
            resposta: ""
        },
        {
            pergunta: "Can I support from air?",
            resposta: ""
        },
        {
            pergunta: "How can I product update",
            resposta: ""
        },
        {
            pergunta: "How to cantact air?",
            resposta: ""
        },
        {
            pergunta: "How can get support?",
            resposta: ""
        }
    ]

    return (
        <section className='fac-container'>
            <div>
                {faqs.map((item) => (
                    <ul>
                        <li>{item.pergunta}</li>
                        <li>{item.resposta}</li>
                    </ul>
                ))}
            </div>

        </section>
    )
}

export default Faq
