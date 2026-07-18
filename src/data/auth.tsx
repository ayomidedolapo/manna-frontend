export type SignupFieldConfig = {
  name: string;
  label: string;
  type: "text" | "email" | "tel" | "password" | "select" | "textarea" | "checkbox";
  placeholder: string;
  options?: string[];
  showIf?: { field: string; equals: string };
};

export const nigeriaStates: string[] = [
  "Abia", "Adamawa", "Akwa Ibom", "Anambra", "Bauchi", "Bayelsa", "Benue",
  "Borno", "Cross River", "Delta", "Ebonyi", "Edo", "Ekiti", "Enugu",
  "FCT (Abuja)", "Gombe", "Imo", "Jigawa", "Kaduna", "Kano", "Katsina",
  "Kebbi", "Kogi", "Kwara", "Lagos", "Nasarawa", "Niger", "Ogun", "Ondo",
  "Osun", "Oyo", "Plateau", "Rivers", "Sokoto", "Taraba", "Yobe", "Zamfara",
];

export const customerSignupFields: SignupFieldConfig[] = [
  { name: "firstName", label: "First name", type: "text", placeholder: "Enter your first name" },
  { name: "lastName", label: "Last name", type: "text", placeholder: "Enter your last name" },
  { name: "email", label: "Email address", type: "email", placeholder: "Enter your email address" },
  { name: "password", label: "Password", type: "password", placeholder: "Enter your password" },
  { name: "confirmPassword", label: "Confirm password", type: "password", placeholder: "Re-enter your password" },
  {
    name: "state",
    label: "State",
    type: "select",
    placeholder: "Select your state",
    options: nigeriaStates,
  },
  { name: "deliveryAddress", label: "Delivery address", type: "text", placeholder: "Enter your delivery address" },
  { name: "landmark", label: "Nearest bus stop / landmark", type: "text", placeholder: "e.g. Opposite First Bank, Ikeja" },
  { name: "phone", label: "Phone number", type: "tel", placeholder: "Enter your phone number" },
];

// Step 1 — personal details
export const vendorSignupStep1Fields: SignupFieldConfig[] = [
  { name: "firstName", label: "First name", type: "text", placeholder: "Enter your first name" },
  { name: "lastName", label: "Last name", type: "text", placeholder: "Enter your last name" },
  { name: "email", label: "Email address", type: "email", placeholder: "Enter your email address" },
  { name: "password", label: "Password", type: "password", placeholder: "Enter your password" },
  { name: "confirmPassword", label: "Confirm password", type: "password", placeholder: "Re-enter your password" },
  { name: "phone", label: "Phone number", type: "tel", placeholder: "Enter your phone number" },
];

// Step 2 — business details
export const vendorSignupStep2Fields: SignupFieldConfig[] = [
  { name: "businessName", label: "Business / farm name", type: "text", placeholder: "e.g. Okafor Farms" },
  {
    name: "businessType",
    label: "Business type",
    type: "select",
    placeholder: "Select your business type",
    options: [
      "Farmer", "Farm Cooperative", "Fresh Produce Supplier", "Grocery Store",
      "Supermarket", "Market Trader", "Meat Vendor", "Seafood Vendor",
      "Poultry & Eggs Supplier", "Grain & Legume Supplier",
      "Spice & Dry Food Supplier", "Root & Tuber Supplier", "Fruit Vendor",
      "Food Distributor", "Other",
    ],
  },
  {
    name: "businessDescription",
    label: "Business description",
    type: "textarea",
    placeholder: "Tell us a little about what you sell and how you operate",
  },
  {
    name: "yearsInOperation",
    label: "Years in operation",
    type: "select",
    placeholder: "Select a range",
    options: ["Less than 1 year", "1-2 years", "3-5 years", "6-10 years", "10+ years"],
  },
  {
    name: "productSource",
    label: "Where do you source your products?",
    type: "select",
    placeholder: "Select an option",
    options: [
      "I grow them myself", "I buy directly from farmers",
      "I buy from wholesalers", "I buy from local markets",
      "I process/manufacture them", "Other",
    ],
  },
  {
    name: "registeredBusiness",
    label: "Is your business registered with CAC?",
    type: "select",
    placeholder: "Select an option",
    options: ["Yes", "No"],
  },
  {
    name: "cacNumber",
    label: "CAC registration number",
    type: "text",
    placeholder: "Enter your CAC number",
    showIf: { field: "registeredBusiness", equals: "Yes" },
  },
  {
    name: "state",
    label: "State",
    type: "select",
    placeholder: "Select your state",
    options: nigeriaStates,
  },
  {
    name: "lga",
    label: "Local Government Area",
    type: "text",
    placeholder: "Enter your LGA",
  },
  {
    name: "pickupAddress",
    label: "Business / pickup address",
    type: "text",
    placeholder: "Enter the address orders will be picked up from",
  },
  {
    name: "agreeToTerms",
    label:
      "I confirm that all information provided is accurate, the products I list comply with applicable laws and food safety requirements, and I understand that providing false information or selling prohibited, counterfeit, or unsafe products may result in suspension or removal from Manna.",
    type: "checkbox",
    placeholder: "",
  },
];

export const authQuotes: string[] = [
  "Do you know that okra is rich in vitamins A and C, potassium, and fiber, supporting healthy digestion and immune function?",
  "Do you know that plantains are a good source of potassium, vitamins A and C, and fiber, supporting healthy digestion and energy levels?",
  "Do you know that spinach is packed with vitamins A, C, and K, and minerals like iron and calcium, supporting healthy eyesight and bone health?",
  "Do you know that egusi (melon seeds) are rich in protein, vitamins, and minerals like magnesium and potassium, supporting healthy heart function?",
  "Do you know that tomatoes are rich in lycopene and vitamin C, supporting healthy skin and a strong immune system?",
  "Do you know that yams are a great source of complex carbohydrates and potassium, helping keep energy levels steady through the day?",
];