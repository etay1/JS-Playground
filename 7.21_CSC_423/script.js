// Put your solution here
function divideArray(nums) {
    let even = [];
    let odd = [];

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] % 2 == 0) {
            even.push(nums[i]);
        } else {
            odd.push(nums[i]);
        }
    }
    if (even.length == 0) {
        even.push("None");
    }
    if (odd.length == 0) {
        odd.push("None");
    }
    
    even.sort((a, b) => a - b);
    odd.sort((a, b) => a - b);

    console.log("Even numbers:");
    for (var i of even) {
        console.log(i);
    }
    console.log("Odd numbers:");
    for (var i of odd) {
        console.log(i);
    }
}