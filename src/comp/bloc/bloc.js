import React from 'react'
import Films from '../films/filmsdata'
import Modal from '../modal/modal'
import './bloc.css'

 function Bloc(search){
    return (
        <section className="bloc">
            <Films ss={search} />
            <Modal/>
        </section>
    )
    }
export default Bloc
