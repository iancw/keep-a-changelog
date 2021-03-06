const fs = require('fs');
const { Changelog, Release } = require('./src');
const file = __dirname + '/CHANGELOG.md';

const changelog = new Changelog('Changelog')
    .addRelease(
        new Release('0.1.0', '2017-12-07', 'First version')
    )
    .addRelease(
        new Release('0.2.0', '2017-12-07')
            .changed('Parser improvements')
            .changed('Changed the constructor arguments of Changelog, Change and Release classes')
            .removed('Removed static factories. Use `new` instead.')
            .fixed('The last version should\'t have diff link')
    )
    .addRelease(
        new Release('0.3.0', '2017-12-08')
            .added('Added colors in CLI')
            .added('Parser errors contains the line number in the CHANGELOG file')
            .fixed('Fixed parsing bug when the changelog is using incorrect title levels')
    )
    .addRelease(
        new Release('0.3.1', '2017-12-11')
            .added('CLI Api: New option `--file`, to change the filename used')
            .added('CLI Api: New option `--url`, to set or change the project url')
            .added('CLI Api: New option `--https`, to change the use of https in the url scheme')
    )
    .addRelease(
        new Release('0.4.0', '2018-03-22')
            .fixed('Use UTC date functions to fix decrement issue - #1')
            .added('Create links automatically to the issues')
    )
    .addRelease(
        new Release('0.5.0', '2018-05-09')
            .fixed('Parser refactoring')
            .added('Allow to insert a footer at the end of the changelog')
            .changed('Placed the urls of the issues at bottom')
            .changed('Indent automatically the extra lines of the changes')
    )
    .addRelease(
        new Release('0.5.1', '2018-05-12')
            .fixed('Issues autodetection problems with texts like `#3.4`')
            .fixed('Test execution was commented')
    )
    .addRelease(
        new Release('0.5.2', '2018-05-12')
            .fixed('Issues autodetection links')
    )
    .addRelease(
        new Release('0.6.0', '2018-06-12')
            .added('CLI Api: New option `--init`, to generate an empty CHANGELOG.md file')
    )
    .addRelease(
        new Release('0.6.1', '2018-06-30')
            .fixed('Prevent inserting duplicated links')
    )
    .addRelease(
        new Release('0.6.2', '2018-07-24')
            .added('Support for unreleased versions (releases with version but without date)')
    )
    .addRelease(
        new Release('0.6.3', '2018-08-22')
            .fixed('Fixed trailing newlines when no links are present - #5')
            .fixed('Fixed case of unreleased version to match http://keepachangelog.com/ - #4')
            .fixed('Fixed Release isEmpty and add tests - #3')
    )
    .addRelease(
        new Release('0.6.4', '2018-09-03')
            .added('Added `findRelease` function to `Changelog` for finding a release by version number - #6')
            .added('Added `setVersion` function to `Release` for changing the version of a release - #6')
    )
    .addRelease(
        new Release('0.6.5', '2018-11-01')
            .fixed('Updated issue autodetection to prevent unwanted extractions - #7')
    )

changelog.url = 'https://github.com/oscarotero/keep-a-changelog';

fs.writeFileSync(file, changelog.toString());
