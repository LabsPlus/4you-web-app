import React from 'react'
import Card from "../Planos/Card"
import './style.css'

const index = () => {
    return (

        <div className='index-planos'>
            <h1>
                To yoou Plans – Simple and Tailored Just <br />for You
            </h1>

            <p>
                Choose the plan that best suits your needs
            </p>

            <div className='planos-container'>

                <Card
                    nomeDoPlano="Basic Plan"
                    descricao="Amet minim mollit non deserunt ullamco est sit aliqua dolor."
                    valor="$5 / Year"
                    botao="Get Started Now"
                    detalhe1="Unlimited friends on your friendship tree"
                    detalhe2="Photos for up to 3 of your closest friends"
                    detalhe3="Birthday reminders via email and Whatsapp"
                    detalhe4="Unlimited Sharing"
                />

                <Card
                    nomeDoPlano="Premium Plan"
                    descricao="Amet minim mollit non deserunt ullamco est sit aliqua dolor."
                    valor="$9,90 / Year"
                    botao="Get Started Now"
                    detalhe1="Unlimited friends with up to 10 photos of your closest friends"
                    detalhe2="Reminders via WhatsApp, email, and social networks, including gift ideas"
                    detalhe3="Customize with background music and exclusive layout options"
                    detalhe4="Unlimited Sharing"
                />
            </div>
        </div>
    )
}

export default index