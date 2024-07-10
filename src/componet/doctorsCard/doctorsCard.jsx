// import React from 'react';
// import { MdArrowOutward } from 'react-icons/md';
// import doctorsData from './../../constants/MOCK_DATA.json';

// export default function Doctors({ doctorImage }) {
//     return (
//         <div className="w-[300px] h-[251px] border-[1px] rounded-t-[7px] rounded-b-[7px]">
//             {doctorsData.map((doctor, index) => (
//                 <div className="doctor-card" key={index}>
//                     <div className="bg-slate-300 ">
//                         <div className='w-[67px] h-[32px] p-[10px] bg-white rounded-[5px] font-inter text-custom-10 font-600 '>{doctor.status}</div>
//                         <img className='max-w-300 max-h-168' src={doctorImage} alt="Doctor" />
//                     </div>
//                     <div className="flex gap-[50px] items-center shadow-lg  shadow-slate-black">
//                         <div className=''>
//                             <h2 className='text-unique-20 text-[#004377] font-400 font-inter w-[132px] h-[24px]'>{doctor.id} {doctor.full_name}</h2>
//                             <div className="text-[#000000] font-400 font-inter text-custom-11 w-[38px] h-[13px]">{doctor.field}</div>
//                         </div>
//                         <button className='w-[75.12px] h-[32px] border-2 border-custom-blue rounded-[5px] p-[10px]'>
//                             <div className='flex gap-2.5 justify-center items-center'>
//                                 <span className='text-custom-10 font-400 text-[#004377] font-inter'>Details</span>
//                                 <span className='text-[#004377]'><MdArrowOutward /></span>
//                             </div>
//                         </button>
//                     </div>
//                 </div>
//             ))}
//         </div>
//     );
// }

import React from 'react';
import { MdArrowOutward } from 'react-icons/md';

export default function Doctors({ doctorImage, doctor }) {
    return (
        <div className="w-[300px] h-[251px] border-[1px] rounded-t-[7px] rounded-b-[7px] doctor-card">
            <div className="bg-slate-300">
                {/* <div className='w-[67px] h-[32px] p-[10px] bg-white rounded-[5px] font-inter text-custom-10 font-600'>
                    {doctor.status}
                </div> */}
                <img className='max-w-300 max-h-168' src={doctorImage} alt="Doctor" />
            </div>
            <div className="flex gap-[50px] items-center shadow-lg shadow-slate-black">
                <div>
                    <h2 className='text-unique-20 text-[#004377] font-400 font-inter w-[132px] h-[24px]'>
                        {doctor.id} {doctor.last_name}
                    </h2>
                    <div className="text-[#000000] font-400 font-inter text-custom-11 w-[38px] h-[13px]">
                        {doctor.field}
                    </div>
                </div>
                <button className='w-[75.12px] h-[32px] border-2 border-custom-blue rounded-[5px] p-[10px]'>
                    <div className='flex gap-2.5 justify-center items-center'>
                        <span className='text-custom-10 font-400 text-[#004377] font-inter'>Details</span>
                        <span className='text-[#004377]'><MdArrowOutward /></span>
                    </div>
                </button>
            </div>
        </div>
    );
}
