import React from 'react'
import { useFilterDoctors } from '../../Context/DoctorsFilterContext'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

function SearchDoctors() {

    const {filterDoctors } = useFilterDoctors()
    // const {filterDoctors , setOnSearch} = useFilterDoctors()

    const showDoctorsSearch = filterDoctors.map((ele) => {
        console.log(ele.id);
        return (
            // <NavLink to={`/show_doctor/${ele.id}`} className='box' onClick={() => setOnSearch(ele.name)}>
            <NavLink to={`/show_doctor/${ele.id}`} className='box' >
                <div className='data'>
                    <h5>{ele.name}</h5>
                    <div className='category_region'>
                        <p>{ele.category}</p>
                        <p>{ele.region}</p>
                    </div>
                </div>
            </NavLink>
        )
    })
  return (
    <SearchDoctorsStyle>
        <div className='search_product'>
                {showDoctorsSearch}
                {filterDoctors.length === 0 && <p className='word'> لا يوجود دكتور بهذا الاسم </p>}
        </div>
    </SearchDoctorsStyle>
  )
}
const SearchDoctorsStyle = styled.div`
position: absolute;
width: 85%;
top: 50px;
z-index: 5;
border-radius: 12px;
padding: 0 10px ;
background: #fff;
box-shadow: 0 8px 16px #0000000f;

.search_product {
    
    a {
        text-decoration: none;
    }
    .word{
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 10px;
    }
} 
.box {
    display: flex;
    align-items: center;
    padding: 15px;
    border-bottom: .5px solid #ccc;
    
    img {
        width: 36px;
    }

    .data {
        display: flex;
        flex-direction: row-reverse;
        justify-content: space-between;
        flex: 1;

        .category_region {
            display: flex;
            width: 160px;
            align-items: center;
            justify-content: space-around;
            flex-direction: row-reverse;
            border-right: 1px solid #000;
        }
        h5,
        p {
            color: #000;
            transition: .3s;
        }
        h5:hover,
        p:hover {
            color: #ff5000;
        }
    }
}
.box:last-child {
    border-bottom: none;
}
@media screen and (max-width: 768px) {
    & {
        width: 100%;

        .box h5 {
            font-size: 15px;
        }
        .data .category_region {
            width: 90px !important;
            p {
                font-size: 11px;
                margin-bottom: 0;
            }
        }
    }
}
`;

export default SearchDoctors