// code your solution here
function saturdayFun(activity = 'roller-skate'){
    return `This Saturday, I want to ${activity}!`

}
saturdayFun("bathe my dog")

function mondayWork(activity = 'go to the office'){
    return `This Monday, I will ${activity}.`
}
console.log(mondayWork())

function wrapAdjective(alphabet){
    return function adjective(message){
        return `You are ${alphabet}${message}${alphabet}!`
        
    }
}
console.log(wrapAdjective("*"))