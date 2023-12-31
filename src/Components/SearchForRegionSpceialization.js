import React, { useState } from 'react'
import { useFilterDoctors } from '../Context/DoctorsFilterContext'
import styled from 'styled-components';
// import { useParams } from 'react-router';

function SearchForRegionSpceialization({showDoctor , howMenyNumber}) {

    const [addActive , setAddActive] = useState("")

    const { updateFilterValue } = useFilterDoctors()

    const getUniqueData = (data , property) => {
        let arr = [];
        data.map((ele) => {
            return (
                arr.push(...ele[property])
                )
            })
        return arr = ["الجميع" , ...new Set(arr)]
    }

    const regionOnlyData = getUniqueData(showDoctor , "region")
    
    const showRegionData = regionOnlyData.map((ele,i) => {
        return <button 
            key={i}
            type='button' 
            className={`${addActive === i ? "active" : ""}`} 
            name='region' 
            onClick={(ele) => {
                    return (
                        updateFilterValue(ele),
                        setAddActive(i)
                    )
                }
            } 
            value={ele}>
                {ele}
            </button>
    })
    // console.log(showCategoryData);
    return (
        <SearchForCategoryStyle>
            <div className='container'>
                <div className='box'>
                    <h6>: حدد الدكتور عن طريق إختيار البلد  </h6>
                    {showRegionData}
                </div>
                <div className='num'>
                    <p><span>{howMenyNumber.length > 0 && howMenyNumber.length}</span> : عدد الدكتره  </p>
                </div>
            </div>
        </SearchForCategoryStyle>
    ) 
}

const SearchForCategoryStyle = styled.div`
    .box {
        display: flex;
        flex-direction: row-reverse;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        margin: 15px;
        gap: 5px;

    }
    .num {
        display: flex;
        justify-content: center;
        p {
            border-bottom: 3px solid #f7550c;
            span {
                background-color: #f7550c;
                color: white;
            }
        }
    }

    button {
        border: none;
        padding: 10px;
        color: white  ;
        background-color: #ff5000;
        border-radius: 4px;
    }
    button:hover {
        background-color: #f4550d;
    }
    button.active {
        background-color: #ffc2a6;
        color: #f4550d  ;
        border: #f4550d  ;
    }
    @media screen and (max-width: 768px) {
        & {

        }
        button {
            border: none;
            padding: 3px;
            color: white;
            margin: 1px;
            background-color: #ff5000;
        }
    }
`;

export default SearchForRegionSpceialization