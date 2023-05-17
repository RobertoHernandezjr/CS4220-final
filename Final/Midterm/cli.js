const yargs = require('yargs/yargs');

const app = require('./app.js');

yargs(process.argv.slice(2))

    .usage('$0: Usage <command>')
    .command(

        'search <keyword>',
        'search for a superhero',

        (yargs) => {

            return (
                yargs
                    .positional('keyword', {
                        describe: 'name of the superhero',
                        type: 'string',
                    })
            );
        },

        (args) => {
            if (args.keyword === 'Random' || args.keyword === 'random') {
                app.randomSuperhero(args);
            }
            else if (args.keyword) {
                app.chooseHero(args.keyword);
            }
            else {
                console.log(`${args.keyword} was not found.`);
            }
        }
    )
    .help().argv;