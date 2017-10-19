// Import React
import React from 'react';
import {
  Appear,
  BlockQuote,
  Cite,
  Deck,
  Heading,
  Image,
  List,
  ListItem,
  Notes,
  Quote,
  Slide,
  Text
} from 'spectacle';
import createTheme from 'spectacle/lib/themes/default';
import preloader from 'spectacle/lib/utils/preloader';

// Import Spectacle Core tags
// Import theme
// Require CSS
require('normalize.css');
require('spectacle/lib/themes/default/index.css');

const theme = createTheme(
  {
    primary: 'white',
    secondary: '#111',
    tertiary: '#03A9FC',
    quartenary: '#CECECE'
  },
  {
    primary: 'Mukta',
    secondary: 'Helvetica'
  }
);

const images = {
  me: require('./assets/profile.jpg')
};

preloader(images);

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={['zoom', 'fade', 'slide']}
        transitionDuration={500}
        theme={theme}
        progress="pacman"
      >
        <Slide transition={['slide']} bgColor="secondary">
          <Heading
            size={1}
            margin="0 0 50px"
            fit
            lineHeight={1.5}
            textColor="primary"
          >
            <code>{`{key: /objects?/}`}</code>
          </Heading>
          <Text textColor="primary" bold>
            Follow along at
          </Text>
          <Text margin="15px 0" textColor="tertiary">
            https://prime-objects.<span role="img" aria-label="computer emoji">
              🖥
            </span>
            <span role="img" aria-label="rocket emoji">
              🚀
            </span>.ws
          </Text>
          <Notes>
            <ul>
              <li>
                Remind them of the url, or to go to{' '}
                <strong>prime-objects.xn--sz8hwn.ws</strong>
              </li>
            </ul>
          </Notes>
        </Slide>
        <Slide transition={['slide']} bgColor="secondary">
          <Heading size={1} textColor="primary">
            Me?
          </Heading>
          <Image src="http://ak-hdl.buzzfed.com/static/2014-09/22/11/enhanced/webdr02/enhanced-buzz-8706-1411400522-4.jpg" />
          <Notes>
            <ul>
              <li>"So, who am I?"</li>
              <li>Prime Grad</li>
              <li>Frontend Developer at ActiFi</li>
              <li>JavaScript Enthusiast</li>
            </ul>
          </Notes>
        </Slide>
        <Slide transition={['slide']} bgColor="secondary">
          <Heading bold size={1} lineHeight={1.2}>
            Myth
          </Heading>
          <BlockQuote>
            <Quote>"Everything in Javascript is an object."</Quote>
          </BlockQuote>
        </Slide>
        <Slide transition={['slide']} bgColor="secondary">
          <Heading textColor="primary">Primitive Types?</Heading>
          <Appear>
            <List textColor="primary">
              {[
                'Object',
                'String',
                'Number',
                'Boolean',
                'Null',
                'Undefined',
                'Symbol (new in ES6)'
              ].map(str => (
                <ListItem style={{ width: 400 }} margin="0 auto">
                  {str}
                </ListItem>
              ))}
            </List>
          </Appear>
          <Appear>
            <Text textSize={96} bold>
              <span role="img" aria-label="confused emoji">
                🤔
              </span>
            </Text>
          </Appear>
          <Notes>
            <ul>
              <li>
                <h1>"Who knows primitive types in Javascript?"</h1>
              </li>
              <li>string</li>
              <li>number</li>
              <li>boolean</li>
              <li>null</li>
              <li>undefined</li>
            </ul>
          </Notes>
        </Slide>
        <Slide transition={['slide']} bgColor="secondary">
          <Heading size={1} fit textColor="primary">
            "Dude, what about Arrays and Functions?"
          </Heading>
          <Notes>
            <ul>
              <li>
                <h2>"You may be wondering where Arrays and Functions are.'"</h2>
              </li>
              <li>They are sub-types of Object</li>
            </ul>
          </Notes>
        </Slide>
        <Slide transition={['slide']} bgColor="secondary">
          <Image
            width={600}
            src="http://memecrunch.com/meme/4L5LA/nothing-goes-over-my-head-my-reflexes-are-too-fast-i-would-catch-it/image.png"
          />
          <Notes>
            <ul>
              <li>"And now</li>
            </ul>
          </Notes>
        </Slide>
      </Deck>
    );
  }
}
