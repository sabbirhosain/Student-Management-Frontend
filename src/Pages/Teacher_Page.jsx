import Layout from '../Layout/Layout'
import { Link } from 'react-router-dom'
import { MdFormatListBulletedAdd } from 'react-icons/md'
import Table_Teacher from '../Components/Teacher/Table_Teacher'
import { useAcademy_Info_Context } from '../Context/Academy_Info_Context'

const Teacher_Page = () => {
  const { updateTeacherState } = useAcademy_Info_Context()
  return (
    <Layout>
      <section className=''>
        <div className='d-flex align-items-center justify-content-between bg-light shadow-sm p-3 pe-md-5 my-2'>
          <h4 className='table_name_title'>Teachers List</h4>
          <Link to='/teacher-create' className='btn btn-outline-primary btn-sm rounded-0'><MdFormatListBulletedAdd /></Link>
        </div>

        <div className="row bg-light shadow-sm p-3">
          <div className="col-md-9"></div>
          <div className="col-md-3">
            <div className='w-100'>
              <input type="search" onChange={(event) => updateTeacherState({ search: event.target.value })} className="form-control rounded-0" placeholder="Search Hear..." />
            </div>
          </div>
        </div>

        <div className='pt-2 pb-5'>
          <Table_Teacher />
        </div>
      </section>
    </Layout>
  )
}

export default Teacher_Page