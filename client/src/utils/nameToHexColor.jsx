const namrToHexColor = (name) => {

  if (name.includes("סגול")) return "#7A4988";
  if (name.includes("ירוק")) return "#37a31b";
  if (name.includes("בז")) return "#d4c5a3";
  if (name.includes("כחול") || name.toUpperCase().includes("PREPPY")) return "#000080";
  if (name.includes("שחור") || name.toUpperCase().includes("BLACK")) return "#000000";
  if (name.includes("לבן") || name.toUpperCase().includes("WHIT")) return "#ffffff";
  if (name.includes("אפור") || name.toUpperCase().includes("GREY") || name.toUpperCase().includes("LT HEATHER")) return "#b8b8b8";
  if (name.includes("ורוד")) return "#FFC0CB";
  if (name.includes("שמנת") || name.toUpperCase().includes("MILK")) return "#eeeee4";
  if (name.includes("חרדל")) return "#8A624A";
  if (name.includes("כסף")) return "#c0c0c0";
  if (name.includes("אדום")) return "#FF0000";
  if (name.includes("חום")) return "#7f3f00";
  if (name.includes("צהוב")) return "#ffff00";
  if (name.includes("חאקי")) return "#c3b091";
  if (name.includes("קאמל")) return "#eab676";
  if (name.includes("כתום")) return "#e07b39";
  if (name.toUpperCase().includes("SAGE")) return "#B1BCA0";
  if (name.toUpperCase().includes("OLIVE")) return "#556B2F"
};

export default namrToHexColor;
