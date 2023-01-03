"use strict";
module.exports = function (w) {
    return {
        trace:true,
        debug:true,
        autoDetect:true,
        env:{
            type:'node',
            runner:'node'
        },
        compilers: {
            '**/*.ts?(x)': w.compilers.typeScript({


            })
        },
        testFramework: "jest"

    };
};
