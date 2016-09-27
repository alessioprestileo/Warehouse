import { WarehouseProdSrc } from "./WarehouseProdSrc";

export class WarehouseProd {
	extraFields: {[field: string]: string};
  hierarchy: string[];
	id: number;
  imgSrc: string;
  name: string;
  price: number;
  quantity: number;

  constructor(
    extraFields: {[field: string]: string} = {},
    hierarchy: string[] = [],
    id: number = null,
    imgSrc: string = '',
    name: string = '',
    price: number = 0,
    quantity: number = 0
  ) {
    this.extraFields = extraFields;
    this.hierarchy = hierarchy;
    this.id = id;
    this.imgSrc = imgSrc;
    this.name = name;
    this.price = price;
    this.quantity = quantity;
	}
  // import WarehouseProd props from WarehouseProdSrc
  public importProdPropsFromProdSrc(
    prodSrc: WarehouseProdSrc
  ) : void {
    let originalExtraFields: {[field: string]: any} = prodSrc.extraFields;
    for (let label in originalExtraFields) {
      this.extraFields[label] = originalExtraFields[label];
    }
    for (let path of prodSrc.hierarchy) {
      this.hierarchy.push(path);
    }
    this.id = prodSrc.id;
    this.imgSrc = prodSrc.imgSrc;
    this.name = prodSrc.name;
    this.price = prodSrc.price;
    this.quantity = prodSrc.quantity;
  }
}
