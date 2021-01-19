/* eslint-disable max-classes-per-file */
class Creature {
  constructor(firstName, age, preferences) {
    this.firstName = firstName;
    this.age = age;
    this.preferences = preferences;
  }

  liveHappyLife() {
    console.log(`${this.firstName} is living a happy life`);
  }
}

class Human extends Creature {
  constructor(
    firstName,
    age,
    city,
    relationshipStatus,
    numberOfChildren,
    job,
    preferences,
  ) {
    super(firstName, age, preferences);
    this.city = city;
    this.relationshipStatus = relationshipStatus;
    this.numberOfChildren = numberOfChildren;
    this.job = job;
  }
}

class DomesticAnimal extends Creature {
  constructor(firstName, typeOfAnimal, age, color, job, preferences) {
    super(firstName, age, preferences);
    this.typeOfAnimal = typeOfAnimal;
    this.color = color;
    this.job = job;
  }
}

const Abdulkareem = new Human(
  'Abdulkareem',
  35,
  'Riyadh',
  'married',
  3,
  'a construction worker',
  'eating dates and smoking water pipe',
);
const Adel = new DomesticAnimal(
  'Adel',
  'horse',
  15,
  'brown',
  'helps with transporting materials',
  'eating grass',
);
