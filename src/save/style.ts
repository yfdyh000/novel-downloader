export const defaultMainStyleText = `body {
  background-color: #f0f0f2;
  margin: 0;
  padding: 0;
  font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI",
    "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
}
div.main {
  width: 900px;
  margin: 5em auto;
  padding: 2em;
  background-color: #fdfdff;
  border-radius: 0.5em;
  box-shadow: 2px 3px 7px 2px rgba(0, 0, 0, 0.02);
}
@media (max-width: 700px) {
  div.main {
    margin: 0 auto;
    width: auto;
  }
}
h1 {
  line-height: 130%;
  text-align: center;
  font-weight: bold;
  font-size: xxx-large;
  margin-top: 3.2em;
  margin-bottom: 3.3em;
}
h2 {
  line-height: 130%;
  text-align: center;
  font-weight: bold;
  font-size: x-large;
  margin-top: 1.2em;
  margin-bottom: 2.3em;
}
div {
  margin: 0px;
  padding: 0px;
  text-align: justify;
}
p {
  text-indent: 2em;
  display: block;
  line-height: 1.3em;
  margin-top: 0.4em;
  margin-bottom: 0.4em;
}
img {
  vertical-align: text-bottom;
  max-width: 90%;
}
.title {
  margin-bottom: 0.7em;
}`;

export const defaultTocStyleText = `img {
  max-width: 100%;
  max-height: 15em;
}
.introduction {
  font-size: smaller;
  max-height: 18em;
  overflow-y: scroll;
}
.introduction p {
    text-indent: 0;
}
.bookurl {
  text-align: center;
  font-size: smaller;
  padding-top: 1em;
  padding-bottom: 0.5em;
  margin-top: 0.4em;
}
.bookurl > a {
  color: gray;
}
.info h3 {
  padding-left: 0.5em;
  margin-top: -1.2em;
  margin-bottom: 0.5em;
}
.section {
  margin-top: 1.5em;
  display: grid;
  grid-template-columns: 30% 30% 30%;
}
.section > h2:first-child {
  grid-column-end: span 3;
}
.section > .chapter {
  padding-bottom: 0.3em;
  text-align: center;
}
.main > h1 {
  margin-top: 1.5em;
  margin-bottom: 1.5em;
}
a.disabled {
  pointer-events: none;
  cursor: default;
  color: gray;
}
.author::before {
    content: "作者：";
}
.author {
    text-align: center;
    margin-top: -3em;
    margin-bottom: 3em;
}`;
