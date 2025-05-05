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