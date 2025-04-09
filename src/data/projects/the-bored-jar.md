# "The Bored Jar" - Mobile App Project

## Overview
"The Bored Jar" is my passion project exploring modern React Native development. I built this mobile application to solve a personal pain point—decision fatigue around leisure activities—while challenging myself to learn new technologies and implementation patterns.

![The Bored Jar Concept](/assets/projects/bored_jar/concept_bored_jar.png)

## The Problem
I found myself repeatedly falling into the same routines, despite having lists of activities I wanted to try. I needed a fun, interactive way to organize and randomly select activities based on my mood or available time.

## My Solution
"The Bored Jar" lets users create themed collections of activities ("jars"), then randomly draw from them when indecision strikes. The app supports categorization, timed activities, and customization.

## Tech Stack & What I Learned

### React Native & TypeScript
I used this project to deepen my TypeScript skills while building a cross-platform mobile app. Creating robust type definitions for complex nested data structures was particularly challenging and rewarding.

### WatermelonDB
I explored offline-first architecture by implementing WatermelonDB—a high-performance reactive database. This taught me about:
- Designing efficient database schemas
- Creating observable data patterns
- Implementing complex relational queries

### State Management Evolution
I experimented with MobX for state management, which provided valuable experience with:
- Observable patterns outside of Redux
- Creating domain-specific stores
- Implementing reactive programming principles

### Custom Hooks Architecture
I developed a system of custom hooks that separate business logic from UI components:
- `useActivitySelection` for managing activity selection flows
- `useObservableActivities` for database interactions
- `useAutoSave` for automatic form saving

### Reactive Programming with RxJS
Working with RxJS observables allowed me to:
- Create efficient data pipelines
- Handle complex asynchronous operations
- Build a responsive UI that reacts to data changes

## Development Journey

### Platform Evolution
This project started using plain React Native CLI but later migrated to Expo. This transition proved invaluable as Expo's managed workflow significantly streamlined development, especially for a solo project where I needed to focus on features rather than native configuration.

### Database Exploration
The database layer was the most challenging aspect of this project. My journey took me through multiple solutions:

1. **TypeORM**: Initially seemed promising, but I encountered numerous compatibility issues with React Native. The outdated terminology (master/slave) and lack of updates made me reconsider.

2. **Prisma**: I discovered too late that Prisma isn't directly compatible with React Native. While patches exist, the setup complexity didn't seem worth the effort for a passion project.

3. **WatermelonDB**: Finally settled on this solution, which worked phenomenally well with React Native. Its reactive architecture made React Query essentially obsolete, as the database itself provided observable data streams.

This database journey taught me valuable lessons about evaluating technologies for specific use cases and the importance of platform compatibility research.

## Design Evolution

As a hybrid developer with both coding and design skills, I found myself in a unique challenge with this project. I constantly wanted to improve the UI/UX as I used the app, creating a cycle of perfectionism that slowed progress.

I learned to separate my design and development phases more clearly:

1. **Initial Design**: Created a basic design system and component library
2. **MVP Focus**: Intentionally "froze" design improvements to focus on core functionality
3. **Iterative Enhancement**: Now returning to design improvements with a functioning app

This approach of "design, build, use, redesign" has been more effective than trying to perfect the design upfront. I've documented this process in the [project issues board](https://github.com/yourusername/bored-jar/issues) to track design debt and planned improvements.

A key realization was that using the app myself revealed UX issues no amount of theoretical design work would have uncovered. This real-world testing has been invaluable for prioritizing which design elements actually need improvement.

## AI's Role in Development

I first started this project in 2020, building it on pure grit and learning with some guidance from a senior engineer who helped with database setup and best practices. I had basic CRUD functionality working and was about to release it to a small group of friends when ChatGPT entered the picture.

Like many developers, curiosity led me to experiment with AI tools. Initially, I sought help with my weakest areas—database queries and optimization—but as AI capabilities improved, so did my use cases for it.

To be completely transparent, this hasn't always been a smooth journey. Working with AI introduces a certain confusion at times—I've described it to friends as "painting with a brush of never-ending ink." You can output tremendous amounts of content, but it takes a skilled hand to make something coherent and useful out of it. AI has improved my speed, but not necessarily quality.

The human element remains the key factor—my own wavering decisions and difficulty prioritizing tasks often amplified the challenges of working with AI. That said, I've found specific areas where AI truly shines in my workflow:

- **Documentation**: An absolute godsend for generating well-structured documentation
- **Testing**: While sometimes unwieldy, still incredibly useful for generating test suites
- **Automation and scripting**: Very helpful for creating utilities like schema conversion scripts and GitHub issue generators
- **User flow documentation**: Creates clear, readable documentation for other developers
- **Rubber duck debugging**: I've named my AI rubber duck Dionysus—a sounding board for talking through complex problems

As I continue this project, I'm mindful about using AI as a tool that complements my skills rather than replacing the human judgment and creativity that make the app unique.

## Challenges & Solutions

### Complex Form Management
I implemented a multi-tab form system with auto-save functionality using React Hook Form and custom validation with Zod.

### Navigation & Context Management
Creating intuitive navigation flows while maintaining proper context was challenging. I developed a centralized navigation service that tracks context across different screens.

### Performance Optimization
I focused on optimizing render performance with:
- Memoization strategies
- Virtualized lists
- Efficient state updates

## Status & Reflection
While this project isn't deployed to app stores, it served as an excellent learning platform and remains one of my favorite projects to work on. I continue to use it as a playground for experimenting with mobile development patterns and new libraries.

The most valuable outcome was gaining confidence working with reactive programming patterns and developing a deeper understanding of state management approaches beyond Redux.

## Next Steps

I'm currently focused on completing the MVP features before considering app store deployment. You can track my progress on the [public issues board](https://github.com/users/tamitchell/projects/2), where I maintain a transparent development roadmap.

Key priorities include:
- Completing user settings functionality
- Enhancing the activity selection algorithm
- Refining the UI based on user feedback
- Adding basic analytics to understand usage patterns
