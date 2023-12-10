import React from 'react'
import styled from 'styled-components'
import TableDoctor from '../../Components/TableDoctors/TableDoctor';
import { useFilterDoctors } from '../../Context/DoctorsFilterContext';
import SearchForCategory from '../../Components/SearchForCategory';
import SearchForRegion from '../../Components/SearchForRegion';

function PageFilterDoctor() {
    
    const { all_doctors , filters_doctors} = useFilterDoctors();

    return (
        <PageFilterDoctorStyle>
            <div className='parent'>
                <div className='right'>
                    <SearchForCategory showDoctor={all_doctors} />
                    <SearchForRegion showDoctor={all_doctors} howMenyNumber={filters_doctors} />
                </div>
                <div className='left'>
                    <TableDoctor doctors={filters_doctors} />
                </div>
            </div>
        </PageFilterDoctorStyle>
    )
}
const PageFilterDoctorStyle = styled.section`
.parent {
    /* display: flex; */

}
`;

export default PageFilterDoctor