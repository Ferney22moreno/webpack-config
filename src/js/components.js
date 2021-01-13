import '../css/components.css';

export const sayHi = (name = '') => {
    console.log('creating an H1 tag');

    const h1 = document.createElement('h1');
    h1.innerText = `Hey!!!, ${name}, how r u?`;

    document.body.append(h1);
}