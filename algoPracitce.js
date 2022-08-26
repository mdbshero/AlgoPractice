//leetcode problems
//2. Add Two Number

var addTwoNumbers = function(l1, l2) {
    
    let sum = 0;
    let current = new ListNode(0);
    let result = current;
    
    while(l1 || l2) {
        
        if(l1) {
            sum += l1.val;
            l1 = l1.next;
        }
        
        if(l2) {
            sum += l2.val;
            l2 = l2.next;
        }
        
        current.next = new ListNode(sum % 10);
        current = current.next;
        
        sum = sum > 9 ? 1 : 0;
    }
    
    if(sum) {
        current.next = new ListNode(sum);
    }
    
    return result.next;
};

//69. Square Root

var mySqrt = function(x) {
    let result = 1;
    while (result*result <= x){
        result++
    };
    return result - 1;
};


//1929. Concat arrays
var getConcatenation = function(nums) {
    let x = nums;
    let ans = x.concat(nums);
    return ans;
};

//1920. Build array from permutation
var buildArray = function(nums) {
    return nums.map(a=>nums[a]);
};

//1662. Check if two strings arrays are equivalent
var arrayStringsAreEqual = function(word1, word2) {
    let one = word1.join("");
    let two = word2.join("");
    let ans = one == two ? true : false;
    return ans
};

//283. Move Zeros
var moveZeroes = function(nums) {
    let arrLength = nums.length;
    for (let i = arrLength; i--;5){
        if (nums[i]===0) {
            nums.splice(i,1);
            nums.push(0);
        }
    }
};

//7. Reverse Integer (Contraints to 32 Bit integers)
var reverse = function(x) {
    let rev = parseFloat(x.toString().split("").reverse().join(""))
    let sign = Math.sign(x)
    if (rev > 0x7FFFFFFF) {
        return 0;
    } else {
        return rev * sign;
    }
};