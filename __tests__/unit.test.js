// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2

/** isPhone#: 2 pass, 2 fail */
test("Valid phone number 1", function () {
  expect(isPhoneNumber("(123) 456-7890")).toBe(true);
});

test("Valid phone number 2", function () {
  expect(isPhoneNumber("818-458-6748")).toBe(true);
});

test("Valid phone number 3", function () {
  expect(isPhoneNumber("(818) 448 5678")).toBe(true);
});

test("Valid phone number 4", function () {
  expect(isPhoneNumber("(818)4485678")).toBe(true);
});

/** isEmail@: 2pass, 2 fail*/
test("Valid email 1", function() {
  expect(isEmail("mymail@gmail.com")).toBe(true);
});

test("Valid email 2", function() {
  expect(isEmail("mymail@yahoo.787")).toBe(false);
});

test("Valid email 3", function() {
  expect(isEmail("mymail@ucsd.edu")).toBe(false);
});

test("Valid email 4", function() {
  expect(isEmail("mymail@comp.dom.org")).toBe(true);
});

/** isStrongPassword@: 2 true, 2 false */
test("Strong Password", function(){
  expect(isStrongPassword("thisIs_Strong")).toBe(true);
});

test("Password starts with a letter", function(){
  expect(isStrongPassword("goodPass")).toBe(true);
});

test("Password too Long", function(){
  expect(isStrongPassword("very_long_password_longer_than_15_characters")).toBe(true);
});

test("Password does not start with letter", function(){
  expect(isStrongPassword("1*&5!")).toBe(true);
});

/** isDate@: 2 true, 2 false */
test("Valid date", function(){
  expect(isDate("23/8/2004")).toBe(true);
});

test("Valid date", function(){
  expect(isDate("1/1/1960")).toBe(true);
});

test("Invalid date", function(){
  expect(isDate("2025/4/3")).toBe(true);
});

test("Invalid date", function(){
  expect(isDate("2-7-2023")).toBe(true);
});

/** isHexColor@: 2 true, 2 false */
test("Valid Hex Color", function(){
  expect(isHexColor("#123")).toBe(true);
});

test("Valid Hex Color", function(){
  expect(isHexColor("ABC123")).toBe(true);
});

test("Invalid Hex Color", function(){
  expect(isHexColor("12")).toBe(true);
});

test("inValid Hex Color", function(){
  expect(isHexColor("zzzzz")).toBe(true);
});
