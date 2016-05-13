'use strict';

import React from 'react';
import Title from './Title';
import Library from './Library';
import LibraryVsFramework from './LibraryVsFramework';
import VirtualDOM from './VirtualDOM';
import RenderingLoop from './RenderingLoop';
import Demo from './Demo';
import JSX from './JSX';
import ItsJustJavaScript from './ItsJustJavaScript';
import Ecosystem from './Ecosystem';
import DataFlow from './DataFlow';
import PropsAndState from './PropsAndState';
import PropTypes from './PropTypes';
import DemoCodeVertical from './DemoCodeVertical';
import TodoDemo from './TodoDemo';
import PureFunctions from './PureFunctions';
import SeparationOfConcerns from './SeparationOfConcerns';
import ContainerVsPresentational from './ContainerVsPresentational';

import HelloWorld from './examples/HelloWorld';
import HelloSomeone from './examples/HelloSomeone';

import helloWorldCode from '!!raw!./examples/HelloWorld';
import helloWorldCompiledCode from '!!raw!./examples/HelloWorld_compiled';
import helloYouCode from '!!raw!./examples/HelloYou';
import helloSomeoneCode from '!!raw!./examples/HelloSomeone';
import helloYouFunctionalCode from '!!raw!./examples/HelloYouFunctional';
import todoBaseCode from '!!raw!./examples/TodoBase';
import todoCode from '!!raw!./examples/Todo';
import todoViewCode from '!!raw!./examples/TodoView';
import todoContainerCode from '!!raw!./examples/TodoContainer';

export default {
  title: `Let's React`,
  subtitle: `Everything can be a component`,
  date: new Date().toISOString().slice(0, 10),
  slides: [
    <Title />,
    <Library />,
    <LibraryVsFramework />,
    <Ecosystem />,
    <VirtualDOM />,
    <RenderingLoop />,
    <JSX />,
    <DemoCodeVertical
        title='HelloWorld.jsx'
        code={ helloWorldCode }>
      <HelloWorld />
    </DemoCodeVertical>,
    <DemoCodeVertical
        title='HelloWorld.jsx'
        code={ helloWorldCode }
        highlightLines={[ 0 ]}>
      <HelloWorld />
    </DemoCodeVertical>,
    <DemoCodeVertical
        title='HelloWorld.jsx'
        code={ helloWorldCode }
        highlightLines={[ 2, 8 ]}>
      <HelloWorld />
    </DemoCodeVertical>,
    <DemoCodeVertical
        title='HelloWorld.jsx'
        code={ helloWorldCode }
        highlightLines={[ 3, 4, 5, 6, 7 ]}>
      <HelloWorld />
    </DemoCodeVertical>,
    <DemoCodeVertical
        title='HelloWorld.jsx'
        code={ helloWorldCode }
        highlightLines={[ 5 ]}>
      <HelloWorld />
    </DemoCodeVertical>,
    <DemoCodeVertical
        title='HelloWorld.js  (compiled)'
        code={ helloWorldCompiledCode }
        highlightLines={[ 5 ]}>
      <HelloWorld />
    </DemoCodeVertical>,
    <ItsJustJavaScript />,
    <DataFlow />,
    <PropsAndState />,
    <PropTypes />,
    <DemoCodeVertical
        title='HelloYou.jsx'
        code={ helloYouCode }
        highlightLines={[ 0, 3, 4, 5, 9 ]}>
      <h1>hello ???</h1>
    </DemoCodeVertical>,
    <DemoCodeVertical
        title='HelloElie.jsx'
        code={ helloSomeoneCode }
        highlightLines={[ 1, 6 ]}>
      <HelloSomeone />
    </DemoCodeVertical>,
    <DemoCodeVertical
        title='HelloElie.jsx'
        code={ helloSomeoneCode }>
      <HelloSomeone />
    </DemoCodeVertical>,
    <PureFunctions />,
    <DemoCodeVertical
        title='HelloYou.jsx'
        code={ helloYouFunctionalCode }
        highlightLines={[ 2, 4, 8, 9, 10 ]}>
      <h1>f(d) = V</h1>
    </DemoCodeVertical>,
    <Demo question={ true } />,
    <Demo question={ false } />,
    <TodoDemo />,
    <DemoCodeVertical
        title='Todo.jsx'
        code={ todoBaseCode }
        highlightLines={[ 0, 2, 6, 10, 11, 16, 17, 18, 19 ]}>
      <h1>Todo app</h1>
    </DemoCodeVertical>,
    <DemoCodeVertical
        title='Todo.jsx'
        code={ todoBaseCode }
        highlightLines={[ 3, 4, 5 ]}>
      <h1>Todo app</h1>
    </DemoCodeVertical>,
    <DemoCodeVertical
        title='Todo.jsx'
        code={ todoBaseCode }
        highlightLines={[ 7, 8, 9, 15 ]}>
      <h1>Todo app</h1>
    </DemoCodeVertical>,
    <DemoCodeVertical
        title='Todo.jsx'
        code={ todoBaseCode }
        highlightLines={[ 12, 13, 14 ]}>
      <h1>Todo app</h1>
    </DemoCodeVertical>,
    <DemoCodeVertical
        title='Todo.jsx'
        code={ todoBaseCode }>
      <h1>Todo app</h1>
    </DemoCodeVertical>,
    <DemoCodeVertical
        title='Todo.jsx'
        code={ todoCode }
        keepRange={[
          { first: 11, last: 21 },
          { first: 26, last: 28 }
        ]}
        highlightLines={[ 12, 16, 17, 19, 20, 27 ]}>
      <h1>Todo app</h1>
    </DemoCodeVertical>,
    <DemoCodeVertical
        title='Todo.jsx'
        code={ todoCode }
        keepRange={[
          { first: 3, last: 11 },
          { first: 28, last: 32 }
        ]}
        highlightLines={[ 6, 9, 10, 11, 31, 32 ]}>
      <h1>Todo app</h1>
    </DemoCodeVertical>,
    <DemoCodeVertical
        title='Todo.jsx'
        code={ todoCode }
        keepRange={[
          { first: 12, last: 20 }
        ]}
        highlightLines={[ 14, 15, 18 ]}>
      <h1>Todo app</h1>
    </DemoCodeVertical>,
    <SeparationOfConcerns />,
    <DemoCodeVertical
        title='Todo.jsx'
        code={ todoCode }
        keepRange={[
          { first: 2, last: 3 },
          { first: 8, last: 9 },
          { first: 11, last: 12 },
          { first: 20, last: 22 },
          { first: 26, last: 28 },
          { first: 33, last: 34 }
        ]}>
      <h1>Messy</h1>
    </DemoCodeVertical>,
    <DemoCodeVertical
        title='TodoView.jsx'
        code={ todoViewCode }
        keepRange={[
          { first: 12, last: 15 },
          { first: 18, last: 25 },
          { first: 31, last: 36 }
        ]}
        highlightLines={[ 12, 14, 19, 23, 24, 31, 32, 33, 34, 35, 36 ]}>
      <h1>Todo <b>view</b></h1>
    </DemoCodeVertical>,
    <DemoCodeVertical
        title='TodoView.jsx'
        code={ todoViewCode }
        keepRange={[
          { first: 2, last: 10 }
        ]}>
      <h1>Todo <b>view</b></h1>
    </DemoCodeVertical>,
    <DemoCodeVertical
        title='TodoContainer.jsx'
        code={ todoContainerCode }
        keepRange={[
          { first: 3, last: 4 },
          { first: 9, last: 10 },
          { first: 12, last: 13 },
          { first: 21, last: 31 }
        ]}
        highlightLines={[ 10, 12, 13, 21, 24, 25, 26, 27, 28 ]}>
      <h1>Todo <b>container</b></h1>
    </DemoCodeVertical>,
    <ContainerVsPresentational />
  ]
};
