/**
 * This file contains everything you need to generate the CURD sample seed docs.
 */

/** Import main dependences */
import dotenv from 'dotenv';
import PouchDB from 'pouchdb';

// Set config docenv by file.
dotenv.config();

const db = new PouchDB(process.env.POUCHDB_NAME);
db.bulkDocs([
  {
    title: 'Keyboard while owners hand munch',
    resume: 'Sleep nap catto munch salmono, or claws in your leg stinky cat catch eat throw up catch eat.',
    excerpt: 'Good morning sunshine step on your keyboard while you´re gaming and then turn in a circle cough hairball, eat toilet paper, my water bowl is clean and freshly replenished, so i´ll drink from the toilet. I can haz.',
  },
  {
    title: 'Chew iPad power cord eat a plant',
    resume: 'Cat mojo peer out window, chatter at birds, lure them to mouth.',
    excerpt: 'I could pee on this if i had the energy refuse to leave cardboard box but fat baby cat best buddy little guy throwup on your pillow, and hiiiiiiiiii feed me now cat walks in keyboard . Bite off human´s toes i heard this rumor where the humans are our owners, pfft, what do they know?!',
  },
  {
    title: 'Chew iPad power cord stand with legs in litter box',
    resume: 'My left donut is missing, as is my right your pillow is now my pet bed for ask to be pet then attack owners hand munch on tasty moths.',
    excerpt: 'Cat is love, cat is life ask for petting your pillow is now my pet bed for attack the child meow meowing non stop for food stare at owner accusingly then wink. Head nudges.',
  },
]);
