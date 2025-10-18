import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import { BsEyeFill } from 'react-icons/bs';
import DataTable from 'react-data-table-component';
import { BiEditAlt, BiTrash } from 'react-icons/bi';
import { useAcademy_Info_Context } from '../../Context/Academy_Info_Context'

const Table_Teacher = () => {
  const { teacher, fetchTeacherData } = useAcademy_Info_Context()
  useEffect(() => { fetchTeacherData(1) }, [teacher.search]);
  const onPageChange = (page) => { fetchTeacherData(page) };

  const columns = [
    {
      name: "SL",
      selector: (row, index) => (index + 1),
      width: "60px"
    },
    {
      name: "Attachment ",
      selector: row => (row.pdf ? <a href={row.pdf} target="_new" rel="noopener noreferrer">
        <img src={placeholder} width="30px" height="30px" alt="PDF file" />
      </a> : <span className="text-muted">No File</span>
      ),
      width: "100px"
    },
    {
      name: "Teacher Name",
      selector: row => row.name
    },
    {
      name: "Subject",
      selector: row => row.subject
    },
    {
      name: "Phone",
      selector: row => row.phone
    },
    {
      name: "Email",
      selector: row => row.email
    },
    {
      name: "Action",
      cell: row => <div className="d-flex align-items-center gap-2">
        <Link to={`/teacher-view/${row.id}`} className="btn btn-outline-primary rounded-0 btn-sm"><BsEyeFill /></Link>
        <Link to={`/teacher-update/${row.id}`} className="btn btn-outline-success rounded-0 btn-sm"><BiEditAlt /></Link>
        <button type="button" onClick={() => (row.id)} className="btn btn-outline-danger rounded-0 btn-sm"><BiTrash /></button>
      </div>,
      width: "150px"
    }
  ];

  if (teacher.error_message) {
    return <div className="text-center">{teacher.error_message}</div>
  } else {
    return (
      <>
        <DataTable
          columns={columns}
          data={teacher.data?.results?.data}
          pagination
          paginationServer
          paginationComponentOptions={{ noRowsPerPage: true }}
          progressPending={teacher.isLoading}
          paginationTotalRows={teacher.count}
          onChangePage={onPageChange}
        />
      </>
    )
  }
}

export default Table_Teacher