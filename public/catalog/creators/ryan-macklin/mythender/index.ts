import { IProjectData } from "public/catalog/loader";

export default function getData(): IProjectData {
  return {
    name: "Mythender",
    description: "A game about slaying gods",
    links: {
      driveThru:
        "https://www.drivethrurpg.com/product/110779/Mythender-Roleplaying-Game",
    },
    headingFont: "Cinzel",
    /*textFont: "serif",*/
    css: `
img {
	display: inline;
}
/*
   The book uses Minion for most purposes; Crimson Text is very similar.
   Heading levels 1 and 2 in the book use Windlass; Cinzel is vaguely similar.
   */
blockquote {
	border: 3pt solid black;
	border-inline-start-color: black !important; /* Override default grey for Fari Community */
	padding: 0.5em;
	margin: 0;
	font-style: normal !important; /* Override italic default for Fari Community */
}
.read-aloud {
	font-style: italic;
	margin-left: 1em;
}
.do-this {
	color: #8e1716;
	font-weight: bold;
}
.keyword {
	font-variant: small-caps;
	font-style: normal;
	color: #8e1716;
}
.gift-qualifier {
	margin-left: 1em;
	font-variant: small-caps;
	color: #333333;
}
.mythender {
	font-variant: small-caps;
	font-weight: bold;
}
p {
	margin-top: 0.7em;
	margin-bottom: 0.7em;
}
h1,h2 {
	font-variant: small-caps;
	font-weight: normal;
}
h1 {
	font-size: 300%;
	margin-top: 5em;
}
h2 {
	font-size: 200%;
	margin-bottom: 0.2em;
	margin-top: 3em;
}
h3 {
	font-variant: small-caps;
	font-weight: bold;
	font-size: 110%;
	margin-bottom: 0;
}
h2+p, h2+h3{
	margin-top: 0.3em;
}
h3+p, h3+h4, h4+p {
	margin-top: 0.0em;
}
h4 {
	font-size: 110%;
	margin-bottom: 0;
	font-weight: bold;
}
h5 {
	font-size: 100%;
	margin-top: 0.7em;
	margin-bottom: 0;
	font-weight: bold;
}
h5+p {
	margin-top: 0.0em;
}
li {
	margin-bottom: 0.3em;
}
div pre code {
	font-family: monospace !important;
}
`,
  };
}
