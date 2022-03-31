function countDown(num) {
    if (num <= 0) {
        console.log('All done!')
        return;
    }
    console.log('Number is: ', num);
    countDown(--num);
}

countDown(5);