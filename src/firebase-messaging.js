import { initializeApp } from "firebase/app";
import { getMessaging, getToken, onMessage } from "firebase/messaging";

// إعدادات Firebase
const firebaseConfig = {
    apiKey: "AIzaSyAe6nwQNonYHY33kswrwcQmsmgHXdZNoZU",
    authDomain: "zero-trace-21aab.firebaseapp.com",
    projectId: "zero-trace-21aab",
    storageBucket: "zero-trace-21aab.firebasestorage.app",
    messagingSenderId: "667314907800",
    appId: "1:667314907800:web:d4ac9d2455d3591da2beed",
    measurementId: "G-1SY9K501E0"
};

// تهيئة Firebase
const app = initializeApp(firebaseConfig);
const messaging = getMessaging(app);

// طلب إذن الإشعارات
export const requestNotificationPermission = async () => {
  try {
    const permission = await Notification.requestPermission();

    if (permission === "granted") {
      console.log("Notification permission granted.");
      return true;
    } else {
      console.log("Notification permission denied.");
      return false;
    }
  } catch (error) {
    console.error("Error while requesting notification permission:", error);
    return false;
  }
};

// طلب الحصول على FCM Token
export const requestForToken = async () => {
  const permissionGranted = await requestNotificationPermission();

  if (!permissionGranted) {
    console.log("No permission to display notifications.");
    return null;
  }

  try {
    const currentToken = await getToken(messaging, {
      vapidKey: "BHUpHjZDddT2IkIKEt2eMs28yRYj-JNbRpDJw0Jt5UTpHdc5e1nBfU_z9E_aBPDiYLeSsC1Ph-Q8wLx8mf2wyHY", // احصل على الـ VAPID Key من Firebase Console
    });

    if (currentToken) {
      console.log("FCM Token:", currentToken);
      return currentToken;  // هذا هو الـ FCM Token
    } else {
      console.log("No registration token available.");
      return null;
    }
  } catch (error) {
    console.log("An error occurred while retrieving token.", error);
    return null;
  }
};

// للاستماع إلى الرسائل الواردة أثناء فتح التطبيق
export const onMessageListener = () =>
  new Promise((resolve) => {
    onMessage(messaging, (payload) => {
      console.log("Message received. ", payload);
      resolve(payload);
    });
  });

