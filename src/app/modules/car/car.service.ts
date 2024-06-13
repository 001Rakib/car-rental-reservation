import httpStatus from "http-status";
import AppError from "../../error/AppError";
import { TCar } from "./car.interface";
import { Car } from "./car.model";

const createCarIntoDB = async (payload: TCar) => {
  const result = await Car.create(payload);
  return result;
};

const getAllCarFromDB = async () => {
  const result = await Car.find();
  return result;
};

const getSingleCarFromDB = async (id: string) => {
  const result = await Car.findById(id);

  if (!result) {
    throw new AppError(httpStatus.NOT_FOUND, "Car not found");
  }

  return result;
};

const updateCarIntoDB = async (id: string, payload: Partial<TCar>) => {
  const result = await Car.findByIdAndUpdate(id, payload, { new: true });
  return result;
};

const deleteCarFromDB = async (id: string) => {
  const result = await Car.findByIdAndUpdate(
    id,
    { isDeleted: true },
    { new: true }
  );
  return result;
};

export const carServices = {
  createCarIntoDB,
  getAllCarFromDB,
  getSingleCarFromDB,
  deleteCarFromDB,
  updateCarIntoDB,
};
