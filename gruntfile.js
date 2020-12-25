module.exports = (_grunt) => {

    // Initialise configuration.
    _grunt.initConfig({
        bump: {
            options: {
                commitFiles: ['-a'],
                commitMessage: '<%if(grunt.config("commitMessage")){%><%=grunt.config("commitMessage")%><%}else{%>Release v%VERSION%<%}%>',
                pushTo: 'origin'
            }
        },

        prompt: {
            commit: {
                options: {
                    questions: [{
                        config: 'commitMessage',
                        default: () => {
                            const pkg = _grunt.file.readJSON('package.json');
                            return `Release v${pkg.version}`;
                        },
                        message: 'Commit Message',
                        type: 'input'
                    }]
                }
            }
        },

        run: {
            lint: { args: ['eslint', '*.js'], cmd: 'npx' },
            outdated: { args: ['npm', 'outdated'], cmd: 'npx' },
            publish: { args: ['publish'], cmd: 'npx' },
            test: { args: ['WARNING: No tests implemented.'], cmd: 'echo' },
            update: { args: ['npm', 'update', '--save/--save-dev'], cmd: 'npx' }
        }
    });

    // Load external tasks.
    _grunt.loadNpmTasks('grunt-bump');
    _grunt.loadNpmTasks('grunt-run');
    _grunt.loadNpmTasks('grunt-prompt');

    // Register local tasks.
    _grunt.registerTask('build', ['run:publish']);
    _grunt.registerTask('lint', ['run:lint']);
    _grunt.registerTask('outdated', ['run:outdated']);
    _grunt.registerTask('release', ['bump', 'run:publish']);
    _grunt.registerTask('sync', ['bump']);
    _grunt.registerTask('syncWithMessage', ['bump-only', 'prompt:commit', 'bump-commit']);
    _grunt.registerTask('test', ['run:test']);
    _grunt.registerTask('update', ['run:update']);
};
