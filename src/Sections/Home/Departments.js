import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components'
import { useDoctors } from '../../Context/DoctorsContext';
import Spine from '../../Components/Loading/Spine';

function Departments() {

    const { category , isLoadingDataCategory } = useDoctors();

    // console.log(isLoadingDataCategory);
    if (isLoadingDataCategory) {
        return <Spine />
    }


    const showDepartments = category.map((ele,i) => {
        return(
            <div key={i} className='box'>
                <h2>{ele.category}</h2>
                <img src={ele.image} className="card-img-top" alt={ele.category} />
                <div className="card-body">
                    <NavLink to={`/category/${ele.category}`} className="btn btn-primary">فتح</NavLink>
                </div>
            </div>
        )
    })

    return (
        <DepartmentStyle>
            <div className='container'>
                {/* <div className='num_doctor'>
                    <div>عدد الدكاترة المسجلين <span>{doctors.length}</span></div>
                </div> */}
                <div className='parent'>
                    {showDepartments}
                </div>
            </div>
        </DepartmentStyle>
    )
}
const DepartmentStyle = styled.section`
/* .num_doctor {
    display: flex;
    flex-direction: row-reverse;
    margin-bottom: 30px;
}
.num_doctor div {
    border-bottom: 3px solid #f7550c;
}
.num_doctor div span {
    background-color: #f7550c;
    color: white;
} */
.parent {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
}
.parent .box {
    width: 300px;
    padding: 5px;
    text-align: center;
    border: 1px solid #ff5000;
    border-radius: 12px;
    margin-bottom: 10px;
    position: relative;

    img {
        border-radius: 15px;
        /* width: 250px; */
        /* height: 250px; */
    }
}
.card-body {
    position: absolute;
    bottom: 7px;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;

    a {
        width: 40%;
        background-color: #ff5000;
        border: #ff5000;
        font-weight: bold;
    }
}
@media screen and (max-width: 768px) {
    .parent .box {
        width: 100%
    }   
}
`;
export default Departments