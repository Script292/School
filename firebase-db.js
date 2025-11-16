// Firebase Configuration and Initialization
const firebaseConfig = {
  apiKey: "AIzaSyCZEIFGduxqemeWzVP9thr2PmyI-xWbUNE",
  authDomain: "school-ba050.firebaseapp.com",
  projectId: "school-ba050",
  storageBucket: "school-ba050.firebasestorage.app",
  messagingSenderId: "435913349256",
  appId: "1:435913349256:web:3551421c4264050031e73d",
  measurementId: "G-LJYF4HB7DK",
  databaseURL: "https://school-ba050-default-rtdb.firebaseio.com"
};

// Initialize Firebase (ensure this runs before any database calls)
let app, database;

if (typeof window !== 'undefined' && window.firebase) {
  try {
    app = firebase.initializeApp(firebaseConfig);
    database = firebase.database();
    console.log("✓ Firebase initialized successfully");
  } catch (e) {
    console.warn("Firebase initialization failed, using localStorage only:", e.message);
  }
} else {
  console.warn("Firebase SDK not available, using localStorage only");
}

/**
 * Unified storage wrapper - uses Firebase Realtime Database
 * All localStorage calls should be replaced with these functions
 */
const storageDB = {
  /**
   * Set/Save data to Firebase
   * @param {string} key - Storage key
   * @param {any} value - Value to store (will be converted to JSON if object)
   * @returns {Promise}
   */
  setItem: function(key, value) {
    return new Promise((resolve, reject) => {
      try {
        const data = typeof value === 'string' ? value : JSON.stringify(value);
        database.ref(key).set(data)
          .then(() => resolve())
          .catch(err => reject(err));
      } catch (err) {
        reject(err);
      }
    });
  },

  /**
   * Get data from Firebase
   * @param {string} key - Storage key
   * @returns {Promise<string|null>}
   */
  getItem: function(key) {
    return new Promise((resolve, reject) => {
      database.ref(key).once('value')
        .then(snapshot => {
          const value = snapshot.val();
          resolve(value !== null ? value : null);
        })
        .catch(err => reject(err));
    });
  },

  /**
   * Remove data from Firebase
   * @param {string} key - Storage key
   * @returns {Promise}
   */
  removeItem: function(key) {
    return new Promise((resolve, reject) => {
      database.ref(key).remove()
        .then(() => resolve())
        .catch(err => reject(err));
    });
  },

  /**
   * Clear all data from Firebase (use with caution)
   * @returns {Promise}
   */
  clear: function() {
    return new Promise((resolve, reject) => {
      database.ref().remove()
        .then(() => resolve())
        .catch(err => reject(err));
    });
  },

  /**
   * Sync function for immediate operations (wrapper for compatibility)
   */
  sync: async function() {
    // Firebase is real-time by default, no explicit sync needed
    return Promise.resolve();
  }
};

// Export for use in scripts
window.storageDB = storageDB;
