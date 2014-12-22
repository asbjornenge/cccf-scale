# cccf-scale

[![NPM](https://nodei.co/npm/cccf-scale.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/cccf-scale/)

This module can scale up and down a [cccf](https://github.com/asbjornenge/cccf) config with a scale property.

## Install

    npm install cccf-scale

## Use

    var cs = require('cccf-scale')
    var up = cs.up({
        id    : 'app',
        image : 'org/app',
        scale : 3
    })
    console.log(up)
    // =>
    // [
    //    {
    //        id    : 'app',
    //        image : 'org/app',
    //        scale : 3
    //    },
    //    {
    //        id    : 'app-scale-1',
    //        image : 'org/app'
    //    },
    //    {
    //        id    : 'app-scale-2',
    //        image : 'org/app'
    //    }
    // ]

    var down = cs.down(up)
    console.log(down)
    // =>
    // [
    //    {
    //        id    : 'app',
    //        image : 'org/app',
    //        scale : 3
    //    }
    // ]

## Changelog

### 2.0.0

* Using cccf v3.0.0

### 1.0.0

* Initial release :tada:

enjoy.
