import { createAction } from "@reduxjs/toolkit";



// pending
export const FetchDataRequest = createAction('data/fetchDataRequest');
// fulfilld
export const FetchDataSuccess = createAction('data/fetchDataSuccess');
// rejected
export const FetchDataError = createAction('data/fetchDataError');


export const NextPageNum = createAction('pagination/NextPage');

export const PrevPageNum = createAction('pagination/PrevPage');

export const ChangeFilter = createAction('filter/changeFilter');


