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

    await user.click(screen.getByRole('switch', { name: 'Upvote' }));

    const output = screen.getByRole('status');
    expect(output).toHaveTextContent(2)
  })

  it('marks the upvote button as active when the user clicks on Upvote', async () => {
    const entry: ImageType = {
      src: "/my/image.webp",
      description: "An image with a cat in it probably",
      votes: 1,
    }
    const user = userEvent.setup();
    render(ImageCard, { props: { entry } })

    const upvote = screen.getByRole('switch', { name: 'Upvote' });
    await user.click(upvote);

    expect(upvote).toBeChecked()
  })

  it('decrements the vote count when the user clicks on Downvote', async () => {
    const entry: ImageType = {
      src: "/my/image.webp",
      description: "An image with a cat in it probably",
      votes: 1,
    }
    const user = userEvent.setup();
    render(ImageCard, { props: { entry } })

    await user.click(screen.getByRole('switch', { name: 'Downvote' }));

    const output = screen.getByRole('status');
    expect(output).toHaveTextContent(0)
  })

  it('marks the downvote button as active when the user clicks on Downvote', async () => {
    const entry: ImageType = {
      src: "/my/image.webp",
      description: "An image with a cat in it probably",
      votes: 1,
    }
    const user = userEvent.setup();
    render(ImageCard, { props: { entry } })

    const downvote = screen.getByRole('switch', { name: 'Downvote' });
    await user.click(downvote);

    expect(downvote).toBeChecked()
  })

  it('cancels the vote when the user clicks on Upvote when photo already upvoted', async () => {
    const entry: ImageType = {
      src: "/my/image.webp",
      description: "An image with a cat in it probably",
      votes: 1,
    }
    const user = userEvent.setup();
    render(ImageCard, { props: { entry } })
    await user.click(screen.getByRole('switch', { name: 'Upvote' }));

    await user.click(screen.getByRole('switch', { name: 'Upvote' }));

    const output = screen.getByRole('status');
    expect(output).toHaveTextContent(1)
  })

  it('cancels the vote when the user clicks on Downvote when photo already downvoted', async () => {
    const entry: ImageType = {
      src: "/my/image.webp",
      description: "An image with a cat in it probably",
      votes: 1,
    }
    const user = userEvent.setup();
    render(ImageCard, { props: { entry } })
    await user.click(screen.getByRole('switch', { name: 'Downvote' }));

    await user.click(screen.getByRole('switch', { name: 'Downvote' }));

    const output = screen.getByRole('status');
    expect(output).toHaveTextContent(1)
  })

  it('cancels the downvote when the user clicks on Upvote when photo already downvoted', async () => {
    const entry: ImageType = {
      src: "/my/image.webp",
      description: "An image with a cat in it probably",
      votes: 1,
    }
    const user = userEvent.setup();
    render(ImageCard, { props: { entry } })
    await user.click(screen.getByRole('switch', { name: 'Downvote' }));

    await user.click(screen.getByRole('switch', { name: 'Upvote' }));

    const output = screen.getByRole('status');
    expect(output).toHaveTextContent(2)
  })

  it('cancels the upvote when the user clicks on Downvote when photo already upvoted', async () => {
    const entry: ImageType = {
      src: "/my/image.webp",
      description: "An image with a cat in it probably",
      votes: 1,
    }
    const user = userEvent.setup();
    render(ImageCard, { props: { entry } })
    await user.click(screen.getByRole('switch', { name: 'Upvote' }));

    await user.click(screen.getByRole('switch', { name: 'Downvote' }));

    const output = screen.getByRole('status');
    expect(output).toHaveTextContent(0)
  })

  afterEach(() => {
    cleanup();
  })
})
