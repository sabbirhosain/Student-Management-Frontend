import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import { BsEyeFill } from 'react-icons/bs';
import DataTable from 'react-data-table-component';
import { BiEditAlt, BiTrash } from 'react-icons/bi';
import { useAcademy_Info_Context } from '../../Context/Academy_Info_Context';

const Table_Subject = () => {
  const { subject, fetchSubjectData } = useAcademy_Info_Context()
  useEffect(() => { fetchSubjectData(1) }, [subject.search]);
  const onPageChange = (page) => { fetchSubjectData(page) };

  const columns = [
    {
      name: "SL",
      selector: (row, index) => (index + 1),
      width: "60px"
    },
    {
      name: "Subject Name (BN)",
      selector: row => row.name
    },
    {
      name: "Subject Name (EN)",
      selector: row => row.nick_name
    },
    {
      name: "Action",
      cell: row => <div className="d-flex align-items-center gap-2">
        <Link to={`/subject-view/${row.id}`} className="btn btn-outline-primary rounded-0 btn-sm"><BsEyeFill /></Link>
        <Link to={`/subject-update/${row.id}`} className="btn btn-outline-success rounded-0 btn-sm"><BiEditAlt /></Link>
        <button type="button" onClick={() => (row.id)} className="btn btn-outline-danger rounded-0 btn-sm"><BiTrash /></button>
      </div>,
      width: "150px"
    }
  ];

  if (subject.error_message) {
    return <div className="text-center">{subject.error_message}</div>
  } else {
    return (
      <>
        <DataTable
          columns={columns}
          data={subject.data?.results?.data}
          pagination
          paginationServer
          paginationComponentOptions={{ noRowsPerPage: true }}
          progressPending={subject.isLoading}
          paginationTotalRows={subject.count}
          onChangePage={onPageChange}
        />
      </>
    )
  }
}

export default Table_Subject