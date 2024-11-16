import React from 'react'
import './style.css'

const Card = ({ nomeDoPlano, descricao, valor, botao, detalhe1, detalhe2, detalhe3, detalhe4 }) => {
    return (
        <div className='card-container'>
            <div className="card">

                <h4>
                    {nomeDoPlano}
                </h4>

                <p>{descricao}</p>

                <h2>{valor}</h2>

                <button className='btn-planos'>{botao}</button>

                <ul>
                    <li>
                        {detalhe1}
                    </li>
                    <li>
                        {detalhe2}
                    </li>
                    <li>
                        {detalhe3}
                    </li>
                    <li>
                        {detalhe4}
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Card