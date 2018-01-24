/**
 * Created by mutouji on 2018/1/23.
 */

class Dog {
  constructor(name) {
    this.name = name;
  }

  bark() {
    return `Wah wah, I am ${this.name}`;
  }
}

// module.exports = Dog;
export default Dog;
