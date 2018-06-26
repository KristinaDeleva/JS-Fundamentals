function travelsPlans(arr) {
    let specialized = ['Programming', 'Hardware maintenance', 'Cooking', 'Translating', 'Designing'];
    let average = ['Driving', 'Managing', 'Fishing', 'Gardening'];
    let clumsy = ['Singing', 'Accounting', 'Teaching', 'Exam-Making', 'Acting', 'Writing', 'Lecturing', 'Modeling', 'Nursing'];

    let total = 0;
    let specCount = 0;
    let clumsyCount = 0;

    for (const obj of arr) {
        let [type, amount] = obj.split(' : ');
        amount = Number(amount);
        if (specialized.includes(type)&&amount>=200) {
            specCount++;
            total+=amount*0.8;
            if (specCount % 2 === 0) {
                total+=200;
            }
            continue;
        }
        if (average.includes(type)) {
            total+= amount;
            continue;
        }
        if (clumsy.includes(type)) {
            clumsyCount++;
            if (clumsyCount % 2 === 0) {
                amount*=0.95;
            }
            else if (clumsyCount % 3 === 0) {
                amount*=0.9;
            }
            total+=amount;
            continue;

        }

    }
    console.log(`Final sum: ${total.toFixed(2)}`);
    if (total < 1000) {
        console.log(`Mariyka need to earn ${(1000-total).toFixed(2)} gold more to continue in the next task.`);
    }
    else    {
        console.log(`Mariyka earned ${(total-1000).toFixed(2)} gold more.`);
    }
}
travelsPlans(["Programming : 500", "Driving : 243", "Singing : 100", "Cooking : 199"])