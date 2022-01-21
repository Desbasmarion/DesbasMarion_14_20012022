import React from 'react';
import DataTables from 'datatables-plugin-react';
import { exampleLabels, exampleData } from '../data/mockedData';

const DataTable = () => {
	return (
		<div className='DataTable'>
			<DataTables labels={exampleLabels} data={exampleData} />
		</div>
	);
};

export default DataTable;
