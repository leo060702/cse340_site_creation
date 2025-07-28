/* Build HTML content for vehicle detail */
function buildVehicleHTML(data) {
  return `
    <div class="vehicle-detail">
      <img class="vehicle-image" src="${data.inv_image}" alt="Image of ${data.inv_make} ${data.inv_model}">
      <div class="vehicle-info">
        <h2>${data.inv_year} ${data.inv_make} ${data.inv_model}</h2>
        <p><strong>Price:</strong> $${Number(data.inv_price).toLocaleString()}</p>
        <p><strong>Mileage:</strong> ${Number(data.inv_miles).toLocaleString()} miles</p>
        <p><strong>Description:</strong> ${data.inv_description}</p>
      </div>
    </div>
  `;
}

module.exports = { buildVehicleHTML };
