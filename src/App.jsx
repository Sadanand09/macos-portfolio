import { Dock, Navbar, Welcome } from "#components";
import { Contact, Finder, ImageFile, Resume, Safari, Terminal, TextFile } from "#windows";
import gsap from "gsap";
import { Draggable } from "gsap/Draggable";
gsap.registerPlugin(Draggable);

const App = () => {
  return (
    <main>
      <Navbar />
      <Welcome />
      <Dock />

      <Terminal />
      <Safari />
      <Resume />
      <Finder />
      <Contact />
      <TextFile />
      <ImageFile />
    </main>
  )
}

export default App