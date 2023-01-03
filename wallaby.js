"use strict";
module.exports = function (w) {
    return {
        files:["models/plugins/business-sharing-strategy/isBusinessSharingStrategy.ts"],
        trace:true,
        debug:true,
        autoDetect:true,
        env:{
            type:'node',
            runner:'node'
        },
        compilers: {
            '**/*.ts?(x)': w.compilers.typeScript({
                module: 'commonjs',
                outDir: './any'


            })
        },
        testFramework: "jest"

    };
};
