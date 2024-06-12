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
  return result;
};

export const carServices = {
  createCarIntoDB,
  getAllCarFromDB,
  getSingleCarFromDB,
};
