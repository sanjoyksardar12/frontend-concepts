const source ="https://www.greatfrontend.com/questions/javascript/event-emitter";

export default class EventEmitter {
  constructor() {
    this.map = new Map()
  }

  /**
   *
   * @param {string} eventName
   * @param {Function} listener
   * @returns {EventEmitter}
   */
  on(eventName, listener) {
    if (!this.map.has(eventName)) {
      this.map.set(eventName, new Array())
    }
    this.map.set(eventName, [...this.map.get(eventName), listener])
    return this;
  }

  /**
   * @param {string} eventName
   * @param {Function} listener
   * @returns {EventEmitter}
   *
   */
  off(eventName, listener) {
    let listeners = this.map.get(eventName);
    if (listeners) {
      const index = listeners.indexOf(listener);
      listeners = [...listeners.slice(0, index), ...listeners.slice(index + 1)];
      this.map.set(eventName, listeners)
    }
    return this;
  }

  /**
   *
   * @param {string} eventName
   * @param  {...any} args
   * @returns {boolean}
   */
  emit(eventName, ...args) {
    if (this.map.has(eventName)) {
      this.map.get(eventName).map(listener => listener(...args))
    }
    return this.map.get(eventName)?.length? true: false;
  }
}
// NOTE: make sure all the test cases are clear before implementing
//specially edge cases: 
// 1. if event listener exist or not 
// 2. does chaining is required
// 3. do we need the status is required or not
