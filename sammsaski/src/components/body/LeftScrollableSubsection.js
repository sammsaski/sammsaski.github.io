import { React } from 'react';

import './LeftScrollableSubsection.css';

export function LeftScrollableSubsection(props) {
    return (
        <div className='row justify-content-center'>
            <div id='ss-container' className='col-11 border-bottom border-dark'>
                <div className='row'>
                    <div id='left-hash' className='col-6'>
                        <div id='ss-title' className=''>{props.title}</div>
                    </div>
                    <div id='right-hash' className='col-6'></div>
                </div>
            </div>
        </div> 
    )
}
