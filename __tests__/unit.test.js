// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2

test('phone number 1', () => {
    expect(functions.isPhoneNumber('111-233-2313')).toBe(true);
});

test('phone number 2', () => {
    expect(functions.isPhoneNumber('121-243-9121')).toBe(true);
});


test('phone number with letters', () => {
    expect(functions.isPhoneNumber('111-222-31s1')).toBe(false);
});

test('phone number with no dashes', () => {
    expect(functions.isPhoneNumber('1111213432')).toBe(false);
});

test('email 1', () => {
    expect(functions.isEmail('adaajklf@ajfdkla.com')).toBe(true);
});

test('email 2', () => {
    expect(functions.isEmail('afa0911adasklfa@ajfdkla.edu')).toBe(true);
});

test('email without @', () => {
    expect(functions.isEmail('afa0911adasklfaajfdkla.edu')).toBe(false);
});

test('email without .com', () => {
    expect(functions.isEmail('afa0911adasklfa@ajfdkla')).toBe(false);
});

test('strong password 1', () => {
    expect(functions.isStrongPassword('hello127839')).toBe(true);
});


test('strong password 2', () => {
    expect(functions.isStrongPassword('he_llo127839')).toBe(true);
});

test('strong password without letters', () => {
    expect(functions.isStrongPassword('2132432')).toBe(false);
});

test('strong password with extra symbols', () => {
    expect(functions.isStrongPassword('213243!@$!%#!$2')).toBe(false);
});

test('date 1', () => {
    expect(functions.isDate('1/2/3333')).toBe(true);
});


test('date 2', () => {
    expect(functions.isDate('01/02/3333')).toBe(true);
});

test('date with letters', () => {
    expect(functions.isDate('mm/dd/yyyy')).toBe(false);
});


test('date with 2 digit year', () => {
    expect(functions.isDate('01/02/03')).toBe(false);
});

test('color 1', () => {
    expect(functions.isHexColor('#da3')).toBe(true);
});

test('color 2', () => {
    expect(functions.isHexColor('#da3313')).toBe(true);
});

test('4 digit color', () => {
    expect(functions.isHexColor('#da33')).toBe(false);
});

test('7 digit color', () => {
    expect(functions.isHexColor('#dad3313')).toBe(false);
});