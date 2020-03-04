import { connect } from "react-redux";
import allActions from "../redux/actions";

export function Connect(mapStates, mapActions, constructor) {
    function mapStateToProps(state) {
        let obj = {};
        mapStates.forEach(element => {
            Object.defineProperty(obj, element, {
                enumerable: true,
                value: state[element]
            });
        });
        return obj;
    }
    const acs = createAction(mapActions);
    return connect(mapStateToProps, acs)(constructor);
}

function createAction(mapActions) {
    let mapActionCreators = {};

    mapActions.forEach(element => {
        Object.defineProperty(mapActionCreators, element, {
            enumerable: true,
            value: allActions[element]
        });
    });

    return mapActionCreators;
}
