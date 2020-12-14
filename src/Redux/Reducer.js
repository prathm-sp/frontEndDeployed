import action from "./Action";
import { combineReducers } from "redux";

const initialSpecificCampState = {
  specificCamp: undefined,
};
const specific__camp__details = (state = initialSpecificCampState, actions) => {
  switch (actions.type) {
    case action.SPECIFIC__CAMP__DETAILS:
      return {
        specificCamp: actions.payload,
      };
    default:
      return state;
  }
};

const initialUserState = {
  user: undefined,
};
const user_reducer = (state = initialUserState, actions) => {
  switch (actions.type) {
    case action.SET_USER:
      return {
        user: actions.payload,
      };
    case action.CLEAR_USER:
      return {
        user: undefined,
        ...state,
      };
    default:
      return state;
  }
};

const initialCurrentUserState = {
  current__user: undefined,
};
const current__user__reducer = (state = initialCurrentUserState, actions) => {
  switch (actions.type) {
    case action.CURRENT__USER:
      return {
        user: actions.payload,
      };
    case action.CLEAR__CURRENT__USER:
      return {
        current__user: undefined,
      };
    default:
      return state;
  }
};

const initialAdminState = {
  admin: undefined,
};
const admin_reducer = (state = initialAdminState, actions) => {
  switch (actions.type) {
    case action.SET_ADMIN:
      return {
        user: actions.payload,
      };
    case action.CLEAR_ADMIN:
      return {
        admin: undefined,
        ...state,
      };
    default:
      return state;
  }
};

const initialOwnerState = {
  owner: undefined,
};
const owner_reducer = (state = initialOwnerState, actions) => {
  switch (actions.type) {
    case action.SET_OWNER:
      return {
        user: actions.payload,
      };
    case action.CLEAR_OWNER:
      return {
        owner: undefined,
        ...state,
      };
    default:
      return state;
  }
};

const intialCampDetailsState = {
  campDetails: undefined,
  campActivities: undefined,
  campAccomodation: undefined,
  campAmenities: undefined,
  campManger: undefined,
  campOwner: undefined,
  campExtraDetails: undefined,
};
const camp_reducer = (state = intialCampDetailsState, actions) => {
  switch (actions.type) {
    case action.CAMP__DETAILS:
      return {
        ...state,
        campDetails: actions.payload,
      };
    case action.CAMP__ACTIVITIES:
      return {
        ...state,
        campActivities: actions.payload,
      };
    case action.CAMP__ACCOMODATION:
      return {
        ...state,
        campAccomodation: actions.payload,
      };
    case action.CAMP__AMENITIES:
      return {
        ...state,
        campAmenities: actions.payload,
      };
    case action.CAMP__MANAGER:
      return {
        ...state,
        campManger: actions.payload,
      };
    case action.CAMP__OWNER:
      return {
        ...state,
        campOwner: actions.payload,
      };
    case action.CAMP__EXTRA__DETAILS:
      return {
        ...state,
        campExtraDetails: actions.payload,
      };
    default: {
      return state;
    }
  }
};

const rootReducer = combineReducers({
  user: user_reducer,
  admin: admin_reducer,
  owner: owner_reducer,
  current__user: current__user__reducer,
  campDetails: camp_reducer,
  specificCampDetails: specific__camp__details,
});

export default rootReducer;
