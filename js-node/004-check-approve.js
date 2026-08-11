function isApproved(score){
    if (score >= 7){
        return "Approved";
    }
    else {
        return "Rejected";
    }
}

const result = isApproved(3);
const result2 = isApproved(7);
const result3 = isApproved(10);

console.log(result);
console.log(result2);
console.log(result3);