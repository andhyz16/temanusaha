// Konfigurasi & Inisialisasi Firebase untuk TemanUsaha
const firebaseConfig = {
  apiKey: "AIzaSyDlNS9iWizCxq6PLu3h8TJCUw0E_F3oOdw",
  authDomain: "temanusaha-64423.firebaseapp.com",
  projectId: "temanusaha-64423",
  storageBucket: "temanusaha-64423.firebasestorage.app",
  messagingSenderId: "571387652594",
  appId: "1:571387652594:web:a0dd6fd9c0e3898f23236b",
  measurementId: "G-HY6KGVEQGM"
};

let db = null;
let auth = null;
let isFirebaseReady = false;

function initFirebase() {
  if (typeof firebase !== 'undefined') {
    try {
      if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
      }
      db = firebase.firestore();
      auth = firebase.auth();

      // Aktifkan Offline Persistence agar tetap bisa dipakai saat internet mati
      db.enablePersistence({ synchronizeTabs: true }).catch((err) => {
        if (err.code === 'failed-precondition') {
          console.warn('Persistence failed: Multiple tabs open');
        } else if (err.code === 'unimplemented') {
          console.warn('Persistence is not supported by browser');
        }
      });

      isFirebaseReady = true;
      console.log('⚡ Firebase TemanUsaha berhasil diinisialisasi!');
    } catch (err) {
      console.error('Gagal inisialisasi Firebase:', err);
    }
  }
}
