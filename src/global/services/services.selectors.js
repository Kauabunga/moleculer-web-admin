export const selectServices = state => state.services;

export const selectServicesData = state => selectServices(state).services;
export const selectActionsData = state => selectServices(state).actions;
export const selectStatsData = state => selectServices(state).stats;
