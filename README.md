# cccf-scale

This module can scale and unscale a [cccf](https://github.com/asbjornenge/common-container-configuration-format) config.

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

enjoy.