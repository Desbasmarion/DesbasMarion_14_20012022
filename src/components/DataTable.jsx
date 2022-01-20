import React from 'react';


const DataTable = () => {
	return (
		<div className='DataTable'>
			<div className='utilsBar'>
				<p><span>Show </span> 
					<select>
						<option value={10}>10</option>
						<option value={25}>25</option>
						<option value={50}>50</option>
						<option value={100}>100</option>
					</select> 
					<span> entries</span>
				</p>
				<div className='searchBar'>
					<label htmlFor='search'>Search: </label>
					<input type='search'></input>
				</div>
			</div>
			
		</div>
	);
};

export default DataTable;
