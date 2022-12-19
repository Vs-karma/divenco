import React from 'react'
import fl from '../styles/sales.module.css'

function Filter() {
    return (
        <div className='container'>
            <div className={fl.filter}>
                <p className={fl.filter_text}>Filter</p>
                <p className={fl.filter_text}>Size</p>
                <div className={fl.size}>
                    <button className={fl.size_btn}>8 UK</button>
                    <button className={fl.size_btn}>9 UK</button>
                    <button className={fl.size_btn}>10 UK</button>
                    <button className={fl.size_btn}>11 UK</button>
                </div>
                <p className={fl.filter_text}>Color</p>
                <div className={fl.color}>
                    
                </div>
            </div>
        </div>
    )
}

export default Filter