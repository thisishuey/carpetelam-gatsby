import React from "react";
import { render } from "react-testing-library";
import ContactForm from "../ContactForm";

const { container, getByLabelText } = render(<ContactForm />);

test("contact form matches snapshot", () => {
  expect(container.firstChild).toMatchSnapshot();
});

test("contact form renders name field", () => {
  expect(getByLabelText(/name/i)).toBeDefined();
});

test("contact form renders email field", () => {
  expect(getByLabelText(/email/i)).toBeDefined();
});

test("contact form renders message field", () => {
  expect(getByLabelText(/message/i)).toBeDefined();
});
