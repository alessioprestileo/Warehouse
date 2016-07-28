export class HeaderEntry {
	// The name of the header to be shown in the table
	private headerName: string;
	// The name of the corresponding object property
	private propertyName: string;

	constructor(head: string, prop: string) {
		this.headerName = head;
		this.propertyName = prop;
	}
}
export class TableInput {
	// Array of header entries to show in the table
	private headers: Array<HeaderEntry>;
	// Array of objects to show in the table (only the properties included
	// in headers will be shown)
	private objects: Array<any>;

	constructor(headers: Array<HeaderEntry>, objects: Array<any>) {
		this.headers = headers;
		this.objects = objects;	
	}

	getHeaders() : Array<HeaderEntry> {
		return this.headers;
	}
	setHeaders(headers : Array<HeaderEntry>) : void {
		this.headers = headers;
	}
	getObjects() : Array<any> {
		return this.objects;
	}
	setObjects(objects : Array<any>) : void {
		this.objects = objects;
	}
}