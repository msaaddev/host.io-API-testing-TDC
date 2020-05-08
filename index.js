const axios = require('axios');

const testing = () => {
    const response = axios
        .get('https://host.io/api/full/thedevcouple.com?token=$TOKEN')
        .then(({ data }) => console.log(data))
        .catch((err) => console.log(err));
};

testing();
