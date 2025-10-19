import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import { BsEyeFill } from 'react-icons/bs';
import DataTable from 'react-data-table-component';
import { BiEditAlt, BiTrash } from 'react-icons/bi';
import { useAdmission_Context } from '../../Context/Admission_Context'

const Table_New_Admission = () => {
  const { admission, fetchAdmissionData } = useAdmission_Context()
  useEffect(() => { fetchAdmissionData(1) }, [admission.search]);
  const onPageChange = (page) => { fetchAdmissionData(page) };


  const columns = [
    {
      name: "SL",
      selector: (row, index) => (index + 1),
      width: "60px"
    },
    {
      name: "Admission Date",
      selector: row => row.admission_date
    },
    {
      name: "Image",
      selector: row => (row.student_photo ? <a href={row.student_photo} target="_new">
        <img src={row.student_photo} width="30px" height="30px" alt="Image file" />
      </a> : <span className="text-muted">No File</span>
      ),
      width: "100px"
    },
    {
      name: "Name",
      selector: row => row.student_name_en
    },
    {
      name: "Apply Class",
      selector: row => row.class_applying_for
    },
    {
      name: "Phone",
      selector: row => row.phone_number
    },
    {
      name: "Gender",
      selector: row => row.gender
    },
    {
      name: "Blood",
      selector: row => row.blood_group
    },
    {
      name: "Status",
      selector: row => row.admission_status
    },
    {
      name: "Action",
      cell: row => <div className="d-flex align-items-center gap-2">
        <Link to={`/admission-view/${row.id}`} className="btn btn-outline-primary rounded-0 btn-sm"><BsEyeFill /></Link>
        <Link to={`/admission-update/${row.id}`} className="btn btn-outline-success rounded-0 btn-sm"><BiEditAlt /></Link>
        <button type="button" onClick={() => (row.id)} className="btn btn-outline-danger rounded-0 btn-sm"><BiTrash /></button>
      </div>,
      width: "150px"
    }
  ];

  if (admission.error_message) {
    return <div className="text-center">{admission.error_message}</div>
  } else {
    return (
      <>
        <DataTable
          columns={columns}
          data={admission.data}
          pagination
          paginationServer
          paginationComponentOptions={{ noRowsPerPage: true }}
          progressPending={admission.isLoading}
          paginationTotalRows={admission.pagination?.total_data}
          onChangePage={onPageChange}
        />
      </>
    )
  }
}

export default Table_New_Admission