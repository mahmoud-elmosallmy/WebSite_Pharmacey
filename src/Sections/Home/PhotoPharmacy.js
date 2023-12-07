import React from 'react'
import styled from 'styled-components'
import Photo from "../../Assets/logophoto.png";
function PhotoPharmacy() {


  return (
    <PhotoPharmacyStyle>
        <div className='divimage'>
            <img src={Photo} alt='PhotoPharmacy'/>
        </div>
        {/* <div className='namedoc'> 
            <h6>. صيدلية الدكتور عبدالبديع</h6>
            <p> متاح خدمة التوصبل مجانا </p>
        </div> */}
    </PhotoPharmacyStyle>
  )
}
const PhotoPharmacyStyle = styled.section`
position: relative;
box-shadow: 0px 0px 12px 17px #ccc;
 /* &::before {
    content: '';
    position: absolute;
    right: 35px;
    bottom: 19px;
    width: 166px;
    height: 111px;
    background-color: white;
    z-index: 1;
    filter: blur(23px);
    opacity: 0.9;
} */
img {
    width: 100%;
}
.namedoc {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    position: absolute;
    right: 34px;
    bottom: 33px;
    z-index: 4;

    h6 {
        color: #ff5000;
    }
    p {
        font-size: 16px;
        font-weight: bold;
    }
}
`;

export default PhotoPharmacy