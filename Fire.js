import FirebaseKeys from './important-info/apiKey';
import * as firebase from 'firebase';
import 'firebase/firestore';
import { decode, encode } from 'base-64';

//temporary data
import users from './testData/users';
import characters from './testData/characters';
import useruserfollows from './testData/useruserfollows';
import sections from './testData/sections';
import sectionsectioncontains from './testData/sectionsectioncontains';
import sectioncreationcontains from './testData/sectioncreationcontains';
import lores from './testData/lores';

if(!global.btoa) { global.btoa = encode };
if(!global.atob) { global.atob = decode };

class Fire {

    //temporary functions - the calls made to these functions are to be kept, but their way of handling
    //data shall be updated to store/fetch data from firebase instead
    getUID(email, password) {
        var user = users.filter(function (usr) {
            return (usr.email == email && usr.password == password);
        });
        if(user.length == 0) {
            return null;
        } else {
            return user[0].uid;
        }
    }

    getUser(uid) {
        var user = users.filter(function (usr) {
            return (usr.uid == uid);
        });
        return user[0];
    }

    getUsername(uid) {
        var user = this.getUser(uid);
        return user.username;
    }

    getUsertag(uid) {
        var user = this.getUser(uid);
        return user.usertag;
    }

    getAvatar(uid) {
        var user = this.getUser(uid);
        return user.avatar;
    }

    getCover(uid) {
        var user = this.getUser(uid);
        return user.cover;
    }

    getDescription(uid) {
        var user = this.getUser(uid);
        return user.description;
    }

    getRootSection(uid) {
        function isRoot(sid) {
            var matchList = sectionsectioncontains.filter(function (sec) {
                return sec.childid == sid;
            });
            if(matchList.length != 0) {
                return false;
            } else {
                return true;
            }
        }

        var sectionList = sections.filter(function (sec) {
            return (sec.uid == uid);
        });
        
        var root = sectionList.filter(function (sec) {
            return (isRoot(sec.sid));
        });
        
        return root[0].sid;
    }

    countCharacters(uid) { //might be worth to separate character list from count later
        var characterList = characters.filter(function (char) {
            return (char.uid == uid);
        });
        return characterList.length;
    }

    countFollowers(uid) { //might be worth to separate follower list from count later
        var followerList = useruserfollows.filter(function (flw) {
            return (flw.followedid == uid);
        });
        return followerList.length;
    }

    creationIsIn(cid, lnkList) {
        var matchList = lnkList.filter(function (lnk) {
            return (lnk.cid == cid);
        });
        if(matchList.length == 0) {
            return false;
        } else {
            return true;
        }
    }

    getCharacter(cid) {
        var char = characters.filter(function (chr) {
            return (chr.cid == cid);
        });
        return char[0];
    }

    getCharacterName(cid) {
        var char = this.getCharacter(cid);
        return char.name;
    }

    getLore(cid) {
        var lore = lores.filter(function (lor) {
            return (lor.cid == cid);
        });
        return lore[0];
    }

    getLoreName(cid) {
        var lore = this.getCharacter(cid);
        return lore.name;
    }

    getChararacterPic(cid) {
        var char = this.getCharacter(cid);
        return char.avatar;
    }

    getSection(sid) {
        var section = sections.filter(function (sec) {
            return (sec.sid == sid);
        });
        return section[0];
    }

    getSectionName(sid) {
        var section = this.getSection(sid);
        return section.name;
    }

    getSectionCharacters(sid) {
        var self = this;
        var linkList = sectioncreationcontains.filter(function (lnk) {
            return (lnk.sid == sid);
        });
        var characterList = characters.filter(function (char) {
            return (self.creationIsIn(char.cid, linkList));
        });
        return characterList.map(function (char) {
            return char.cid;
        });
    }

    getSectionLores(sid) {
        var self = this;
        var linkList = sectioncreationcontains.filter(function (lnk) {
            return (lnk.sid == sid);
        });
        var loreList = lores.filter(function (lor) {
            return (self.creationIsIn(lor.cid, linkList));
        });
        return loreList.map(function (lor) {
            return lor.cid;
        });
    }

    sectionIsIn(sid, lnkList) {
        var matchList = lnkList.filter(function (lnk) {
            return (lnk.childid == sid);
        });
        if(matchList.length == 0) {
            return false;
        } else {
            return true;
        }
    }

    getSubsections(sid) {
        var self = this;
        var linkList = sectionsectioncontains.filter(function (lnk) {
            return (lnk.parentid == sid);
        });
        var sectionList = sections.filter(function (sec) {
            return (self.sectionIsIn(sec.sid, linkList));
        });
        return sectionList.map(function (sec) {
            return sec.sid;
        });
    }

    emailExists(email) {
        var user = users.filter(function (usr) {
            return usr.email == email;
        });
        if(user.length != 0) {
            return true;
        } else {
            return false;
        }
    }
    //temp func end

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