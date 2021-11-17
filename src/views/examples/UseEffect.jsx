import React, { useEffect, useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'

function calcFatorial(num) {
    const n = parseInt(num)
    if(n < 0) return -1 //Se n for menor que 0, o valor de fatorial fica -1, pois não tem fatorial de número negativo.
    if(n === 0) return 1
    return calcFatorial(n - 1) * n
}

const UseEffect = (props) => {
    const [number, setNumber] = useState(1)
    const [fatorial, setFatorial] = useState(1)
    
    useEffect(() => {
        setFatorial(calcFatorial(number))
    }, [number])

    return (
        <div className="UseEffect">
            <PageTitle
                title="Hook UseEffect"
                subtitle="Permite executar efeitos colaterais em componentes funcionais!"
            />
            <div className="center">
                <div>
                    <span className="text">Fatorial: </span>
                    <span className="text red">{fatorial}</span>
                </div>
                <input className="input"
                    type="number"
                    value={number}
                    onChange={e => setNumber(e.target.value)}
                />
            </div>
        </div>
    )
}

export default UseEffect
