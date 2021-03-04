import React from 'react'
import './TableIncExp.css'

const TableIncExp = (props)=>
(
    <div className="">
        <div className="d-flex justify-content-between">
            <div className="mt-2">
            <select class="form-select mb-3" aria-label="Default select example">
                <option selected>Search by category</option>
                <option value="1">One</option>
            </select>
            </div>
            <div className="">
                <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                   + New
                </button>
            <div class="modal" tabindex="-1" id="exampleModal">
                <div class="modal-dialog">
                    <form action="" method="POST">
                        <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title">{props.modalname}</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <div class="mb-3">
                                <label for="exampleFormControlTextarea1" class="form-label">Description</label>
                                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Quantity</label>
                                <input type="number" class="form-control" id="exampleFormControlInput1" placeholder="0"/>
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Category</label>
                                <select class="form-select" aria-label="Default select example">
                                    <option selected>-Category-</option>
                                    <option value="1">One</option>
                                </select>
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Date</label>
                                <input type="date" class="form-control" id="exampleFormControlInput1" placeholder="0"/>
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Operation</label>
                                <select class="form-select" aria-label="Default select example">
                                    <option selected>Select your operation</option>
                                    <option value="1">Income</option>
                                    <option value="1">Expenses</option>
                                </select>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary">Add</button>
                        </div>
                        </div>
                    </form>
                </div>
            </div>
                
            </div>
        </div>
        <table class="table table-bordered table-bg">
            <thead>
                <tr>
                    <th scope="col">Date</th>
                    <th scope="col">Description</th>
                    <th scope="col">Quantity</th>
                    <th scope="col">Category</th>
                    <th scope="col"></th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <td>Mark</td>
                <td>Otto</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td>@mdo</td>
                </tr>
                <tr>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>Thornton</td>
                <td>Thornton</td>
                <td>@fat</td>
                </tr>
                <tr>
                <td>Larry the Bird</td>
                <td>Larry the Bird</td>
                <td>@twitter</td>
                <td>@twitter</td>
                <td>@fat</td>
                </tr>
            </tbody>
        </table>
    </div>
)

export default TableIncExp;