import React from "react";
import { Fragment } from "react";

function List() {
    return (
        <Fragment>
            <h1 className="text-center">List Is Here</h1>
            <br /><br />
            <div className="container bg-light rounded-3">
                <div className="card border-0 rounded-2">
                    <div className="card-header border-0">
                        Name: Hello
                    </div>
                    <div className="card-body">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo voluptas
                        <div className="mt-2">
                            <span className="badge rounded-pill text-bg-primary">Success</span>
                            <span className="badge rounded-pill text-bg-danger">Failure</span>
                        </div>
                    </div>
                </div>
                <br />
            </div>
            <br />
            <div className="container bg-light rounded-3">
                <div className="card border-0 rounded-2">
                    <div className="card-header border-0">
                        Name: Hello
                    </div>
                    <div className="card-body">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo voluptas
                        <div className="mt-2">
                            <span className="badge rounded-pill text-bg-primary">Success</span>
                            <span className="badge rounded-pill text-bg-danger">Failure</span>
                        </div>
                    </div>
                </div>
                <br />
            </div>
        </Fragment>
    )
}
export default List;