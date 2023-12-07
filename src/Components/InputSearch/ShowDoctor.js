import React, { useEffect } from 'react'
import { useParams } from 'react-router';
import styled from 'styled-components'
import { useFilterDoctors } from '../../Context/DoctorsFilterContext';
import HeaderTopBody from '../Header/HeaderTopBody';

function ShowDoctor() {

  const { id } = useParams()
  console.log(id);

//   const [gitName , setGitName] = useState("");

  const { all_doctors } = useFilterDoctors()
console.log(all_doctors);

  const showDoctor = all_doctors.filter((ele) => {
    return ele.id === id
  }).map((ele) => {
    return(
        <tr key={ele.id}>
            <td className='add_bottom'>
                <div className='child'>
                    {ele.address.map((Elem) => {
                        return (
                            <p>{Elem}</p>
                        )
                    })}
                </div>
            </td>
            <td className='add_bottom'>
                <div className='child'>
                    {ele.region.map((Elem) => {
                        return (
                            <p>{Elem}</p>
                        )
                    })}
                </div>
            </td>

            <td className='add_bottom'>
                <div className='child'>
                    {ele.appointments.map((Elem) => {
                        return (
                            <p>{Elem}</p>
                        )
                    })}
                    {ele.appointmentsRegion2 && ele.appointmentsRegion2.map((Elem) => {
                        return (
                            <p>{Elem}</p>
                        )
                    })}
                </div>
            </td>
            <td className='add_bottom'>
                <div className='child'>
                    {ele.days.map((Elem) => {
                        return (
                            <p>{Elem}</p>
                        )
                    })}
                    {ele.daysRegion2 && ele.daysRegion2.map((Elem) => {
                        return (
                            <p>{Elem}</p>
                        )
                    })}
                    {ele.daysRegion3 && ele.daysRegion3.map((Elem) => {
                        return (
                            <p>{Elem}</p>
                        )
                    })}
                </div>
            </td>
            <td className='add_bottom'>
                <div className='child'>
                    {ele.clinicNumber && ele.clinicNumber.map((Elem) => {
                        return (
                            <p>{Elem}</p>
                        )
                    })}
                    {ele.clinicNumberRegion2 && ele.clinicNumberRegion2.map((Elem) => {
                        console.log(Elem);
                        return (
                            <p>{Elem}</p>
                            )
                        })}
                    {ele.clinicNumberRegion3 && ele.clinicNumberRegion3.map((Elem) => {
                        console.log(Elem);
                        return (
                            <p>{Elem}</p>
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
                    {ele.id}
                </div>
            </td>
        </tr>
    )
  })
  const gitName = all_doctors.filter((ele) => {
    return ele.id === id
  }).map((ele) => {
    return ele.name
  })
  console.log(gitName);

  useEffect(() => {
    const tables = document.querySelectorAll("table");
            console.log(tables);
            if (tables) {
                tables.forEach((table) => {
                    const headerRow = table.querySelector("thead tr");
                    const thElements = headerRow.querySelectorAll("th");
                    const tdElements = table.querySelectorAll("tbody tr td");
                    let mainIndex = 0;
                    tdElements.forEach((td) => {
                        console.log(td);
                    td.setAttribute("data-label", thElements[mainIndex].innerHTML);

                    if (mainIndex === thElements.length - 1) {
                        mainIndex = 0;
                    } else {
                        mainIndex += 1;
                    }
                    });
                });
            }
},[all_doctors , gitName ,id])
console.log(gitName );

  return (
    <ShowDoctorStyle>
        <div className='container'>
            <HeaderTopBody namebody={gitName} />
            <table width="100%">
                <thead>
                    <tr>
                        <th className='wprvite'>العنوان</th>
                        <th>المنطقه</th>
                        <th>المواعيد</th>
                        <th> الأيام </th>
                        <th> رقم العيادة</th>
                        <th> رقم الخاص</th>
                        <th className='wnmae'> إسم الدكتور</th>
                        <th>التخصص</th>
                        <th> رقم التسلسل</th>
                    </tr>
                </thead>
                <tbody>
                    {showDoctor}
                </tbody>
            </table>
        </div>
    </ShowDoctorStyle>
  )
}

const ShowDoctorStyle = styled.div`
min-height: 71.6vh;

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
table thead .wprvite {
    width: 200px;
}
table thead .wname {
    width: 140px;
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

export default ShowDoctor