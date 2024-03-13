import './styles.css';
import { petList } from './petData';
import { Header } from './header';
import { Footer } from './footer';
import { Card } from './cards';
import { Pet } from './addPet';

new Header('header');
new Footer('footer');
new Pet('.input');
petList.map((item) => new Card('.cards', item));
