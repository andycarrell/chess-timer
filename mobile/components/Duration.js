import React, { PureComponent } from 'react';
import { View, Text } from 'react-native';

import styles from '../styles/timer';

const format = n => n < 0 ? '00' : prepend(n);
const prepend = n => n < 10 ? `0${n}` : `${n}`;

export default class Duration extends PureComponent {
  get minutes() { return Math.trunc(this.props.duration / 60); }
  get seconds() { return Math.trunc(this.props.duration % 60); }

  render = () =>
    <View style={styles.duration}>
      <Text style={styles.durationText}>
        {`${format(this.minutes)}:${format(this.seconds)}`}
      </Text>
    </View>;
}
