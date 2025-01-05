import React from 'react';
import { MDXRemote } from 'next-mdx-remote';

const Documentation = ({ mdxSource }) => {
  return (
    <div className="docs">
      <h1>Kiko San Documentation</h1>

      <p>
        Welcome to the documentation of <strong>Kiko San</strong>! Want to automate tasks or just explore a bot with a wide range of features? Kiko San will be there to enhance your time.
      </p>

      <h2>Understanding How the Arguments Work</h2>
      <p>
        Before diving into this sea further, let’s get familiar with how arguments shown in the documentation work:
      </p>
      <ul>
        <li><strong>&lt; &gt;</strong>: <strong>Required arguments</strong> – Think of these as the must-haves. If you forget to give the bot these, it'll throw a fit and refuse to work.</li>
        <li><strong>[ ]</strong>: <strong>Optional arguments</strong> – These are like extras on a menu. You can choose to include them for a more customized experience, but the bot will still work just fine without them.</li>
        <li><strong>/</strong>: <strong>Choose One</strong> – Pick your favorite from the available choices.</li>
      </ul>
      <p>
        Didn't understand what was all that blabbering? Well, with an example right here, you'll understand a bit about what's actually happening.
      </p>
      <pre>
        <code>k!command &lt;oh i am required! / or maybe you want to choose me?&gt; [well you can skip me if you want]</code>
      </pre>

      <h2>Features Overview</h2>
      <blockquote>
        Kiko San isn't your average Discord application with a variety of useless features. It's cute and customizable!  
        Now let's dive into what Kiko San actually offers:
      </blockquote>
      <ul>
        <li><strong>Roleplay commands</strong>: Express yourself with fun GIFs and have fun interacting with the ones you care about.</li>
        <li><strong>Utility commands</strong>: It's not just for fun! We have utilities to help you manage your server easily, in a cute way.</li>
        <li><strong>Moderation tools</strong>: End the chaos in your server with ease.</li>
        <li><strong>Freedom</strong>: Customize the application according to your needs.</li>
      </ul>

      <h2>How to Use Kiko San?</h2>
      <blockquote>
        Kiko San is extremely easy to use. Just type <strong>k!help</strong> in the chat and hit enter to view a list of available commands.
      </blockquote>

      <h2>Getting Started</h2>
      <p>Easy, you bet!</p>
      <ol>
        <li><strong>Invite Kiko San to the party</strong>  
          Kiko San is easy to add. Just hop on to <a href="https://discord.com/api/oauth2/authorize?client_id=1288827343581872259&scope=applications.commands+bot&permissions=8" target="_blank" rel="noopener noreferrer">this link</a> and authorize it.
        </li>
        <li><strong>Exploration</strong>  
          Just type <code>k!help</code> in the chat and hit enter to view all the commands.
        </li>
      </ol>

      <h2>Additional Resources</h2>
      <blockquote>
        We know the <code>!help</code> command can never satisfy all our needs, so we’ve created this site to give you more information.
      </blockquote>
      <ul>
        <li>Check out the source code of this project on our official <a href="https://github.com/Kiko-Labs/Kiko-San" target="_blank" rel="noopener noreferrer">GitHub</a>. Be aware, you might find some spaghetti code!</li>
        <li>Continue exploring this documentation.</li>
      </ul>

      <h2>Thanks!</h2>
      <blockquote>
        Hey, thanks for choosing Kiko San! We promise she won't disappoint you in helping you have fun with the ones you care about.
      </blockquote>

      <MDXRemote {...mdxSource} />
    </div>
  );
};

export default Documentation;
