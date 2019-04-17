import store from '../store';

/*
* The objects would be created in a business layer class inbetween
* the front en caller and the direct api calls.
* This is a static mock vesion of api calls that will be replaced
* */


function initialiseOptionObject(){
    return(
        [
            {id:1, name:"option1", country:"Germany", choice:"incorrect"},
            {id:2, name:"option2", country:"Denmark", choice:"incorrect"},
            {id:3, name:"option3", country:"Hungary", choice:"incorrect"},
            {id:4, name:"option4", country:"Switzerland", choice:"incorrect"},
            {id:5, name:"option5", country:"Iceland", choice:"incorrect"},
            {id:5, name:"option6", country:"Sweden", choice:"incorrect"},
            {id:6, name:"option7", country:"Italy", choice:"incorrect"},
            {id:7, name:"option8", country:"France", choice:"incorrect"},
            {id:8, name:"option9", country:"Poland", choice:"incorrect"},
            {id:9, name:"option10", country:"Australia", choice:"incorrect"},
            {id:10, name:"option11", country:"Spain", choice:"incorrect"},
            {id:11, name:"option12", country:"Greece", choice:"incorrect"},
            {id:13, name:"option13", country:"Norway", choice:"incorrect"}
        ]
    );
}


export function getOptions(){
    let options =  [
        {id:1, name:"option1", country:"Germany", choice:"incorrect"},
        {id:2, name:"option2", country:"Denmark", choice:"incorrect"},
        {id:3, name:"option3", country:"Hungary", choice:"incorrect"},
        {id:4, name:"option4", country:"Switzerland", choice:"incorrect"},
        {id:5, name:"option5", country:"Iceland", choice:"incorrect"},
        {id:6, name:"option7", country:"Italy", choice:"incorrect"},
        {id:7, name:"option8", country:"France", choice:"incorrect"},
        {id:8, name:"option9", country:"Poland", choice:"incorrect"},
        {id:9, name:"option10", country:"Australia", choice:"incorrect"},
        {id:10, name:"option11", country:"Spain", choice:"incorrect"},
        {id:11, name:"option12", country:"Greece", choice:"incorrect"},
        {id:13, name:"option13", country:"Norway", choice:"incorrect"},
        {id:14, name:"option6", country:"Sweden", choice:"incorrect"}
    ];

    // Get 4 random choices
    const shuffled = options.sort(() => 0.5 - Math.random());
    let selected = shuffled.slice(0, 4);
    //for now first choice is always correct
    selected[0].choice = "correct";
    return selected;
}


export function getFlag(){
    let flags =  [
        {id:1, name:"option1", country:"Germany", choice:"correct"},
        {id:2, name:"option2", country:"Denmark", choice:"incorrect"},
        {id:3, name:"option3", country:"Hungary", choice:"incorrect"},
        {id:4, name:"option4", country:"Switzerland", choice:"incorrect"},
        {id:5, name:"option5", country:"Iceland", choice:"incorrect"},
        {id:5, name:"option6", country:"Sweden", choice:"incorrect"},
        {id:6, name:"option7", country:"Italy", choice:"incorrect"},
        {id:7, name:"option8", country:"France", choice:"incorrect"},
        {id:8, name:"option9", country:"Poland", choice:"incorrect"},
        {id:9, name:"option10", country:"Australia", choice:"incorrect"},
        {id:10, name:"option11", country:"Spain", choice:"incorrect"},
        {id:11, name:"option12", country:"Greece", choice:"incorrect"},
        {id:13, name:"option13", country:"Norway", choice:"incorrect"}
    ];

    return(
        flags[0]
    );
}



