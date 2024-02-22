import Category from '../models/category';
import Prestation from '../models/prestation';

export const CATEGORIES = [
    new Category('c1',
    'Musée',
    'https://unsplash.com/fr/photos/arbres-verts-a-cote-dun-batiment-en-beton-brun-pendant-la-journee-ZlKPWe_uTDo?utm_content=creditShareLink&utm_medium=referral&utm_source=unsplash',
    'visite du Musée'),
    new Category(
        'c2',
        'Parc',
        'https://unsplash.com/fr/photos/arbres-verts-a-cote-dun-batiment-en-beton-brun-pendant-la-journee-ZlKPWe_uTDo?utm_content=creditShareLink&utm_medium=referral&utm_source=unsplash',
        'Prenez une boufée et l/air frais'),
    new Category('c3',
        'Visite',
        'https://unsplash.com/fr/photos/batiments-en-beton-brun-et-blanc-pres-darbres-verts-sous-des-nuages-blancs-pendant-la-journee-a7X5Ut1ArPQ?utm_content=creditShareLink&utm_medium=referral&utm_source=unsplash',
        'Visite de la ville'),
    new Category(
        'c4',
        'Chateau',
        'https://unsplash.com/fr/photos/photo-en-gros-plan-du-chateau-avec-de-la-brume-21DP3hytVHw?utm_content=creditShareLink&utm_medium=referral&utm_source=unsplash',
        'Visite du chateau'),
    //new Category('c5', 'Loisir' , 'Loisir'),
];

export const PRESTATIONS = [
    new Prestation(
        'm1',
        ['c1', 'c2'],
        'Musée des Vignerons',
        13,
        ['Le musée des vignerons est un endroit ou vous pouvez boire du vin et manger des raisins'],
        '1 rue des vignerons',  
        'accessible à toute personne',
        'https://unsplash.com/fr/photos/arbres-verts-a-cote-dun-batiment-en-beton-brun-pendant-la-journee-ZlKPWe_uTDo?utm_content=creditShareLink&utm_medium=referral&utm_source=unsplash',
    ),

    new Prestation(
        'm2',
        ['c2'],
        'Parc des cigognes',
        13,
        ['Le parc des cigognes est un endroit ou vous pouvez voir des cigognes'],
        '1 rue des cigognes',
        'Ouvert du lundi au samedi, de 10h à 20h accessibles à toute personne',
        'https://unsplash.com/fr/photos/arbres-verts-a-cote-dun-batiment-en-beton-brun-pendant-la-journee-ZlKPWe_uTDo?utm_content=creditShareLink&utm_medium=referral&utm_source=unsplash',

    ),
    new Prestation(
        'm3',
        ['c3'],
        'Visite de la ville',
        13,
        ['Le parc des cigognes est un endroit ou vous pouvez voir des cigognes'],
        '1 rue des cigognes',
        'Ouvert du lundi au samedi, de 10h à 20h accessibles à toute personne',
        'https://unsplash.com/fr/photos/route-vide-entre-les-maisons-wtlSHRt9uRc',
    ),
    new Prestation(
        'm4',
        ['c4'],
        'Chateau de la ville',
        13,
        ['Le parc des cigognes est un endroit ou vous pouvez voir des cigognes'],
        '1 rue du chateau , 67000 Strasbourg',
        'Ouvert du lundi au samedi, de 10h à 20h accessibles à toute personne',
        'https://unsplash.com/fr/photos/route-vide-entre-les-maisons-wtlSHRt9uRc',
    ),
];