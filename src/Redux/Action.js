const actions = {
  SET_USER: "SET_USER",
  CLEAR_USER: "CLEAR_USER",

  SET_ADMIN: "SET_ADMIN",
  CLEAR_ADMIN: "CLEAR_ADMIN",

  SET_OWNER: "SET_OWNER",
  CLEAR_OWNER: "CLEAR_OWNER",

  CURRENT__USER: "CURRENT__USER",
  CLEAR__CURRENT__USER: "CLEAR__CURRENT__USER",

  CAMP__DETAILS: "CAMP__DETAILS",

  CAMP__ACTIVITIES: "ACTIVITIES",

  CAMP__ACCOMODATION: "CAMP__ACCOMODATION",

  CAMP__AMENITIES: "CAMP__AMENITIES",

  CAMP__MANAGER: "CAMP__MANAGER",

  CAMP__OWNER: "CAMP__OWNER",

  CAMP__EXTRA__DETAILS: "CAMP__EXTRA__DETAILS",

  SPECIFIC__CAMP__DETAILS: "SPECIFIC__CAMP__DETAILS",

  setSpecific: (data) => {
    return {
      type: actions.SPECIFIC__CAMP__DETAILS,
      payload: data,
    };
  },

  setCampDetails: (data) => {
    return {
      type: actions.CAMP__DETAILS,
      payload: data,
    };
  },
  setCampOwnerDetails: (data) => {
    return {
      type: actions.CAMP__OWNER,
      payload: data,
    };
  },
  setCampManagerDetails: (data) => {
    return {
      type: actions.CAMP__MANAGER,
      payload: data,
    };
  },
  setCampExtraDetails: (data) => {
    return {
      type: actions.CAMP__EXTRA__DETAILS,
      payload: data,
    };
  },

  setCampAmenities: (data) => {
    return {
      type: actions.CAMP__AMENITIES,
      payload: data,
    };
  },

  setCampActivities: (data) => {
    return {
      type: actions.CAMP__ACTIVITIES,
      payload: data,
    };
  },

  setCampAccomodation: (data) => {
    return {
      type: actions.CAMP__ACCOMODATION,
      payload: data,
    };
  },

  setCampManager: (data) => {
    return {
      type: actions.CAMP__MANAGER,
      payload: data,
    };
  },

  setUser: (data) => {
    return {
      type: actions.SET_USER,
      payload: data,
    };
  },

  clearUser: () => {
    return {
      type: actions.SET_USER,
    };
  },

  setCurrentUser: (data) => {
    return {
      type: actions.CURRENT__USER,
      payload: data,
    };
  },

  clearCurrentUser: () => {
    return {
      type: actions.CURRENT__USER,
    };
  },

  setOwner: (data) => {
    return {
      type: actions.SET_OWNER,
      payload: data,
    };
  },

  clearOwner: () => {
    return {
      type: actions.SET_OWNER,
    };
  },

  setAdmin: (data) => {
    return {
      type: actions.SET_ADMIN,
      payload: data,
    };
  },

  clearAdmin: () => {
    return {
      type: actions.SET_ADMIN,
    };
  },
};

export default actions;
