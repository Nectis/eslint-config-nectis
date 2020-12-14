module.exports = (_grunt) => {
    _grunt.initConfig({
        bump: {
            options: {
                pushTo: 'origin'
            }
        },

        run: {
            publish: {
                args: ['publish'],
                cmd: 'npx'
            }
        }
    });

    _grunt.loadNpmTasks('grunt-bump');
    _grunt.loadNpmTasks('grunt-run');

    _grunt.registerTask('publishToNPM', ['bump', 'run:publish']);
};
