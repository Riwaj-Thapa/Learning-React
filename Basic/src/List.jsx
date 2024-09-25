function List(){
    const fruits = [{id:1,name:"apple", calories: 95},
        {id:2,name:"orange",calories: 45},
        {id:3, name:"banana", calories: 105}];



    const listItems = fruits.map(fruit=>
        <li key={fruit.id}>{fruits.name}</li>

    );
    return (<ol>{listItems}
    </ol>);

}

export default List