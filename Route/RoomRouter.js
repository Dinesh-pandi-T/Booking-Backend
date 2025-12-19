const express = require("express");
const roomController = require("./../Controller/RoomController");

const roomRouter = express.Router();

roomRouter
  .route("/")
  .get(roomController.getAllRooms)
  .post(roomController.createRoom);



module.exports = roomRouter;
