class Category {
    constructor(name) {
      this.name = name;
     
    }
  }
  
  class CategoryFactory {
    createCategory(type) {
      switch (type) {
        case "personal":
          return new Category("cleaning");
        case "professional":
          return new Category("programming");
        default:
          throw new Error("Invalid category type");
      }
    }
  }
  
  const factory = new CategoryFactory();
  
  const categoryA = factory.createCategory("personal");
  const categoryB = factory.createCategory("professional");
  
  console.log(categoryA.name); 
  console.log(categoryB.name);