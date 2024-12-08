class Priority {
    constructor(name) {
      this.name = name;
     
    }
  }
  
  class CategoryFactory {
    createCategory(type) {
      switch (type) {
        case "Low":
          return new Priority("low priority");
        case "Medium":
          return new Priority("medium priority");
        case "High":
           return new Priority("high priority");
        default:
          throw new Error("Invalid Priority type");
      }
    }
  }
  
  const factory = new PriorityFactory();
  
  const priorityA = factory.createPriority("High");
  const priorityB = factory.createPriority("Low");
  
  console.log(priorityA.name); 
  console.log(priorityB.name);