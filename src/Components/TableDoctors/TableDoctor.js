import React, { useEffect } from 'react'
import styled from 'styled-components';
import Spine from '../Loading/Spine';
import { useDoctors } from '../../Context/DoctorsContext';
// import { useDoctors } from '../../Context/DoctorsContext';

function TableDoctor({doctors}) {

    const { isLoadingDataCategory } = useDoctors()

    
    // console.log(doctors);
    let num = 0
    const showDoctors = doctors.map((ele,i) => {
        return(
            <tr key={i}>
                <td className='add_bottom'>
                    <div className='child'>
                        {ele.address.map((Elem,i) => {
                            return (
                                <p key={i}>{Elem}</p>
                            )
                        })}
                    </div>
                </td>
                <td className='add_bottom'>
                    <div className='child'>
                        {ele.region.map((Elem) => {
                            return (
                                <p key={i}>{Elem}</p>
                            )
                        })}
                    </div>
                </td>

                <td className='add_bottom'>
                    <div className='child'>
                        {ele.appointments.map((Elem) => {
                            return (
                                <p key={i}>{Elem}</p>
                            )
                        })}
                        {ele.appointmentsRegion2 && ele.appointmentsRegion2.map((Elem) => {
                            return (
                                <p key={i}>{Elem}</p>
                            )
                        })}
                    </div>
                </td>
                <td className='add_bottom'>
                    <div className='child'>
                        {ele.days.map((Elem) => {
                            return (
                                <p key={i}>{Elem}</p>
                            )
                        })}
                        {ele.daysRegion2 && ele.daysRegion2.map((Elem) => {
                            return (
                                <p key={i}>{Elem}</p>
                            )
                        })}
                        {ele.daysRegion3 && ele.daysRegion3.map((Elem) => {
                            return (
                                <p key={i}>{Elem}</p>
                            )
                        })}
                    </div>
                </td>
                <td className='add_bottom'>
                    <div className='child'>
                        {ele.clinicNumber && ele.clinicNumber.map((Elem) => {
                            return (
                                <p key={i}>{Elem}</p>
                            )
                        })}
                        {ele.clinicNumberRegion2 && ele.clinicNumberRegion2.map((Elem) => {
                            // console.log(Elem);
                            return (
                                <p key={i}>{Elem}</p>
                                )
                            })}
                        {ele.clinicNumberRegion3 && ele.clinicNumberRegion3.map((Elem) => {
                            // console.log(Elem);
                            return (
                                <p key={i}>{Elem}</p>
                            )
                        })}
                    </div>
                </td>
                <td>
                    <div className='child'>
                        {ele.privateNumber}
                    </div>
                </td>
                <td>
                    <div className='child'>
                        {ele.name}
                    </div>
                </td>
                <td>
                    <div className='child'>
                        {ele.category}
                    </div>
                </td>
                <td>
                    <div className='child'>
                        {++num}
                    </div>
                </td>
            </tr>
        )
        
    })
    useEffect(() => {
            const tables = document.querySelectorAll("table");
            // console.log(tables);
            if (tables) {
                tables.forEach((table) => {
                    const headerRow = table.querySelector("thead tr");
                    const thElements = headerRow.querySelectorAll("th");
                    const tdElements = table.querySelectorAll("tbody tr td");
                    let mainIndex = 0;
                    tdElements.forEach((td) => {
                        // console.log(td);
                    td.setAttribute("data-label", thElements[mainIndex].innerHTML);

                    if (mainIndex === thElements.length - 1) {
                        mainIndex = 0;
                    } else {
                        mainIndex += 1;
                    }
                    });
                });
            }
    },[doctors , isLoadingDataCategory])

    if (isLoadingDataCategory) {
        return <Spine />
    }

    return (
        <TableDoctorStyle>
            <table width="100%">
                <thead>
                    <tr>
                        <th>العنوان</th>
                        <th>المنطقه</th>
                        <th>المواعيد</th>
                        <th> الأيام </th>
                        <th> رقم العيادة</th>
                        <th> رقم الخاص</th>
                        <th> إسم الدكتور</th>
                        <th>التخصص</th>
                        <th> رقم التسلسل</th>
                    </tr>
                </thead>
                <tbody>
                    {showDoctors}
                </tbody>
            </table>
        </TableDoctorStyle>
    )
}
const TableDoctorStyle = styled.div`
table {
    font-family: arial, sans-serif;
    width: 100%;
    font-size: 14px;
    border-collapse: collapse;
}

table thead th {
    color: #ffffff;
    background: #004976;
    padding: 15px;
    border: 1px solid #ebebec;
    font-weight: 500;
    flex: 1;
    text-align: center;
}

table thead th:first-child {
    flex: none;
}

table tr td {
    border: 1px solid #e6edf1;
    padding: 15px;
    flex: 1;
    text-align: center;
}
table tr td:first-child {
    flex: none;
    width: 86px;
}
table tbody .add_bottom .child {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 10px;
}
table tbody .add_bottom .child p {
    border-bottom: 1px solid #ccc;
    margin-bottom: 0;
}
table tbody .add_bottom .child p:last-child {
    border: none;
}
@media only screen and (max-width: 991px) {
    table thead {
        display: none;
    }

    table tbody {
        display: block;
    }

    table tbody tr td {
        display: flex;
        align-items: center;
        flex-direction: row-reverse;
        padding: 0;
    }

    table tr td:first-child {
        width: 100%;
    }

    table tbody tr {
        margin-bottom: 20px;
        border: 1px solid #004976;
        background: #f9f9f9;
        overflow: hidden;

        display: flex;
        flex-direction: column-reverse;
    }
    table tbody tr .child {
        width: 70%;
    }
    table tbody tr .child p {
        padding: 4px 0;
    }

    table tbody td::before {
        content: attr(data-label);
        font-weight: bold;
        width: 30%;
        display: flex;
        background: #004976;
        color: #fff;
        padding: 12px;
        justify-content: center;
        align-self: stretch;
        align-items: center;
    }
}
`;

export default TableDoctor