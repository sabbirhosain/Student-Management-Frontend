import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import { BsEyeFill } from 'react-icons/bs';
import DataTable from 'react-data-table-component';
import { BiEditAlt, BiTrash } from 'react-icons/bi';
import { useAcademy_Info_Context } from '../../Context/Academy_Info_Context';

const Table_Class = () => {
  const { classs, fetchClassData } = useAcademy_Info_Context()
  useEffect(() => { fetchClassData(1) }, [classs.search]);
  const onPageChange = (page) => { fetchClassData(page) };

  const columns = [
    {
      name: "SL",
      selector: (row, index) => (index + 1),
      width: "60px"
    },
    {
      name: "Class Name (BN)",
      selector: row => row.name
    },
    {
      name: "Class Name (EN)",
      selector: row => row.numeric_name
    },
    {
      name: "Action",
      cell: row => <div className="d-flex align-items-center gap-2">
        <Link to={`/class-view/${row.id}`} className="btn btn-outline-primary rounded-0 btn-sm"><BsEyeFill /></Link>
        <Link to={`/class-update/${row.id}`} className="btn btn-outline-success rounded-0 btn-sm"><BiEditAlt /></Link>
        <button type="button" onClick={() => (row.id)} className="btn btn-outline-danger rounded-0 btn-sm"><BiTrash /></button>
      </div>,
      width: "150px"
    }
  ];

  if (classs.error_message) {
    return <div className="text-center">{classs.error_message}</div>
  } else {
    return (
      <>
        <DataTable
          columns={columns}
          data={classs.data}
          pagination
          paginationServer
          paginationComponentOptions={{ noRowsPerPage: true }}
          progressPending={classs.isLoading}
          paginationTotalRows={classs.pagination?.total_data}
          onChangePage={onPageChange}
        />
      </>
    )
  }
}

export default Table_Class