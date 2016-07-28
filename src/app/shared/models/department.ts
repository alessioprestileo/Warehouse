import { Item, ItemType } from './item';

export class Department extends Item {
	constructor() {
		super();
		this.type = ItemType.Dep;
	}
	name: string;
	parentId: string;
	childrenIds: string;
}
