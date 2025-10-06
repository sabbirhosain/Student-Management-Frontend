import Layout from '../Layout/Layout'
import { Link } from 'react-router-dom'
import { MdFormatListBulletedAdd } from 'react-icons/md'
import Table_New_Admission from '../Components/New_Admission/Table_New_Admission'

const New_Admission = () => {
    return (
        <Layout>
            <section className=''>
                <div className='d-flex align-items-center justify-content-between bg-light shadow-sm p-3 pe-md-5 my-2'>
                    <h4 className='table_name_title'>New Admission List</h4>
                    <Link to='/admission-create' className='btn btn-outline-primary btn-sm rounded-0'><MdFormatListBulletedAdd /></Link>
                </div>

                <div className="row bg-light shadow-sm p-3">
                    <div className="col-md-9"></div>
                    <div className="col-md-3">
                        <div className='w-100'>
                            <input type="search" className="form-control rounded-0" placeholder="Search Hear..." />
                        </div>
                    </div>
                </div>

                <div className='pt-2 pb-5'>
                    <Table_New_Admission />
                </div>
            </section>
        </Layout>
    )
}

export default New_Admission