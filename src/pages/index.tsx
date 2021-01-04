import { StaticImage } from "gatsby-plugin-image";
import * as React from "react";

// styles
const pageStyles = {
  color: "#232129",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
};
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
};

// markup
const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <title>Home Page</title>
      <h1 style={headingStyles}>Image format demo</h1>
      <h3>JPG</h3>
      <StaticImage
        src="https://images.unsplash.com/photo-1609520505555-8bb8d82184bc"
        alt="by Kenny Gaines"
        formats={["jpg"]}
        maxHeight={800}
      />
      <h3>WebP</h3>
      <StaticImage
        src="https://images.unsplash.com/photo-1609520505555-8bb8d82184bc"
        alt="by Kenny Gaines"
        formats={["webp"]}
        maxHeight={800}
      />
      <h3>AVIF</h3>
      <StaticImage
        src="https://images.unsplash.com/photo-1609520505555-8bb8d82184bc"
        alt="by Kenny Gaines"
        formats={["avif"]}
        maxHeight={800}
      />
      <p>
        <a href="https://unsplash.com/photos/Ggbcf50zcJI">By Kenny Gaines</a>
      </p>
      <h3>JPG</h3>
      <StaticImage
        src="https://images.unsplash.com/34/BA1yLjNnQCI1yisIZGEi_2013-07-16_1922_IMG_9873.jpg"
        alt="Alpine mountains under a clear sky by Ryan Schroeder"
        formats={["jpg"]}
        maxWidth={800}
      />
      <h3>WebP</h3>
      <StaticImage
        src="https://images.unsplash.com/34/BA1yLjNnQCI1yisIZGEi_2013-07-16_1922_IMG_9873.jpg"
        alt="Alpine mountains under a clear sky by Ryan Schroeder"
        formats={["webp"]}
        maxWidth={800}
      />
      <h3>AVIF</h3>
      <StaticImage
        src="https://images.unsplash.com/34/BA1yLjNnQCI1yisIZGEi_2013-07-16_1922_IMG_9873.jpg"
        alt="Alpine mountains under a clear sky by Ryan Schroeder"
        formats={["avif"]}
        maxWidth={800}
      />
      <p>
        <a href="https://unsplash.com/photos/EGNQODiDM5Q">
          Open your eyes dear by Umesh Soni
        </a>
      </p>
      <h3>JPG</h3>
      <StaticImage
        src="https://images.unsplash.com/photo-1607283339784-c73ff8195c0e"
        alt="Open your eyes dear!! by Umesh Soni"
        formats={["jpg"]}
        maxHeight={800}
      />
      <h3>WebP</h3>
      <StaticImage
        src="https://images.unsplash.com/photo-1607283339784-c73ff8195c0e"
        alt="Open your eyes dear!! by Umesh Soni"
        formats={["webp"]}
        maxHeight={800}
      />
      <h3>AVIF</h3>
      <StaticImage
        src="https://images.unsplash.com/photo-1607283339784-c73ff8195c0e"
        alt="Open your eyes dear!! by Umesh Soni"
        formats={["avif"]}
        maxHeight={800}
      />
      <p>
        <a href="https://unsplash.com/photos/Gg7uKdHFb_c">
          Alpine mountains under a clear sky by Ryan Schroeder
        </a>
      </p>
      <p>Images via Unsplash</p>
    </main>
  );
};

export default IndexPage;
