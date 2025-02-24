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
  let searchQuery = BiCycle.find();
  if (searchTerm) {
    searchQuery = searchQuery.find({
      $or: bicycleSearchableField.map((field) => ({
        [field]: { $regex: searchTerm, $options: 'i' },
      })),
    });
  }

  if (minPrice !== undefined || maxPrice !== undefined) {
    const priceFilter: Record<string, number> = {};
    if (minPrice !== undefined) {
      priceFilter.$gte = minPrice;
    }
    if (maxPrice !== undefined) {
      priceFilter.$lte = maxPrice;
    }
    searchQuery = searchQuery.find({ price: priceFilter });
  }

  // Availability Filtering
  if (query.availability) {
    if (query.availability === 'in-stock') {
      searchQuery = searchQuery.find({ stock: { $gt: 0 } });
    } else if (query.availability === 'out-of-stock') {
      searchQuery = searchQuery.find({ stock: { $lte: 0 } });
    }
  }

  // Exclude Filed For Filter
  const excludeField = ['searchTerm', 'maxPrice', 'minPrice', 'availability'];
  excludeField.forEach((el) => delete queryObject[el]);
  searchQuery = searchQuery.find(queryObject);
  const result = await searchQuery.exec();
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
