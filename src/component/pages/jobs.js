import React, { useState } from "react";
import List from "./joblistapi";
import Joblist from "./joblist";
const Job=()=>{
    const [jobData, setMenuData] = useState(List);
    return(
            <>
              <Joblist jobData={jobData} />
            </>

    )
}
export default Job