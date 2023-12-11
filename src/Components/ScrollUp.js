import React from 'react'
import  {FaUpLong}  from 'react-icons/fa6'
import ScrollToTop from 'react-scroll-to-top';
import styled from 'styled-components';


function ScrollUp() {
    return (
        <Span>
            <ScrollToTop smooth top={400} component={<FaUpLong />} className='scrollup' />
        </Span>
    )
}
const Span = styled.a`
    .scrollup {
        right: 25px!important;
        width: 38px;
        height: 45px;
        background-color: #f7550c!important;
        /* box-shadow: 0 4px 12px #445b6f26!important; */
        display: inline-flex;
        padding: 0.35rem!important;
        border-radius: 4px!important;
        padding: 8px!important;
        font-size: 30px!important;
        z-index: 10;
        transition: bottom .3s,transform .3s!important;
        color: white!important;

        &:hover {
            transform: translateY(-.25rem);
        }
    }
    .scrollup {
        bottom: 2.2rem;
    }
`

export default ScrollUp