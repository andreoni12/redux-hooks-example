import courses from '../actions/courses';
import medium from '../actions/medium'
import { combineReducers } from 'redux';

export default combineReducers({
    courses,
    medium
})