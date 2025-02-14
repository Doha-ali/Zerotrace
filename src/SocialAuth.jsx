// src/SocialAuth.jsx
import React from "react";
import { auth, googleProvider, signInWithPopup } from "./firebase";
import axios from "axios";
import { requestForToken } from "./firebase-messaging";

export const handleGoogleAuth = async (navigate) => {
  try {
    
    const result = await signInWithPopup(auth, googleProvider);
    const user = result.user;

    console.log("User Info:", user);
    const idToken = await user.getIdToken();
    console.log("Google Token:", idToken);

    const fcmToken = await requestForToken();
    

    if (!fcmToken) {
      alert("لم يتمكن المتصفح من الحصول على توكن FCM.");
      return;
    }

    const userData = {
      uid: user.uid,
      full_name: user.displayName,
      email: user.email,
      photo: user.photoURL,
      token: idToken, 
      fcm_token: fcmToken,
    };

    
    const response = await axios.post(
      "https://2a55-102-186-37-80.ngrok-free.app/broject%20login&register/google-login.php",
      userData,
      { headers: { "Content-Type": "application/json" } }
    );
    console.log("API Response:", response.data);

    if (response.data.success) {
      
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("isAuthenticated", "true");

      
      const redirectTo = localStorage.getItem("redirectAfterLogin") || "/";
      localStorage.removeItem("redirectAfterLogin");
      navigate(redirectTo);
    } else {
      alert(response.data.message || "فشل تسجيل الدخول عبر Google");
    }
  } catch (error) {
    console.error("Google Auth Error:", error);
    alert("حدث خطأ أثناء تسجيل الدخول باستخدام Google");
  }
};




