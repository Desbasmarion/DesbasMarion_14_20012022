import React from 'react';
import departments from '../data/departmentsData';
import stateData from '../data/stateData';

const Form = () => {

	// const state = {

	// }

	return (
		<div className='Form'>
			<form method='post'>
				<div>
					<label htmlFor='firstName'>First Name</label>
					<input type='text' id='firstName' name='firstName' />
				</div>
				<div>
					<label htmlFor='lastName'>Last Name</label>
					<input type='text' id='lastName' name='lastName' />
				</div>
				<div>
					<label htmlFor='birthday'>Date of Birth</label>
					<input type='date' id='birthday' name='birthday' />
				</div>
				<div>
					<label htmlFor='startDate'>Start Date</label>
					<input type='date' id='startDate' name='startDate' />
				</div>
				<fieldset>
					<legend>Address</legend>
					<div>
						<label htmlFor='street'>Street</label>
						<input type='text' id='street' name='street' />
					</div>
					<div>
						<label htmlFor='city'>City</label>
						<input type='text' id='city' name='city' />
					</div>
					<div>
						<label htmlFor="state">State</label>
						<select name="state" id="state">
							{stateData.map(state => {
								return (<option key={state.name} value={state.name}>{state.name}</option>);
							})}
						</select>
					</div>
					<div>
						<label htmlFor='zip'>Zip Code</label>
						<input type='number' id='zip' name='zip' />
					</div>
				</fieldset>
				<div>
					<label htmlFor="department">Department</label>
					<select name="department" id="department">
						{departments.map(dept => {
							return (<option key={dept.name} value={dept.name}>{dept.name}</option>);
						})}
					</select>
				</div>
			</form>
			<button type='submit' id='saveButton'>Save</button>
		</div>
	);
};

export default Form;
