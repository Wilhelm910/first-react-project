// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { collection, doc, getDoc, getDocs, getFirestore, query, where } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyDXujyk9bPtR6Eba-4NtKcKebADSZEgCDg",
    authDomain: "vanlife-cc91e.firebaseapp.com",
    projectId: "vanlife-cc91e",
    storageBucket: "vanlife-cc91e.appspot.com",
    messagingSenderId: "680678578708",
    appId: "1:680678578708:web:714324d3e27a91eceb6501"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
const vansCollectionRef = collection(db, "vans")

export async function getVans() {
    const querySnapshot = await getDocs(vansCollectionRef)
    const dataArray = querySnapshot.docs.map((doc) => {
        return {
            ...doc.data(),
            id: doc.id
        }
    })
    return dataArray
}

export async function getVanById(id) {
    console.log(id)
    const docRef = doc(db, "vans", id)
    const vanSnapshot = await getDoc(docRef)
    return {
        ...vanSnapshot.data(),
        id: vanSnapshot.id
    }
}

export async function getHostVans() {
    const q = query(vansCollectionRef, where("hostId", "==", "123"))
    const querySnapshot = await getDocs(q)
    const dataArray = querySnapshot.docs.map((doc) => {
        return {
            ...doc.data(),
            id: doc.id
        }
    })
    return dataArray
}


/*
export async function getVans(id) {
    const url = id ? `/api/vans/${id}` : '/api/vans'
    const res = await fetch(url)
    if (!res.ok) {
        throw {
            message: "Failed to fetch vans",
            statusText: res.statusText,
            status: res.status
        }
    }
    const data = await res.json()
    return data.vans
}
*/

/*
export async function getHostVans(id) {
    const url = id ? `/api/host/vans/${id}` : "/api/host/vans"
    const res = await fetch(url)
    if (!res.ok) {
        throw {
            message: "Failed to fetch vans",
            statusText: res.statusText,
            status: res.status
        }
    }
    const data = await res.json()
    return data.vans
}
*/


export async function loginUser(creds) {

    const res = await fetch("/api/login",
        { method: "post", body: JSON.stringify(creds) }
    )
    const data = await res.json()

    if (!res.ok) {
        throw {
            message: data.message,
            statusText: res.statusText,
            status: res.status
        }
    }

    return data
}
