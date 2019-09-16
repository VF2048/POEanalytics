import React from 'react'
import Currency from './Currency'
import Title from './Table title'

export default function CurrencyList({ curse }) {
    const currencyElements = curse.map(typecurrency =>
    <Currency typecurrency = {typecurrency}/>
    )
    return (
        <table className="darkTable">
            <Title/>
            <tbody>
                {currencyElements}
            </tbody>
        </table>
       
    )
}