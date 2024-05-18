//static detail

export enum SD_Roles {
  ADMIN = "admin",
  CUSTOMER = "customer",
}

export enum SD_Status {
  PENDING = "Pending",
  CONFIRMED = "Confirmed",
  BEING_COOKED = "Being Cooked",
  READY_FOR_PICKUP = "Ready for Pickup",
  COMPLETED = "Completed",
  CANCELED = "Canceled",
}

export enum SD_Categories {
  APPETIZER = "Appetizer",
  ENTREE = "Entrée",
  DESSERT = "Dessert",
  BEVERAGES = "Beverages",
}

export enum SD_Restaurants {
  AYŞE_NIN_YERI = "Ayşe'nin Yeri",
  USTA_KEBAP = "Usta Kebap",
  DENIZ_RESTORAN = "Deniz Restoran",
  GOZLEME_EVI = "Gözleme Evi",
  PIZZA_VALLEY = "Pizza Valley",
  SUGAR_CRASH = "Sugar Crash",
}

export enum SD_SortTypes {
  PRICE_LOW_HIGH = "Price Low - High",
  PRICE_HIGH_LOW = "Price High - Low",
  NAME_A_Z = "Name A - Z",
  NAME_Z_A = "Name Z - A",
}
