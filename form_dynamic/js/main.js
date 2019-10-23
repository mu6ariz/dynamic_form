let form = {
    name: {
        element: 'input',
        type: 'text',
        label: 'label',
        text: 'Name',
    },
    surname: {
        element: 'input',
        type: 'text',
        label: 'label',
        text: 'Surname',
    },
    email: {
        element: 'input',
        type: 'text',
        label: 'label',
        text: 'Email',
    },
    country: {
        element: 'select',
        tip: 'contry',
        type: '',
        label: 'label',
        text: 'Country',
        value: ['Azerbaijan', 'Turkey', 'Germany'],
    },
    carmodels: {
        element: 'select',
        tip: 'cars',
        type: '',
        label: 'label',
        text: 'Loved Car Models',
        value: ['BMW', 'Ferrari', 'Dodge'],
    },
    message: {
        element: 'textarea',
        type: '',
        label: 'label',
        text: 'Your Message',
    },
    submit: {
        element: 'input',
        type: 'submit',
        label: 'label',
        text: '',
    }
}


function elementCreator(element, type) {

    let inpt = document.createElement(element);
    inpt.type = type;
    document.body.appendChild(inpt);
}

function formCreator(object) {
    for (let f in object) {

        let labl = document.createElement(object[f].label);
        labl.innerText = object[f].text;
        document.body.appendChild(labl);


        elementCreator(object[f].element, object[f].type);

        if (object[f].tip == 'contry') {
            for (let i in object[f].value) {

                let option = document.createElement('option');
                option.innerText = object[f].value[i];

                let slct = document.getElementsByTagName('select')[0];

                console.log(slct);
                slct.appendChild(option);

            }
        } else if (object[f].tip == 'cars') {
            for (let k in object[f].value) {

                let option = document.createElement('option');
                option.innerText = object[f].value[k];

                let cars = document.getElementsByTagName('select')[1];
                cars.appendChild(option);
            }
        }
    }
}