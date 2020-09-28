export const mapUsersToFlatList = list => {
  return list.map(({id, name, username}) => {
    return {
      key: id.toString(),
      name,
      username,
    };
  });
};
