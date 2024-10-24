import React from 'react';
import JobsFilters from './JobsFilters';
import JobsTable from './JobsTable';

const JobsBrowser = () => {
  return (
    <div className="grid grid-cols-12 gap-4">
      <div className="col-span-4 border border-red-500">
        <JobsFilters />
      </div>
      <div className="col-span-8 border border-blue-500">
        <JobsTable />
      </div>
    </div>
  );
};

export default JobsBrowser;