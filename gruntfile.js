module.exports = (_grunt) => {
    _grunt.initConfig({
        bump: {
            options: {
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
            publish: {
                args: ['publish'],
                cmd: 'npx'
            },
            test: {
                args: ['WARNING: No test implemented.'],
                cmd: 'echo'
            }
        }
    });

    _grunt.loadNpmTasks('grunt-bump');
    _grunt.loadNpmTasks('grunt-run');
    _grunt.loadNpmTasks('grunt-prompt');

    _grunt.registerTask('build', ['run:publish']);
    _grunt.registerTask('push', ['bump']);
    _grunt.registerTask('pushWithMessage', ['bump-only', 'prompt:commit', 'bump-commit']);
    _grunt.registerTask('release', ['bump', 'run:publish']);
    _grunt.registerTask('test', ['run:test']);
};
