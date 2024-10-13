const formInfo = [
  {
    type: "text",
    name: "username",
    placeholder: "Name",
    validation: {
      required: "The email field must not be empty",
      pattern: {
        value: /^[A-Za-zА-Яа-яЁё]+$/i,
        message: "the name should contain only letters",
      },
    },
  },
  {
    type: "phone",
    name: "phone",
    placeholder: "Phone number",
    validation: {
      required: "The phone number field must not be empty",
      pattern: {
        value: /^[0-9]{4,}$/,
        message: "the phone number must consist only of digits",
      },
    },
  },
  {
    type: "email",
    name: "email",
    placeholder: "Email",
    validation: {
      required: "The email field must not be empty",
      pattern: {
        value: /^\S+@\S+\.\S+$/,
        message: "Please enter a valid email",
      },
    },
  },
];

export default formInfo;
