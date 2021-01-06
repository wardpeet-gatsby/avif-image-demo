import { StaticImage } from "gatsby-plugin-image";
import * as React from "react";

// styles
const pageStyles = {
  color: "#232129",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
};

// markup
const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <title>Home Page</title>
      <h1>Image format demo</h1>
      <p>
        These images allow you to compare output formats generated by
        gatsby-plugin-sharp, displayed via gatsby-plugin-image.
      </p>
      <h3>
        <a href="https://unsplash.com/photos/lylCw4zcA7I">
          Macaw parrot by Andrew Pons
        </a>
      </h3>
      <p>
        This colorful image has good results at default quality in all formats.
        AVIF is around half the size of JPEG, with WebP in between.
      </p>
      <h4>JPG 73kB</h4>
      <StaticImage
        src="https://images.unsplash.com/photo-1452570053594-1b985d6ea890"
        alt="Macaw parrot by Andrew Pons"
        formats={["jpg"]}
        maxWidth={850}
      />
      <h4>WebP 52kB</h4>
      <StaticImage
        src="https://images.unsplash.com/photo-1452570053594-1b985d6ea890"
        alt="Macaw parrot by Andrew Pons"
        formats={["webp"]}
        maxWidth={850}
      />
      <h4>AVIF 37kB</h4>
      <StaticImage
        src="https://images.unsplash.com/photo-1452570053594-1b985d6ea890"
        alt="Macaw parrot by Andrew Pons"
        formats={["avif"]}
        maxWidth={850}
      />

      <h3>
        <a href="https://unsplash.com/photos/Gg7uKdHFb_c">
          Alpine mountains under a clear sky by Ryan Schroeder
        </a>
      </h3>
      <p>
        This is a challenging image, with the large gradient in the sky. You can
        see that at the default quality (50), there is highly visible banding in
        the JPEG. There are artifacts in the WebP image, but these are less
        pronounced than in the JPEG. For acceptable results the quality level
        would need to be increased for both, though there are diminishing
        returns with WebP. I achieved reasonable results for JPEG and WebP at
        80, at the cost of significantly larger filesize, but removing the
        artifacts entirely required increasing it to 100, which gave massive
        filesizes. The AVIF however has a good smooth gradient with barely
        visible artifacts at quality 50, and is still a significantly smaller
        file size.
      </p>
      <h4>JPG quality 50 - 111kB</h4>
      <StaticImage
        src="https://images.unsplash.com/34/BA1yLjNnQCI1yisIZGEi_2013-07-16_1922_IMG_9873.jpg"
        alt="Alpine mountains under a clear sky by Ryan Schroeder"
        formats={["jpg"]}
        maxWidth={1740}
      />
      <h4>JPG quality 80 - 197kB</h4>

      <StaticImage
        src="https://images.unsplash.com/34/BA1yLjNnQCI1yisIZGEi_2013-07-16_1922_IMG_9873.jpg"
        alt="Alpine mountains under a clear sky by Ryan Schroeder"
        formats={["jpg"]}
        quality={80}
        maxWidth={1740}
      />
      <h4>WebP quality 50 - 87kB</h4>
      <StaticImage
        src="https://images.unsplash.com/34/BA1yLjNnQCI1yisIZGEi_2013-07-16_1922_IMG_9873.jpg"
        alt="Alpine mountains under a clear sky by Ryan Schroeder"
        formats={["webp"]}
        maxWidth={1740}
      />
      <h4>WebP quality 80 - 150kB</h4>

      <StaticImage
        src="https://images.unsplash.com/34/BA1yLjNnQCI1yisIZGEi_2013-07-16_1922_IMG_9873.jpg"
        alt="Alpine mountains under a clear sky by Ryan Schroeder"
        formats={["webp"]}
        maxWidth={1740}
        quality={80}
      />
      <h4>AVIF 71kB</h4>
      <StaticImage
        src="https://images.unsplash.com/34/BA1yLjNnQCI1yisIZGEi_2013-07-16_1922_IMG_9873.jpg"
        alt="Alpine mountains under a clear sky by Ryan Schroeder"
        formats={["avif"]}
        maxWidth={1740}
      />

      <h3>
        <a href="https://unsplash.com/photos/EGNQODiDM5Q">
          Open your eyes dear by Umesh Soni
        </a>
      </h3>
      <p>
        This image has a smaller color palette, so compresses very well. The
        default quality is acceptable in all formats. Proportionately the
        filesize improvements are even greater in the WebP and AVIF images
        though, even at the same quality.
      </p>
      <h4>JPG 41kB</h4>
      <StaticImage
        src="https://images.unsplash.com/photo-1607283339784-c73ff8195c0e"
        alt="Open your eyes dear!! by Umesh Soni"
        formats={["jpg"]}
        maxWidth={850}
      />
      <h4>WebP 23kB</h4>
      <StaticImage
        src="https://images.unsplash.com/photo-1607283339784-c73ff8195c0e"
        alt="Open your eyes dear!! by Umesh Soni"
        formats={["webp"]}
        maxWidth={850}
      />
      <h4>AVIF 14kB</h4>
      <StaticImage
        src="https://images.unsplash.com/photo-1607283339784-c73ff8195c0e"
        alt="Open your eyes dear!! by Umesh Soni"
        formats={["avif"]}
        maxWidth={850}
      />

      <p>Images via Unsplash</p>
    </main>
  );
};

export default IndexPage;
