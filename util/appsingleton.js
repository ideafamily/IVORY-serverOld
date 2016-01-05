/*jshint esnext: true */

class AppSingleton {
  constructor() {
    console.error("Do not construct singleton using the constructor!");
    this.sharedInstance = {};
  }

  static getInstance() {
    if(!this.sharedInstance) {
        this.sharedInstance = { };
    }
    return this.sharedInstance;
  }
}
export default AppSingleton;
