katan-js docs
=============

### Table of Contents

- [Katan](#katan)
    + [Katan(_id_, _width_, _height_)](#katanidwidthheight)
    + [Katan().getId()](#katangetid)
    + [Katan().getCanvas()](#katangetcanvas)
- [Katan.HexTile](#katanhextile)
    + [Katan.HexTile(_canvas_, _options_)](#katanhextilecanvasoptions)
    + [Katan.HexTile().getOptions()](#katanhextilegetoptions)
- [Katan.Road](#katanroad)
    + [Katan.Road(_canvas_, _options_)](#katanroadcanvasoptions)
    + [Katan.Road().getOptions()](#katanroadgetoptions)
- [Katan.Knight](#katanknight)
    + [Katan.Knight(_canvas_, _options_)](#katanknightcanvasoptions)
    + [Katan.Knight().getOptions()](#katanknightgetoptions)
- [Katan.Settlement](#katansettlement)
    + [Katan.Settlement(_canvas_, _options_)](#katansettlementcanvasoptions)
    + [Katan.Settlement().getOptions()](#katansettlementgetoptions)
- [Katan.City](#katancity)
    + [Katan.City(_canvas_, _options_)](#katancitycanvasoptions)
    + [Katan.City().getOptions()](#katancitygetoptions)
- [Utility Functions](#utility-functions)
    + [Katan.version](#katanversion)
    + [Katan.getColors()](#katangetcolors)
    + [Katan.isKatan()](#kataniskatanobj)

---

Katan
-----

### Katan(_id_, _width_, _height_)

| Parameter | Type     | Description                                     |
| --------- | -------- | ----------------------------------------------- |
| _id_      | {String} | DOM element #id that will become the SVG canvas |
| _width_   | {Number} | width of the SVG canvas                         |
| _height_  | {Number} | height of the SVG canvas                        |

```javascript
var k = new Katan('canvas-id', 300, 400);
```

#### Katan().getId()

| Returns  | Description                              |
| -------- | ---------------------------------------- |
| {String} | Returns the _id_ of the **Katan** object |

```javascript
k.getId();
// "canvas-id"
```

#### Katan().getCanvas()

| Returns  | Description                                                                                           |
| -------- | ----------------------------------------------------------------------------------------------------- |
| {Object} | Returns a Raphael.js _Paper_ object, which is used as the canvas for creating other **Katan** objects |

```javascript
var c = k.getCanvas();
```

> Documentation for Raphaël can be found at [http://raphaeljs.com/reference.html](http://raphaeljs.com/reference.html)

[↩ Back to top](#table-of-contents)

Katan.HexTile
-------------

### Katan.HexTile(_canvas_, _options_)

| Parameter | Type     | Description                                                             |
| --------- | -------- | ----------------------------------------------------------------------- |
| _canvas_  | {Object} | A Raphael _Paper_ object (see [Katan().getCanvas()](#katangetcanvas))   |
| _options_ | {Object} | [Optional] A configuration object to override default object properties |

```javascript
var hextile = new Katan.HexTile(c, {cx: 90, cy: 52});
```

### Katan.HexTile().getOptions()

| Returns  | Description                                                                       |
| -------- | --------------------------------------------------------------------------------- |
| {Object} | Returns an options object containing all the options currently set for the object |

```javascript
var hextile = new Katan.HexTile(c);
var options = hextile.getOptions();
```

The default options are as follows:

```javascript
var defaults = {
    cx                     : 0,         // absolute x-axis transform
    cy                     : 0,         // absolute y-axis transform
    fill                   : "#2980B9", // hextile fill color; default is belizehole
    stroke                 : "none",    // hextile stroke color
    strokeWidth            : 0,         // hextile stroke width

    innerCircle            : false,     // boolean for displaying inner circle element
    innerCircleText        : "",        // inner circle text or resource; valid resources are
                                        // brick, desert, grain, lumber, ore, wool;
                                        // you can also pass an integer number to show roll with pips
    innerCircleFill        : "#ECF0F1", // inner circle fill color; default is clouds
    innerCircleStroke      : "none",    // inner circle stroke color
    innerCircleStrokeWidth : 0,         // inner circle stroke width
    textFill               : "#2980B9", // inner circle text color; default is belizehole
    fontSize               : 18,        // inner circle font size
    fontWeight             : 400,       // inner circle font weight

    state                  : false,     // boolean for enabling inner circle clickable state
    stateCursor            : "pointer", // inner circle cursor on hover
    stateFill              : "#9B59B6", // inner circle fill color when state is true; default is amethyst
    stateStroke            : "#ECF0F1", // inner circle stroke color when state is true; default is clouds
    stateStrokeWidth       : 2,         // inner circle stroke color when state is true
    stateTextFill          : "#ECF0F1", // inner circle text color when state is true; default is clouds
    stateFontSize          : 18,        // inner circle font size when state is true
    stateFontWeight        : 400,       // inner circle font weight when state is true

    scale                  : [],        // hextile scale array
    rotate                 : [],        // hextile rotate array

    // only override this if you know what you're doing!
    // this takes a Raphael Paper.path() string
    // http://raphaeljs.com/reference.html#Paper.path
    _coords                : "M0,52 L30,0 L90,0 L120,52 L90,104 L30,104z"
};
```

[↩ Back to top](#table-of-contents)

Katan.Road
----------

### Katan.Road(_canvas_, _options_)

| Parameter | Type     | Description                                                             |
| --------- | -------- | ----------------------------------------------------------------------- |
| _canvas_  | {Object} | A Raphael _Paper_ object (see [Katan().getCanvas()](#katangetcanvas))   |
| _options_ | {Object} | [Optional] A configuration object to override default object properties |

```javascript
var road = new Katan.Road(c, {
    cx: 45,
    cy: 35,
    state: true,
    rotate: [300]
});
```

### Katan.Road().getOptions()

| Returns  | Description                                                                       |
| -------- | --------------------------------------------------------------------------------- |
| {Object} | Returns an options object containing all the options currently set for the object |

The default options are as follows:

```javascript
var defaults = {
    cx                     : 0,         // absolute x-axis transform
    cy                     : 0,         // absolute y-axis transform
    w                      : 28,        // width of the road
    h                      : 14,        // height of the road
    fill                   : "#ECF0F1", // road fill color; default is clouds
    stroke                 : "#2C3E50", // road stroke color; default is midnightblue
    strokeWidth            : 2,         // road stroke width

    text                   : '1',       // road text value
    textFill               : "#2C3E50", // road text color; default is midnightblue
    fontSize               : 12,        // road font size
    fontWeight             : 700,       // road font weight

    state                  : false,     // boolean for enabling inner circle clickable state
    stateCursor            : "pointer", // inner circle cursor on hover
    stateFill              : "#9B59B6", // inner circle fill color when state is true; default is amethyst
    stateStroke            : "#ECF0F1", // inner circle stroke color when state is true; default is clouds
    stateStrokeWidth       : 2,         // inner circle stroke color when state is true
    stateTextFill          : "#ECF0F1", // inner circle text color when state is true; default is clouds
    stateFontSize          : 12,        // inner circle font size when state is true
    stateFontWeight        : 700,       // inner circle font weight when state is true

    scale                  : [],        // road scale array
    rotate                 : []         // road rotate array
};
```

[↩ Back to top](#table-of-contents)

Katan.Knight
------------

### Katan.Knight(_canvas_, _options_)

| Parameter | Type     | Description                                                             |
| --------- | -------- | ----------------------------------------------------------------------- |
| _canvas_  | {Object} | A Raphael _Paper_ object (see [Katan().getCanvas()](#katangetcanvas))   |
| _options_ | {Object} | [Optional] A configuration object to override default object properties |

```javascript
var knight = new Katan.Knight(c, {
    cx: 33,
    cy: 65,
    text: '1'
});
```

### Katan.Knight().getOptions()

| Returns  | Description                                                                       |
| -------- | --------------------------------------------------------------------------------- |
| {Object} | Returns an options object containing all the options currently set for the object |

The default options are as follows:

```javascript
var defaults = {
    cx                     : 0,         // absolute x-axis transform
    cy                     : 0,         // absolute y-axis transform
    fill                   : "#ECF0F1", // knight fill color; default is clouds
    stroke                 : "#2C3E50", // knight stroke color; default is midnightblue
    strokeWidth            : 2,         // knight stroke width

    text                   : '1',       // knight text value
    textFill               : "#2C3E50", // knight text color; default is midnightblue
    fontSize               : 12,        // knight font size
    fontWeight             : 700,       // knight font weight

    state                  : false,     // boolean for enabling inner circle clickable state
    stateCursor            : "pointer", // inner circle cursor on hover
    stateFill              : "#9B59B6", // inner circle fill color when state is true; default is amethyst
    stateStroke            : "#ECF0F1", // inner circle stroke color when state is true; default is clouds
    stateStrokeWidth       : 2,         // inner circle stroke color when state is true
    stateTextFill          : "#ECF0F1", // inner circle text color when state is true; default is clouds
    stateFontSize          : 12,        // inner circle font size when state is true
    stateFontWeight        : 700,       // inner circle font weight when state is true

    scale                  : [],        // knight scale array
    rotate                 : []         // knight rotate array
};
```

[↩ Back to top](#table-of-contents)

Katan.Settlement
----------------

### Katan.Settlement(_canvas_, _options_)

| Parameter | Type     | Description                                                             |
| --------- | -------- | ----------------------------------------------------------------------- |
| _canvas_  | {Object} | A Raphael _Paper_ object (see [Katan().getCanvas()](#katangetcanvas))   |
| _options_ | {Object} | [Optional] A configuration object to override default object properties |

```javascript
var settlement = new Katan.Settlement(c, {
    cx: 114,
    cy: 90,
    text: '3'
});
```

### Katan.Settlement().getOptions()

| Returns  | Description                                                                       |
| -------- | --------------------------------------------------------------------------------- |
| {Object} | Returns an options object containing all the options currently set for the object |

The default options are as follows:

```javascript
var defaults = {
    cx                     : 0,         // absolute x-axis transform
    cy                     : 0,         // absolute y-axis transform
    fill                   : "#ECF0F1", // settlement fill color; default is clouds
    stroke                 : "#2C3E50", // settlement stroke color; default is midnightblue
    strokeWidth            : 2,         // settlement stroke width

    text                   : '',       // settlement text value
    textFill               : "#2C3E50", // settlement text color; default is midnightblue
    fontSize               : 12,        // settlement font size
    fontWeight             : 700,       // settlement font weight

    state                  : false,     // boolean for enabling inner circle clickable state
    stateCursor            : "pointer", // inner circle cursor on hover
    stateFill              : "#9B59B6", // inner circle fill color when state is true; default is amethyst
    stateStroke            : "#ECF0F1", // inner circle stroke color when state is true; default is clouds
    stateStrokeWidth       : 2,         // inner circle stroke color when state is true
    stateTextFill          : "#ECF0F1", // inner circle text color when state is true; default is clouds
    stateFontSize          : 12,        // inner circle font size when state is true
    stateFontWeight        : 700,       // inner circle font weight when state is true

    scale                  : [],        // settlement scale array
    rotate                 : [],        // settlement rotate array

    // only override this if you know what you're doing!
    // this takes a Raphael Paper.path() string
    // http://raphaeljs.com/reference.html#Paper.path
    _coords                : "M0,8 L8,0 L16,8 L16,21 L0,21z"
};
```

[↩ Back to top](#table-of-contents)

Katan.City
----------

### Katan.City(_canvas_, _options_)

| Parameter | Type     | Description                                                             |
| --------- | -------- | ----------------------------------------------------------------------- |
| _canvas_  | {Object} | A Raphael _Paper_ object (see [Katan().getCanvas()](#katangetcanvas))   |
| _options_ | {Object} | [Optional] A configuration object to override default object properties |

```javascript
var c1 = new Katan.City(c, {
    cx: 15,
    cy: 141,
    text: '7'
});
```

### Katan.City().getOptions()

| Returns  | Description                                                                       |
| -------- | --------------------------------------------------------------------------------- |
| {Object} | Returns an options object containing all the options currently set for the object |

The default options are as follows:

```javascript
var defaults = {
    cx                     : 0,         // absolute x-axis transform
    cy                     : 0,         // absolute y-axis transform
    fill                   : "#ECF0F1", // settlement fill color; default is clouds
    stroke                 : "#2C3E50", // settlement stroke color; default is midnightblue
    strokeWidth            : 2,         // settlement stroke width

    text                   : '',       // settlement text value
    textFill               : "#2C3E50", // settlement text color; default is midnightblue
    fontSize               : 12,        // settlement font size
    fontWeight             : 700,       // settlement font weight

    state                  : false,     // boolean for enabling inner circle clickable state
    stateCursor            : "pointer", // inner circle cursor on hover
    stateFill              : "#9B59B6", // inner circle fill color when state is true; default is amethyst
    stateStroke            : "#ECF0F1", // inner circle stroke color when state is true; default is clouds
    stateStrokeWidth       : 2,         // inner circle stroke color when state is true
    stateTextFill          : "#ECF0F1", // inner circle text color when state is true; default is clouds
    stateFontSize          : 12,        // inner circle font size when state is true
    stateFontWeight        : 700,       // inner circle font weight when state is true

    scale                  : [],        // settlement scale array
    rotate                 : [],        // settlement rotate array

    // only override this if you know what you're doing!
    // this takes a Raphael Paper.path() string
    // http://raphaeljs.com/reference.html#Paper.path
    _coords                : "M0,8 L8,8 L16,0 L24,8 L24,21 L0,21z"
};
```

[↩ Back to top](#table-of-contents)

Utility Functions
-----------------

### Katan.version

| Returns  | Description                                             |
| -------- | ------------------------------------------------------- |
| {String} | Returns the current version of the **katan-js** library |

```javascript
katan.version;
// "1.0.0"
```

### Katan.getColors()

| Returns  | Description                                                                                    |
| -------- | ---------------------------------------------------------------------------------------------- |
| {Object} | Returns an object with all the default color `key: value` pairs |

```javascript
var colors = Katan.getColors();
colors.amethyst;
// "#9B59B6"

```

| Color.Key    | Hexcode |
| ------------ | ------- |
| turquoise    | #1ABC9C |
| greensea     | #16A085 |
| emerland     | #2ECC71 |
| nephritis    | #27AE60 |
| peterriver   | #3498DB |
| belizehole   | #2980B9 |
| amethyst     | #9B59B6 |
| wisteria     | #8E44AD |
| wetasphalt   | #34495E |
| midnightblue | #2C3E50 |
| sunflower    | #F1C40F |
| orange       | #F39C12 |
| carrot       | #E67E22 |
| pumpkin      | #D35400 |
| alizarin     | #E74C3C |
| pomegranate  | #C0392B |
| clouds       | #ECF0F1 |
| silver       | #BDC3C7 |
| concrete     | #95A5A6 |
| asbestos     | #7F8C8D |

> Colors are taken from [FlatUI](http://designmodo.com/flat-free/) and color swatches can be viewed using the webapp at [http://flatuicolors.com/](http://flatuicolors.com/)

### Katan.isKatan(_obj_)

| Parameter | Type     | Returns | Description                                                  |
| --------- | -------- | ------- | ------------------------------------------------------------ |
| _obj_     | {Object} | {Bool}  | Returns true if the object is a **Katan** object or instance |

```javascript
Katan.isKatan(k);
// true
```

[↩ Back to top](#table-of-contents)