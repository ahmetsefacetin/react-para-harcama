import React from 'react'

export default function Header({ money, total }) {

    function moneyFormat(money) {
        return money.toLocaleString()
    }

    return (
        total === 0 ?
            <>
                <div className='header'>Harcamak için <span>$ {moneyFormat(money)}</span> paranız var</div>
            </>
            : money - total === 0 ?
                <>
                    <div className='header'>Paranız bitti</div>
                </>
                :
                <>
                    <div className='header empty'>Harcamak için <span>$ {moneyFormat(money - total)}</span> paranız kaldı</div>
                </>
    )
}