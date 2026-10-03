// question number 1 
// Product Price Analyzer====================================================================

// function analyzePrice(price){
// if (price <1000){
//     return "Budget Product"
// }
// else if (price<=5000){
//     return "Regular Product"
// }
// else{
//     return "Premium Product"
// }

// }
// const showResult = (ProductPrice)=>{
//     let result= analyzePrice(ProductPrice)
//     console.log(result)

// }
// showResult(3500)


// question number 2 ============================================================================
// bus ticket price calculator 
// let age = prompt("enter your age for checks your ticket price")

// function calculateTicket(age){
//     let ticketPrice = 5000
//     if (age <12) {
//         return ticketPrice - ((50 * 5000) / 100)
//     }
//     else if (age >= 60) {

//         return ticketPrice - ((30 * 5000) / 100);
//     }
//     else {
//         return ticketPrice;
//     }
// }
// console.log(calculateTicket(age))



// question number 3 ===============================================================================
// Example in JavaScript (or Python: ['apple', 'milk', ...])
// const myItems = ['apple', 'milk', 'bread', 'eggs', 'cheese', 'cereal', 'juice', 'chicken', 'rice', 'pasta', 'sauce'];

// function calculateDiscount(item, amount, membership) {

//     let itemCount = item.length; 
//     console.log("Total Items:", itemCount);

//     let totalDiscountPercent = 0;
//     if (amount >= 50000) {
//         totalDiscountPercent = 20; 
//     } else if (amount >= 20000) {
//         totalDiscountPercent = 10; 
//     }

//     // Membership check (Bracket FIX)
//     if (membership === "VIP") {
//         totalDiscountPercent += 5; 
//     } 

//     // Items count check
//     if (itemCount > 10) {
//         totalDiscountPercent += 3;
//     }

//     console.log("Total Discount Percentage Applied:", totalDiscountPercent + "%");

//     // Final calculation
//     let finalAmount = amount - ((amount * totalDiscountPercent) / 100);

//     return finalAmount;
// }

// let result = calculateDiscount(myItems, 70000, "VIP");
// console.log("Final Amount to Pay:", result);


// question number 4 ============================================================
// function checkPassword(password) {
//     let hasUpper = false;
//     let hasLower = false;
//     let hasNumber = false;

//     for (let i = 0; i < password.length; i++) {
//         let char = password[i];

//         if (char >= '0' && char <= '9') {
//             hasNumber = true;
//         }
//         else if (char >= 'A' && char <= 'Z') {
//             hasUpper = true;
//         }
//         else if (char >= 'a' && char <= 'z') {
//             hasLower = true;
//         }
//     }

//     if (password.length >= 8 && hasUpper && hasLower && hasNumber) {
//         return "Strong Password";
//     } else {
//         return "Weak Password";
//     }
// }

// console.log(checkPassword("Secure123"));
// console.log(checkPassword("weakpass123"));
// console.log(checkPassword("Ab1"));

// question number 5==================================================================================
// function processDelivery(weight, distance, value, weather, road, deliveryType, failedAttempts, customerPriority) {
//     let baseCost = 200;
//     let distanceCost = distance * 20;
//     let weightCost = 0;
    
//     if (weight > 5) {
//         weightCost = (weight - 5) * 100;
//     }
    
//     let expressCost = 0;
//     if (deliveryType.toLowerCase() === "express") {
//         expressCost = 500;
//     }
    
//     let totalCost = baseCost + distanceCost + weightCost + expressCost;

//     let riskScore = 0;

//     if (weather.toLowerCase() === "rain") {
//         riskScore += 20;
//     } else if (weather.toLowerCase() === "storm") {
//         riskScore += 40;
//     }

//     if (road.toLowerCase() === "bad") {
//         riskScore += 25;
//     }

//     if (value > 100000) {
//         riskScore += 30;
//     }

//     riskScore += failedAttempts * 10;

//     if (customerPriority.toLowerCase() === "vip") {
//         riskScore -= 15;
//     }

//     if (distance > 100) {
//         riskScore += 20;
//     }

//     let finalDecision = "";
//     if (customerPriority.toLowerCase() === "vip" && value > 100000) {
//         finalDecision = "VIP Priority";
//     } else {
//         if (riskScore <= 30) {
//             finalDecision = "Safe Delivery";
//         } else if (riskScore <= 60) {
//             finalDecision = "Careful Delivery";
//         } else {
//             finalDecision = "High Risk Delivery";
//         }
//     }

//     return {
//         deliveryCost: totalCost,
//         riskScore: riskScore,
//         finalDecision: finalDecision
//     };
// }

// console.log(processDelivery(6, 120, 150000, "rain", "bad", "express", 2, "vip"));

// question number 6==================================================================================

// function generateCinemaBill(customerName, ticketCount, ticketPrice, customerType) {
//     let formattedName = customerName.trim().toUpperCase();

//     let totalCost = 0;
//     for (let i = 0; i < ticketCount; i++) {
//         totalCost += ticketPrice;
//     }

//     const calculateDiscount = (type, count, total) => {
//         let discountPercent = 0;

//         if (type.toLowerCase() === "student") {
//             discountPercent = 15; 
//         } else if (type.toLowerCase() === "vip") {
//             discountPercent = 20; 
//         } else {
//             discountPercent = 5;  
//         }

    
//         if (count > 5) {
//             discountPercent += 5; 
//         }

//         return (total * discountPercent) / 100;
//     };

//     let discountAmount = calculateDiscount(customerType, ticketCount, totalCost);

//     let rawFinalBill = totalCost - discountAmount;


//     let finalPayable = Math.round(rawFinalBill);


//     console.log("--- CINEMA TICKET RECEIPT ---");
//     console.log("Customer Name:      " + formattedName);
//     console.log("Total Tickets:      " + ticketCount);
//     console.log("Base Ticket Cost:   " + totalCost);
//     console.log("Discount Applied:   " + discountAmount);
//     console.log("Final Payable:      " + finalPayable);
//     console.log("-----------------------------");
// }
// generateCinemaBill("   john doe   ", 6, 550.75, "student");
// question number  7 =========================================================================

// function analyzeScore(score) {
//     if (score === 100) {
//         return "Perfect Score";
//     }

//     let scoreStr = score.toString();
//     let digitCount = scoreStr.length;

//     let digitSum = 0;
//     for (let i = 0; i < scoreStr.length; i++) {
//         let char = scoreStr[i];
//         if (char >= '0' && char <= '9') {
//             digitSum += parseInt(char);
//         }
//     }

//     let scoreSquareRoot = Math.sqrt(score);

//     if (score >= 80) {
//         return "Excellent Score";
//     } else if (score >= 50) {
//         return "Good Score";
//     } else {
//         return "Needs Improvement";
//     }
// }

// console.log(analyzeScore(100));
// console.log(analyzeScore(85));
// console.log(analyzeScore(64));
// console.log(analyzeScore(35));

// question number 8==============================================================================
// function checkMobileNumber(number) {
//     let numStr = number.toString();
    
//     if (numStr.length !== 11) {
//         return "Invalid Mobile Number";
//     }

//     if (!numStr.startsWith("03")) {
//         return "Invalid Mobile Number";
//     }

//     for (let i = 0; i < numStr.length; i++) {
//         let char = numStr[i];
//         if (char < '0' || char > '9') {
//             return "Invalid Mobile Number";
//         }
//     }

//     return "Valid Mobile Number";
// }

// console.log(checkMobileNumber("03001234567"));
// console.log(checkMobileNumber("02001234567"));
// console.log(checkMobileNumber("0300123456"));
// console.log(checkMobileNumber("0300123abcd"));

// question number 9===================================================================================

// function checkTemperature(temperature) {
//     let checkCount = 0;

//     for (let i = 0; i < 1; i++) {
//         checkCount++;
//     }

//     if (temperature > 30) {
//         return "Hot";
//     } else if (temperature < 30) {
//         return "Cold";
//     } else {
//         return "Normal";
//     }
// }

// console.log(checkTemperature(35));
// console.log(checkTemperature(18));
// console.log(checkTemperature(30));


// question number 10============================================================================

// function checkSpeed(speed) {
//     let checkCount = 0;

//     for (let i = 0; i < 1; i++) {
//         checkCount++;
//     }

//     if (speed > 60) {
//         return "Over Speeding";
//     } else if (speed < 60) {
//         return "Under Speeding";
//     } else {
//         return "Normal Speed";
//     }
// }

// console.log(checkSpeed(75));
// console.log(checkSpeed(45));
// console.log(checkSpeed(60));

// question number 11==================================================================
// function calculateResult(marks1, marks2, marks3) {
//     let totalMarks = marks1 + marks2 + marks3;
//     let percentage = (totalMarks / 300) * 100;

//     if (percentage >= 80) {
//         return "A Grade";
//     } else if (percentage >= 70) {
//         return "B Grade";
//     } else if (percentage >= 60) {
//         return "C Grade";
//     } else {
//         return "Fail";
//     }
// }

// console.log(calculateResult(85, 90, 78));
// console.log(calculateResult(70, 65, 72));
// console.log(calculateResult(60, 58, 62));
// console.log(calculateResult(40, 50, 35));

// question number 12 =====================================================================
// function calculateGrade(marks) {
//     if (marks >= 80 && marks <= 100) {
//         return "A";
//     } else if (marks >= 70 && marks <= 79) {
//         return "B";
//     } else if (marks >= 60 && marks <= 69) {
//         return "C";
//     } else if (marks >= 50 && marks <= 59) {
//         return "D";
//     } else if (marks >= 0 && marks <= 49) {
//         return "F";
//     } else {
//         return "Invalid Marks";
//     }
// }

// console.log(calculateGrade(85));
// console.log(calculateGrade(72));
// console.log(calculateGrade(65));
// console.log(calculateGrade(58));
// console.log(calculateGrade(40));

// // question number 13 ===========================================================================
// function createSchoolAdmissionSlip(studentName, fatherName, className, admissionDate, monthlyFee) {
//     let cleanName = studentName.trim();
//     let cleanFather = fatherName.trim();
//     let cleanClass = className.trim();
//     let cleanDate = admissionDate.trim();

//     let upperName = cleanName.toUpperCase();
//     let lowerFather = cleanFather.toLowerCase();

//     let part1 = cleanName.charAt(0).toUpperCase();
//     let part2 = cleanName.charAt(1).toLowerCase();
//     let part3 = cleanName.charAt(2).toLowerCase();
//     let initialLetters = part1.concat(part2, part3);
//     let studentID = initialLetters.concat("101");

//     let annualFee = monthlyFee * 12;

//     let line1 = "--- SCHOOL ADMISSION CONFIRMATION SLIP ---\n";
//     let line2 = "Student Name:                                ".concat(upperName, "\n");
//     let line3 = "Father Name:                                 ".concat(lowerFather, "\n");
//     let line4 = "Class Assigned:                              ".concat(cleanClass, "\n");
//     let line5 = "Admission Date:                              ".concat(cleanDate, "\n");
//     let line6 = "Generated Student ID:                        ".concat(studentID, "\n");
//     let line7 = "Monthly Fee structure:                       ".concat(monthlyFee, "\n");
//     let line8 = "Total annual tuition structure balance is:   ".concat(annualFee, "\n");
//     let line9 = "------------------------------------------";

//     let finalSlip = line1.concat(line2, line3, line4, line5, line6, line7, line8, line9);

//     return finalSlip;
// }

// console.log(createSchoolAdmissionSlip("   afsheen kanwal  ", "  imran  ", "Grade 5", "13-nov-2026", 5000));

