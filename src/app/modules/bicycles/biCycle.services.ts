/* eslint-disable @typescript-eslint/no-explicit-any */
// import QueryBuilder from '../../builder/QueryBuilder';
// import { searchByBicycle } from './bicycle.constant';
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
const getAllbiCycleDataFromDatabase = async (
  query: Record<string, unknown>,
) => {
  let searchTerm = '';
  // if (query) {
  //   queryData = {
  //     $or: [{ name: query }, { brand: query }, { type: query }],
  //   };
  // }

  if (query?.searchTerm) {
    searchTerm = query.searchTerm as string;
  }
  const result = await BiCycle.find({
    $or: ['brand', 'name', 'category'].map((field) => ({
      [field]: { $regex: searchTerm, $options: 'i' },
    })),
  });

  // const result = new QueryBuilder(BiCycle.find(), query)
  //   .search(searchByBicycle)
  //   .filter()
  //   .sort();
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
