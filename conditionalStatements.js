//Conditional Statement - Number Type (Metho 1)
function numberType(value)
{
    if(value>0)
        console.log("The given number is a postive number :"+value)
    else if(value<0)
    console.log("The given number is a negative number :"+value)
    else
        console.log("The given number is a neutral number :"+value)

}
numberType(-1)

//Conditional Statement - Number Type (Method 2)
function numberType1(value1)
{
if(value1>0)
        return "The given number is a postive number"

    else if(value1<0)
    return "The given number is a negative number"

    else
        return "The given number is a neutral number"
}
console.log(numberType1(28))
console.log(numberType1(0))
console.log(numberType1(-15))

//Conditional Statements if-else and switchcase - Launch Browser

function launchBrowser(browserName)
{
    if(browserName=="chrome")
        console.log("The defined browser is :" +browserName)
    else
    console.log("Otherwise")
    }
    launchBrowser("chrome")


    //Conditional Statements if-else and switchcase - Run Test

function runTests(testType){
 switch(testType)
    {
       case "smoke":
            console.log("Test Type :" +testType)
            break
       case "sanity":
            console.log("Test Type :" +testType)
            break
       case "regression":
            console.log("Test Type :" +testType)
            break
       default:
            console.log("Default")
            break
        
    }
}
    runTests("smoke")
