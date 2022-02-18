# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install hsingh01/lotide`

**Require it:**

`const _ = require('@username/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head(array)`: Returns first item of the array
* `tail(array)`: Returns a new array without the first element of passed array
* `middle(array)`: Returns middle element/element's of an array
* `eqArrays(array1, array2)`: Compare two arrays to be equal or not 
* `assertArraysEqual(array1, array2)`: Print message if arrays are equal or not
* `assertEqual(actual, expected)`: Compares two primitive values to be equal or not
* `eqObjects(object1, object2)`: Compares two objects to be equal or not 
* `assertObjectsEqual(actual, expected)`: Prints a message in console if two objects are euql or not
* `countLetters(input)`: Takes in a sentence and returns a count of each of the letters in the sentence 
* `countOnly(allItems, itemsToCount)`: Takes in a collection of items and returns a specific subset of those items
* `findKey(object, callback)`: Takes in an object and callback and returns the first key that meets the criteria specified in callback
* `findKeyByValue(inputObject, inputString)`: Takes in an object and a value and returns the first key that corresponds to that value
* `flatten(array)`: Takes in an array that contains elements including nested array of elements and returns a flattened version of the array
* `lettterPositions(input)`: Takes in a string and returns all indices of letter positions in the string
* `map(array, callback)`: Takes in an array and a callback and returns a new array based on the results of the callback on each item in the array
* `takeUntil(array, callback)`: Returns slice of the array with elements taken from the beginning until returns a truthy value
* `without(source, itemsToremove)`: Takes in a source array and an itemsToRemove arrays and returns only the items from the source array that are not in the itemsToRemove array
