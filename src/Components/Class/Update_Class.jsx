import React, { useState } from 'react'
import Layout from '../../Layout/Layout'
import { Link, useNavigate } from 'react-router-dom'

const Update_Class = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error_message, setError_message] = useState({});
  const [teacher, setTeacher] = useState({ name: "", email: "", phone: "", subject: "", Address: "", blood_group: "", attachment: null });

  const handleChange = (event) => {
    const { name, value, files, type } = event.target;
    setTeacher((prev) => ({ ...prev, [name]: type === "file" ? files[0] : value.trim() }));
    setError_message((prev) => ({ ...prev, [name]: null })); // remove error if input
  };

  return (
    <Layout>
      <section className='container my-5'>
        <div className="row justify-content-center">
          <div className="col-md-8">
            <form className='shadow-sm bg-light px-5 pt-3 pb-4'>
              <h4 className='form_heading py-4'>Add New Teacher</h4>
              <div className="row border-top border-warning pt-4">

                <div className="col-md-6 mb-3">
                  <label className='form-label'>Teacher Name</label>
                  <input type="text" name="name" onChange={handleChange} className='form-control rounded-0' disabled={loading} required />
                </div>

                <div className="col-md-6 mb-3">
                  <label className='form-label'>Email</label>
                  <input type="email" name="email" onChange={handleChange} className='form-control rounded-0' disabled={loading} required />
                </div>

                <div className="col-md-6 mb-3">
                  <label className='form-label'>Phone</label>
                  <input type="number" name="phone" onChange={handleChange} className='form-control rounded-0' disabled={loading} required />
                </div>

                <div className="col-md-6 mb-3">
                  <label className='form-label'>Subject</label>
                  <input type="text" name="subject" onChange={handleChange} className='form-control rounded-0' disabled={loading} required />
                </div>

              </div>

              <div className="row">
                <div className="col-md-6 mt-3">
                  <Link to='/teacher-table' className='btn btn-dark rounded-0 w-100 custom_btn'>Cancel</Link>
                </div>
                <div className="col-md-6 mt-3">
                  <button type="submit" className='btn btn-dark rounded-0 w-100 custom_btn'>{loading ? "Please Wait" : "Create"}</button>
                </div>
              </div>

            </form>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Update_Class