import {cleanup, render, screen} from "@testing-library/vue";
import ImageCard from "./ImageCard.vue";
import type { ImageType } from "@/ImageType";
import { afterEach, describe, expect, it } from "vitest";
import userEvent from "@testing-library/user-event";

describe("<ImageCard />", () => {
  it("displays the image provided", () => {
    const entry: ImageType = {
      src: "/my/image.webp",
      description: "An image with a cat in it probably",
      votes: 1,
    }

    render(ImageCard, { props: { entry } })

    const image = screen.getByRole('img', { name: "An image with a cat in it probably" });
    expect(image).toBeVisible()
  })

  it('displays the current vote count', () => {
    const entry: ImageType = {
      src: "/my/image.webp",
      description: "An image with a cat in it probably",
      votes: 1,
    }

    render(ImageCard, { props: { entry } })

    const output = screen.getByRole('status');
    expect(output).toBeVisible()
    expect(output).toHaveTextContent(1)
  })

  it('increments the vote count when the user clicks on Upvote', async () => {
    const entry: ImageType = {
      src: "/my/image.webp",
      description: "An image with a cat in it probably",
      votes: 1,
    }
    const user = userEvent.setup();
    render(ImageCard, { props: { entry } })

    await user.click(screen.getByRole('button', { name: 'Upvote' }));

    const output = screen.getByRole('status');
    expect(output).toHaveTextContent(2)
  })

  it('decrements the vote count when the user clicks on Downvote', async () => {
    const entry: ImageType = {
      src: "/my/image.webp",
      description: "An image with a cat in it probably",
      votes: 1,
    }
    const user = userEvent.setup();
    render(ImageCard, { props: { entry } })

    await user.click(screen.getByRole('button', { name: 'Downvote' }));

    const output = screen.getByRole('status');
    expect(output).toHaveTextContent(0)
  })

  afterEach(() => {
    cleanup();
  })
})
