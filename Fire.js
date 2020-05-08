import FirebaseKeys from './important-info/apiKey';
import * as firebase from 'firebase';
import 'firebase/firestore';
import { decode, encode } from 'base-64';

//temporary data
import users from './testData/users';
import characters from './testData/characters';
import sections from './testData/sections';
import sectionsectioncontains from './testData/sectionsectioncontains';
import sectioncreationcontains from './testData/sectioncreationcontains';
import lores from './testData/lores';
import itemlists from './testData/itemlists';
import listItems from './testData/items';
import content from './testData/content.json';

if(!global.btoa) { global.btoa = encode };
if(!global.atob) { global.atob = decode };

class Fire {

    constructor() {
        if(!firebase.app.length) {
            firebase.initializeApp(FirebaseKeys);
        }
    }

    async getAllCharacters() {
        try {
            const response = await this.firestore.collection("characters").orderBy("date", "desc").get();
            return response.docs.map(function(doc) {
                return {
                    cid: doc.id,
                    avatar: doc.data().avatar,
                    name: doc.data().name,
                    description: doc.data().description
                }
            });
        } catch (err) {
            console.log("Error: ", err);
        }
    }

    async getUserData(uid) {
        try {
            const response = await this.firestore.collection("users").doc(uid).get();
            return {
                //code may seem redundant, but allows for easier attribute name changes
                avatar: response.data().avatar,
                cover: response.data().cover,
                username: response.data().username,
                usertag: response.data().usertag,
                description: response.data().description
            };
        } catch (err) {
            console.log("Error: ", err);
        }
    }

    async countCharacters(uid) { //might be worth to separate character list from count later
        try {
            const response = await this.firestore.collection("characters").where("user", "==", uid).get();
            return response.size;
        } catch (err) {
            console.log("Error: ", err);
        }
    }

    async countFollowers(uid) { //might be worth to separate follower list from count later
        try {
            const response = await this.firestore.collection("user_user_follows")
                                                 .where("followed", "==", uid)
                                                 .get();
            return response.size;
        } catch (err) {
            console.log("Error: ", err);
        }
    }

    async getRootSection(uid) {
        try {
            const response = await this.firestore.collection("sections")
                                                 .where("user", "==", uid)
                                                 .where("root", "==", true)
                                                 .get();
            if(response.size != 1) {
                console.log("Error: User has number of root sections different than 1");
                return ""; //note fore the future:
                           //make a blank cid return lead to the rendering of an error page
            } else {
                const id = response.docs.map(function(doc) {
                    return doc.id;
                });
                return id[0];
            }
        } catch (err) {
            console.log("Error: ", err);
        }
    }

    async getSectionCharacters(sid) {
        try {
            const response_a = await this.firestore.collection("sec_char_contains")
                                                   .where("sec", "==", sid)
                                                   .get();
            var charList = response_a.docs.map(function(doc) {
                return doc.data().char;
            });
            var charDataList = [];
            for(var i=0;i<charList.length;i++) {
                const response_b = await this.firestore.collection("characters").doc(charList[i]).get();
                charDataList.push({
                    cid: response_b.id,
                    avatar: response_b.data().avatar,
                    name: response_b.data().name
                });
            }
            return charDataList;
        } catch(err) {
            console.log("Error: ", err);
        }
    }

    async getSectionLores(sid) {
        try {
            const response_a = await this.firestore.collection("sec_lore_contains")
                                                   .where("sec", "==", sid)
                                                   .get();
            var loreList = response_a.docs.map(function(doc) {
                return doc.data().lore;
            });
            var loreDataList = [];
            for(var i=0;i<loreList.length;i++) {
                const response_b = await this.firestore.collection("lores").doc(loreList[i]).get();
                loreDataList.push({
                    lid: response_b.id,
                    name: response_b.data().name
                });
            }
            return loreDataList;
        } catch(err) {
            console.log("Error: ", err);
        }
    }

    async getSubsections(sid) {
        try {
            const response_a = await this.firestore.collection("sec_sec_contains")
                                                   .where("parent", "==", sid)
                                                   .get();
            var secList = response_a.docs.map(function(doc) {
                return doc.data().child;
            });
            var secDataList = [];
            for(var i=0;i<secList.length;i++) {
                const response_b = await this.firestore.collection("sections").doc(secList[i]).get();
                secDataList.push({
                    sid: response_b.id,
                    name: response_b.data().name
                });
            }
            return secDataList;
        } catch(err) {
            console.log("Error: ", err);
        }
    }

    async getCharDropdowns(cid) {
        try {
            const response = await this.firestore.collection("charDivision")
                                                 .where("char", "==", cid)
                                                 .orderBy("position")
                                                 .get();
            var charDivList = await Promise.all(response.docs.map(async function(doc) {
                return {
                    id: doc.id,
                    name: doc.data().name,
                    display: doc.data().display,
                    charSubDivList: await Fire.shared.getCharDropdownItems(doc.id)
                };
            }));
            return charDivList;
        } catch(err) {
            console.log("Error: ", err);
        }
    }

    async getCharDropdownItems(ssid) {
        try {
            const response = await this.firestore.collection("charSubDiv")
                                                 .where("charDiv", "==", ssid)
                                                 .orderBy("position")
                                                 .get();
            var charSubDivList = await Promise.all(response.docs.map(async function(doc) {
                return {
                    id: doc.id,
                    name: doc.data().name,
                    charItemList: await Fire.shared.getListItemContent(doc.id)
                }
            }));
            return charSubDivList;
        } catch(err) {
            console.log("Error: ", err);
        }
    }

    async getListItemContent(iid) {
        try {
            const response = await this.firestore.collection("charItem")
                                                 .where("charSubDiv", "==", iid)
                                                 .orderBy("position")
                                                 .get();
            var charItemList = response.docs.map(function(doc) {
                return {
                    id: doc.id,
                    link: doc.data().link,
                    name: doc.data().name
                }
            });
            return charItemList;
        } catch(err) {
            console.log("Error: ", err);
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