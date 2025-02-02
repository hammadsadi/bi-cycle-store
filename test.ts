/* eslint-disable @typescript-eslint/no-explicit-any */
// import QueryBuilder from '../../builder/QueryBuilder';
// import { searchByBicycle } from './bicycle.constant';
import { BiCycle } from './biCycle.model';
import { TBiCycle } from './biCycleInterface';

// Bi Cycle Data Save to Database
const biCycleDataSaveToDatabase = async (bicycle: TBiCycle) => {
  const result = await BiCycle.create(bicycle);
  return result;
};

// All Bi-Cycle Data get From Database
const getAllbiCycleDataFromDatabase = async (
  query: Record<string, unknown>,
) => {
  let searchTerm = '';
  let maxPrice: number | undefined;
  let minPrice: number | undefined;

  const queryObject = { ...query };
  const bicycleSearchableField = ['brand', 'name', 'category'];
  if (query?.searchTerm) {
    searchTerm = query.searchTerm as string;
  }

  // Price Range Validation and Data Set
  if (query?.minPrice) {
    minPrice = Number(query?.minPrice);
  }
  if (query?.maxPrice) {
    maxPrice = Number(query?.maxPrice);
  }
  const searchQuery = BiCycle.find({
    $or: bicycleSearchableField.map((field) => ({
      [field]: { $regex: searchTerm, $options: 'i' },
    })),
  });

  // Filter Price Range Wise
  if (minPrice !== undefined && maxPrice !== undefined) {
    searchQuery.where('price').gte(minPrice).lte(maxPrice);
  } else if (minPrice !== undefined) {
    searchQuery.where('price').gte(minPrice);
  } else if (maxPrice !== undefined) {
    searchQuery.where('price').lte(maxPrice);
  }
  // Exclude Filed For Filter
  const excludeField = ['searchTerm', 'maxPrice', 'minPrice'];
  excludeField.forEach((el) => delete queryObject[el]);
  const result = await searchQuery.find(queryObject);

  return result;
};
// Get Specific Field Data get From Database
const getSpecificFieldCycleDataFromDatabase = async () => {
  const result = await BiCycle.find().select('brand model category');
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
) => {
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
  getSpecificFieldCycleDataFromDatabase,
};
