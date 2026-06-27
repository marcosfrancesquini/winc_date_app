'use strict';

const mockData = require('./mockData.js').data;
const userProfile = {};
const prompt = require('prompt-sync')();
const requiredFields = [
   "first_name",
   "last_name",
   "age",
   "gender",
   "gender_preference",
   "location",
   "min_age_interest",
   "max_age_interest"
];

while (!requiredFields.every(field => userProfile[field])) {

   if (!userProfile.first_name) {
      const firstName = prompt("What is your first name? ").trim();

      if (firstName) {
         userProfile.first_name = firstName;
      }
   }

   if (!userProfile.last_name) {
      const lastName = prompt("What is your last name? ").trim();

      if (lastName) {
         userProfile.last_name = lastName;
      }
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


      if (location === "RURAL" || location === "CITY") {
         userProfile.location = location;
      }
   }

   if (!userProfile.min_age_interest) {
      const minAgeInterestInput = prompt("What is your minimal age interest? ");
      const minAgeInterest = Number(minAgeInterestInput);

      if (Number(minAgeInterest) && minAgeInterest > 17) {
         userProfile.min_age_interest = minAgeInterest;
      }
   }

   if (!userProfile.max_age_interest) {
      const maxAgeInterestInput = prompt("What is your maximal age interest? ");
      const maxAgeInterest = Number(maxAgeInterestInput);

      if (Number(maxAgeInterest) && maxAgeInterest > 17 && maxAgeInterest >= userProfile.min_age_interest) {
         userProfile.max_age_interest = maxAgeInterest;
      }
   }

   console.log("==============================================================================================");

   if (userProfile.first_name && userProfile.last_name) {
      console.log(`Your name is: ${userProfile.first_name} ${userProfile.last_name}`);
   } else {
      console.log("First name or last name is missing.");
   }
   console.log("----------------------------------------------------------------------------------------------");

   if (userProfile.age) {
      console.log(`Your age is: ${userProfile.age}`);
   } else {
      console.log("Age must be a number bigger than 17.");
   }
    console.log("----------------------------------------------------------------------------------------------");

   if (userProfile.gender) {
      console.log(`Your gender is: ${userProfile.gender}`);
   } else {
      console.log("Gender must be M for male, F for Female or X for all others.");
   }
   console.log("----------------------------------------------------------------------------------------------");
   if (userProfile.gender_preference) {
      console.log(`Your gender preference is: ${userProfile.gender_preference}`);
   } else {
      console.log("Gender preference must be M for male, F for Female or X for all others.");
   }
   console.log("----------------------------------------------------------------------------------------------");
   if (userProfile.location) {
      console.log(`Your location is: ${userProfile.location}`);
   } else {
      console.log("Location must be RURAL or CITY.");
   }
   console.log("----------------------------------------------------------------------------------------------");
   if (userProfile.min_age_interest) {
      console.log(`Your minimal age interest is: ${userProfile.min_age_interest}`);
   } else {
      console.log("Minimal age interest must be a number bigger than 17.");
   }
   console.log("----------------------------------------------------------------------------------------------");
   if (userProfile.max_age_interest) {
      console.log(`Your maximal age interest is: ${userProfile.max_age_interest}`);
   } else {
      console.log("Maximal age interest must be a number bigger than 17 and bigger than the minimal age interest.");
   }
   console.log("==============================================================================================");
}