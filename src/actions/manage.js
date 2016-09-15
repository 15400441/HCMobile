export function addTodo(text) {
  return {
    type: 'ADD_TODO',
    payload: {
      id: uid(),
      isDone: false,
      text: text
    }
  };
}

export function toggleTodo(id) {
  return {
    type: 'TOGGLE_TODO',
    payload: id
  }
}

export function test(){
   return{
    type:'CHANGE'

   }
}

export function search(value){
  return  {
    type:"SEARCH",
    value:value
  }
}

export function showDetail(data){
  return  {
    type:"SHOWDETAIL",
    data:data
  }
}


