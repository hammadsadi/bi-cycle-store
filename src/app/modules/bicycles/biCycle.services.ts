import { BiCycle } from "./biCycle.model";
import { TBiCycle } from "./biCycleInterface";

// Bi Cycle Data Save to Database
const biCycleDataSaveToDatabase = async (bicycle: TBiCycle) => {
  const result = await BiCycle.create(bicycle);
  return result;
};

// Export Bi Cycle Services
export const biCycleServices = {
  biCycleDataSaveToDatabase,
};
