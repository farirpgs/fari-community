const markdown = `

# hello 

this is a test

## subheading

# hello 2

this is a test 2

`.trim();

const allContentGroupedWithinH1 = markdown
  .split(
    `
# `
  )
  .map((content) => {
    const [h1, ...rest] = content.split(`
`);
    return {
      h1,
      rest: rest.join(`
`),
    };
  });

console.log(allContentGroupedWithinH1);
