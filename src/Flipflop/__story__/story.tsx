import {Component, createElement as h} from 'react';
import {storiesOf} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import {linkTo} from '@storybook/addon-links';
import {Flipflop} from '..';
import ShowDocs from '../../../.storybook/ShowDocs'

storiesOf('Inversion/Flipflop', module)
  .add('Documentation', () => h(ShowDocs, {md: require('../../../docs/en/Flipflop.md')}))
  .add('Basic example', () =>
    <Flipflop>{({on, flip, flop}) =>
      <div>
        <div
          style={{
            width: 100,
            height: 100,
            border: '1px solid tomato',
            fontSize: '70px',
            lineHeight: '100px',
            textAlign: 'center'
          }}
          onClick={flip}
        >
          {on ? 'ON' : 'OFF'}
        </div>
        <button onClick={flip}>flip</button>
        <span>{' '}</span>
        <button onClick={flop}>flop</button>
      </div>
    }</Flipflop>
  );
