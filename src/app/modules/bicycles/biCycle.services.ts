/* eslint-disable @typescript-eslint/no-explicit-any */
import { BiCycle } from './biCycle.model';
import { TBiCycle } from './biCycleInterface';

// Bi Cycle Data Save to Database
const biCycleDataSaveToDatabase = async (bicycle: TBiCycle, file: any) => {
  if (file) {
    bicycle.image = file.path;
  }

  const result = await BiCycle.create(bicycle);
  return result;
};

// All Bi-Cycle Data get From Database
const getAllbiCycleDataFromDatabase = async <T>(query: T) => {
  let queryData = {};
  if (query) {
    queryData = {
      $or: [{ name: query }, { brand: query }, { type: query }],
    };
  }
  const result = await BiCycle.find(queryData);
  return result;
};

// Single Bi-Cycle Data get From Database
const getSinglebiCycleDataFromDatabase = async (id: string) => {
  const result = await BiCycle.findById(id);
  return result;
};

// Single Bi-Cycle Data Update From Database
const singlebiCycleDataUpdateFromDatabase = async (
  id: string,
  cycle: TBiCycle,
  file: any,
) => {
  if (file) {
    cycle.image = file.path;
  }

  const result = await BiCycle.findByIdAndUpdate(
    id,
    { ...cycle },
    { new: true },
  );
  return result;
};

// Single Bi-Cycle Data Delete From Database
const singlebiCycleDataDeleteFromDatabase = async (id: string) => {
  const result = await BiCycle.findByIdAndDelete(id);
  return result;
};

// Export Bi Cycle Services
export const biCycleServices = {
  biCycleDataSaveToDatabase,
  getAllbiCycleDataFromDatabase,
  getSinglebiCycleDataFromDatabase,
  singlebiCycleDataUpdateFromDatabase,
  singlebiCycleDataDeleteFromDatabase,
};
