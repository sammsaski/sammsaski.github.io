import { React } from 'react';

import './Research.css';

export function Research() {
    return (
        <div id='research-container' className='row justify-content-center'>
            <div id='research-subsection-container' className='col-12'>
                <div className='row' id='research-subsection-container-row'>
                    /* left hash */
                    {/* <div className='col-1'></div> */}
                    <div id='research-left-hash' className='col-5'>
                        <div id='research-left-hash-title' className=''>research interests</div>
                        <div id='research-left-hash-text' className='text-dark'>
                            I like to prioritize methods that improve computing performance — whether that be an 
                            algorithm that is more efficient in runtime, machine learning methods 
                            that are more robust, or a system that takes up less physical space and uses less power.
                        </div>
                    </div>
                    
                    /* right hash */
                    <div id='research-right-hash' className='col-5 pb-5 pe-5'>
                        <div className='row pb-5 pe-5'>
                            <div id='research-right-hash-container' className=''>
                                <div id='right-hash-research-subject'>safe autonomy</div>
                                <div id='right-hash-research-subject'>formal methods in verification</div>
                                <div id='right-hash-research-subject'>machine learning theory</div>
                                <div id='right-hash-research-subject'>computer vision</div>
                                <div id='right-hash-research-subject'>algorithms</div>
                                <div id='right-hash-research-subject'>applied mathematics</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div> 
    )
}
