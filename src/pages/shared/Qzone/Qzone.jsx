import React from 'react';
import qzone1 from "../../../assets/qZone1.png"
import qzone2 from "../../../assets/qZone2.png"
import qzone3 from "../../../assets/qZone3.png"

const Qzone = () => {
    return (
        <div className='text-center'>
            <h4>Q Zone</h4>
            <div className='bg-light'>
                <img className='my-2' src={qzone1} alt="" />
                <img className='my-2' src={qzone2} alt="" />
                <img className='my-2' src={qzone3} alt="" />
            </div>
        </div>
    );
};

export default Qzone;