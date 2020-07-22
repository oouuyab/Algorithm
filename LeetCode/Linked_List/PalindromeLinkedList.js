/*
Palindrome Linked List

Given a singly linked list, determine if it is a palindrome.

Example 1:

Input: 1->2
Output: false
Example 2:

Input: 1->2->2->1
Output: true
Follow up:
Could you do it in O(n) time and O(1) space?
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    let currentNode = head
    
    if(currentNode){
    let arr = [currentNode.val]
    while(currentNode.next !== null){
        currentNode = currentNode.next
        arr.push(currentNode.val)
    }
    for(let i = 0 ; i < arr.length ; i++){
        if(arr[i] !== arr[arr.length-1-i]){
            return false;
            break;
        }
    }
    }
        return true
};