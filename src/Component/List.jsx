import React, { useEffect, useState } from "react";
import { Fragment } from "react";
import axios from "axios";
import Loader from "./Loader";
function List() {
    const [data, setData] = useState([]);
    const [loader, setLoader] = useState(true);
    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/todos/").then((res) => {
            const data = res.data;
            setData(data);
            setLoader(false);
        })
    })

    return (
        <>
            {loader ? <Loader />
                :
                <Fragment>
                    <h1 className="text-center">List Is Here</h1>
                    <br /><br />
                    {
                        data.map(d => (
                            <div div className="container bg-light rounded-3" >
                                <div className="card border-0 rounded-2">
                                    <div className="card-header border-0">
                                        Id: {d.id}
                                    </div>
                                    <div className="card-body">
                                        {d.title}
                                        <div className="mt-2">
                                            {d.completed ?
                                                <span className="badge rounded-pill text-bg-primary">Success</span>
                                                :
                                                <span className="badge rounded-pill text-bg-danger">Failure</span>}
                                        </div>
                                    </div>
                                </div>
                                <br />
                            </div>
                        ))
                    }
                    <br />
                </Fragment>
            }
        </>

    )
}
export default List;