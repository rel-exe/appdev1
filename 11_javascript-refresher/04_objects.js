let aboutMe = {
  name: "Russel",
  age: 20,
  course: "BSIS",
  introduce: function() {
    console.log(`Hi, my name is ${this.name} and I am ${this.age} years old.`);
  }
};

aboutMe.hobby = "Writing";
aboutMe.introduce();