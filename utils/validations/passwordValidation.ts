export const passwordValidation = (password: string) => {
  const passwordRegex =
    /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>]).{8,}$/;

  return passwordRegex.test(password);
};
