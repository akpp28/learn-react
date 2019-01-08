function fetchOrders(count, start) {
    if (count === undefined) {
        count = 10;
    }

    if (start === undefined) {
        start = 0;
    }
    console.log('1: count', count, 'start', start)
}


// значения по ум. устанавливаются с права на лево
function fetchOrders2(count = 10, start = 0) {
    console.log('2: count', count, 'start', start)
}

fetchOrders();
fetchOrders2();