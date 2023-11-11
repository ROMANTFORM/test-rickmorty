import { configureStore } from "@reduxjs/toolkit";


const dataState = {
    fetchResults: [],
    isLoading: false,
}

const paginationState = {
    pageNumber: 1
}

const filterState = {
    filter: ''
}

const dataReducer = (state = dataState, {type, payload}) => {
    switch(type){
        case 'data/fetchDataSuccess':
            return {
                fetchResults: payload,
                isLoading: false
            }
        
        case 'data/fetchDataRequest':
            return {
                isLoading: true,
            }

        case 'data/fetchDataError':
            return {
                isLoading: false
            }

        default: return state
    }
}

const paginationReducer = (state = paginationState, {type, payload}) => {

    switch(type){
        case 'pagination/NextPage':
            return {pageNumber: state.pageNumber + payload};

        case 'pagination/PrevPage':
            if(state.pageNumber === 1){
                return {pageNumber: 1}
            }
            return {pageNumber: state.pageNumber - payload};

        default: return state
    }
}

const filterReducer = (state = filterState.filter, {type, payload}) => {
    switch(type){
        case 'filter/changeFilter':
            return payload

        default: return state
    }
}

const store = configureStore({
    reducer: {
        dataState: dataReducer,
        paginationState: paginationReducer,
        filterState: filterReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
          serializableCheck: false,
        }),
    devTools: process.env.NODE_ENV === 'development'
})

export default store;