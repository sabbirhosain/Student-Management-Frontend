import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import { BsEyeFill } from 'react-icons/bs';
import DataTable from 'react-data-table-component';
import { BiEditAlt, BiTrash } from 'react-icons/bi';
import { useAcademy_Info_Context } from '../../Context/Academy_Info_Context';

const Table_Section = () => {
  const { section, fetchSectionData } = useAcademy_Info_Context()
  useEffect(() => { fetchSectionData(1) }, [section.search]);
  const onPageChange = (page) => { fetchSectionData(page) };

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
        <Link to={`/section-view/${row.id}`} className="btn btn-outline-primary rounded-0 btn-sm"><BsEyeFill /></Link>
        <Link to={`/section-update/${row.id}`} className="btn btn-outline-success rounded-0 btn-sm"><BiEditAlt /></Link>
        <button type="button" onClick={() => (row.id)} className="btn btn-outline-danger rounded-0 btn-sm"><BiTrash /></button>
      </div>,
      width: "150px"
    }
  ];

  if (section.error_message) {
    return <div className="text-center">{section.error_message}</div>
  } else {
    return (
      <>
        <DataTable
          columns={columns}
          data={section.data?.results?.data}
          pagination
          paginationServer
          paginationComponentOptions={{ noRowsPerPage: true }}
          progressPending={section.isLoading}
          paginationTotalRows={section.count}
          onChangePage={onPageChange}
        />
      </>
    )
  }
}

export default Table_Section