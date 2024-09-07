function List(){
    const fruits = [{name:"apple", calorioes: 95},{"banana"},{"coconut"},{"pineapple"}];
    const listItems = fruits.map(fruit=> <li>{fruit}</li>);



    return(<ol>
        {listItems}
    </ol>);

}

export default List 