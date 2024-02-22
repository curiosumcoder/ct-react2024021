export default class ProductService 
{
    search = (filter='') => products.filter(
        p => p.productName.toLowerCase().includes(
            filter.toLowerCase()));
}

const products = [
    { id: 11, productName: "Queso Cabrales", unitPrice: 21.0 },
    { id: 12, productName: "Queso Manchego La Pastora", unitPrice: 38.0 },
    { id: 13, productName: "Konbu", unitPrice: 6.0 },
    { id: 14, productName: "Tofu", unitPrice: 23.25 },
    { id: 15, productName: "Genen Shouyu", unitPrice: 15.5 },
    { id: 16, productName: "Pavlova", unitPrice: 17.45 },
    { id: 17, productName: "Alice Mutton", unitPrice: 39.0 },
    { id: 18, productName: "Carnarvon Tigers", unitPrice: 62.5 },
    { id: 19, productName: "Teatime Chocolate Biscuits", unitPrice: 9.2 },
    { id: 20, productName: "Sir Rodney's Marmalade", unitPrice: 81.0 },
    { id: 21, productName: "Sir Rodney's Scones", unitPrice: 10.0 },
    { id: 22, productName: "Gustaf's Knäckebröd", unitPrice: 21.0 },
    { id: 23, productName: "Tunnbröd", unitPrice: 9.0 },
    { id: 24, productName: "Guaraná Fantástica", unitPrice: 4.5 },
    { id: 25, productName: "NuNuCa Nuß-Nougat-Creme", unitPrice: 14.0 },
    { id: 26, productName: "Gumbär Gummibärchen", unitPrice: 31.23 },
    { id: 27, productName: "Schoggi Schokolade", unitPrice: 43.9 },
    { id: 28, productName: "Rössle Sauerkraut", unitPrice: 45.6 },
    { id: 29, productName: "Thüringer Rostbratwurst", unitPrice: 123.79 },
    { id: 30, productName: "Nord-Ost Matjeshering", unitPrice: 25.89 },
    { id: 31, productName: "Gorgonzola Telino", unitPrice: 12.5 },
    { id: 32, productName: "Mascarpone Fabioli", unitPrice: 32.0 },
    { id: 33, productName: "Geitost", unitPrice: 2.5 },
    { id: 34, productName: "Sasquatch Ale", unitPrice: 14.0 },
    { id: 35, productName: "Steeleye Stout", unitPrice: 18.0 },
    { id: 36, productName: "Inlagd Sill", unitPrice: 19.0 },
    { id: 37, productName: "Gravad lax", unitPrice: 26.0 },
    { id: 38, productName: "Côte de Blaye", unitPrice: 263.5 },
    { id: 39, productName: "Chartreuse verte", unitPrice: 18.0 },
    { id: 40, productName: "Boston Crab Meat", unitPrice: 18.4 },
    { id: 41, productName: "Jack's New England Clam Chowder", unitPrice: 9.65 },
    { id: 42, productName: "Singaporean Hokkien Fried Mee", unitPrice: 14.0 },
    { id: 43, productName: "Ipoh Coffee", unitPrice: 46.0 },
    { id: 44, productName: "Gula Malacca", unitPrice: 19.45 },
    { id: 45, productName: "Rogede sild", unitPrice: 9.5 },
    { id: 46, productName: "Spegesild", unitPrice: 12.0 },
    { id: 47, productName: "Zaanse koeken", unitPrice: 9.5 },
    { id: 48, productName: "Chocolade", unitPrice: 12.75 },
    { id: 49, productName: "Maxilaku", unitPrice: 20.0 },
  ];