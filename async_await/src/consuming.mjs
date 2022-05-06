import setText, {appendText, showWaiting, hideWaiting} from './results.mjs';

export function get() {
    axios.get('http://localhost:3000/orders/1').then(({data}) => {
        setText(JSON.stringify(data));
    });
}

export function getCatch() {
    axios.get('http://localhost:3000/orders/1').then((result) => {
        setText(JSON.stringify(result)).catch(err => {
            setText(err)
        });
    });
}

export function chain() {
    axios.get('http://localhost:3000/orders/1').then(({data}) => {
        return axios.get(`http://localhost:3000/addresses/${data.shippingAddress}`).then(({data}) => {
            setText(`${data.street} ${data.city} ${data.state}`);
        });
    });
}

export function chainCatch() {
    axios
        .get('http://localhost:3000/orders/1')
        .then(({data}) => {
            return axios.get(`http://localhost:3000/addresses/${data.shippingAddress}`).then(({data}) => {
                setText(`${data.street} ${data.city} ${data.state}`);
            });
        }).catch(err => setText(err));
}

export function final() {
    // Seems too complicated to try and replicate it.
    // try & catch will be much easier and cleaner.
}