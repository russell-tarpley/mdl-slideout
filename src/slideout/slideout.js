(function() {
    'use strict';

    /**
     * Class constructor for Slideout MDL component.
     * Implements MDL component design pattern defined at:
     * https://github.com/jasonmayes/mdl-component-design-pattern
     *
     * @constructor
     * @param {HTMLElement} element The element that will be upgraded.
     */
    var MaterialSlideout = function MaterialSlideout(element) {
        this.element_ = element;
        // Initialize instance.
        this.init();
    };
    window['MaterialSlideout'] = MaterialSlideout;

    /**
     * Store constants in one place so they can be updated easily.
     *
     * @enum {string | number}
     * @private
     */
    MaterialSlideout.prototype.Constant_ = {};

    /**
     * Store strings for class names defined by this component that are used in
     * JavaScript. This allows us to simply change it in one place should we
     * decide to modify at a later date.
     *
     * @enum {string}
     * @private
     */
    MaterialSlideout.prototype.CssClasses_ = {
        OVERLAY: 'mdl-slideout__overlay',
        TITLE: 'mdl-slideout__title',
        ACTIONS: 'mdl-slideout__actions',
        IS_ACTIVE: 'is-active'
    };

    /**
   * Handle input being entered.
   *
   * @param {Event} event The event that fired.
   * @private
   */
    MaterialSlideout.prototype.onKeyDown_ = function (event) {

    };

    // Public methods.

    /**
     * Show the slideout (Make Active)
     *
     * @public
     */
    MaterialSlideout.prototype.show = function () {
        this.element_.classList.add(this.CssClasses_.IS_ACTIVE);
        this.overlay_.classList.add(this.CssClasses_.IS_ACTIVE);
    };
    MaterialSlideout.prototype['show'] = MaterialSlideout.prototype.show;

    /**
     * Hide the slideout (Remove Active)
     *
     * @public
     */
    MaterialSlideout.prototype.hide = function () {
        this.element_.className = this.element_.className.replace(this.CssClasses_.IS_ACTIVE,'');
        this.overlay_.className = this.overlay_.className.replace(this.CssClasses_.IS_ACTIVE,'');
    };
    MaterialSlideout.prototype['hide'] = MaterialSlideout.prototype.hide;

    /**
    * Initialize element.
    */
    MaterialSlideout.prototype.init = function () {

        if (this.element_) {
            this.overlay_ = this.element_.nextElementSibling;
            this.title_ = this.element_.querySelector('.' + this.CssClasses_.TITLE);
            this.actions_ = this.element_.querySelector('.' + this.CssClasses_.ACTIONS);
        }
    };

    // The component registers itself. It can assume componentHandler is available
    // in the global scope.
    componentHandler.register({
        constructor: MaterialSlideout,
        classAsString: 'MaterialSlideout',
        cssClass: 'mdl-js-slideout',
        widget: true
    });
})();