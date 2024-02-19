import Category from '../models/category';
import Prestations from '../models/prestations';

export const CATEGORIES = [
    new Category('c1', 'Musée'),
    new Category('c2', 'Parc'),
    new Category('c3', 'Visite'),
    new Category('c4', 'Chateau'),
    new Category('c5', 'Loisir'),
];

export const PRESTATIONS = [
    new Prestations(
        'm1',
        ['c1', 'c2'],
        'Musée des Vignerons',
        13,
        ['Le musée des vignerons est un endroit ou vous pouvez boire du vin et manger des raisins'],
        '1 rue des vignerons',  
        'accessible à toute personne',
        'https://unsplash.com/fr/photos/arbres-verts-a-cote-dun-batiment-en-beton-brun-pendant-la-journee-ZlKPWe_uTDo?utm_content=creditShareLink&utm_medium=referral&utm_source=unsplash',
    ),

    new Prestations(
        'm2',
        ['c2'],
        'Parc des cigognes',
        13,
        ['Le parc des cigognes est un endroit ou vous pouvez voir des cigognes'],
        '1 rue des cigognes',
        'Ouvert du lundi au samedi, de 10h à 20h accessibles à toute personne',
        'https://unsplash.com/fr/photos/arbres-verts-a-cote-dun-batiment-en-beton-brun-pendant-la-journee-ZlKPWe_uTDo?utm_content=creditShareLink&utm_medium=referral&utm_source=unsplash',

    ),
    new Prestations(
        'm3',
        ['c3'],
        'Visite de la ville',
        13,
        ['Le parc des cigognes est un endroit ou vous pouvez voir des cigognes'],
        '1 rue des cigognes',
        'Ouvert du lundi au samedi, de 10h à 20h accessibles à toute personne',
        'https://unsplash.com/fr/photos/route-vide-entre-les-maisons-wtlSHRt9uRc',
    ),
    new Prestations(
        'm4',
        ['c4'],
        'Chateau de la ville',
        13,
        ['Le parc des cigognes est un endroit ou vous pouvez voir des cigognes'],
        '1 rue du chateau , 67000 Strasbourg',
        'Ouvert du lundi au samedi, de 10h à 20h accessibles à toute personne',
        'https://unsplash.com/fr/photos/route-vide-entre-les-maisons-wtlSHRt9uRc',
    )
];
