import { getStore } from './createStore.js';

export default (mapStateToProps, mapDispatchToProps) => (UnconnectedComponent) =>
  class extends UnconnectedComponent {
    static get properties() {
      // Declare all properties previously defined in 'mapStateToProps'
      const componentStore = mapStateToProps(getStore().getState());
      return Object.entries(componentStore).reduce((accumulator, [key]) => {
        return { ...accumulator, [key]: {} };
      }, {});
    }

    constructor() {
      super();

      // Initialize previously defined variables in the component
      const componentStore = mapStateToProps(getStore().getState());
      Object.entries(componentStore).forEach(([key, value]) => {
        this[key] = value;
      });

      // Inject previously defined actions in the component

      // If 'mapDispatchToProps' is a function we will retrieve all the functions
      // calling it and passing the 'dispatch' function as the only argument
      if (typeof mapDispatchToProps === 'function') {
        const mapDispatchToPropsObject = mapDispatchToProps(getStore().dispatch);
        Object.entries(mapDispatchToPropsObject).forEach(([key, value]) => {
          this[key] = function(...args) {
            value(args);
          };
        });
      } else {
        Object.entries(mapDispatchToProps).forEach(([key, value]) => {
          // Check if the value is a HOF or a normal function
          this[key] =
            typeof value() === 'function'
              ? function(...args) {
                  value(args)(getStore().dispatch);
                }
              : function(...args) {
                  getStore().dispatch(value(args));
                };
        });
      }
    }

    connectedCallback() {
      if (super.connectedCallback) {
        super.connectedCallback();
      }

      // Subscribe to the store to listen changes and fires first 'stateChanged'
      this._storeUnsubscribe = getStore().subscribe(() => this.stateChanged());
      this.stateChanged();
    }

    disconnectedCallback() {
      // Unsubscribe from the store
      this._storeUnsubscribe();

      if (super.disconnectedCallback) {
        super.disconnectedCallback();
      }
    }

    // Update properties when store is updated
    stateChanged() {
      const componentStore = mapStateToProps(getStore().getState());
      Object.entries(componentStore).forEach(([key, value]) => {
        this[key] = value;
      });
    }
  };
