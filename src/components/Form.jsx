import React, { useState } from 'react';
import departments from '../data/departmentsData';
import stateData from '../data/stateData';
import { Modal } from 'react_modal_library';

/**
 * 
 * @returns Form component and Modal react library
 * Localstorage used for data persistence
 */

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

	const [ isOpen, setIsOpen ] = useState(false);
	const openModal = () => setIsOpen(true);
	const closeModal = () => setIsOpen(false);
	
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

		const infosEmployeeStorage = JSON.stringify(arrayInfos);
		localStorage.setItem('infosEmployee', infosEmployeeStorage);
		
		openModal();
	};

	return (
		<div className='Form'>
			<form method='post'>
				<div>
					<label htmlFor='firstName'>First Name</label>
					<input aria-required="true" type='text' id='firstName' name='firstName' onChange={(e) => setFirstname(e.target.value)} required value={firstname} />
				</div>
				<div>
					<label htmlFor='lastName'>Last Name</label>
					<input aria-required="true" type='text' id='lastName' name='lastName'  onChange={(e) => setLastname(e.target.value)} required value={lastname} />
				</div>
				<div>
					<label htmlFor='birthday'>Date of Birth</label>
					<input aria-required="true" type='date' id='birthday' name='birthday' onChange={(e) => setDateBirth(e.target.value)} required value={dateBirth} />
				</div>
				<div>
					<label htmlFor='startDate'>Start Date</label>
					<input aria-required="true" type='date' id='startDate' name='startDate' onChange={(e) => setStartDate(e.target.value)} required value={startDate}/>
				</div>
				<fieldset>
					<legend>Address</legend>
					<div>
						<label htmlFor='street'>Street</label>
						<input aria-required="true" type='text' id='street' name='street' onChange={(e) => setStreet(e.target.value)} required value={street} />
					</div>
					<div>
						<label htmlFor='city'>City</label>
						<input aria-required="true" type='text' id='city' name='city' onChange={(e) => setCity(e.target.value)} required value={city} />
					</div>
					<div>
						<label htmlFor="state">State</label>
						<select aria-required="true" name="state" id="state" onChange={(e) => setStateName(e.target.value)} required value={stateName} >
							{stateData.map(state => {
								return (<option key={state.name} value={state.name}>{state.name}</option>);
							})}
						</select>
					</div>
					<div>
						<label htmlFor='zip'>Zip Code</label>
						<input aria-required="true" type='number' id='zip' name='zip' onChange={(e) => setZipCode(e.target.value)} required value={zipCode} />
					</div>
				</fieldset>
				<div>
					<label htmlFor="department">Department</label>
					<select aria-required="true" name="department" id="department" onChange={(e) => setDepartment(e.target.value)} required value={department} >
						{departments.map(dept => {
							return (<option key={dept.name} value={dept.name}>{dept.name}</option>);
						})}
					</select>
				</div>
			</form>
			<button type='submit' id='saveButton' onClick={(e) => handleSubmit(e)}>Save</button>
			{isOpen && <Modal text='Employee created' close={closeModal} />}
		</div>
	);
};

export default Form;
