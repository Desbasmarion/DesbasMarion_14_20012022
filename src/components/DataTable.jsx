import React, { useEffect, useState } from 'react';
import DataTables from 'datatables-plugin-react';
import { exampleLabels } from '../data/mockedData';

const DataTable = () => {
	const [employeesInfos, setEmployeesInfos] = useState([]);

	useEffect( () => {
		let data = JSON.parse(localStorage.getItem('infosEmployee'));
		setEmployeesInfos(data);
	}, []);
	
	return (
		<div className='DataTable'>
			{employeesInfos.length >= 1 ? <DataTables labels={exampleLabels} data={employeesInfos} /> : 'Loading'}
			
		</div>
	);
};

export default DataTable;
