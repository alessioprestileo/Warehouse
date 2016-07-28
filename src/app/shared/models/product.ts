import { Item, ItemType } from './item';
import { Editable } from './editable';

export class Product extends Item {
	editables: Editable;
	constructor(editables: Editable = null) {
		super();
		this.type = ItemType.Prod;
		if (editables) {
			this.editables = editables;
		} else {
			this.editables = new Editable();
		}
	}
}
