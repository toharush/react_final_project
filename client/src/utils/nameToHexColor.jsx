const namrToHexColor = (name) => {
  switch (name) {
    case "ירוק זית : צבע":
      return "#6B8E23";
    case "בז : צבע":
      return "#d4c5a3";
    case "כחול נייבי : צבע":
      return "#000080";
    case "שחור : צבע":
      return "#000000";
    case "לבן : צבע":
      return "#ffffff";
    case "ירוק : צבע":
      return "#37a31b";
    case "אפור בהיר : צבע":
      return "#b8b8b8";
    case "ורוד : צבע":
      return "#FFC0CB";
    case "כחול כהה : צבע": 
        return "#003366"
    default:
      return "#000000";
  }
};

export default namrToHexColor;
