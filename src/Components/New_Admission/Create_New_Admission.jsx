import React, { useState } from 'react'
import Layout from '../../Layout/Layout'
import { Link, useNavigate } from 'react-router-dom'

const Create_New_Admission = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error_message, setError_message] = useState({});
  const [admission, setAdmission] = useState({ admission_date: "", student_name_en: "", student_name_bn: "", date_of_birth: "", birth_certificate_no: "", nid: "", gender: "", blood_group: "", religion: "", phone_number: "", email: "", nationality: "", previous_class_details: "", class_applying_for: "", fee_category: "", father_name_en: "", father_name_bn: "", father_nid: "", father_occupation: "", father_contact: "", mother_name_en: "", mother_name_bn: "", mother_nid: "", mother_occupation: "", mother_contact: "", guardian_name: "", guardian_relation: "", guardian_contact: "", present_address: "", permanent_address: "", district: "", upazila: "", union: "", student_photo: null, birth_certificate_doc: null, father_nid_doc: null, mother_nid_doc: null, transfer_certificate: null });

  const handleChange = (event) => {
    const { name, value, files, type } = event.target;
    setAdmission((prev) => ({ ...prev, [name]: type === "file" ? files[0] : value.trim() }));
    setError_message((prev) => ({ ...prev, [name]: null })); // remove error if input
  };

  return (
    <Layout>
      <section className='container my-5'>
        <div className="row justify-content-center">
          <div className="col-md-11">
            <form className='shadow-sm bg-light px-5 pt-3 pb-4' encType="multipart/form-data">
              <h4 className='form_heading py-4'>New Admission</h4>

              {/* === Student Information === */}
              <div className="row border-top border-warning pt-4">
                <h5 className='mb-3'>Student Information</h5>

                <div className="col-md-4 mb-3">
                  <label className='form-label'>Admission Date</label>
                  <input type="date" name="admission_date" onChange={handleChange} className='form-control rounded-0' disabled={loading} required />
                </div>

                <div className="col-md-4 mb-3">
                  <label className='form-label'>Student Name (English)</label>
                  <input type="text" name="student_name_en" onChange={handleChange} className='form-control rounded-0' disabled={loading} required />
                </div>

                <div className="col-md-4 mb-3">
                  <label className='form-label'>Student Name (Bangla)</label>
                  <input type="text" name="student_name_bn" onChange={handleChange} className='form-control rounded-0' disabled={loading} required />
                </div>

                <div className="col-md-4 mb-3">
                  <label className='form-label'>Date of Birth</label>
                  <input type="date" name="date_of_birth" onChange={handleChange} className='form-control rounded-0' disabled={loading} required />
                </div>

                <div className="col-md-4 mb-3">
                  <label className='form-label'>Birth Certificate No</label>
                  <input type="text" name="birth_certificate_no" onChange={handleChange} className='form-control rounded-0' disabled={loading} required />
                </div>

                <div className="col-md-4 mb-3">
                  <label className='form-label'>NID</label>
                  <input type="text" name="nid" onChange={handleChange} className='form-control rounded-0' disabled={loading} />
                </div>

                <div className="col-md-4 mb-3">
                  <label className='form-label'>Gender</label>
                  <select name="gender" onChange={handleChange} className='form-select rounded-0' disabled={loading} required>
                    <option value="">Select</option>
                    <option value="M">Male</option>
                    <option value="F">Female</option>
                    <option value="O">Other</option>
                  </select>
                </div>

                <div className="col-md-4 mb-3">
                  <label className='form-label'>Blood Group</label>
                  <select className="form-select rounded-0" disabled={loading} required>
                    <option value="">Select Group</option>
                    <option value="a+"> A+ </option>
                    <option value="a-"> A- </option>
                    <option value="b+"> B+</option>
                    <option value="b-"> B- </option>
                    <option value="ab+"> AB+ </option>
                    <option value="ab-"> AB- </option>
                    <option value="o+"> O+ </option>
                    <option value="o-"> O- </option>
                  </select>
                </div>

                <div className="col-md-4 mb-3">
                  <label className='form-label'>Religion</label>
                  <select className="form-select rounded-0" disabled={loading} required>
                    <option value="">Select Religion</option>
                    <option value="islam">Islam</option>
                    <option value="hinduism">Hinduism</option>
                    <option value="buddhism">Buddhism</option>
                    <option value="christianity">Christianity</option>
                    <option value="judaism">Judaism</option>
                    <option value="other">Others</option>
                  </select>
                </div>

                <div className="col-md-4 mb-3">
                  <label className='form-label'>Phone Number</label>
                  <input type="text" name="phone_number" onChange={handleChange} className='form-control rounded-0' disabled={loading} required />
                </div>

                <div className="col-md-4 mb-3">
                  <label className='form-label'>Email</label>
                  <input type="email" name="email" onChange={handleChange} className='form-control rounded-0' disabled={loading} />
                </div>

                <div className="col-md-4 mb-3">
                  <label className='form-label'>Nationality</label>
                  <input type="text" name="nationality" onChange={handleChange} className='form-control rounded-0' disabled={loading} />
                </div>

                <div className="col-md-6 mb-3">
                  <label className='form-label'>Previous Class Details</label>
                  <input type="text" name="previous_class_details" onChange={handleChange} className='form-control rounded-0' disabled={loading} />
                </div>

                <div className="col-md-6 mb-3">
                  <label className='form-label'>Class Applying For</label>
                  <input type="text" name="class_applying_for" onChange={handleChange} className='form-control rounded-0' disabled={loading} required />
                </div>

                {/* === File Uploads === */}
                <div className="col-md-4 mb-3">
                  <label className='form-label'>Student Photo</label>
                  <input type="file" name="student_photo" onChange={handleChange} className='form-control rounded-0' accept="image/*" disabled={loading} />
                </div>

                <div className="col-md-4 mb-3">
                  <label className='form-label'>Birth Certificate Document</label>
                  <input type="file" name="birth_certificate_doc" onChange={handleChange} className='form-control rounded-0' accept=".pdf,.jpg,.jpeg,.png" disabled={loading} />
                </div>

                <div className="col-md-4 mb-3">
                  <label className='form-label'>Transfer Certificate</label>
                  <input type="file" name="transfer_certificate" onChange={handleChange} className='form-control rounded-0' accept=".pdf,.jpg,.jpeg,.png" disabled={loading} />
                </div>
              </div>

              {/* === Father's Information === */}
              <div className="row border-top border-warning pt-4">
                <h5 className='mb-3'>Father's Information</h5>

                <div className="col-md-4 mb-3">
                  <label className='form-label'>Father Name (English)</label>
                  <input type="text" name="father_name_en" onChange={handleChange} className='form-control rounded-0' disabled={loading} />
                </div>

                <div className="col-md-4 mb-3">
                  <label className='form-label'>Father Name (Bangla)</label>
                  <input type="text" name="father_name_bn" onChange={handleChange} className='form-control rounded-0' disabled={loading} />
                </div>

                <div className="col-md-4 mb-3">
                  <label className='form-label'>Father NID</label>
                  <input type="text" name="father_nid" onChange={handleChange} className='form-control rounded-0' disabled={loading} />
                </div>

                <div className="col-md-4 mb-3">
                  <label className='form-label'>Father Occupation</label>
                  <input type="text" name="father_occupation" onChange={handleChange} className='form-control rounded-0' disabled={loading} />
                </div>

                <div className="col-md-4 mb-3">
                  <label className='form-label'>Father Contact</label>
                  <input type="text" name="father_contact" onChange={handleChange} className='form-control rounded-0' disabled={loading} />
                </div>

                <div className="col-md-4 mb-3">
                  <label className='form-label'>Father NID Document</label>
                  <input type="file" name="father_nid_doc" onChange={handleChange} className='form-control rounded-0' accept=".pdf,.jpg,.jpeg,.png" disabled={loading} />
                </div>
              </div>

              {/* === Mother's Information === */}
              <div className="row border-top border-warning pt-4">
                <h5 className='mb-3'>Mother's Information</h5>

                <div className="col-md-4 mb-3">
                  <label className='form-label'>Mother Name (English)</label>
                  <input type="text" name="mother_name_en" onChange={handleChange} className='form-control rounded-0' disabled={loading} />
                </div>

                <div className="col-md-4 mb-3">
                  <label className='form-label'>Mother Name (Bangla)</label>
                  <input type="text" name="mother_name_bn" onChange={handleChange} className='form-control rounded-0' disabled={loading} />
                </div>

                <div className="col-md-4 mb-3">
                  <label className='form-label'>Mother NID</label>
                  <input type="text" name="mother_nid" onChange={handleChange} className='form-control rounded-0' disabled={loading} />
                </div>

                <div className="col-md-4 mb-3">
                  <label className='form-label'>Mother Occupation</label>
                  <input type="text" name="mother_occupation" onChange={handleChange} className='form-control rounded-0' disabled={loading} />
                </div>

                <div className="col-md-4 mb-3">
                  <label className='form-label'>Mother Contact</label>
                  <input type="text" name="mother_contact" onChange={handleChange} className='form-control rounded-0' disabled={loading} />
                </div>

                <div className="col-md-4 mb-3">
                  <label className='form-label'>Mother NID Document</label>
                  <input type="file" name="mother_nid_doc" onChange={handleChange} className='form-control rounded-0' accept=".pdf,.jpg,.jpeg,.png" disabled={loading} />
                </div>
              </div>

              {/* === Guardian Information === */}
              <div className="row border-top border-warning pt-4">
                <h5 className='mb-3'>Guardian Information</h5>

                <div className="col-md-4 mb-3">
                  <label className='form-label'>Guardian Name</label>
                  <input type="text" name="guardian_name" onChange={handleChange} className='form-control rounded-0' disabled={loading} />
                </div>

                <div className="col-md-4 mb-3">
                  <label className='form-label'>Relation</label>
                  <input type="text" name="guardian_relation" onChange={handleChange} className='form-control rounded-0' disabled={loading} />
                </div>

                <div className="col-md-4 mb-3">
                  <label className='form-label'>Contact</label>
                  <input type="text" name="guardian_contact" onChange={handleChange} className='form-control rounded-0' disabled={loading} />
                </div>
              </div>

              {/* === Address Information === */}
              <div className="row border-top border-warning pt-4">
                <h5 className='mb-3'>Address Information</h5>

                <div className="col-md-6 mb-3">
                  <label className='form-label'>Present Address</label>
                  <textarea name="present_address" onChange={handleChange} className='form-control rounded-0' disabled={loading} />
                </div>

                <div className="col-md-6 mb-3">
                  <label className='form-label'>Permanent Address</label>
                  <textarea name="permanent_address" onChange={handleChange} className='form-control rounded-0' disabled={loading} />
                </div>

                <div className="col-md-4 mb-3">
                  <label className='form-label'>District</label>
                  <input type="text" name="district" onChange={handleChange} className='form-control rounded-0' disabled={loading} />
                </div>

                <div className="col-md-4 mb-3">
                  <label className='form-label'>Upazila</label>
                  <input type="text" name="upazila" onChange={handleChange} className='form-control rounded-0' disabled={loading} />
                </div>

                <div className="col-md-4 mb-3">
                  <label className='form-label'>Union</label>
                  <input type="text" name="union" onChange={handleChange} className='form-control rounded-0' disabled={loading} />
                </div>
              </div>

              {/* === Buttons === */}
              <div className="row mt-4">
                <div className="col-md-6">
                  <Link to='/admission-table' className='btn btn-dark rounded-0 w-100 custom_btn'>Cancel</Link>
                </div>
                <div className="col-md-6">
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

export default Create_New_Admission