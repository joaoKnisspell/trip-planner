import { MdDelete } from 'react-icons/md';
import { MdOutlineDownloadDone } from 'react-icons/md';
import styled, { css } from 'styled-components';
import {  useState } from 'react'

import vector from "./vector.png";

const CardContainer = styled.div`
        padding: 1em;
        display: flex;
        flex-direction: column;
        gap: 5px;
        position: relative;
        width:280px; 
        min-height:110px;
        max-height: 300px;
        box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
        transition: 0.3s;
        border-radius: 10px;
        overflow: hidden;
        h3{
            color: var(--preto);
            
        }
        p{
            color: var(--paragrafo);
            z-index: 100;
            width: 80%;
            line-height: 20px;
        }
        .card-btns{
            position: absolute;
            right: 1em;
            display: flex;
            gap: 5px;
            .card-btn{
            cursor: pointer;
            font-size: 25px;
            background-color: var(--verde-escuro);
            border-radius: 50%;
            padding: 2px;
            color: var(--verde-claro);
            }
        }
        .vector{
            position: absolute;
            width: 80px;
            right: -20px;
            bottom: -20px;
        }
`

const MetaCard = ( { id, meta, isDone, toggleMeta, removeMeta } ) => {

    return (
        <CardContainer style={ isDone ? {background:'#c4ffd3'} : {background:'var(--branco)'}}>
            <h3>Meta:</h3>
            <p style={isDone ? {textDecoration: 'line-through'} : {textDecoration: 'none'}}>{meta}</p>
            <div className="card-btns">
                <MdDelete className="card-btn" onClick={() => removeMeta(id)} />
                <MdOutlineDownloadDone className="card-btn"  onClick={() => toggleMeta(id, isDone)} />
            </div>
            <img className='vector' src={vector} alt="vector meta" />
        </CardContainer>
    )
}

export default MetaCard