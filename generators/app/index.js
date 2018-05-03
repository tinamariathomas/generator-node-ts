var Generator = require('yeoman-generator');
var prompts = require('./prompts');

module.exports = class extends Generator {
  constructor(args, opts) {
    super(args, opts);
  }
   prompting() {
      return this.prompt(prompts).then(answers => this.answers = answers);
  }
   method1() {
    this.log('Your settins are ' + JSON.stringify(this.answers));
  }
};