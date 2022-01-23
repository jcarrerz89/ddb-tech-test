import React from 'react';
import './Filters.css';

const Filters = (props) => {

      return <div className="filters-container">
            <ul>
                  <li>
                        <div className="dropdown">
                              <button className="dropbtn"><label>Sort by: <span>{props.sortedBy}</span>&#9663;</label></button>
                              <ul className="dropdown-content">
                                    <li>
                                          <label>
                                                <span onClick={() => props.onSortBy('most recent')} className="career-filter">Most recent</span>
                                          </label>
                                    </li>
                                    <li>
                                          <label>
                                                <span onClick={() => props.onSortBy('oldest')} className="career-filter">Oldest</span>
                                          </label>
                                    </li>
                              </ul>
                        </div>
                  </li>
                  <li><label>|</label></li>
                  <li>
                        <span className="career-filter" onClick={() => props.onFilterByDepartment('engineering')}>
                              <label className={props.department === 'engineering' ? 'bold' : ''}>Engineering</label>
                        </span>
                  </li>
                  <li>
                        <span className="career-filter" onClick={() => props.onFilterByDepartment('technology')}>
                              <label className={props.department === 'technology' ? 'bold' : ''}>Technology</label>
                        </span>
                  </li>
                  <li>
                        <span className="career-filter" onClick={() => props.onFilterByDepartment('finance')}>
                              <label className={props.department === 'finance' ? 'bold' : ''}>Finance</label>
                        </span>
                  </li>
                  <li>
                        <span className="career-filter" onClick={() => props.onFilterByDepartment('')}>
                              <label className={props.department === '' ? 'bold' : ''}>All</label>
                        </span>
                  </li>
            </ul>
      </div>

}

export default Filters;