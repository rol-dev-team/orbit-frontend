import { HeadingTitle } from "../common/HeadingTitle";
import { useEffect, useState } from "react";
import { MapPin } from "lucide-react";
import { bangladeshDivisions } from "../../static/data";
import { Button } from "../common/Button";

function CheckOrbitInternet() {
  const [selectedDivision, setSelectedDivision] = useState("");
  const [districts, setDistricts] = useState([]);

  const handleDivisionChange = (e) => {
    const division = e.target.value;
    setSelectedDivision(division);

    const selectedDivisionData = bangladeshDivisions.find(
      (item) => item.division === division
    );
    setDistricts(selectedDivisionData ? selectedDivisionData.districts : []);
  };

  const handleToast = () => {
    const toastEl = document.getElementById("liveToast");
    if (toastEl) {
      const toast = new window.bootstrap.Toast(toastEl);
      toast.show();
    }
  };

  return (
    <section className='check-orbit-internet-section'>
      <div className='container'>
        <div className='box'>
          <div className='row'>
            <div className='col-12'>
              <div className='content'>
                <HeadingTitle
                  text='Connecting 64 '
                  style={{
                    marginBottom: "0px",
                    textAlign: "start",
                  }}
                />
                <HeadingTitle
                  text='Districts with the'
                  style={{
                    marginBottom: "0px",
                    textAlign: "start",
                  }}
                />
                <HeadingTitle
                  text='Strongest Network'
                  style={{
                    marginBottom: "0px",
                    textAlign: "start",
                  }}
                />

                {/* <form className='find-form mt-4'>
                  <div className='mb-2 d-flex align-items-center'>
                    <select
                      className='form-select form-select-sm'
                      aria-label='Select Division'
                      onChange={handleDivisionChange}
                      value={selectedDivision}>
                      <option value=''>District</option>
                      {bangladeshDivisions.map((division, index) => (
                        <option key={index} value={division.division}>
                          {division.division}
                        </option>
                      ))}
                    </select>
                    <MapPin
                      size='14px'
                      style={{ marginLeft: "-20px", fontWeight: "bold" }}
                    />
                  </div>
                  <div className='mb-2 d-flex align-items-center'>
                    <select
                      className='form-select form-select-sm'
                      aria-label='District'
                      disabled={!selectedDivision}>
                      <option value=''>Thana</option>
                      {districts.map((district, index) => (
                        <option key={index} value={district}>
                          {district}
                        </option>
                      ))}
                    </select>
                    <MapPin
                      size='14px'
                      style={{ marginLeft: "-20px", fontWeight: "bold" }}
                    />
                  </div>
                  <div className='mb-2'>
                    <Button
                      onClick={handleToast}
                      type='button'
                      text='Find'
                      background='var(--color-primary)'
                      color='white'
                      padding='5px 30px'
                      borderRadius='20px'
                      className=''
                    />
                  </div>
                </form> */}

                {/* <Link to='#' style={{ color: "var(--active-border-color)" }}>
                    View all <ChevronRight />
                  </Link> */}

                <div class='toast-container mt-3'>
                  <div
                    id='liveToast'
                    class='toast'
                    role='alert'
                    aria-live='assertive'
                    aria-atomic='true'>
                    <div class='toast-header'>
                      <i className='bi bi-telephone-fill me-2'></i>
                      <strong class='me-auto'>
                        <a
                          href='tel:01322811594'
                          style={{ textDecoration: "none" }}
                          className='fw-bold'>
                          01322811594
                        </a>
                      </strong>
                      <button
                        type='button'
                        className='btn-close'
                        data-bs-dismiss='toast'
                        aria-label='Close'></button>
                    </div>
                    <div class='toast-body'>
                      <ul>
                        <li>
                          <i className='bi bi-geo-alt-fill me-2'></i> Bannani
                          Area Office
                        </li>
                        <li>
                          <i className='bi bi-person me-2'></i> Md Ashikur
                          Rahman
                        </li>
                        <li>
                          <i className='bi bi-house-door-fill me-2'></i>{" "}
                          House-12,Road-23,Mirpur,Dhaka
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CheckOrbitInternet;
