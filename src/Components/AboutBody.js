import React from 'react';
import "../css/AboutPage.css"
// import mnt1 from '../css/mnt1.png'
// import mnt2 from '../css/mnt2.png'
// import mnt3 from '../css/mnt3.png'
// import cld1 from '../css/cld1.png'
// import cld2 from '../css/cld2.png'
// import cld3 from '../css/cld3.png'


const Para = () =>{
    return (
        <div className = 'para'>
            <div className = 'para_layer para_layer--a'>
                {/* <img src={mnt3} alt='mnt3'></img> */}
            </div>
            <div className = 'para_layer para_layer--b'>
                {/* <img src={cld3} alt='cld3'></img> */}
            </div>
            <div className = 'para_layer para_layer--c'>
                {/* <img src={mnt2} alt='mnt2'></img> */}
            </div>
            <div className = 'para_layer para_layer--d'>
                {/* <img src={mnt1} alt='mnt1'></img> */}
            </div>
            <div className = 'para_layer para_layer--e'>
                {/* <img src={cld2} alt='cld2'></img> */}
            </div>
            <div className = 'para_layer para_layer--f'>
                {/* <img src={cld1} alt='cld1'></img> */}
            </div>
        </div>
    )
}

export default Para