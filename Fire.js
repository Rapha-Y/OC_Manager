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
    /*tempLogin(email, password) {
        var obj = users.users;

        var user = obj.filter(function (usr) {
            return usr.email == email;
        });

        if(user.length == 0) {
            return { 
                error: true, 
                content: "There are no registered users under this e-mail"
            };
        }

        var auth_user = user.filter(function (usr) {
            return usr.password == password;
        });

        if(auth_user.length == 0) {
            return {
                error: true,
                content: "The password does not match the e-mail"
            }
        }

        return {
            error: false,
            content: auth_user[0].uid
        }
    }

    getUser(uid) {
        var usersFile = Users.users;

        var user = usersFile.filter(function (usr) {
            return usr.uid == uid;
        });

        return user[0];
    }

    getCharacter(cid) {
        var charactersFile = Characters.characters;

        var character = charactersFile.filter(function (char) {
            return char.cid == cid;
        });

        return character[0];
    }

    getLore(lid) {
        var loresFile = Lores.lores;

        var lore = loresFile.filter(function (lre) {
            return lre.lid == lid;
        });

        return lore[0];
    }

    getFolder(fid) {
        var foldersFile = Folders.folders;

        var folder = foldersFile.filter(function (fld) {
            return fld.fid == fid;
        });

        return folder[0];
    }

    getRootFolder(uid) {
        var usersFile = Users.users;

        var user = usersFile.filter(function (usr) {
            return usr.uid == uid;
        });

        //var folders = user[0].folders;
        var foldersFile = Folders.folders;

        var folders = foldersFile.filter(function (fld) {
            return user[0].folders.includes(fld.fid);
        });

        var root = folders.filter(function (fld) {
            return fld.root == true;
        });

        return root[0];
    }*/
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
        function isRoot(uid) {
            var matchList = sectionsectioncontains.filter(function (sec) {
                return sec.uid == uid;
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
            return (isRoot(uid));
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

    getSectionCharacters(sid) {
        var self = this;
        var linkList = sectioncreationcontains.filter(function (lnk) {
            return (lnk.sid == sid);
        });
        var characterList = characters.filter(function (char) {
            return (self.creationIsIn(char.cid, linkList));
        });
        return characterList;
    }

    getSectionLores(sid) {
        var self = this;
        var linkList = sectioncreationcontains.filter(function (lnk) {
            return (lnk.sid == sid);
        });
        var loreList = lores.filter(function (lor) {
            return (self.creationIsIn(lor.cid, linkList));
        });
        return loreList;
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
        return sectionList;
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