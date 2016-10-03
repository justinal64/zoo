"use strict";
/*
http://a-z-animals.com/reference/animal-classification/
Example 1 - Tiger
Kingdom: Animalia (Animal)
Phylum: Chordata (Vertebrate)
Class: Mammalia (Mammal)
Order: Carnivora (Carnivore)
Family: Felidae (Cat)
Genus: Panthera
Species: Panthera tigris (Tiger)
*/
// Output div
var $output = $('#output');

function Kingdom() {
    this.kingdom = "Animal";
}

function Phylum() {
    this.phylum = "Vertebrate";
}
Phylum.prototype = new Kingdom();

function Animal () {
    this.animal = null;  // tiger
}
Animal.prototype = new Phylum();

function Tenodera () {
  this.genusName = null; // cat
}
Tenodera.prototype = new Animal();

function TenoderaSinensis () {
  this.speciesName = null; // Panthera Tigris
}
TenoderaSinensis.prototype = new Tenodera();

// Create a new instance of TenoderaSinensis
var tiger = new TenoderaSinensis();
tiger.animal = "tiger";
tiger.genusName = "cat";
tiger.speciesName = "Panthera Tigris";

var orangutan = new TenoderaSinensis();
orangutan.animal = "Orangutan";
orangutan.genusName = "Pongo";
orangutan.speciesName = "Pongo pygmaeus";

// Output the name, genus name, and species name for your TenoderaSinensis
// var outputHTML = `<div>The animal is a <u>${tiger.animal}</u> his genus is <u>${tiger.genusName}</u> and his species name is <u>${tiger.speciesName}</u>.</div>`;
var outputHTML = `<div>The <u>${orangutan.kingdom}</u> is a <u>${orangutan.animal}</u> his genus is <u>${orangutan.genusName}</u> and his species name is <u>${orangutan.speciesName}</u>.</div>`;
outputHTML += `<div>The <u>${tiger.kingdom}</u> is a <u>${tiger.animal}</u> his genus is <u>${tiger.genusName}</u> and his species name is <u>${tiger.speciesName}</u>.</div>`;
$output.html(outputHTML);



