/**
 * @author Jonathan Terrell <jonathan.terrell@springbrook.es>
 * @copyright Copyright (c) 2019-2021 Springbrook S.L.
 * @license "Apache-2.0"
 */

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Exports
// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

module.exports = (grunt) => {
    // Initialise configuration.
    grunt.initConfig({
        // Bump configuration.
        bump: {
            options: {
                commitFiles: ['-a'],
                commitMessage: '<%if(grunt.config("commitMessage")){%><%=grunt.config("commitMessage")%><%}else{%>Release v%VERSION%<%}%>',
                pushTo: 'origin'
            }
        },
        // Run configuration.
        run: {
            audit: { args: ['npm', 'audit'], cmd: 'npx' },
            licenseChecker: { args: ['license-checker', '--production', '--json', '--out', 'LICENSES.json'], cmd: 'npx' },
            licenseNLF: { args: ['nlf', '-d'], cmd: 'npx' },
            lint: { args: ['eslint', 'index.js'], cmd: 'npx' },
            outdated: { args: ['npm', 'outdated'], cmd: 'npx' },
            publish: { args: ['publish'], cmd: 'npx' },
            test: { args: ['WARNING: No tests implemented.'], cmd: 'echo' },
            update: { args: ['npm', 'update', '--save/--save-dev'], cmd: 'npx' }
        }
    });
    // Load external tasks.
    grunt.loadNpmTasks('grunt-bump');
    grunt.loadNpmTasks('grunt-run');
    // Register local tasks.
    grunt.registerTask('audit', ['run:audit']);
    grunt.registerTask('build', ['run:publish']);
    grunt.registerTask('licenseCheck', ['run:licenseChecker', 'run:licenseNLF']);
    grunt.registerTask('lint', ['run:lint']);
    grunt.registerTask('outdated', ['run:outdated']);
    grunt.registerTask('release', ['bump', 'run:publish']);
    grunt.registerTask('sync', ['bump']);
    grunt.registerTask('test', ['run:test']);
    grunt.registerTask('update', ['run:update']);
};
