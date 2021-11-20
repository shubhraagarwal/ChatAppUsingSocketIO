const currentChatId = (state = 0, action) => {
  switch (action.type) {
    case "CURRENT_CHAT":
      return action.key;
    default:
      return state;
  }
};

export default currentChatId;
