import React from 'react';
import {useSearchParams} from "react-router-dom";

const PaginationComponent = () => {

   let[searchParams,setSearchParams] = useSearchParams()


    return (
        <div>
            <button onClick={()=>{
                let page = +(searchParams.get('page') || '0')
                let nextpage = (page - 1).toString()
                setSearchParams({page:nextpage})
            }}>previous page</button>
            <button onClick={()=>{
                let page = +(searchParams.get('page') || '0')
                let nextpage = (page +1).toString()
                setSearchParams({page:nextpage})
            }}>next page</button>
        </div>
    );
};

export default PaginationComponent;
////////// чомусь всі пости з'являються одразу