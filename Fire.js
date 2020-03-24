import FirebaseKeys from './important-info/apiKey';
import * as firebase from 'firebase';
import 'firebase/firestore';
import { decode, encode } from 'base-64';

if(!global.btoa) { global.btoa = encode };
if(!global.atob) { global.atob = decode };

class Fire {
    constructor() {
        if(!firebase.app.length) {
            firebase.initializeApp(FirebaseKeys);
        }
    }

    createUser = async user => {
        let remoteUri = null;
        
        try {
            await firebase.auth().createUserWithEmailAndPassword(user.email, user.password);

            let db = this.firestore.collection("users").doc(this.uid);

            db.set({
                username: user.username,
                email: user.email
            });
        } catch (error) {
            console.log(error);
            alert("Error: ", error);
        }
    }

    get firestore() {
        return firebase.firestore();
    }

    get uid() {
        return (firebase.auth().currentUser || {}).uid;
    }
}

Fire.shared = new Fire();
export default Fire;