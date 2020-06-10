export const postData = (data) => {
  return fetch("./server.php", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
};

// Превращаем форму в JSON
export const formToJSON = (form) => {
  const groupByName = (elements) => {
    let data = {};

    elements.forEach( item => {
      if (item.name in data) {
        data[item.name].push(item)
      } else {
        data[item.name] = [item]
      }
    })
    return data;
  }

  let group_fields = groupByName([...form.elements]);

  const data = Object.entries(group_fields)
    .filter(([name, group_item]) => {
      return name != ""; 
    })
    .map(([name, group_item]) => {
    let type = group_item[0].type
    
    //если радиобаттон - ищем в группе 
    if (type == 'radio') {
      let checked = group_item.filter( i => i.checked )
      if (checked){
        return [name, checked[0].value]
      } 
    }

    // иначе считаем что это простой input
    return [name, group_item[0].value]
  })

  return Object.fromEntries(data);
}