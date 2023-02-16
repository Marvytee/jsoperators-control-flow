// Question 3

function subject(group) {
    if (group === "science"){
        console.log("Your subjects are English, Mathematics, Physics, Chemistry, Biology, and Technical Drawing.");
    } else if(group === "social science") {
        console.log("Your subjects are English, Mathematics, Accounting, Commerce, Marketing, and Geography.");
    } else if(group === "arts") {
        console.log("Your subjects are English, Mathematics, Government, Economics, Literature, and History.");
    } else {
        console.log("Your subjects are English and Mathematics");
    };
};
subject("arts");

// Question 5

function nearestPower(num) {
    for (let i = 1; i <= num; i++) {
        let pwr = Math.pow (2, i);
        if (num < pwr) {
            console.log("The number " + pwr + " is the power of 2 nearest to " + num);
            break;
        }
    };
};
nearestPower(50);





