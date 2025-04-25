import { createHotelDTO } from "../dto/hotel.dto";
import {
  createHotel,
  getAllHotels,
  getHotelById,
  updateHotelById,
  deleteHotelById,
} from "../repositories/hotel.repository";

export async function createHotelService(hotelData: createHotelDTO) {
  const hotel = await createHotel(hotelData);
  return hotel;
}

export async function getHotelByIdService(id: number) {
  const hotel = await getHotelById(id);
  return hotel;
}

export async function getAllHotelsService() {
  const hotels = await getAllHotels();
  return hotels;
}

export async function deleteHotelByIdService(id: number) {
  const hotel = await deleteHotelById(id);
  return hotel;
}

export async function updateHotelByIdService(
  id: number,
  hotelData: createHotelDTO
) {
  const hotel = await updateHotelById(id, hotelData);
  return hotel;
}
