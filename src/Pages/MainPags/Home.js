import React from 'react'
import InputSearch from '../../Components/InputSearch/InputSearch'
// import Departments from '../../Sections/Home/Departments'
import AddDoctors from '../../Sections/Home/AddDoctors'
import styled from 'styled-components'
import PhotoPharmacy from '../../Sections/Home/PhotoPharmacy'
import { useDoctors } from '../../Context/DoctorsContext'
import Spine from '../../Components/Loading/Spine'

function Home() {

    const { isLoadingDataCategory } = useDoctors();

    if (isLoadingDataCategory) {
        return <Spine />
    }
    
    return (
        <HomeStyle>
            <div className='container'>
                <PhotoPharmacy />
                <InputSearch />
                <AddDoctors />
            </div>
        </HomeStyle>
    )
}
const HomeStyle = styled.div`
padding: 30px 0;
`;
export default Home