# 🚲 Bicycle Store API

A Node.js and Express.js-based API designed to manage a bicycle store. The API enables users to add products, place orders, and calculate total revenue

## 🚀 Features

1. **Add Bicycles:** Add product details such as type, price, and quantity to the database.
2. **Order Bicycles:** Users can place orders with a valid email address.
3. **Revenue Calculation:** Retrieve the total revenue generated from orders.

## 🛠️ Installation and Setup

Follow these steps to set up the project locally:

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd <project-folder>
   ```

2.Install the required dependencies:

```bash
npm install
```

3. Create a .env file in the root directory and configure the following environment variables:

```bash
 PORT=5000
MONGODB_URL=<your-mongodb-url>
```

4. Start the server:

```bash
 npm run start:dev
```

5. The API will be available at

```bash
http://localhost:5000
```

# 📚 API Endpoints

## Product Endpoints

1. Create a Bicycle
   Method: POST

URL:

```bash
/api/products/
```

Description: Adds a new bicycle to the database.

2. Get All Bicycles
   Method: GET
   URL:

```bash
/api/products?searchTerm=<keyword>
```

Description: Retrieves a list of bicycles. Optional search by type using the searchTerm query parameter.

3. Get a Single Bicycle
   Method: GET
   URL:

```bash
/api/products/:id
```

Description: Fetch details of a specific bicycle by ID.

4. Update a Bicycle
   Method: PUT
   URL:

```bash
 /api/products/:id
```

Description: Updates the details of a specific bicycle by ID.

5. Delete a Bicycle
   Method: DELETE
   URL:

```bash
/api/products/:id
```

Description: Deletes a bicycle by ID.

## Order Endpoints

1. Place an Order
   Method: POST
   URL:

```bash
/api/orders/
```

Description: Place an order for a bicycle.

2. Get Total Revenue
   Method: GET
   URL:

```bash
/api/orders/revenue
```

Description: Calculates and returns the total revenue from all orders.
