import React, { Component } from 'react';

class EmployeeInformation extends Component {
    render() {
        return (
            <>
                <h2 className="display-6">Employee Information</h2>
                <div className="my-4 p-3 bg-gray rounded">
                    <p className="small text-uppercase text-muted m-0">Filter by:</p>
                    <form class="form-inline"> 
                        <label class="mr-2" for="filterDepartment">Department:</label>
                        <select class="mr-3" id="filterDepartment">
                        <option selected>Select Department</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                        </select>

                        <label class="mr-2" for="filterStatus">Status:</label>
                        <select class="mr-3" id="filterStatus">
                        <option selected>Select Status</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                        </select>

                        <label class="mr-2" for="filterPosition">Position:</label>
                        <input type="text" class="form-control mr-3" id="filterPosition" />
                        
                        <label class="mr-2" for="filterName">Name:</label>
                        <input type="text" class="form-control mr-3" id="filterName" />
                        
                        <button type="submit" class="btn btn-secondary mr-2">Apply</button>
                        <button type="submit" class="btn btn-outline-secondary">Reset</button>
                    </form>

                </div>

                <table class="table">
                    <thead>
                        <tr>
                        <th scope="col">Employee ID</th>
                        <th scope="col">Department</th>
                        <th scope="col">Name</th>
                        <th scope="col">Position</th>
                        <th scope="col">Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <th scope="row">000001</th>
                        <td>Finance</td>
                        <td>Sharma, Shivam</td>
                        <td>Senior Developer</td>
                        <td><a href="#">more info</a></td>
                        </tr>
                        <tr>
                        <th scope="row">000002</th>
                        <td>Laboratory</td>
                        <td>Carolina, Nathaniel</td>
                        <td>Laboratory Manager</td>
                        <td><a href="#">more info</a></td>
                        </tr>
                        <tr>
                        <th scope="row">000003</th>
                        <td>Sales</td>
                        <td>Ghule, Snehal</td>
                        <td>Sales Manager</td>
                        <td><a href="#">more info</a></td>
                        </tr>
                        <tr>
                        <th scope="row">000001</th>
                        <td>Finance</td>
                        <td>Sharma, Shivam</td>
                        <td>Senior Developer</td>
                        <td><a href="#">more info</a></td>
                        </tr>
                        <tr>
                        <th scope="row">000002</th>
                        <td>Laboratory</td>
                        <td>Carolina, Nathaniel</td>
                        <td>Laboratory Manager</td>
                        <td><a href="#">more info</a></td>
                        </tr>
                        <tr>
                        <th scope="row">000003</th>
                        <td>Sales</td>
                        <td>Ghule, Snehal</td>
                        <td>Sales Manager</td>
                        <td><a href="#">more info</a></td>
                        </tr>
                    </tbody>
                </table>

                <div className="row">
                    <div className="col-6">
                        <nav aria-label="Page navigation example">
                        <ul class="pagination">
                            <li class="page-item"><a class="page-link" href="#">Previous</a></li>
                            <li class="page-item"><a class="page-link" href="#">1</a></li>
                            <li class="page-item"><a class="page-link" href="#">2</a></li>
                            <li class="page-item"><a class="page-link" href="#">3</a></li>
                            <li class="page-item"><a class="page-link" href="#">Next</a></li>
                        </ul>
                        </nav>
                    </div>

                    <div className="col-6 text-right">
                        <label class="mr-2" for="numberRecords">Number of records per page:</label>
                        <select class="mr-4" id="numberRecords">
                        <option value="10">10</option>
                        <option value="20">20</option>
                        <option value="30">30</option>
                        </select>
                    </div>
                </div>
            </>

        );
    }
}

export default EmployeeInformation;