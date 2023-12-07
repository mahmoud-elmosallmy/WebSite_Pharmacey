import React from 'react'
import InputSearch from '../../Components/InputSearch/InputSearch'
// import Departments from '../../Sections/Home/Departments'
import AddDoctors from '../../Sections/Home/AddDoctors'
import styled from 'styled-components'
import PhotoPharmacy from '../../Sections/Home/PhotoPharmacy'

function Home() {
    
    return (
        <HomeStyle>
            <div className='container'>
                <PhotoPharmacy />
                <InputSearch />
                <AddDoctors />
                {/* <Departments /> */}
            </div>
        </HomeStyle>
    )
}
const HomeStyle = styled.div`
padding: 30px 0;
`;
export default Home