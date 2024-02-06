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

  afterEach(() => {
    cleanup();
  })
})
