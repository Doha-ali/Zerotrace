/* eslint-disable no-undef */
// eslint-disable-next-line no-undef
importScripts('https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js');
importScripts('https://www.gstatic.com/Myfirebasejs/9.6.1/firebase-messaging.js');

// تهيئة Firebase باستخدام إعداداتك
const firebaseConfig = {
  apiKey: "AIzaSyAe6nwQNonYHY33kswrwcQmsmgHXdZNoZU",
  authDomain: "zero-trace-21aab.firebaseapp.com",
  projectId: "zero-trace-21aab",
  storageBucket: "zero-trace-21aab.firebasestorage.app",
  messagingSenderId: "667314907800",
  appId: "1:667314907800:web:d4ac9d2455d3591da2beed",
  measurementId: "G-1SY9K501E0"
};

firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

// لتحديد كيفية معالجة الرسائل الواردة عند إغلاق التطبيق أو في الخلفية
messaging.onBackgroundMessage(function (payload) {
  console.log("Received background message ", payload);
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: payload.notification.icon
  };

  // eslint-disable-next-line no-restricted-globals
  self.registration.showNotification(notificationTitle, notificationOptions);
});
