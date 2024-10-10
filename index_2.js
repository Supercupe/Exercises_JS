//Write a function that receives the time in 12-hour AM/PM format and 
//returns a string representation of the time in military (24-hour) format.

const time = "07:05:45pm"
const time1 = "12:05:45AM"

function time_convert(time){
    let lower_case_time = time.toLowerCase()
    let army_time = 0
    if (lower_case_time.includes("pm")){
        const x = lower_case_time.split(":")
        let num_1 = parseInt(x[0])+12;
        let num_3 = x[2].replace("pm", "")
        army_time = num_1 +":"+ x[1]+":"+num_3;

    }if (lower_case_time.includes("am")){
        const x = lower_case_time.split(":")
        let num_1 = parseInt(x[0]);
        let num_3 = x[2].replace("am", "")
        if (num_1>=12){
            num_1 = num_1-12;
        }else{
            num_1 = num_1;
        }
        army_time = num_1 +":"+ x[1]+":"+num_3;
    }
    return army_time
}

console.log(time_convert(time))