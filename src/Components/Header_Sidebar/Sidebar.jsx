import { MdAttachMoney, MdDashboardCustomize, MdOutlineStickyNote2 } from "react-icons/md";
import { HiMiniUsers } from "react-icons/hi2";
import { FaHandHoldingUsd } from "react-icons/fa";
import { FaRegNewspaper } from "react-icons/fa6";
import { CiSettings } from "react-icons/ci";
import { IoIosArrowDown, IoIosStarHalf } from "react-icons/io";
import { VscArrowSmallRight } from "react-icons/vsc";
import { NavLink, useLocation } from 'react-router-dom'
import "./Header_Sidebar_Style.css";

const Sidebar = () => {
    const URL = useLocation()

    return (
        <section className="sidebar_section">
            <div className="offcanvas offcanvas-start offcanvas_sidebar" tabIndex={-1} id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                <div className="offcanvas-header">
                    <NavLink to='/' className='dashboard_logo_text'>Admin Dashboard</NavLink>
                    <button type="button" className="btn-close offcanvas_close_btn" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    <ul className="dropdown_item pb-5">

                        <li className="dropdown_list">
                            <NavLink to='/' className="dropdown_btn">
                                <span className="dropdown_list_name"><MdDashboardCustomize className="dropdown_list_icon" />Dashboard</span>
                            </NavLink>
                        </li>

                        <li className="dropdown_list">
                            <NavLink to='/admission-table' className="dropdown_btn">
                                <span className="dropdown_list_name"><FaRegNewspaper className="dropdown_list_icon" />New Admission</span>
                            </NavLink>
                        </li>

                        <li className="dropdown_list">
                            <NavLink to='/notice-table' className="dropdown_btn">
                                <span className="dropdown_list_name"><MdOutlineStickyNote2 className="dropdown_list_icon" />Notices</span>
                            </NavLink>
                        </li>

                        {/* <div className="accordion accordion-flush" id="accordionFlushExample">
                            <li className="dropdown_list">
                                <button className="dropdown_btn collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse1" aria-expanded="false" aria-controls="flush-collapse1">
                                    <span className="dropdown_list_name">
                                        <IoIosStarHalf className="dropdown_list_icon" />Products</span>
                                    <IoIosArrowDown className="dropdown_icon" />
                                </button>

                                <div id="flush-collapse1" className={URL.pathname === "/product-table" || URL.pathname === "/purchase-table" ? `accordion-collapse collapse show` : `accordion-collapse collapse hide`} aria-labelledby="flush-headingPaymenta" data-bs-parent="#accordionFlushExample">
                                    <NavLink to='/product-table' className="dropdown_link"><VscArrowSmallRight />Product</NavLink>
                                    <NavLink to='/purchase-table' className="dropdown_link"><VscArrowSmallRight />Purchase</NavLink>
                                </div>
                            </li>
                        </div> */}

                        <li className="dropdown_list">
                            <NavLink to='/profile-settings' className="dropdown_btn">
                                <span className="dropdown_list_name"><CiSettings className="dropdown_list_icon" />Settings</span>
                            </NavLink>
                        </li>

                    </ul>
                </div>
            </div >
        </section >
    )
}

export default Sidebar