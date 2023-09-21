const capitalize = (text: string): string => {
  if (text.length === 0) {
    return "Please enter a valid text";
  }
  return text[0].toUpperCase() + text.slice(1);
};

export default capitalize;