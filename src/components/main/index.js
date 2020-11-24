import React, {useEffect} from 'react'
import DialisysTable from "../dialisys-table";
import Filter from "../filter";

const Main = () => {
    return (<>
        <div style={{marginTop: '80px'}}>
            <Filter/>
            <br />
            <DialisysTable/>
        </div>
    </>)
}
export default Main
