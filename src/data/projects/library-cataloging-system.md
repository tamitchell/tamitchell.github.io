# Library Cataloging System

A comprehensive library cataloging system that stores and organizes books using **MARC records**.

![Library Cataloging System Concept](/assets/projects/library_catalog/concept_library_catalog.png)

## ･ﾟﾟ･✧･ﾟ･✦ Why I Built This ✦･ﾟ･✧･ﾟﾟ･

 For years, I’ve worked in environments where speed and scale came first—startups, federal contracting, the fast machinery of modern tech. Everything had to ship. Every feature had to justify itself in metrics. There was no room for slowness, for care, for silence.

 But something in me kept pulling away.

 I’ve always loved libraries—the stillness, the systems beneath the surface, the quiet stewardship of knowledge. And one day, I realized I didn’t want to *just work in tech.* I wanted to build systems that preserve meaning. I wanted to contribute to something enduring. Something built not for disruption, but for *continuity.*

 That’s when I started building this: a small, MARC-compatible cataloging system. It’s not revolutionary. It doesn’t use the latest stack or flaunt AI integration. But it’s thoughtful. And it helped me begin to understand the principles behind archival description, metadata, and user-accessible recordkeeping.

 More than anything, it reminded me that *technology doesn’t have to be extractive.* It can be in service of preservation, of access, of stories.

 This project wasn’t about getting ahead.

 It was about finding my way back.

### ✧･ﾟ: *✧･ﾟ:*  How It Found Me ✧･ﾟ: *✧･ﾟ:*

 I had been scanning through alternatives—roles that were still technical but didn't reek of silicon sterility or the bureaucratic drone of sprint tickets and standups. I wanted something... *quieter.* More deliberate. (And if you’ve somehow stumbled on this and you work in one of those indisposed places… I apologize. And also, respectfully—*you understand.*)

 That’s when I came across a listing for a Metadata Specialist.

 My heart fluttered. You see, I’m the kind of person who catalogs her socks by color, fiber, and emotional alignment. I log my hair growth and product usage in spreadsheets that rival climate research. I’m building an app that helps manage activity decisions by mood and lunar phase—chaotic, I know, but it works. I like *systems.* I like *meaningful repetition.* I like the idea of something ephemeral being made... traceable.

 But this role—metadata? It wasn’t just about digitizing content. It was about curating it. Framing it. Respecting context. I clicked the listing. I read through the requirements. And then I hit the part where they wanted someone fluent in MARC, in Dublin Core, in controlled vocabularies and encoded archival descriptions.

 I had no idea what any of it was.

 MARC looked like some ancient, spectral version of assembly. Dublin Core sounded like an airport. And the formatting? It was beautiful in the way abandoned programming languages are—logical, unintuitive, and unchanged for decades. I didn’t flinch. I was *hopelessly intrigued.*

 I kept scrolling.  

 I’m a language learner at heart, you see. After two or three, you start to notice the patterns—words shrink down to syllables, then sounds, then shapes. MARC wasn’t that different. Dublin Core could be unbraided. In the programming world, you have your favorites—your JavaScript, your Python—but you also know how to transpose. You know when to refactor, when to rewrite, when to wrap one language inside another to make something *speak.* I didn’t fear the terminology. I figured I just needed time, maybe a few late-night tabs open and some quiet repetition.

 But then I saw it: **“Master’s in Library and Information Science required. No exceptions.”**

 My heart dropped a little.

 I thought it was odd, at first—but practical. Sensible, even. After all, this isn’t just data; it’s *memory.* Of course they’d want someone trained to carry that. But as I sat with it longer, I realized that this tug I was feeling—this desire for a subtle career change—wasn’t really about leaving tech. It was about leaving a kind of... *velocity.*  

 In the threads and comments on r/libraries, I noticed something different. The tone. The reverence. The way librarians talked about *service,* about *continuity,* about *care.* It wasn’t flashy. It wasn’t even aspirational in the way startup bios are. It was... *gentle.* Honest. Often underpaid. But fiercely human.

 I was—*unexpectedly*—disappointed.  

 Not because I expected to waltz in, credentials be damned, but because I’d grown up in a field where your projects opened doors, where initiative mattered more than formality. Where a clever repo or a published package could mean more than a degree.  
 
 But here… in this world? The bar felt firm. Not cruel—just *immovable.*  

 You could be passionate, curious, capable, even practiced. But without the proper letters after your name, the silence between the lines seemed to whisper:  

 *“Who are you? What gives you the right to touch this?”*
 
 And so… there was no grand epiphany.  

 No lightning bolt of defiance or surge of brave rebellion.  

 I just sort of… fizzled.  

 In that quiet way we do when the thing we wanted doesn’t reject us outright—just turns away gently, as if to say: *“Not yet.”*
 
 But even so—  

 I didn’t stop building.  

 Because who cares if I don’t have the degree?  
 I can still make things. And I will.

 So...

 Alright.  

 Now let’s talk about how I actually made the darn thing.

 As you’ve probably gathered, it wasn’t built out of professional obligation or classroom necessity.  

 It wasn’t part of a capstone or a cohort. It wasn’t meant to prove anything, or at least—not to anyone but me.

 It was made not because I had a reason to—but in spite of all the reasons I shouldn’t have.  
 No one asked for it. No one needed it. There was no promise of a job, no certification to be earned, no resume bullet waiting to be unlocked.

 I just… wanted to *feel* what it would be like.

 To enter a record.  
 To sort something.  
 To hold structured data in my hands and say, *this matters because someone might come looking for it someday.*

 And I know—I know most likely, you won’t see me in a reading room, not officially.  

 I probably won’t have the login credentials, or the badge, or the deep knowledge of controlled vocabularies passed down through formal channels.

 But still.  
 Here it is.

 **The Library Cataloging System** – my little homage to systems that preserve instead of extract.

 (And if you skipped straight here—well, I hope your metadata's as sloppy as your attention span.)

## ･ﾟﾟ･✧･ﾟ･✦ Project Features ✦･ﾟ･✧･ﾟﾟ･

This project served not only as a creative exercise, but also as a technical refresher—particularly for MongoDB, which I hadn’t touched since my bootcamp days. (Unsurprisingly, but fortunately, not much has changed.) Each feature was built with intention: both to simulate real cataloging logic and to deepen my fluency with backend data structure and API communication.

---

### ✧･ﾟ: *✧･ﾟ:* Bibliographic Entry Management *:･ﾟ✧*:･ﾟ✧

Users can input core metadata—title, author, publisher, ISBN, and additional fields that mirror MARC record standards.  

*Why?* To better understand how cataloging logic is structured, and to simulate the workflows an actual ILS might require.

---

### ✧･ﾟ: *✧･ﾟ:* Advanced Search Functionality *:･ﾟ✧*:･ﾟ✧

Records can be searched by title, author, subject, or other metadata fields.  

*Why?* Because metadata is only meaningful if it’s retrievable. I wanted to explore indexing patterns and learn how record depth affects query performance.

---

### ✧･ﾟ: *✧･ﾟ:* Import/Export Capabilities *:･ﾟ✧*:･ﾟ✧

Simulated import and export of MARC-like records in JSON format.  

*Why?* As a way to understand the movement of bibliographic data between systems, and to experiment with simple serialization strategies.

---

### ✧･ﾟ: *✧･ﾟ:* Category Filtering *:･ﾟ✧*:･ﾟ✧

Users can browse records by genre, language, or other tags.  

*Why?* To simulate public-facing interfaces like OPACs and explore how faceted filtering improves accessibility.

---

### ✧･ﾟ: *✧･ﾟ:* Technology Stack *:･ﾟ✧*:･ﾟ✧

- **Frontend:** React (with responsive design for mobile support)  
- **Backend:** Node.js + Express.js  
- **Database:** MongoDB  
- **Version Control:** GitHub

## ･ﾟﾟ･✧･ﾟ･✦ A Note on AI ✦･ﾟ･✧･ﾟﾟ･

Some aspects of this project were supported by AI—primarily debugging a particularly stubborn type mismatch and scaffolding early function documentation. I used **Cline**, my preferred interface, and—because I like naming things—I called it **Kupo.**  (Bonus points if you know where this is from!)

Kupo didn’t write the project for me. But it *did* sit beside me while I wrestled through the logic, offering just enough perspective to keep the momentum going.  

I mention this because I believe in transparency—and because I don’t see AI as a threat to my creativity, but as a companion in it. I still architected the system myself. I still designed the workflows and wrote the logic. But like any good librarian, I consulted the right reference when I needed help.

## ･ﾟﾟ･✧･ﾟ･✦ In Closing ✦･ﾟ･✧･ﾟﾟ･

This project was never meant to be a resume booster. It was a gesture. A little act of devotion to the kind of work I want to do, and the kind of technologist I want to become.

If nothing else, I hope it shows that I care deeply—not just about code, but about structure, clarity, preservation, and access. And maybe… about something a little older, quieter, and more human than the version of tech we so often inherit.

Thank you for reading...