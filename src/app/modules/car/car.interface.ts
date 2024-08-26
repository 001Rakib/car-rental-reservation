export type TCar = {
  name: string;
  description: string;
  color: string;
  image: string;
  isElectric: boolean;
  status: "available" | "unavailable";
  features: string[];
  pricePerHour: number;
  isDeleted: boolean;
};
