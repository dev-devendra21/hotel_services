import express from "express";
import {
  createHotelHandler,
  getAllHotelsHandler,
  getHotelByIdHandler,
  updateHotelHandler,
  deleteHotelHandler,
} from "../../controllers/hotel.controller";
import { validateRequestBody } from "../../validators";
import { hotelSchema } from "../../validators/hotel.validator";

const hotelRouter = express.Router();

hotelRouter.post("/", validateRequestBody(hotelSchema), createHotelHandler);

hotelRouter.put("/:id", validateRequestBody(hotelSchema), updateHotelHandler);

hotelRouter.delete("/:id", deleteHotelHandler);

hotelRouter.get("/:id", getHotelByIdHandler);

hotelRouter.get("/", getAllHotelsHandler);

export default hotelRouter;
