//Write a function that calculates overtime and 
//pay associated with overtime.
    //Working 9 to 5: regular hours
    //After 5pm is overtime

//Your function gets an array with 4 values:
    //Start of working day, in decimal format, (24-hour day notation)
    //End of working day. (Same format)
    //Hourly rate
    //Overtime multiplier

//Your function should spit out:
    //$ + earned that day (rounded to the nearest hundreth)

function main(start, end, hours_rate, overtime_multiplier){
    start = start;
    end = end;
    hours_rate = hours_rate;
    overtime_multiplier = overtime_multiplier;
    let main = (17 - end)
    let money = (end - start)
    let extra = 0

    if (main > 0){
        money = (money*hours_rate)
    }else{
       extra =  ((main*(-1))*hours_rate)*overtime_multiplier
        money = ((money+main)*hours_rate)+extra
    }    
    return "$"+(money.toFixed(2))
    }

console.log(main(8, 18, 20, 1.5))