var Task = function(name) {
  this.name = name;
  this.completed = false;
}

Task.prototype.done = function() {
  console.log('complete task: ' + this.name);
  this.complete = true;
}

Task.prototype.save = function() {
  console.log('saving Task: ' + this.name);
}

var newTask = new Task('Legacy Task');
newTask.done();
newTask.save();


// extended but not modified


var UrgentTask =  function(name, priority) {
  // call allows for a function/method belonging 
  // to one object to be assigned and called for 
  // a different object.
  Task.call(this, name);
  this.priority = priority;
}

// The Object.create() method creates a new object, 
// using an existing object as the prototype of the newly created object.

UrgentTask.prototype = Object.create(Task.prototype); 

UrgentTask.prototype.notify = function() {
  console.log('notifying a lot of people');
}

UrgentTask.prototype.save = function() {
  this.notify();
  console.log('cleaning data before saving');
  Task.prototype.save.call(this); // explain this
}


var newUrgentTask = new UrgentTask('very urgent', 2);
newUrgentTask.done();
newUrgentTask.save();
