import { AngularFirestoreDocument } from "@angular/fire/compat/firestore";

export interface Action extends AngularFirestoreDocument{
	category: string;
	contact: string;
	createdAt: string;
	description: string;
	image: string;
	localization: string;
	name: string;
	postalCode: string;
	user: string;
	id: string;
}