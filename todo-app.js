const todos = []

todo1 = {text: 'learn js algorithms', completed: false}
todo2 = {text: 'learn SASS', completed: false}
todo3 = {text: 'learn Bootstrap', completed: false}
todo4 = {text: 'complete freecodecamp front-end course', completed: false}
todos.push(todo1, todo2, todo3, todo4)

const todoLeft = todos.filter(function(todo){
  return !todo.completed
})

const summary = document.createElement('p')
summary.textContent = `You have ${todoLeft.length} ${todoLeft == 1 ? 'todo' : 'todos'} left`
document.querySelector('body').appendChild(summary)

todos.forEach(function(todo){
  const p = document.createElement('p')
  p.textContent = todo.text
  document.querySelector('body').appendChild(p)
})



// let todoLeft = todos.length;

// const todoMessage = document.createElement('p')

// todoMessage.textContent = `You have ${todoLeft} ${todoLeft == 1 ? 'todo' : 'todos'} left`

// document.querySelector('body').appendChild(todoMessage)

// const paragraphs = document.querySelectorAll('p')

// paragraphs.forEach(function(p){
//   if(p.textContent.includes('explicabo')){
//     p.remove()
//   }
// })

// You have ? todos left (p element)
// add a p for each todo above (use text value)