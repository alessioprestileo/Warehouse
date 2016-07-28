import { ItemType } from '../models/item';
export class ServerData {
  createDb() {
    let items = [
      { id: 0, type: ItemType.Dep, name: 'Technology', parentId: '', childrenIds: '' },
      { id: 1, type: ItemType.Dep, name: 'Music', parentId: '', childrenIds: '' },
      { id: 2, type: ItemType.Dep, name: 'Fashion', parentId: '', childrenIds: '' },
      { id: 3, type: ItemType.Dep, name: 'Sport', parentId: '', childrenIds: '' },
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
        { department: 'Sport', name: 'Bycicle', price: 800.00 }},
    ];
    return {items};
  }
}
