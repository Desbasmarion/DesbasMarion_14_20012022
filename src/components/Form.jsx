import React, { useState } from 'react';
import departments from '../data/departmentsData';
import stateData from '../data/stateData';

const Form = () => {

	const [ firstname, setFirstname] = useState('');
	const [ lastname, setLastname] = useState('');
	const [ dateBirth, setDateBirth] = useState('');
	const [ startDate, setStartDate] = useState('');
	const [ street, setStreet] = useState('');
	const [ city, setCity] = useState('');
	const [ stateName, setStateName] = useState('');
	const [ zipCode, setZipCode] = useState('');
	const [ department, setDepartment] = useState('');

	let arrayInfos = JSON.parse(localStorage.getItem('infosEmployee')) || [];

	const infosEmployee = {
		firstname, 
		lastname, 
		startDate,
		department,
		dateBirth, 
		street, 
		city, 
		stateName,
		zipCode, 
	};

	const handleSubmit = (e) => {
		e.preventDefault();
	
		arrayInfos.push(infosEmployee);
		console.log(arrayInfos, 'dedans');
		const infosEmployeeStorage = JSON.stringify(arrayInfos);
		localStorage.setItem('infosEmployee', infosEmployeeStorage);
	};

	return (
		<div className='Form'>
			<form method='post'>
				<div>
					<label htmlFor='firstName'>First Name</label>
					<input type='text' id='firstName' name='firstName' onChange={(e) => setFirstname(e.target.value)} />
				</div>
				<div>
					<label htmlFor='lastName'>Last Name</label>
					<input type='text' id='lastName' name='lastName' onChange={(e) => setLastname(e.target.value)}/>
				</div>
				<div>
					<label htmlFor='birthday'>Date of Birth</label>
					<input type='date' id='birthday' name='birthday' onChange={(e) => setDateBirth(e.target.value)}/>
				</div>
				<div>
					<label htmlFor='startDate'>Start Date</label>
					<input type='date' id='startDate' name='startDate' onChange={(e) => setStartDate(e.target.value)}/>
				</div>
				<fieldset>
					<legend>Address</legend>
					<div>
						<label htmlFor='street'>Street</label>
						<input type='text' id='street' name='street' onChange={(e) => setStreet(e.target.value)}/>
					</div>
					<div>
						<label htmlFor='city'>City</label>
						<input type='text' id='city' name='city' onChange={(e) => setCity(e.target.value)} />
					</div>
					<div>
						<label htmlFor="state">State</label>
						<select name="state" id="state" onChange={(e) => setStateName(e.target.value)}>
							{stateData.map(state => {
								return (<option key={state.name} value={state.name}>{state.name}</option>);
							})}
						</select>
					</div>
					<div>
						<label htmlFor='zip'>Zip Code</label>
						<input type='number' id='zip' name='zip' onChange={(e) => setZipCode(e.target.value)}/>
					</div>
				</fieldset>
				<div>
					<label htmlFor="department">Department</label>
					<select name="department" id="department" onChange={(e) => setDepartment(e.target.value)}>
						{departments.map(dept => {
							return (<option key={dept.name} value={dept.name}>{dept.name}</option>);
						})}
					</select>
				</div>
			</form>
			<button type='submit' id='saveButton' onClick={handleSubmit}>Save</button>
		</div>
	);
};

export default Form;
