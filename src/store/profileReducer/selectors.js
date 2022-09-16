export function getUser(state) {
  return state.profile.currentUser;
}

export const getProfileLoading = (state) => {
  return state.profile.loading;
};
