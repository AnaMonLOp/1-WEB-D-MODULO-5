const orderList = document.getElementById('orderList');
const addOrderBtn = document.getElementById('addOrderBtn');

let orderId = 1; // Para identificar los pedidos

addOrderBtn.addEventListener('click', () => {
    const order = { id: orderId++, status: 'En Proceso' };
    addOrder(order);
    processOrder(order);
}); 

function addOrder(order) {
    const listItem = document.createElement('li');
    listItem.id = `order-${order.id}`;
    listItem.textContent = `Pedido #${order.id}: ${order.status}`;
    orderList.appendChild(listItem);
}

function updateOrderStatus(order, status) {
    const listItem = document.getElementById(`order-${order.id}`);
    if (listItem) {
        listItem.textContent = `Pedido #${order.id}: ${status}`;
        
        listItem.classList.remove('preparando', 'completado');
        if (status.includes('Preparando')) listItem.classList.add('preparando');
        else if (status.includes('Completado')) listItem.classList.add('completado');

    }
}


function simulatePreparation(time){
    return new Promise(resolve => setTimeout(resolve, time))
}

async function processOrder(order) {
    // TODO: Simular la preparación del pedido usando setTimeout y Promise
    // TODO: Actualizar el estado del pedido a "Completado"
    try{
        await simulatePreparation(1000);
        updateOrderStatus(order, 'Preparando ...');
        await simulatePreparation(4000);
        updateOrderStatus(order, 'Completado');
    }
    
    catch (error){
        console.error('Error al procesar el pedido: ', error);
    }
}