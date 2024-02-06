import {afterEach, describe, it, expect} from "vitest";
import Newsletter from "./Newsletter.vue";
import {cleanup, render, screen} from "@testing-library/vue";
import userEvent from "@testing-library/user-event";

describe("<Newsletter />", () => {
  it('should accept an email address', async () => {
    const user = userEvent.setup();
    render(Newsletter);
    const email = screen.getByRole("textbox", { name: /Email/i });

    await user.type(email, 'test@example.com');

    expect(email).toBeValid();
  })

  afterEach(() => {
    cleanup();
  })
})
