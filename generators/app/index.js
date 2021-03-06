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
  writing() {
    this.fs.copyTpl(
      this.templatePath('service'),
      this.destinationPath('.'),
      { title: this.answers.name, 
        description: this.answers.description, 
        author: this.answers.author 
      }
    );
    this.fs.copy(this.templatePath('service/.*'), this.destinationRoot());
  }
};