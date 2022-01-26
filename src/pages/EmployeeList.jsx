import React from 'react';
import { NavLink } from 'react-router-dom';
import Header from '../components/Header';
import DataTable from '../components/DataTable';

/**
 * 
 * @returns page with employee list
 */

const EmployeeList = () => {
	return (
		<div className='EmployeeList'>
			<Header />
			<main>
				<NavLink to='createEmployee'>Register un new employee</NavLink>
				<h2>Current Employees</h2>
				<DataTable />
			</main>
		</div>
	);
};

export default EmployeeList;
