#!/usr/bin/env node

import axios from 'axios';
import commander from 'commander';

const program = new commander.Command();
program.version('0.0.1').description('Get the current price of Bitcoin in USD');

program.parse(process.argv);

axios
    .get('https://api.coindesk.com/v1/bpi/currentprice.json')
    .then((response) => {
        console.log({output:`Current Bitcoin price: ${response.data.bpi.USD.rate} USD`});
    })
    .catch((error) => {
        console.error(error);
    });