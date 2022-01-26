import React from 'react';
import { NavLink } from 'react-router-dom';
import Form from '../components/Form';
import Header from '../components/Header';

/**
 * 
 * @returns page for create new employee
 */

const CreateEmployee = () => {
	return (
		<div className='CreateEmployee'>
			<Header />
			<main>
				<NavLink to='/'>View Current Employees</NavLink>
				<h2>Create Employee</h2>
				<Form />
			</main>
		</div>
	);
};

export default CreateEmployee;
