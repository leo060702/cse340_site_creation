const invModel = require("../models/inventory-model");
const utilities = require("../utilities");

/* Build the vehicle detail view */
async function buildDetailView(req, res, next) {
  try {
    const invId = req.params.invId;
    const data = await invModel.getVehicleById(invId);

    if (!data) {
      // Throw 404 if no data found
      const err = new Error("Vehicle not found");
      err.status = 404;
      throw err;
    }

    const content = utilities.buildVehicleHTML(data);
    res.render("inventory/detail", {
      title: `${data.inv_make} ${data.inv_model}`,
      content,
    });
  } catch (error) {
    next(error);
  }
}

module.exports = { buildDetailView };
