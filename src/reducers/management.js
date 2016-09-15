
const initialState = {
    users: {},
    brokers: {},
    test:"managementTest"
};

export default function management(state = initialState, action) {
    switch(action.type) {
    case "getBrokers":
        return Object.assign({}, state, {
            brokers: []
        });

    default:
        return state;
    }
}
