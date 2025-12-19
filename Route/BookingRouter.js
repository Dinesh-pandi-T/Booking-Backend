const express = require("express");
const bookingController = require("./../Controller/BookingController");

const bookRouter = express.Router();

bookRouter.get("/", bookingController.getAllBookings);

bookRouter.get("/user/:userId", bookingController.getUserBookings);
bookRouter.post("/", bookingController.createBooking);

bookRouter.patch("/:id", bookingController.cancelBooking);

module.exports = bookRouter;
