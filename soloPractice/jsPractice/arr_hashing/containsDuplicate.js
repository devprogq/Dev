const containsDuplicate = function(nums) {
    // given an integer array nums, return true if any value appears at least twice in the array and return false if every element is distinct

    const numSet = new Set(nums); // create a new set with the props of the nums inserted
    const isEqual = numSet.size == nums.lenght; // create a variable that makes the size of the new set equal to the lenght of the nums

    return !isEqual; // return the opposite of the lenght, so we can check if the nums are repited along the size of the set.

}