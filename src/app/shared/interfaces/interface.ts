export interface ICatalogItem {
  id: String,
  name: String,
  level: String,
  category: String,
  video: String | null,
  photo: String,
  desc: Array<string>,
  createdBy?: String
  userId?: String,
  catalogElementId?: String,
  learnDate?: String,
  learnt?: Boolean
}


export interface ICatalogItems extends Array<ICatalogItem>{}

export interface IUser {
  id: string,
  username: string,
  email: string,
  password?: string,
  role: string,
  photo: string,
  passwordHash?: string
}


export interface IElement {
  id: String,
  userId?: String,
  name: String,
  level: String,
  category: String,
  video: String | null,
  photo: String,
  desc: Array<string>,
  createdBy?: String
  learnDate?: String,
  catalogElementId?: String,
  learnt?: Boolean
}

export interface IElements extends Array<IElement>{}

export interface ICombo {
  id?: String,
  userId: String | undefined,
  name: String,
  elements: Array<string>,
  category: String
}

export interface ICombos extends Array<ICombo>{}

export interface IWishlistElement {
  id: String,
  userId: String,
  name: String,
  desc: Array<string>,
  category: String,
  photo: String,
  video: String,
  level: String,
}

export interface IWishlistElements extends Array<IWishlistElement>{}

export interface IClass {
  id: String,
  userId: String,
  name: String,
  elements: Array<any>,
  category: String
}

export interface IClasses extends Array<IClass>{}

export interface IHour {
  id: String,
  userId: String,
  date: String,
  count: Array<string>,
  classes: String
}

export interface IHours extends Array<IHour>{}
