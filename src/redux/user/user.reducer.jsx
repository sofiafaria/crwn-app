const INITIAL_STATE = {
    currentUser:null
};

const userReducer = (state = INITIAL_STATE, action) =>{
    switch(action.type){
        case 'SET_CURRENT_USER':
            return {
                ...state,
                currentUser: action.payload
            }
        default:
            return state;
    }

}
export default userReducer;
/*Check the type
if it matches return  a new object with current state (all other props remain the same)
 but making sure that the currentUser property is the action.payload.
 We always return a new object in order to re-render the component.
 The only way to do this is passing in a new object. If we pass the same property but wwith a diferent value
 yhe object is not diferent and the component will not update. So you can figure out that in the default case
 there is no re-render because it is the same object.
CONCLUSION: Every reducer is a function which takes the current state and an action and based on this action it determines
whether or not it needs to render. It gives out an object. in this case
//=>{currentUser: {...}}  a value of currentUser goes to whatever the value of payload was*/

