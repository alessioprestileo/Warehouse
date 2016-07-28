import { Item, ItemType } from '../models/item';
import { Product } from '../models/product';
import { Department } from '../models/department';

export class ServerServiceMock {
  getDepartments(): Promise<Department[]> {
    let promise = new Promise<Department[]>(function(fulfill, reject) {
      let departments: Array<Department> = [
        { id: 0, type: ItemType.Dep, name: 'Technology', parentId: '', childrenIds: '' },
        { id: 1, type: ItemType.Dep, name: 'Music', parentId: '', childrenIds: '' },
        { id: 2, type: ItemType.Dep, name: 'Fashion', parentId: '', childrenIds: '' },
        { id: 3, type: ItemType.Dep, name: 'Sport', parentId: '', childrenIds: '' }
      ];
      fulfill(departments);
    });
    return promise;
  }
  getProducts(): Promise<Product[]> {
    let promise = new Promise<Product[]>(function(fulfill, reject) {
      let products: Array<Product> = [
      { id: 4, type: ItemType.Prod, editables:
        { department: 'Technology', name: 'Phone', price: 100.00 }},
      { id: 5, type: ItemType.Prod, editables:
        { department: 'Technology', name: 'PC', price: 1000.00 }},
      { id: 6, type: ItemType.Prod, editables:
        { department: 'Music', name: 'Guitar', price: 1500.0 }},
      { id: 7, type: ItemType.Prod, editables:
        { department: 'Music', name: 'Piano', price: 10000.00 }},
      { id: 8, type: ItemType.Prod, editables:
        { department: 'Fashion', name: 'Jacket', price: 500.00 }},
      { id: 9, type: ItemType.Prod, editables:
        { department: 'Fashion', name: 'Suit', price: 2500.00 }},
      { id: 10, type: ItemType.Prod, editables:
        { department: 'Sport', name: 'Ball', price: 10.00 }},
      { id: 11, type: ItemType.Prod, editables:
        { department: 'Sport', name: 'Bycicle', price: 800.00 }}];
      fulfill(products);
    });
    return promise;
  }
  getProduct(id: number) : Promise<Product> {
    return this.getProducts()
      .then(products => products.filter(product => product.id === id)[0]);
  }
  save(product: Product): Promise<Product> {
    let promise = new Promise<Product>(function(fulfill, reject) {
      let product: Product = {
        id: 4, type: ItemType.Prod, editables:
        { department: 'Technology', name: 'Phone', price: 100.00 }
      };
      fulfill(product);
    });
    return promise;
  }
  delete(product: Product) : Promise<any> {
    let promise = new Promise<any>(function(fulfill, reject) {
      fulfill();
    });
    return promise;
  }
}
