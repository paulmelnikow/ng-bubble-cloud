ng-bubble-cloud
===============

Simple [bubble-cloud][bubble cloud] directive for [AngularJS][] + [D3][]. 

Get started:

```js
$scope.net_worth = {
    assets: [
        { name: 'Checking & Savings', balance: 2000 },
        { name: 'Money Market', balance: 11000 },
        { name: 'Retirement account', balance: 28000 },
        { name: 'Car', balance: 3000 },
    ],
	liabilities: [
        { name: 'Credit Cards', balance: 5000 },
        { name: 'Laptop', balance: 1500 },
        { name: 'Student Loans', balance: 35000 },
    ],
};

$scope.fill_color = function (group) {
    return group === 'assets' ? '#3eb536' : '#641726';
}

$scope.label_color = function (group) {
    return group === 'assets' ? 'black' : '#8c8c8c';
}
```

```html
<bubble-cloud
	diameter="480"
	watch="true"
	data="net_worth"
	value-attr="balance"
	label-attr="name"
	fill-color-fn="fill_color"
	label-color-fn="label_color"
></bubble>
```

![Net worth example][]

Features
--------

- Wraps up a bubble cloud layout
- Bind to data in your controller
- Chart updates as data changes
- Customize formatting with controller functions
- Chart data can be grouped hierarchically or using attributes


Installation
------------

Install ng-bubble-cloud by running:

	bower install ng-bubble-cloud


```html
<script src="path/to/bower_components/underscore/underscore.js"></script>
<script src="path/to/bower_components/angular/angular.js"></script>
<script src="path/to/bower_components/d3/d3.js"></script>
<script src="path/to/bower_components/ng-bubble-cloud/src/bubble-cloud.js"></script>
```


Contribute
----------

- [Issue tracker][issues]
- [Source code][source]


Support
-------

If you are having problems, please open an issue.


License
-------

The project is licensed under the MIT license.


[bubble cloud]: http://bl.ocks.org/mbostock/4063269
[AngularJS]: https://angularjs.org/
[D3]: http://d3js.org/
[Net worth example]: http://paulmelnikow.github.io/ng-bubble-cloud/net_worth.png
[issues]: https://github.com/paulmelnikow/ng-bubble-cloud/issues
[source]: https://github.com/paulmelnikow/ng-bubble-cloud
