'use strict';

const mockData = require('./mockData.js').data;
const userProfile = {};
const prompt = require('prompt-sync')();
let x = 1;
while (x < 5) {
   x++;
   // const firstName="";
   if (!userProfile.first_name) {
      userProfile.first_name = prompt("What is your first name? ");
   }

   if (!userProfile.last_name) {
      userProfile.last_name = prompt("What is your last name? ");
   }

   if (!userProfile.age) {
      const ageInput = prompt("What is your age? ");
      const age = Number(ageInput);

      if (Number(age) && age > 17) {
         userProfile.age = age;
      }
   }

   if (!userProfile.gender) {
      const gender = prompt("What is your gender? ").trim().toUpperCase();
      if (gender === "M" || gender === "F" || gender === "X") {
         userProfile.gender = gender;
      }
   }

   if (!userProfile.gender_preference) {
      const genderPreference = prompt("What is your gender preference? ").trim().toUpperCase();
      if (genderPreference === "M" || genderPreference === "F" || genderPreference === "X") {
         userProfile.gender_preference = genderPreference;
      }
   }

   if (!userProfile.location) {
      const location = prompt("What is your location? ").trim().toUpperCase();;


      if (location === "RURAL" || !location === "CITY") {
         userProfile.location = location;
      }
   }
   // const min_age_interest = prompt("What is your minimal age interest? ");
   // const max_age_interest = prompt("What is your maximal get interest? ");

   console.log(userProfile);
}

// userProfile.first_name = firstName;
// userProfile.lastName = lastName;
// userProfile.age = age;
// userProfile.gender = gender;
// userProfile.gender_preference = gender_preference;
// userProfile.location = location;
// userProfile.min_age_interest = min_age_interest;
// userProfile.max_age_interest = max_age_interest;


//console.log(userProfile);

// Your code here


