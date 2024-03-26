import inquirer from "inquirer";

let myBalance = 10000;    // Dollars
let myPin = 1234;

let pinAnswer = await inquirer.prompt([
    {
        name: 'pin',
        message: 'Enter your pin',
        type: 'number'
    }
]);

// console.log(pinAnswer);

// 12345 == 1234 - false 

if (pinAnswer.pin === myPin) {
    console.log('Correct pin code!!!');

    let operationAns = await inquirer.prompt([
        {
            name: 'operation',
            message: 'please check balance',
            type: 'list',
            choices: ['withdraw','check balance']
        }
    ]);

    // console.log(pinAnswer);

    if (operationAns.operation === 'withdraw') {
        let amountAns = await inquirer.prompt([
            {
                name: 'amount',
                message: 'enter your amount',
                type: 'number'
            }
        ]);

        if (amountAns.amount > myBalance) {
            console.log(`Insuffient amount`);
        }
        else {

            // console.log(amountAns.amount);
            myBalance -= amountAns.amount;

            // console.log('Your remaining balance is: ' + myBalance);

            // template literals
            console.log(`Your remaining balance is: ${myBalance}`);
        }
    }
    else if (operationAns.operation === 'check balance') {
        // console.log('Your balance is: ' + myBalance);

        // template literals
        console.log(`Your balance is ${myBalance}`);
    }
}
else
{
    console.log('Incorrect pin number');
}