import React from 'react'
import { useParams } from 'react-router'
import { useFilterDoctors } from '../Context/DoctorsFilterContext';
import styled from 'styled-components';
import InputSearch from './InputSearch/InputSearch';
import TableDoctor from './TableDoctors/TableDoctor';

function DoctorsCategory() {
    const {setNumId , doctorsCategory} = useFilterDoctors()
    const {id} = useParams()
    setNumId(id);
    

  return (
    <DoctorsCategoryStyle>
        <div className='container'>
            <InputSearch />
            <TableDoctor doctors={doctorsCategory} />
        </div>
    </DoctorsCategoryStyle>
  )
}
const DoctorsCategoryStyle = styled.div`

`;

export default DoctorsCategory