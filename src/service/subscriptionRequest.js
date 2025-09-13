// export const fetchDistrict = () => get("/districts");
// export const fetchThana = (district) => get(`/get-upazilas/${district}`);
// export const fetchPackage = () => get("/packages");
// export const storeSubscriptionRequest = (data) =>
//   post("/subscription-request", data);


const API_BASE_URL = 'https://api.orbitbd.net/api';

export const fetchDistrict = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/districts`);
    if (!response.ok) {
      // Throw an error if the HTTP response status is not 2xx
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    // Parse the JSON response body
    return await response.json();
  } catch (error) {
    console.error("Error fetching districts:", error);
    throw error; // Re-throw the error for the calling component to handle
  }
};


export const fetchThana = async (districtId) => {
  try {
    const response = await fetch(`${API_BASE_URL}/get-upazilas/${districtId}`);
    if (!response.ok) {
      // Throw an error if the HTTP response status is not 2xx
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    // Parse the JSON response body
    return await response.json();
  } catch (error) {
    console.error(`Error fetching upazilas for district ID ${districtId}:`, error);
    throw error; // Re-throw the error for the calling component to handle
  }
};


export const fetchPackage = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/packages`);
    if (!response.ok) {
      // Throw an error if the HTTP response status is not 2xx
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    // Parse the JSON response body
    return await response.json();
  } catch (error) {
    console.error("Error fetching packages:", error);
    throw error; // Re-throw the error for the calling component to handle
  }
};



export const storeSubscriptionRequest = async (formData) => {
  try {
    const response = await fetch(`${API_BASE_URL}/subscription-request`, {
      method: 'POST', // Use POST method for creating a new resource
      headers: {
        'Content-Type': 'application/json', // Indicate that the request body is JSON
        'Accept': 'application/json',       // Request JSON response from the server
      },
      body: JSON.stringify(formData), // Convert the JavaScript object to a JSON string
    });

    if (!response.ok) {
      // If the response is not OK (e.g., 4xx or 5xx status), parse the error message
      const errorData = await response.json();
      throw new Error(errorData.message || `HTTP error! status: ${response.status}`);
    }
    // Parse the JSON response body for successful requests
    return await response.json();
  } catch (error) {
    console.error("Error submitting data:", error);
    throw error; // Re-throw the error for the calling component to handle
  }
};