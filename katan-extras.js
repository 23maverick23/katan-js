/*! ***************************************************
 *                __
 *               / _)
 *        .-^^^-/ /
 *     __/       /
 *    <__.|_|-|_|   katan-extras
 *                  version : 2.0.0 (Beta)
 *                  author  : Ryan Morrissey
 *                  license : MIT
 *                  website : https://rymo.io/
 *
 * ************************************************** !*/

(function (window, document, undefined) {

    // ******************** //
    //      CONSTANTS       //
    // ******************** //

    var extras,
        dicegame,
        classicgame,

        VERSION = '2.0.0 (Beta)',

        hasOwnProperty = Object.prototype.hasOwnProperty,
        parseInt = window.parseInt,
        parseFloat = window.parseFloat,

        noop = function () {};

    var tokens = {
        settlers : {
            standard : [
                {ord: 'A', val:  5},
                {ord: 'B', val:  2},
                {ord: 'C', val:  6},
                {ord: 'D', val:  3},
                {ord: 'E', val:  8},
                {ord: 'F', val: 10},
                {ord: 'G', val:  9},
                {ord: 'H', val: 12},
                {ord: 'I', val: 11},
                {ord: 'J', val:  4},
                {ord: 'K', val:  8},
                {ord: 'L', val: 10},
                {ord: 'M', val:  9},
                {ord: 'N', val:  4},
                {ord: 'O', val:  5},
                {ord: 'P', val:  6},
                {ord: 'Q', val:  3},
                {ord: 'R', val: 11}
            ],
            expansion : [
                {ord:  'A', val:  2},
                {ord:  'B', val:  5},
                {ord:  'C', val:  4},
                {ord:  'D', val:  6},
                {ord:  'E', val:  3},
                {ord:  'F', val:  9},
                {ord:  'G', val:  8},
                {ord:  'H', val: 11},
                {ord:  'I', val: 11},
                {ord:  'J', val: 10},
                {ord:  'K', val:  6},
                {ord:  'L', val:  3},
                {ord:  'M', val:  8},
                {ord:  'N', val:  4},
                {ord:  'O', val:  8},
                {ord:  'P', val: 10},
                {ord:  'Q', val: 11},
                {ord:  'R', val: 12},
                {ord:  'S', val: 10},
                {ord:  'T', val:  5},
                {ord:  'U', val:  4},
                {ord:  'V', val:  9},
                {ord:  'W', val:  5},
                {ord:  'X', val:  9},
                {ord:  'Y', val: 12},
                {ord: 'Za', val:  3},
                {ord: 'Zb', val:  2},
                {ord: 'Zc', val:  6}
            ]
        }
    };

    function hasOwnProp(a, b) {
        return hasOwnProperty.call(a, b);
    }

    function printMsg(lvl, msg) {
        if (typeof console !== 'undefined'
            && typeof lvl === 'string'
            && typeof msg === 'string') {

            switch (lvl.toLowerCase()) {
                case 'info':
                    console.info('Info: ' + msg);
                    break;
                case 'debug':
                    console.log('Debug: ' + msg);
                    break;
                case 'warn':
                    console.warn('Warning: ' + msg);
                    break;
                case 'error':
                    console.error('Error: ' + msg);
                    break;
                default:
                    console.log('Log: ' + msg);
            }
        }
    }

    // ******************** //
    //     CONSTRUCTORS     //
    // ******************** //

    /**
     * Katan prototype object
     */
    function Extras() {
        var _isAKatanObject = true;
    }

    // ******************** //
    //       HELPERS        //
    // ******************** //

    function extend(a, b) {
        for (var i in b) {
            if (hasOwnProp(b, i)) {
                a[i] = b[i];
            }
        }

        if (hasOwnProp(b, 'toString')) {
            a.toString = b.toString;
        }

        if (hasOwnProp(b, 'valueOf')) {
            a.valueOf = b.valueOf;
        }

        return a;
    }

    // ************************* //
    //    TOP LEVEL FUNCTIONS    //
    // ************************* //

    extras = function () {
        return new Extras();
    };

    // version number
    extras.version = VERSION;

    // expose default colors for customization
    extras.getColors = function() {
        return flatUIColors;
    }

    // ********************* //
    //    KATAN PROTOTYPE    //
    // ********************* //

    extend(extras.fn = Extras.prototype, {

    });

    window.Katan.Extras = extras;

})(window, document);