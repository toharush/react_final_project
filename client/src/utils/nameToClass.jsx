export default (name) => {
  console.log(name)
  switch (name) {
    case "ירוק זית : צבע":
      return "oliver-green";
    case "בז : צבע":
      return "off-white";
    case "כחול נייבי : צבע":
      return "navy-blue";
    case "שחור : צבע":
      return "black";
    case "לבן : צבע":
      return "white";
    case "ירוק : צבע":
      return "green";
    case "אפור בהיר : צבע":
      return "white-grey";
    default:
      return "";
  }
};
