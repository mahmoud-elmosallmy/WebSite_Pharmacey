function DoctorsFilterReducer(state , action) {
    switch (action.type) {
        case "LOAD_FILTER_DOCTORS":
        
            return {
                ...state,
                all_doctors: [...action.payload],
            }
        case "LOAD_FILTER_DOCTORS_ALL":
        
            return {
                ...state,
                all_doctors2: [...action.payload],
                filters_doctors: [...action.payload],
                all_doctors3: [...action.payload]
            }
            
        case "GIT_DOCTORS_CATEGORY":
            const doctors_Category = action.payload[0].filter((ele) => {
                return ele.category === action.payload[1]
            })

            return {
                ...state,
                doctorsCategory: doctors_Category,
            }
        case "GIT_DOCTORS_CATEGORY2":
            const doctors_Category2 = action.payload[0].filter((ele) => {
                return ele.category === action.payload[1]
            })
            return {
                ...state,
                doctorsCategory2: doctors_Category2,
            }
        case "GIT_DOCTORS_CATEGORY_All":

            return {
                ...state,
                doctorsCategoryAll: action.payload,
            }
        case "UPDATE_FILTER_VALUE":
            const {name , value} = action.payload;
            return {
                ...state,
                filters: {...state.filters , [name]: value},
            }
        case "FILTER_DOCTORS":
            const {all_doctors} = state;
            let temFilterDoctors = [...all_doctors]
            const {search} = state.filters;

            if (search) {   
                temFilterDoctors = temFilterDoctors.filter((ele) => {
                    return ele.name.toLowerCase().includes(search)
                })
            }

            return {
                ...state,
                filterDoctors: temFilterDoctors
            }
            
        case "FILTER_REGION":
            let { doctorsCategory2 } = state;
            let res = [...doctorsCategory2]
            let { region } = state.filters;
            let temFilterRegionch1;
            let temFilterRegionch2;
            let temFilterRegionch3;
                if (region !== "الجميع") {
                    temFilterRegionch1 = doctorsCategory2.filter((curElem) => {
                        let a = {...curElem.region}
                        return a[0] === region
                    });
                    
                    temFilterRegionch2 = doctorsCategory2.filter((curElem) => {
                        let a = {...curElem.region}
                        return a[1] === region
                    });
                    
                    temFilterRegionch3 = doctorsCategory2.filter((curElem) => {
                        let a = {...curElem.region}
                        return a[2] === region
                    });
                    res = [...temFilterRegionch1 , ...temFilterRegionch2, ...temFilterRegionch3]
                }

            console.log(temFilterRegionch1);
            console.log(temFilterRegionch2);
            console.log(temFilterRegionch3);
            return {
                ...state,
                doctorsCategory: res
            }
        case "FILTER_REGION_All":
            let {all_doctors3} = state;
            let {category , region_all} = state.filters;
            let data = [...all_doctors3]
            // let result = data;

            let temFilterRegionch11;
            let temFilterRegionch22;
            let temFilterRegionch33;
            // let specialization;
                if (region_all !== "الجميع") {
                    temFilterRegionch11 = data.filter((curElem) => {
                        let a = {...curElem.region}
                        // console.log(a);
                        return a[0] === region_all
                    });

                    temFilterRegionch22 = data.filter((curElem) => {
                        let a = {...curElem.region}
                        return a[1] === region_all
                    });
                    
                    temFilterRegionch33 = data.filter((curElem) => {
                        let a = {...curElem.region}
                        return a[2] === region_all
                    });
                    data = [...temFilterRegionch11 , ...temFilterRegionch22, ...temFilterRegionch33]
                    console.log(data);
                }
                console.log(data);
                if (category !== "الجميع") {
                    console.log(data);

                    data = data.filter((curElem) => {
                        // let a = {...curElem.category}
                        console.log(curElem);
                        console.log(curElem.category);
                        console.log(category);
                        return curElem.category === category
                    });
                    // console.log(specialization);
                    // result = [...specialization]
                    console.log(data);
                }
                // console.log(result);

            return {
                ...state,
                filters_doctors: data
            }
    
        default:
            return state;
    }
}
export default DoctorsFilterReducer