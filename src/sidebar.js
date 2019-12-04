import React, { Component } from 'react';
import employeePicture from './employeePicture.jpg';

class Sidebar extends Component {

    toggleVisibilityDepartments() {
        let departmentsList = document.getElementsByClassName("departments-list");
        for (let i = 0; i < departmentsList.length; i++) {
            departmentsList[i].classList.toggle("d-none");
        }
        let departmentsLink = document.getElementById("list-departments-list");
        departmentsLink.classList.toggle("active");
    }

    toggleVisibilityRecruitment() {
        let recruitmentList = document.getElementsByClassName("recruitment-list");
        for (let i = 0; i < recruitmentList.length; i++) {
            recruitmentList[i].classList.toggle("d-none");
        }
        let recruitmentLink = document.getElementById("list-recruitment-list");
        recruitmentLink.classList.toggle("active");
    }
    
    render() {
        return (
            <>
                <div className="sticky-top offset-top-56">
                    <div class="media p-3 border-bottom">
                        <img src={employeePicture} class="headshot mr-3" alt="Sample HR Employee Picture" />
                        <div class="media-body align-self-center">
                            <h5 class="m-0">Hello Patricia!</h5>
                        </div>
                    </div>
                    <div id="sidebar" class="list-group list-group-flush" role="tablist">
                        <a 
                            href="#list-employee-information" 
                            id="list-employee-information-list" 
                            data-toggle="list" 
                            role="tab" 
                            aria-controls="employee-information" 
                            class="list-group-item list-group-item-action list-group-item-light active">
                                <i class="fas fa-users mr-2"></i>
                                Employee Information
                        </a>
                        <a 
                            href="#list-departments" 
                            id="list-departments-list" 
                            data-toggle="list" 
                            role="tab" 
                            aria-controls="departments" 
                            class="list-group-item list-group-item-action list-group-item-light"
                            onClick={this.toggleVisibilityDepartments} >
                                <i class="fas fa-sitemap mr-2"></i>
                                Departments
                                <i class="fas fa-chevron-down float-right pt-1"></i>
                        </a>
                        <a 
                            href="#list-department-admin" 
                            id="list-department-admin-list" 
                            data-toggle="list" 
                            role="tab" 
                            aria-controls="department-admin" 
                            class="list-group-item list-group-item-action list-group-item-light departments-list d-none">
                                <i class="fas fa-copy mr-2 ml-4"></i>
                                Administrative
                        </a>
                        <a 
                            href="#list-department-development" 
                            id="list-department-development-list" 
                            data-toggle="list" 
                            role="tab" 
                            aria-controls="department-development" 
                            class="list-group-item list-group-item-action list-group-item-light departments-list d-none">
                                <i class="fas fa-code mr-2 ml-4"></i>
                                Development
                        </a>
                        <a 
                            href="#list-department-finance" 
                            id="list-department-finance-list" 
                            data-toggle="list" 
                            role="tab" 
                            aria-controls="department-finance" 
                            class="list-group-item list-group-item-action list-group-item-light departments-list d-none">
                                <i class="fas fa-file-invoice-dollar mr-2 ml-4"></i>
                                Finance
                        </a>
                        <a 
                            href="#list-department-hr" 
                            id="list-department-hr-list" 
                            data-toggle="list" 
                            role="tab" 
                            aria-controls="department-hr" 
                            class="list-group-item list-group-item-action list-group-item-light departments-list d-none">
                                <i class="fas fa-portrait mr-2 ml-4"></i>
                                Human Resources
                        </a>
                        <a 
                            href="#list-department-itSupport" 
                            id="list-department-itSupport-list" 
                            data-toggle="list" 
                            role="tab" 
                            aria-controls="department-itSupport" 
                            class="list-group-item list-group-item-action list-group-item-light departments-list d-none">
                                <i class="fas fa-question-circle mr-2 ml-4"></i>
                                IT Support
                        </a>
                        <a 
                            href="#list-department-qualityAssurance" 
                            id="list-department-qualityAssurance-list" 
                            data-toggle="list" 
                            role="tab" 
                            aria-controls="department-qualityAssurance" 
                            class="list-group-item list-group-item-action list-group-item-light departments-list d-none">
                                <i class="fas fa-list-alt mr-2 ml-4"></i>
                                Quality Assurance
                        </a>
                        <a 
                            href="#list-payroll" 
                            id="list-payroll-list" 
                            data-toggle="list" 
                            role="tab" 
                            aria-controls="payroll" 
                            class="list-group-item list-group-item-action list-group-item-light">
                                <i class="fas fa-money-bill mr-2"></i>
                                Payroll
                        </a>
                        <a 
                            href="#list-leave-management" 
                            id="list-leave-management-list" 
                            data-toggle="list" 
                            role="tab" 
                            aria-controls="leave-management" 
                            class="list-group-item list-group-item-action list-group-item-light">
                                <i class="fas fa-bed mr-2"></i>
                                Leave Management
                        </a>
                        <a 
                            href="#list-performance" 
                            id="list-performance-list" 
                            data-toggle="list" 
                            role="tab" 
                            aria-controls="performance" 
                            class="list-group-item list-group-item-action list-group-item-light">
                                <i class="fas fa-chart-line mr-2"></i>
                                Performance
                        </a>
                        <a 
                            href="#list-recruitment" 
                            id="list-recruitment-list" 
                            data-toggle="list" 
                            role="tab" 
                            aria-controls="recruitment" 
                            class="list-group-item list-group-item-action list-group-item-light"
                            onClick={this.toggleVisibilityRecruitment} >
                                <i class="fas fa-user-graduate mr-2"></i>
                                Recruitment
                                <i class="fas fa-chevron-down float-right pt-1"></i>
                        </a>
                        <a 
                            href="#list-candidate-form" 
                            id="list-candidate-form-list" 
                            data-toggle="list" 
                            role="tab" 
                            aria-controls="candidate-form" 
                            class="list-group-item list-group-item-action list-group-item-light recruitment-list d-none">
                                <i class="fas fa-plus-circle mr-2 ml-4"></i>
                                Add New Candidate
                        </a>
                        <a 
                            href="#list-candidate-edit" 
                            id="list-candidate-edit-list" 
                            data-toggle="list" 
                            role="tab" 
                            aria-controls="candidate-edit" 
                            class="list-group-item list-group-item-action list-group-item-light recruitment-list d-none">
                                <i class="fas fa-user-edit mr-2 ml-4"></i>
                                Edit Candidate
                        </a>
                        <a 
                            href="#list-employee-form" 
                            id="list-employee-form-list" 
                            data-toggle="list" 
                            role="tab" 
                            aria-controls="employee-form" 
                            class="list-group-item list-group-item-action list-group-item-light recruitment-list d-none">
                                <i class="fas fa-suitcase mr-2 ml-4"></i>
                                Add New Employee
                        </a>
                        <a 
                            href="#list-equipment" 
                            id="list-equipment-list" 
                            data-toggle="list" 
                            role="tab" 
                            aria-controls="equipment" 
                            class="list-group-item list-group-item-action list-group-item-light">
                                <i class="fas fa-desktop mr-2"></i>
                                Equipment
                        </a>
                        <a 
                            href="#list-separation" 
                            id="list-separation-list" 
                            data-toggle="list" 
                            role="tab" 
                            aria-controls="separation" 
                            class="list-group-item list-group-item-action list-group-item-light">
                                <i class="fas fa-briefcase mr-2"></i>
                                Separation
                        </a>
                    </div>               
                </div>
            </>
        );

    }
}

export default Sidebar;