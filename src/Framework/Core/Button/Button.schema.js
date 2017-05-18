export default class ButtonSchema {

  const schema = {
    uid: "buttonID",
    type: "button",
    category: "control",
    attributes: {
      label: "Text",
      validate: true,
      required: false
    }
  };

};
