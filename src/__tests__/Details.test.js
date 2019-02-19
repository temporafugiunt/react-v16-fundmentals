import React from "react";
import { create } from "react-test-renderer";
import Details from "../Details";

test("snapshot", () => {
  const c = create(<Details />);
  // Should not change since last snapshot.
  expect(c.toJSON()).toMatchSnapshot();
});

test("shows modal when toggleModel is called", () => {
  const c = create(<Details />);

  const instance = c.getInstance();

  expect(instance.state.showModal).toBe(false);
  instance.toggleModal();
  expect(instance.state.showModal).toBe(true);
});
