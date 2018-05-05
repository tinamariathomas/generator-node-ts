const prompts = [{
    type    : 'input',
    name    : 'name',
    message : 'Your project name',
    default : this.appname
  },{
    type    : 'input',
    name    : 'description',
    message : 'Projection description',
    default : this.description
  },{
    type    : 'input',
    name    : 'author',
    message : 'Authoer nam',
    default : this.appname
  }];
  
  module.exports = prompts;
  