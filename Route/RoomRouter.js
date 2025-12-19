const express = require("express");
const roomController = require("./../Controller/RoomController");

const roomRouter = express.Router();

roomRouter
  .route("/")
  .get(roomController.getAllRooms)
  .post(roomController.createRoom);
roomRouter.route("/:id").post(roomController.updateRoom).get(roomController.getRoom);



module.exports = roomRouter;
