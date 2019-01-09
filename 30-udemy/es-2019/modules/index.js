// doesn't work without babel

import {PI, divide as div} from './mymath';
import * as calc from './mymath';
import Graph from './mymath'; // default export

import Graph, {PI, divide} from './mymath'; // mixed import

import './sideeffect' // выполняем сайд еффект
import './main.css' // подключаем стили

console.log('pi', PI);