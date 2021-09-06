import { AngularFirestoreDocument } from "@angular/fire/compat/firestore";
import { DocumentSnapshot } from '@firebase/firestore';

export interface Action extends AngularFirestoreDocument {
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