"use strict";
module.exports = function (w) {
    return {
        files:["models/plugins/business-sharing-strategy/isBusinessSharingStrategy.ts"],
        // tests: [{pattern: "models/plugins/business-sharing-strategy/isBusinessSharingStrategy.test.ts",instrument:true, load:true}],
        //files: [
        //'!/**/*.test.ts',
        //'!/**/*.js',
        //'/**/*.ts',
        //{pattern:"node_modules/**/*",ignore:true},
        // {pattern:"public/**/*",ignore:true}

        //],

        // tests: [ {pattern:'**/*.test.ts', instrument:true, load:true},'!/**/*.test.js'],
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