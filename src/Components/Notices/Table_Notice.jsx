import { useEffect } from "react";
import { Link } from 'react-router-dom';
import { BsEyeFill } from 'react-icons/bs';
import DataTable from 'react-data-table-component';
import { BiEditAlt, BiTrash } from 'react-icons/bi';
import placeholder from '/pdf-placeholder.png'
import { useNotice_Context } from "../../Context/Notice_Context"

const Table_Notice = () => {
  const { notice, fetchNoticeData } = useNotice_Context()
  useEffect(() => { fetchNoticeData(1) }, [notice.search, notice.status]);
  const onPageChange = (page) => { fetchNoticeData(page) };

  const columns = [
    {
      name: "SL",
      selector: (row, index) => (index + 1),
      width: "60px"
    },
    {
      name: "Notice Date",
      selector: row => row.notice_datetime
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
      name: "Title",
      selector: row => row.title
    },
    {
      name: "Description",
      selector: row => row.description
    },
    {
      name: "Action",
      cell: row => <div className="d-flex align-items-center gap-2">
        <Link to={`/notice-view/${row.id}`} className="btn btn-outline-primary rounded-0 btn-sm"><BsEyeFill /></Link>
        <Link to={`/notice-update/${row.id}`} className="btn btn-outline-success rounded-0 btn-sm"><BiEditAlt /></Link>
        <button type="button" onClick={() => (row.id)} className="btn btn-outline-danger rounded-0 btn-sm"><BiTrash /></button>
      </div>,
      width: "150px"
    }
  ];

  if (notice.error_message) {
    return <div className="text-center">{notice.error_message}</div>
  } else {
    return (
      <>
        <DataTable
          columns={columns}
          data={notice.data?.results?.data}
          pagination
          paginationServer
          paginationComponentOptions={{ noRowsPerPage: true }}
          progressPending={notice.isLoading}
          paginationTotalRows={notice.count}
          onChangePage={onPageChange}
        />
      </>
    )
  }
}

export default Table_Notice