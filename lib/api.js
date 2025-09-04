/**
 * Utility function to handle API responses consistently
 * @param {Response} response - The fetch response object
 * @returns {Promise<Object>} - Parsed response data
 */
export async function handleApiResponse(response) {
  console.log("Response status:", response.status);
  console.log("Response headers:", response.headers);

  // Check if response is ok
  if (!response.ok) {
    const errorText = await response.text();
    console.error("Response not ok:", response.status, errorText);
    throw new Error(`Server error (${response.status}): ${errorText}`);
  }

  // Try to parse JSON response
  try {
    const responseText = await response.text();
    console.log("Raw response:", responseText);
    
    if (!responseText.trim()) {
      throw new Error("Empty response from server");
    }
    
    return JSON.parse(responseText);
  } catch (parseError) {
    console.error("JSON parse error:", parseError);
    throw new Error("Invalid response format from server");
  }
}

/**
 * Submit form data to the API
 * @param {Object} formData - The form data to submit
 * @returns {Promise<Object>} - The API response
 */
export async function submitFormData(formData) {
  console.log("Submitting form data:", formData);

  const response = await fetch("https://prop.digiheadway.in/api/submit.php", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });

  return await handleApiResponse(response);
}
