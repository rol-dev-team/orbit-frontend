// import React, { useEffect, useState } from "react";
// import { useFormik } from "formik";
// import * as Yup from "yup";
// import { districtThanaData } from "../../static/data";
// import {
//   fetchDistrict,
//   fetchThana,
//   fetchPackage,
//   storeSubscriptionRequest,
// } from "../../../service/api/subscriptionRequest";

// const SubscriptionForm = () => {
//   const [selectedDistrict, setSelectedDistrict] = useState("");
//   const [districts, setDistricts] = useState([]);
//   const [thanas, setThanas] = useState([]);
//   const [packages, setPackages] = useState([]);

//   useEffect(() => {
//     const loadDistricts = async () => {
//       try {
//         const data = await fetchDistrict();
//         console.log("Districts:", data);
//         setDistricts(data);
//       } catch (err) {
//         console.error("Failed to fetch districts:", err.message);
//       }
//     };
//     loadDistricts();
//   }, []);

//   useEffect(() => {
//     const loadThana = async () => {
//       if (!selectedDistrict) return;

//       try {
//         const data = await fetchThana(selectedDistrict);
//         console.log("Upazilas:", data);
//         setThanas(data);
//       } catch (err) {
//         console.error("Failed to fetch upazilas:", err.message);
//       }
//     };
//     loadThana();
//   }, [selectedDistrict]);

//   useEffect(() => {
//     const loadPackages = async () => {
//       try {
//         const data = await fetchPackage();
//         console.log("Packages:", data);
//         setPackages(data);
//       } catch (err) {
//         console.error("Failed to fetch packages:", err.message);
//       }
//     };
//     loadPackages();
//   }, []);

//   const formik = useFormik({
//     initialValues: {
//       name: "",
//       contact: "",
//       email: "",
//       district: "",
//       upazila: "",
//       house: "",
//       flat: "",
//       date: "",
//       package: "",
//       notes: "",
//     },
//     validationSchema: Yup.object({
//       name: Yup.string().required("Required"),
//       contact: Yup.string().required("Required"),
//       email: Yup.string().email("Invalid email").required("Required"),
//       district: Yup.string().required("Required"),
//       upazila: Yup.string().required("Required"),
//       date: Yup.date().required("Required"),
//       package: Yup.string().required("Required"),
//     }),
//     onSubmit: (values) => {
//       console.log(values);
//       alert("Form submitted!");
//       handleSubmit(values);
//     },
//   });

//   const handleSubmit = async (formData) => {
//     try {
//       const result = await storeSubscriptionRequest(formData);
//       console.log("Data submitted successfully:", result);
//     } catch (err) {
//       console.error("Error submitting data:", err);
//     }
//   };

//   const handleDistrictChange = (event) => {
//     const district = event.target.value;
//     setSelectedDistrict(district);
//     formik.setFieldValue("district", district);
//     formik.setFieldValue("upazila", "");
//   };

//   const getAvailableThanas = () => {
//     return districtThanaData[selectedDistrict] || [];
//   };
//   return (
//     <div
//       className='container mt-5 p-4 shadow'
//       style={{
//         maxWidth: "500px",
//         background: "#fff",
//         borderRadius: "var(--border-radius-large)",
//         border: "1px solid var(--color-lime-green)",
//       }}>
//       <h4 className='text-success fw-bold text-center mb-4'>
//         Subscription Request
//       </h4>
//       <form onSubmit={formik.handleSubmit}>
//         <div className='row mb-3'>
//           <div className='col-12'>
//             <input
//               type='text'
//               name='name'
//               placeholder='Your Name'
//               className='form-control'
//               value={formik.values.name}
//               onChange={formik.handleChange}
//               onBlur={formik.handleBlur}
//             />
//             {formik.touched.name && formik.errors.name && (
//               <small className='text-danger'>{formik.errors.name}</small>
//             )}
//           </div>
//         </div>
//         <div className='row'>
//           <div className='col-6 mb-3'>
//             <input
//               type='email'
//               name='email'
//               placeholder='Email'
//               className='form-control'
//               value={formik.values.email}
//               onChange={formik.handleChange}
//               onBlur={formik.handleBlur}
//             />
//             {formik.touched.email && formik.errors.email && (
//               <small className='text-danger'>{formik.errors.email}</small>
//             )}
//           </div>
//           <div className='col-6 mb-3'>
//             <input
//               type='text'
//               name='contact'
//               placeholder='Contact No.'
//               className='form-control'
//               value={formik.values.contact}
//               onChange={formik.handleChange}
//               onBlur={formik.handleBlur}
//             />
//             {formik.touched.contact && formik.errors.contact && (
//               <small className='text-danger'>{formik.errors.contact}</small>
//             )}
//           </div>
//         </div>

//         {/* Address Section */}
//         <h6 className='fw-bold text-success text-center'>
//           Installation Address
//         </h6>
//         <div className='row mb-2'>
//           <div className='col'>
//             <select
//               name='district'
//               className='form-select'
//               value={formik.values.district}
//               onChange={handleDistrictChange}
//               onBlur={formik.handleBlur}>
//               <option value=''>District</option>
//               {districts.map((district) => (
//                 <option key={district} value={district}>
//                   {district}
//                 </option>
//               ))}
//             </select>
//             {formik.touched.district && formik.errors.district && (
//               <small className='text-danger'>{formik.errors.district}</small>
//             )}
//           </div>
//           <div className='col'>
//             <select
//               name='upazila'
//               className='form-select'
//               value={formik.values.upazila}
//               onChange={formik.handleChange}
//               onBlur={formik.handleBlur}
//               disabled={!selectedDistrict}>
//               <option value=''>Thana</option>
//               {thanas.map((thana) => (
//                 <option key={thana} value={thana}>
//                   {thana}
//                 </option>
//               ))}
//             </select>
//             {formik.touched.upazila && formik.errors.upazila && (
//               <small className='text-danger'>{formik.errors.upazila}</small>
//             )}
//           </div>
//         </div>

//         <div className='row mb-3'>
//           <div className='col-8'>
//             <input
//               type='text'
//               name='house'
//               placeholder='House No./Name'
//               className='form-control'
//               value={formik.values.house}
//               onChange={formik.handleChange}
//               onBlur={formik.handleBlur}
//             />
//           </div>

//           <div className='col-4'>
//             <input
//               type='text'
//               name='flat'
//               placeholder='Flat No.'
//               className='form-control'
//               value={formik.values.flat}
//               onChange={formik.handleChange}
//               onBlur={formik.handleBlur}
//             />
//           </div>
//         </div>

//         {/* Date & Package */}
//         <div className='row mb-3'>
//           <div className='col'>
//             <label className='form-label text-success text-center fw-bold'>
//               Installation Date*
//             </label>
//             <input
//               type='date'
//               name='date'
//               className='form-control'
//               value={formik.values.date}
//               onChange={formik.handleChange}
//               onBlur={formik.handleBlur}
//             />
//             {formik.touched.date && formik.errors.date && (
//               <small className='text-danger'>{formik.errors.date}</small>
//             )}
//           </div>
//           <div className='col'>
//             <label className='form-label text-success text-center fw-bold'>
//               Choose your Package
//             </label>
//             <select
//               name='package'
//               className='form-select'
//               value={formik.values.package}
//               onChange={formik.handleChange}
//               onBlur={formik.handleBlur}>
//               <option value=''>Package</option>
//               {packages.map((pkg) => (
//                 <option key={pkg} value={pkg}>
//                   {pkg}
//                 </option>
//               ))}
//             </select>
//             {formik.touched.package && formik.errors.package && (
//               <small className='text-danger'>{formik.errors.package}</small>
//             )}
//           </div>
//         </div>

//         {/* Additional Notes */}
//         <div className='mb-3'>
//           <label className='form-label text-success text-center fw-bold'>
//             Additional Notes
//           </label>
//           <textarea
//             name='notes'
//             className='form-control'
//             rows='3'
//             value={formik.values.notes}
//             onChange={formik.handleChange}
//             onBlur={formik.handleBlur}></textarea>
//         </div>

//         {/* Submit Button */}
//         <div className='text-center'>
//           <button type='submit' className='btn btn-success px-4 py-2'>
//             Request Internet Connectivity
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default SubscriptionForm;

import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
// Remove districtThanaData as it's no longer needed
import {
  fetchDistrict,
  fetchThana,
  fetchPackage,
  storeSubscriptionRequest,
} from "../../../service/api/subscriptionRequest";

const SubscriptionForm = () => {
  // State to store the ID of the currently selected district, used for fetching upazilas
  const [selectedDistrictId, setSelectedDistrictId] = useState("");
  // State to store the list of districts fetched from the backend
  const [districts, setDistricts] = useState([]);
  // State to store the list of upazilas (thanas) fetched based on the selected district
  const [upazilas, setUpazilas] = useState([]);
  // State to store the list of packages fetched from the backend
  const [packages, setPackages] = useState([]);
  // State to manage submission feedback messages (success/error)
  const [submissionMessage, setSubmissionMessage] = useState(null);

  // useEffect hook to fetch districts when the component mounts
  useEffect(() => {
    const loadDistricts = async () => {
      try {
        const data = await fetchDistrict();
        console.log("Fetched Districts:", data);
        setDistricts(data);
      } catch (err) {
        console.error("Failed to fetch districts:", err.message);
        setSubmissionMessage({
          type: "error",
          text: "Failed to load districts. Please try again later.",
        });
      }
    };
    loadDistricts();
  }, []); // Empty dependency array means this runs once on mount

  // useEffect hook to fetch upazilas whenever the selectedDistrictId changes
  useEffect(() => {
    const loadUpazilas = async () => {
      if (!selectedDistrictId) {
        setUpazilas([]); // Clear upazilas if no district is selected
        return;
      }

      try {
        const data = await fetchThana(selectedDistrictId);
        console.log("Fetched Upazilas:", data);
        setUpazilas(data);
      } catch (err) {
        console.error("Failed to fetch upazilas:", err.message);
        setSubmissionMessage({
          type: "error",
          text: "Failed to load upazilas for the selected district.",
        });
      }
    };
    loadUpazilas();
  }, [selectedDistrictId]); // Depends on selectedDistrictId

  // useEffect hook to fetch packages when the component mounts
  useEffect(() => {
    const loadPackages = async () => {
      try {
        const data = await fetchPackage();
        console.log("Fetched Packages:", data);
        setPackages(data);
      } catch (err) {
        console.log(err);
        console.error("Failed to fetch packages:", err.message);
        setSubmissionMessage({
          type: "error",
          text: "Failed to load packages. Please try again later.",
        });
      }
    };
    loadPackages();
  }, []); // Empty dependency array means this runs once on mount

  // Formik hook for form management (initial values, validation, submission)
  const formik = useFormik({
    initialValues: {
      name: "",
      contact_number: "", // Matches backend field name
      email: "",
      district_id: "", // Matches backend field name, stores ID
      upazila_id: "", // Matches backend field name, stores ID
      house_number_or_name: "", // Matches backend field name
      flat_number: "", // Matches backend field name
      preferred_installation_date: "", // Matches backend field name
      package: "", // Matches backend field name, stores package name string
      additional_notes: "", // Matches backend field name
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Your Name is required"),
      contact_number: Yup.string().required("Contact Number is required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      district_id: Yup.string().required("District is required"),
      upazila_id: Yup.string().required("Thana / Upazila is required"),
      house_number_or_name: Yup.string().required("House No./Name is required"),
      flat_number: Yup.string().required("Flat No. is required"),
      preferred_installation_date: Yup.date().required(
        "Preferred Installation Date is required"
      ),
      package: Yup.string().required("Package selection is required"),
      additional_notes: Yup.string().nullable(), // Optional field
    }),
    onSubmit: (values, { resetForm }) => {
      handleSubmit(values, resetForm);
    },
  });

  const handleSubmit = async (formData, resetForm) => {
    try {
      const payload = {
        name: formData.name,
        contact_number: formData.contact_number,
        email: formData.email,
        district_id: formData.district_id,
        upazila_id: formData.upazila_id,
        house_number_or_name: formData.house_number_or_name,
        flat_number: formData.flat_number,
        preferred_installation_date: formData.preferred_installation_date,
        package: formData.package, // Send the package name string
        additional_notes: formData.additional_notes || null, // Ensure null if empty
      };

      const result = await storeSubscriptionRequest(payload);
      console.log("Data submitted successfully:", result);
      setSubmissionMessage({
        type: "success",
        text: "Subscription request submitted successfully!",
      });
      resetForm();
      setSelectedDistrictId("");
      setUpazilas([]);
    } catch (err) {
      console.error("Error submitting data:", err);

      setSubmissionMessage({
        type: "error",
        text:
          err.message ||
          "Failed to submit subscription request. Please try again.",
      });
    }
  };

  /**
   * Handles the change event for the district select dropdown.
   * Updates the selectedDistrictId state and Formik's district_id field.
   * Resets the upazila_id field when a new district is selected.
   * @param {object} event The change event object.
   */
  const handleDistrictChange = (event) => {
    const districtId = event.target.value;
    setSelectedDistrictId(districtId); // Store the ID for fetching upazilas
    formik.setFieldValue("district_id", districtId); // Update Formik's value
    formik.setFieldValue("upazila_id", ""); // Reset upazila when district changes
  };

  return (
    <div
      className='container mt-5 p-4 shadow'
      style={{
        maxWidth: "500px",
        background: "#fff",
        borderRadius: "var(--border-radius-large)",
        border: "1px solid var(--color-lime-green)",
      }}>
      <h4 className='text-success fw-bold text-center mb-4'>
        Subscription Request
      </h4>

      {submissionMessage && (
        <div
          className={`alert ${
            submissionMessage.type === "success"
              ? "alert-success"
              : "alert-danger"
          } text-center`}
          role='alert'>
          {submissionMessage.text}
        </div>
      )}

      <form onSubmit={formik.handleSubmit} className='px-3'>
        <div className='row mb-3'>
          <div className='col-12'>
            <input
              type='text'
              name='name'
              placeholder='Your Name'
              className='form-control form-control-sm'
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.name && formik.errors.name && (
              <small className='text-danger'>{formik.errors.name}</small>
            )}
          </div>
        </div>
        <div className='row'>
          <div className='col-6 mb-3'>
            <input
              type='email'
              name='email'
              placeholder='Email'
              className='form-control form-control-sm'
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.email && formik.errors.email && (
              <small className='text-danger'>{formik.errors.email}</small>
            )}
          </div>
          <div className='col-6 mb-3'>
            <input
              type='text'
              name='contact_number'
              placeholder='Contact No.'
              className='form-control form-control-sm'
              value={formik.values.contact_number}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.contact_number && formik.errors.contact_number && (
              <small className='text-danger'>
                {formik.errors.contact_number}
              </small>
            )}
          </div>
        </div>

        {/* Address Section */}
        <h6 className='fw-bold text-success text-center'>
          Installation Address
        </h6>
        <div className='row mb-2'>
          <div className='col'>
            <select
              name='district_id' // Updated name to match backend
              className='form-select form-select-sm'
              value={formik.values.district_id}
              onChange={handleDistrictChange} // Use custom handler for district
              onBlur={formik.handleBlur}>
              <option value=''>District</option>
              {districts.map((district) => (
                // Use district.id as value and district.name for display
                <option key={district.id} value={district.id}>
                  {district.name}
                </option>
              ))}
            </select>
            {formik.touched.district_id && formik.errors.district_id && (
              <small className='text-danger'>{formik.errors.district_id}</small>
            )}
          </div>
          <div className='col'>
            <select
              name='upazila_id' // Updated name to match backend
              className='form-select form-select-sm'
              value={formik.values.upazila_id}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              disabled={!selectedDistrictId}>
              {" "}
              {/* Disable if no district is selected */}
              <option value=''>Thana</option>
              {upazilas.map((upazila) => (
                // Use upazila.id as value and upazila.name for display
                <option key={upazila.id} value={upazila.id}>
                  {upazila.name}
                </option>
              ))}
            </select>
            {formik.touched.upazila_id && formik.errors.upazila_id && (
              <small className='text-danger'>{formik.errors.upazila_id}</small>
            )}
          </div>
        </div>

        <div className='row mb-3'>
          <div className='col-8'>
            <input
              type='text'
              name='house_number_or_name' // Updated name to match backend
              placeholder='House No./Name'
              className='form-control form-control-sm'
              value={formik.values.house_number_or_name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.house_number_or_name &&
              formik.errors.house_number_or_name && (
                <small className='text-danger'>
                  {formik.errors.house_number_or_name}
                </small>
              )}
          </div>

          <div className='col-4'>
            <input
              type='text'
              name='flat_number' // Updated name to match backend
              placeholder='Flat No.'
              className='form-control form-control-sm'
              value={formik.values.flat_number}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.flat_number && formik.errors.flat_number && (
              <small className='text-danger'>{formik.errors.flat_number}</small>
            )}
          </div>
        </div>

        {/* Date & Package */}
        <div className='row mb-3'>
          <div className='col'>
            <label className='form-label text-success text-center fw-bold'>
              Installation Date*
            </label>
            <input
              type='date'
              name='preferred_installation_date' // Updated name to match backend
              className='form-control form-control-sm'
              value={formik.values.preferred_installation_date}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.preferred_installation_date &&
              formik.errors.preferred_installation_date && (
                <small className='text-danger'>
                  {formik.errors.preferred_installation_date}
                </small>
              )}
          </div>
          <div className='col'>
            <label className='form-label text-success text-center fw-bold'>
              Choose your Package
            </label>
            <select
              name='package' // Name matches backend
              className='form-select form-select-sm'
              value={formik.values.package}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}>
              <option value=''>Package</option>
              {packages.map((pkg) => (
                // Backend expects package name string, so use pkg.name as value
                <option key={pkg.id} value={pkg.name}>
                  {pkg.name}
                </option>
              ))}
            </select>
            {formik.touched.package && formik.errors.package && (
              <small className='text-danger'>{formik.errors.package}</small>
            )}
          </div>
        </div>

        {/* Additional Notes */}
        <div className='mb-3'>
          <label className='form-label text-success text-center fw-bold'>
            Additional Notes
          </label>
          <textarea
            name='additional_notes' // Updated name to match backend
            className='form-control form-control-sm'
            rows='3'
            value={formik.values.additional_notes}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}></textarea>
        </div>

        {/* Submit Button */}
        <div className='text-center'>
          <button
            type='submit'
            className='btn btn-success px-4 py-2 btn-sm fw-bold'>
            Request Internet Connectivity
          </button>
        </div>
      </form>
    </div>
  );
};

export default SubscriptionForm;
