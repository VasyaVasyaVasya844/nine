// BEGIN
export const getMutualFriends = (user1, user2) => {
  const mutualFriends = [];
  const friends1 = user1.getFriends();
  const friends2 = user2.getFriends();
  for (const friend1 of friends1) {
    for (const friend2 of friends2) {
      if (friend1.id === friend2.id) {
        mutualFriends.push(friend1);
        break;
      }
    }
  }
  return mutualFriends;
};
// END

export default ({ id = null, friends = [] } = {}) => ({
  friends,
  id,
  getFriends() {
    return this.friends.slice();
  },
});
