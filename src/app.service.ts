import { Injectable } from '@nestjs/common';
import * as admin from 'firebase-admin';

@Injectable()
export class AppService {
  private readonly db = admin.firestore();

  async createDocument(collection: string, data: any) {
    const docRef = this.db.collection(collection).doc();
    await docRef.set(data);
    return docRef.id;
  }

  async readDocuments(collection: string) {
    const snapshot = await this.db.collection(collection).get();
    return snapshot.docs.map(doc => doc.data());
  }

  async updateDocument(collection: string, id: string, data: any) {
    const docRef = this.db.collection(collection).doc(id);
    await docRef.update(data);
    return id;
  }

  async deleteDocument(collection: string, id: string) {
    const docRef = this.db.collection(collection).doc(id);
    await docRef.delete();
    return id;
  }
}
