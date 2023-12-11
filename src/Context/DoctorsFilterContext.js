import React, { createContext, useContext, useEffect, useReducer, useState } from 'react'
import reducer from "../Reducer/DoctorsFilterReducer";
import { useDoctors } from './DoctorsContext';

const FilterDoctors = createContext()

function DoctorsFilterContext({children}) {
    
    const { doctors } = useDoctors()
    const [numId, setNumId] = useState([])

    const initialAuthState = {
        all_doctors: [],
        all_doctors2: [],
        all_doctors3: [],
        filters_doctors: [],
        doctorsCategory: [],
        doctorsCategory2: [],
        doctorsCategoryAll: [],
        filterDoctors: [],
        isLoadingFilterDoctors: true,
        filters: {
            search: "",
            category: "الجميع",
            region_all: "الجميع",
            filterRegion: []
        }
    }

    const [state , dispatch] = useReducer(reducer , initialAuthState)


    const updateFilterValue = (event) => {
        const name = event.target.name
        const value = event.target.value
        return (
            dispatch({type: "UPDATE_FILTER_VALUE", payload: {name , value}})
        )
    }

    useEffect(() => {
        dispatch({type: "LOAD_FILTER_DOCTORS", payload: doctors})
    },[doctors])
    
    useEffect(() => {
        dispatch({type: "GIT_DOCTORS_CATEGORY", payload: [doctors , `${numId}`]})
        dispatch({type: "GIT_DOCTORS_CATEGORY2", payload: [doctors , `${numId}`]})
        dispatch({type: "GIT_DOCTORS_CATEGORY_All", payload: doctors})
        dispatch({type: "LOAD_FILTER_DOCTORS_ALL", payload: doctors})
    },[numId,doctors])
    
    useEffect(() => {
        dispatch({type: "FILTER_REGION"})
        dispatch({type: "FILTER_DOCTORS"})
        
    },[state.filters])

    useEffect(() => {
        dispatch({type: "FILTER_REGION_All"})
        
    },[state.filters])

    return (
        <FilterDoctors.Provider value={{ ...state , setNumId , updateFilterValue }}>{children}</FilterDoctors.Provider>
    )
}

const useFilterDoctors = () => {
    return useContext(FilterDoctors)
};

export default DoctorsFilterContext;
export {useFilterDoctors}